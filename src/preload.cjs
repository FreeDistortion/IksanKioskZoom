import { channel } from 'diagnostics_channel';
import { every } from 'rxjs';

const{ contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electron',{
    send: (channel, data) =>{
        ipcRenderer.send(channel, data);
    },
    sendSync: (channel, data) =>{
        ipcRenderer.sendSync(channel, data);
    },
    
    receive: (channel, func) =>{
        ipcRenderer.on(channel,(event, ...args) => func(...args));
    },

});