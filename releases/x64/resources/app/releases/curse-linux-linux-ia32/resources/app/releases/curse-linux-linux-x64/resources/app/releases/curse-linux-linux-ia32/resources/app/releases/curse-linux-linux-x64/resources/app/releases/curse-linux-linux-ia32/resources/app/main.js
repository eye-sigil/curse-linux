'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

var loadWindow = null;
var mainWindow = null;
var connected = false;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	// On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
	if (process.platform != 'darwin') {
		app.quit();
	}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
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

	mainWindow = new BrowserWindow({width: 900,
		height: 750,
		icon: __dirname + '/icon.png',
		title: 'Curse',
		'autoHideMenuBar': true});
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

});
