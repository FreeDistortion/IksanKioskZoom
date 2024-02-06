const windowStateManager = require('electron-window-state');
const {app, BrowserWindow, ipcMain} = require('electron');
const serve = require('electron-serve');
const path = require('path');

try{
    require('electron-reloader')(module)    ;
}catch(e){
    console.error(e);

}
const serveURL = serve({directory:'.'});
const port = process.env.PORT || 5173;
const dev = !app.isPackaged;
let mainWindow;

function createWindow(){
    let windowState = windowStateManager({
        defaultHeight: 1920,
        defaultWidth: 1080,
    });

    const mainWindow=new BrowserWindow({
        backgroundColor: 'whitesmoke',
        minHeight: 1920,
        minWidth: 1080,
        webPreferences: {
            enableRemoteModule: true,
            contextIsolation: true,
            nodeIntegration: true,
            spellcheck: false,
            devTools: dev,
            preload: path.join(__dirname, 'preload.cjs'),
        },
        x: windowState.x,
        y: windowState.y,
        width: windowState.width,
        height: windowState.height,
    });


    windowState.manage(mainWindow);

    mainWindow.once('ready-to-show', () => { 
        mainWindow.show();
        mainWindow.focus();
     });

    mainWindow.on('close', () => { 
        windowState.saveState(mainWindow);
     })

     return mainWindow;

}

function loadVite(port) {
    mainWindow.loadURL(`http://localhost:${port}`).catch((e) => { 
        console.log('Error loading URL, please retry...', e);
        setTimeout(() => {
            loadVite(port);
        }, 200);
     });
}

function createMainWindow() {
    mainWindow = createWindow();
    mainWindow.once('close',() => { 
        mainWindow=null;
     });

     if(dev) loadVite(port);
     else serveURL(mainWindow);
}


app.once('ready', createMainWindow);
app.on('window-all-closed',() => { 
    if(process.platform !== 'darwin') app.quit();
 });

ipcMain.on('to-main', (event, count) => { 
    return mainWindow.webContents.send('from-main', `next count is ${count+1}`)
 });