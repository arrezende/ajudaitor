const { clipboard } = require('electron');

module.exports = {
    data: {
        history: [],
      },
    insereClipboard(txt = clipboard.readText()){
        this.data.history.push({
            txt
        })

        return clipboard.writeText(txt)
        
    },
    lerClipboard(indice = 0){
        return this.data.history[indice].txt
    },
    retornarItens(){
        // let element;
        arrayItensTotal = [ ...this.data.history];
        // console.log(arrayItensTotal);
        return arrayItensTotal;
        
    },
    copiaDados(item){
        return clipboard.writeText(item)
    }

}