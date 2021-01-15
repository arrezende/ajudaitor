const jsonfile = require('jsonfile-promised')
const fs = require('fs')
const itemFile = []
let pos = ''
module.exports = {
    carregaConf(nomeCampo){
        return jsonfile.readFile(__dirname+'/data/config.json')
    },
    salvaDados(curso, tempoEstudado){
        let arquivoDoCurso = __dirname + '/data/' + curso + '.json';
        if(fs.existsSync(arquivoDoCurso)){
            //Salvar Dados
            this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
        }else{
            // Criar Arquivo 
            this.criaArquivoDeCurso(arquivoDoCurso, {})
                .then(()=>{
                    // Salvar Dados
                    this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
                })
        }
    },
    adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado){
        const lorem = jsonfile.readFile(arquivoDoCurso)
       

        // lorem.then(item => {
        //     itemFile.push(item)
        //     // itemFile = JSON.stringify(item)

        //     console.log('funcao', itemFile)
        // })
        // console.log(itemFile)
        itemFile.push(tempoEstudado)
        let dados = [
            {item: tempoEstudado},
            {item: itemFile}
        ]
        newJson = dados;

        jsonfile.writeFile(arquivoDoCurso, itemFile, {spaces: 2})
            .then(()=>{
                console.log('Tempo salvo com sucesso')
            }).catch((err) => {
                console.log(err);
            })
    },
    criaArquivoDeCurso(nomeArquivo,conteudoArquivo){
        return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
            .then(()=>{
                console.log('Arquivo Criado');
            }).catch((err) => {
                console.log(err);
            })
    },
    retornaItens(indice){
        
        const file = jsonfile.readFile(__dirname+'/data/teste.json')
        file.then(
            item => {
                pos = item[indice]
                
                

            }
        ).catch((err) => {
            console.log(err);
        })
        
        return pos

    }
}