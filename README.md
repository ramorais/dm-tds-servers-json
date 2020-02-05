# DM - Servers.json

Copia o arquivo local de servidores (servers.json) para a pasta '.totvsls' do usuário. A extensão é ativada apenas se encontrar o arquivo 'servers.json' na pasta '.vscode' do projeto corrente.

**Download**
```
http://bit.ly/dm-tds-servers-json
```

**Instalação**

Na linha de comando, digite:
```
code --install-extension dm-tds-servers-json-0.0.1.vsix
```

**server.json**

Modelo de arquivo servers.json:
```
{
	"version": "0.2.0",
	"includes": [
		"C:\\Dev\\Totvs\\Projs\\Includes"
	],
	"permissions": {
		"authorizationtoken": ""
	},
	"configurations": [
		{
			"id": "tk8ie97hoxk4ogkckqlfss22hgfg",
			"type": "totvs_server_protheus",
			"name": "Local",
			"port": 5214,
			"address": "localhost",
			"buildVersion": "7.00.170117A",
			"secure": 0,
			"includes": [],
			"environments": [
				"TOTVS12"
			]
		}
	]
}
```
