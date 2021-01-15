const electron = require('electron');
const desktopCapturer = electron.desktopCapturer
const remote = electron.remote;
const { writeFile } = require('fs');

const Menu = remote.Menu;
const dialog = remote.dialog;
var win = remote.getCurrentWindow();



document.querySelector("#minus-btn").addEventListener("click", () => win.minimize()); 
document.getElementById("close-btn").addEventListener("click", function (e) {
    win.close();
  }); 