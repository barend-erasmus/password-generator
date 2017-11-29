import { app, BrowserWindow, protocol } from 'electron';
import * as url from 'electron';
import * as path from 'path';

let window: BrowserWindow;

function initialize() {
    window = new BrowserWindow({ width: 400, height: 170 });

    protocol.interceptFileProtocol('file', (request, callback) => {
        const url = request.url.substr(7);
        console.log(url);
        callback(path.join(__dirname,'assets', url));
    }, (error) => {
        
        if (error) console.error('Failed to register protocol')
    });

    window.setMenu(null);

    window.loadURL(`file:///index.html`);
}

app.on('ready', initialize);