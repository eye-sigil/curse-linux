
'use strict';

const electron = require('electron');
const app = require('app');
const shell = require('shell');
const BrowserWindow = require('browser-window')
const run = require('child_process');

//var loadWindow = null;
var mainWindow = null;
var mainPage = __dirname + 'index.html';
//var connected = false;

// openBrowser(url) = {
//   run.exec('xdg-open ' + url);
// }

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	//Loading Screen
	// loadWindow = new BrowserWindow({width: 800,
	// 	height: 480,
	// 	icon: __dirname + '/icon.png',
	// 	title: "Curse",
	// 	'autoHideMenuBar': true,
	// 	frame: false});
	// loadWindow.setResizable(false);
	// loadWindow.loadURL('file://' + __dirname + '/load.html');

	mainWindow = new BrowserWindow({width: 1100,
		height: 750,
		icon: __dirname + '/icon.png',
		title: 'Curse',
		'autoHideMenuBar': true});
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// document.on('click', 'a[href^="http"]', function(event) {
	// 	event.preventDefault();
	// 	shell.openExternal(this.href);
	// });

	var webContents = mainWindow.webContents;

	webContents.on('will-navigate', function(e,url) {
		e.preventDefault();
		run.execSync('xdg-open ' + url);
	});

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

});
