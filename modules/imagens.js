const data = require('./data')
data.carregaConf('tinySecret').then( dados =>{tinify.key = dados.tinySecret})

const tinify = require("tinify")
const noticacao = require('./notification')

module.exports = {
    async compactaImg(caminho){

        let resultados = null
        let c = 1
        
        caminho.forEach(item => {

            let source = tinify.fromFile(item)
            source.toFile(item, coisa => {
                if(c == caminho.length){
                    resultados = true
                    if(resultados == true){
                        const notification =  noticacao.montaMensagem('Compactar Imagens', 'A solicitação foi concluída')
                        noticacao.exibeMensagem(notification)
                    }
                }  
                c++                          
            })

        })
        
    }
}