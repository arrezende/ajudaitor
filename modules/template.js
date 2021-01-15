const {BrowserWindow,globalShortcut,app } = require('electron')

//const { exec } = require('child_process')
const util      = require('./utils')
const clipboard = require('./clipboard')

module.exports = {
    templateInicial: null,
    log(){console.log('teste')},
    geraTrayTemplate(){
        let template = [
            {
                label: 'Sobre a Ferramenta',
                click: () => {
                    createWindow('about',500, 600)
                }
            },
            {
                label: 'Selecione uma opção abaixo',
                enabled: false
            },
            {
                type: 'separator'
            },
            {
                label: 'VS Code',
                submenu: [
                    {
                        label: 'Abrir arquivo',
                        click: () => {
                            util.openVSCode('openFiles')
                        }
                    },
                    {
                        label: 'Abrir Pasta',
                        click: () => {
                            util.openVSCode('openDirectory')
                        }
                    }
                ]
            },
            {
                label: 'Compactar imagens',
                click: () => {
                    util.openImg();
                }
            },
            {
                label: 'Área de transferencia',
                id: 1,
                submenu: [
                    {
                        label: 'Salvar na memória',
                        accelerator: 'CommandOrControl+Shift+C', 
                        click: () =>{
                            clipboard.insereClipboard();
                            
                            clipboard.retornarItens(clipboard.lerClipboard())
                        }
                    },
                    {
                        label: 'Ver itens',
                        submenu: [
                            // {
                            //     label: `${util.limitaCaracteres('Lorem Ipsum Dolor SImet')}...`
                            // }
                        ]
                    }
                ]
            },
            {
                label: 'Captura de Tela',
                click: () =>{
                    createWindow('capture', 500, 600)
                    
                }
            },
            {
                type:'separator'
            },
            {
                label: 'Sair',
                click: () =>{
                    globalShortcut.unregisterAll()
                    app.quit()
                }
            }
        ]

        this.templateInicial = template

        return template

    },
    adicionaNovoItemTray(item){
        let length = this.templateInicial[5].submenu[1].submenu.length
        this.templateInicial[5].submenu[1].submenu.unshift(
            {
                label: `${util.limitaCaracteres(String(item))}...`,
                
                click: () =>{
                    let conteudo = item
                    clipboard.copiaDados(conteudo)
                }
            }
        )
        //Fazer verificacao para eliminar resultados maiores que 8
        if(length >=9){
           let lastItem = this.templateInicial[5].submenu[1].submenu.pop()
        }
        console.log(this.templateInicial[5].submenu[1].submenu.length)
        return this.templateInicial
        
    }
    
}

function createWindow (file, width, height) {
    const win = new BrowserWindow({
      width: width,
      height: height,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
      },
      frame: false
    })
    win.loadFile(`./${file}.html`)
    // win.openDevTools();

  }
  
  