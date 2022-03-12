let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} ini sc nya
• https://bit.ly/3H3gy2z

Join grup developer untuk info lebih lanjut,-
${gc1}
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
