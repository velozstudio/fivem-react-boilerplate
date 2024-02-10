fx_version 'cerulean'
game 'gta5'

author 'andyxdddd'
version '0.0.0'

lua54 'yes'

shared_scripts {
    'config/config.lua',
}

client_scripts {
    'client/functions.lua',
    'client/main.lua',
    'client/threads.lua',
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/functions.lua',
    'server/main.lua',
}

files {
    'web/dist/index.html',
    'web/dist/assets/*.js',
    'web/dist/assets/*.css',
}

-- ui_page 'web/dist/index.html'
ui_page 'http://localhost:5173/'
