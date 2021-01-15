const { app, Menu, Tray, globalShortcut, clipboard} = require('electron')
const templateGenerator = require('./modules/template')
const clipboardModule = require('./modules/clipboard')
const data = require('./modules/data')
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
  }
  
app.whenReady().then(
    () => {
        const ret = globalShortcut.register('CommandOrControl+Shift+C', () => {
            // InsereClipboard()
            clipboardModule.insereClipboard()
            // clipboardModule.retornarItens()
            data.salvaDados('clipboard',clipboard.readText());
            let novoTemplate = templateGenerator.adicionaNovoItemTray(clipboard.readText())
            let novoTrayMenu = Menu.buildFromTemplate(novoTemplate)
            tray.setContextMenu(novoTrayMenu)
            // data.retornaItens(1)
            
        })
    }
)

app.on('window-all-closed', () => {
    // if(process.platform !== 'darwin') app.quit()

    globalShortcut.unregisterAll()
})

//TRAY

let tray = null
app.whenReady().then(() => {
    tray = new Tray(`${__dirname}/assets/img/icon.png`)
    const template = templateGenerator.geraTrayTemplate()
    const trayMenu = Menu.buildFromTemplate(template)
    tray.setContextMenu(trayMenu)
})
