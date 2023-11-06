const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 310,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false
    }
  });

  // win.loadFile('index.html');
  win.loadURL('http://localhost:8080');

  // 监听页面加载完成事件
  win.webContents.on('did-finish-load', () => {
    if (win.webContents.getURL().endsWith('sticker.html')) {
      win.setSize(500, 400); // 假设您希望sticker页面的大小为500x400
    } else {
      win.setSize(310, 500); // 其他页面的大小为800x600
    }
  });

}



app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
