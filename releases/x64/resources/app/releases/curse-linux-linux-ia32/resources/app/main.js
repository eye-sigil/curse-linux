
'use strict';

const electron = require('electron');
const app = require('app');
const BrowserWindow = require('browser-window')

//var loadWindow = null;
var mainWindow = null;
//var connected = false;

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

	mainWindow = new BrowserWindow({width: 1000,
		height: 750,
		icon: __dirname + '/icon.png',
		title: 'Curse',
		'autoHideMenuBar': true});
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

});
