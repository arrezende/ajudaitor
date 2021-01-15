const { Notification } = require('electron')

module.exports = {
    montaMensagem (title, msg, crtl = true) {
        const notification = {
            title: title,
            body: msg
          }
          if(crtl == true){}
          return notification
    },
    exibeMensagem(conteudo) {
        new Notification(conteudo).show()
    }
}