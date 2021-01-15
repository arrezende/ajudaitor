const { dialog } = require('electron')
const imagens = require('./imagens')
const { exec } = require('child_process')
const noticacao = require('./notification')

module.exports = {
    openVSCode(properties) {
        dialog.showOpenDialog({ properties: [`${properties}`] }).then(result => {
            if(result.canceled == false){
                const results = result.filePaths
                exec(`code "${results}"`)
            }
          }).catch(err => {
            console.log(err)
          })
    },
    openImg(){
        console.log('iniciando a compactaçao')
        dialog.showOpenDialog({
            properties: ['openFile','multiSelections'],
            filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif', 'jpeg'] }]
        }).then(result => {
            //console.log(result)
            if(result.canceled == false){
                imagens.compactaImg(result.filePaths)
                
            }else{
                console.log('cancelado pelo usuario')
                const notification =  noticacao.montaMensagem('Compactar Imagens', 'A solicitação foi cancelada pelo usuário')
                noticacao.exibeMensagem(notification)
                  
            }
            
        }).catch(err => { console.log(err) })

    },
    limitaCaracteres(string){
        lorem = string.substr(0,19)
        return lorem
        
    }

}