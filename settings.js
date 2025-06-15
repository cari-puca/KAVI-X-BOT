const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~UMgnwTLY#WtvnLMq_9a9t6AzA8IILsU6bg5PiNe-53whOk-3X0L4"
global.botname = process.env.BOTNAME || "Tutu-X MD"
global.ownernumber = process.env.OWNERNUMBER || "94762736725"
global.ownername = process.env.OWNERNAME || "🅃🄷🄰🅂🄷🄼🄸🄻🄰"
global.websitex = process.env.WEBSITEX || "https://kavi-x-bot-login.up.railway.app/"
global.wagc = process.env.WAGC || "https://wa.me/94762736725?text=Free+Panel+eka+gannai+awe🥹"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "🅃🄷🄰🅂🄷🄼🄸🄻🄰"
global.author = process.env.AUTHOR || "🅃🄷🄰🅂🄷🄼🄸🄻🄰"
global.creator = process.env.CREATOR || "94762736725@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "ᴘᴜᴛ ʏᴏᴜʀ ᴍᴏɴɢᴏᴅʙ ᴜʀɪ ʜᴇʀᴇ."

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
