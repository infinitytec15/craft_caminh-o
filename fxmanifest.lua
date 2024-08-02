shared_script "@ThnAC/native.lua"
shared_script "@ThnAC/natives.lua"
client_script "@ThnAC/loader.lua"
fx_version 'bodacious'
game 'gta5'

ui_page 'nui/nui.html'
ui_page_preload 'yes'

client_scripts {
	"@vrp/lib/utils.lua",
	"config.lua",
	"client.lua",
}

server_scripts {
	"@vrp/lib/utils.lua",
	"config.lua",
	"server.lua",
}

files {
	'nui/**/**/*',
	'nui/**/*',
	'nui/*',
}
       