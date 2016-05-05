
'use strict';

const electron = require('electron');
const app = require('app');
const BrowserWindow = require('browser-window');
const shortcut = require('global-shortcut');
const run = require('child_process');

var win = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {

	win = new BrowserWindow({width: 1100,
		height: 750,
		icon: __dirname + '/icon.png',
		title: 'Curse',
		'autoHideMenuBar': true});
	win.loadURL('https://www.curse.com/login');

	shortcut.register('F5', function() {
		win.reload();
	});
	shortcut.register('F12', function() {
		win.toggleDevTools();
	});

	win.webContents.on('new-window', function(e, url) {
		e.preventDefault();
		run.execSync('xdg-open ' + url);
	});

	win.on('closed', function() {
		win = null;
	});

});

//Loading Screen

//var loadWindow = null;
//var connected = false;

// loadWindow = new BrowserWindow({width: 800,
// 	height: 480,
// 	icon: __dirname + '/icon.png',
// 	title: "Curse",
// 	'autoHideMenuBar': true,
// 	frame: false});
// loadWindow.setResizable(false);
// loadWindow.loadURL('file://' + __dirname + '/load.html');

//Alt External Link

// document.on('click', 'a[href^="http"]', function(event) {
// 	event.preventDefault();
// 	shell.openExternal(this.href);
// });

