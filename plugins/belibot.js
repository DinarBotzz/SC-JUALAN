let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :    *RP 5.000*
╠➥ *1 Bulan* :      *Rp 30.000*
╠➥ *Permanen* : *Rp 50.000*
╠➥ *Premium* :   *Rp 20.000*
║
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Ovo
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2022
╠═ Scrip original by Dinar Botz
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'OVO', '#viaovo', 'Gopay', '#viagopay', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
