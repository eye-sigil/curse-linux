
'use strict';

const electron = require('electron');
const app = require('app');
const shell = require('shell');
const BrowserWindow = require('browser-window')
const shortcut = require('global-shortcut');

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
	win.loadURL('https://www.curse.com/home');

	shortcut.register('F5', function() {
		win.reload();
	});
	shortcut.register('F12', function() {
		win.toggleDevTools();
	});

	win.on('will-navigate', function(e,url) {
		e.preventDefault();
		shell.openExternal(url);
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

// const run = require('child_process');

// document.on('click', 'a[href^="http"]', function(event) {
// 	event.preventDefault();
// 	shell.openExternal(this.href);
// });
