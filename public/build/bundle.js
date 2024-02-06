
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function (require$$0, require$$1, require$$2) {
  'use strict';

  var main = {};

  const fs$1 = require$$0;
  const path$2 = require$$1;

  const pathFile = path$2.join(__dirname, 'path.txt');

  function getElectronPath () {
    let executablePath;
    if (fs$1.existsSync(pathFile)) {
      executablePath = fs$1.readFileSync(pathFile, 'utf-8');
    }
    if (process.env.ELECTRON_OVERRIDE_DIST_PATH) {
      return path$2.join(process.env.ELECTRON_OVERRIDE_DIST_PATH, executablePath || 'electron');
    }
    if (executablePath) {
      return path$2.join(__dirname, 'dist', executablePath);
    } else {
      throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');
    }
  }

  var electron$1 = getElectronPath();

  const fs = require$$0;
  const path$1 = require$$1;
  const {promisify} = require$$2;
  const electron = electron$1;

  const stat = promisify(fs.stat);

  // See https://cs.chromium.org/chromium/src/net/base/net_error_list.h
  const FILE_NOT_FOUND = -6;

  const getPath = async (path_, file) => {
  	try {
  		const result = await stat(path_);

  		if (result.isFile()) {
  			return path_;
  		}

  		if (result.isDirectory()) {
  			return getPath(path$1.join(path_, `${file}.html`));
  		}
  	} catch (_) {}
  };

  var electronServe = options => {
  	options = Object.assign({
  		isCorsEnabled: true,
  		scheme: 'app',
  		hostname: '-',
  		file: 'index'
  	}, options);

  	if (!options.directory) {
  		throw new Error('The `directory` option is required');
  	}

  	options.directory = path$1.resolve(electron.app.getAppPath(), options.directory);

  	const handler = async (request, callback) => {
  		const indexPath = path$1.join(options.directory, `${options.file}.html`);
  		const filePath = path$1.join(options.directory, decodeURIComponent(new URL(request.url).pathname));
  		const resolvedPath = await getPath(filePath, options.file);
  		const fileExtension = path$1.extname(filePath);

  		if (resolvedPath || !fileExtension || fileExtension === '.html' || fileExtension === '.asar') {
  			callback({
  				path: resolvedPath || indexPath
  			});
  		} else {
  			callback({error: FILE_NOT_FOUND});
  		}
  	};

  	electron.protocol.registerSchemesAsPrivileged([
  		{
  			scheme: options.scheme,
  			privileges: {
  				standard: true,
  				secure: true,
  				allowServiceWorkers: true,
  				supportFetchAPI: true,
  				corsEnabled: options.isCorsEnabled
  			}
  		}
  	]);

  	electron.app.on('ready', () => {
  		const session = options.partition ?
  			electron.session.fromPartition(options.partition) :
  			electron.session.defaultSession;

  		session.protocol.registerFileProtocol(options.scheme, handler);
  	});

  	return async (window_, searchParameters) => {
  		const queryString = searchParameters ? '?' + new URLSearchParams(searchParameters).toString() : '';
  		await window_.loadURL(`${options.scheme}://${options.hostname}${queryString}`);
  	};
  };

  // Modules to control application life and create native browser window
  const { app, BrowserWindow } = electron$1;
  const path = require$$1;
  const serve = electronServe;
  const loadURL = serve({ directory: 'public' });

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let mainWindow;

  function isDev() {
      return !app.isPackaged;
  }

  function createWindow() {    
      // Create the browser window.
      mainWindow = new BrowserWindow({
          width: 800,
          height: 600,
          webPreferences: {
              nodeIntegration: true,
              preload: path.join(__dirname, 'preload.js'),
              // enableRemoteModule: true,
              // contextIsolation: false
          },
          icon: path.join(__dirname, 'public/favicon.png'),
          show: false
      });

      // This block of code is intended for development purpose only.
      // Delete this entire block of code when you are ready to package the application.
      if (isDev()) {
          mainWindow.loadURL('http://localhost:8080/');
      } else {
          loadURL(mainWindow);
      }
      
      // Uncomment the following line of code when app is ready to be packaged.
      // loadURL(mainWindow);

      // Open the DevTools and also disable Electron Security Warning.
      // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
      // mainWindow.webContents.openDevTools();

      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
          // Dereference the window object, usually you would store windows
          // in an array if your app supports multi windows, this is the time
          // when you should delete the corresponding element.
          mainWindow = null;
      });

      // Emitted when the window is ready to be shown
      // This helps in showing the window gracefully.
      mainWindow.once('ready-to-show', () => {
          mainWindow.show();
      });
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', function () {
      // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') app.quit();
  });

  app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
  });

  return main;

})(require$$0, require$$1, require$$2);
//# sourceMappingURL=bundle.js.map
