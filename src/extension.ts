import * as vscode from 'vscode';
import { copyFile } from 'fs';
import { URI } from 'vscode-uri';

// ---
// Localização dos arquivos
const homedirFile = require('os').homedir() + "\\.totvsls\\servers.json";
let localFile = "";
// ---
const fs = require('fs');

// ---
// activate()
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "Local Servers" is now active!');

	// Pasta local de trabalho
	var folders = vscode.workspace.workspaceFolders ?? null;
	if(folders !== null) {
		if (folders.length > 0) { 
			localFile = folders[0].uri.fsPath + "\\.vscode\\servers.json";		
		}
	}

	swapFile();	// Troca os arquivos...

}
// -----------------------------------------------------------------------------

// this method is called when your extension is deactivated
export function deactivate() {}

// ---
// Copia o arquivo local para a pasta .totvsls
function swapFile() {
	let exist = fs.existsSync(localFile);
	if (exist) {
		vscode.window.showInformationMessage('Servers.json: Transferindo...');
		try {
			vscode.workspace.fs.copy(URI.file(localFile), URI.file(homedirFile), {overwrite: true});	
		} catch (error) {
			
		}
		
		vscode.window.showInformationMessage('Servers.json: OK :-)');
	}
}
// -----------------------------------------------------------------------------

