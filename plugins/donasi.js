let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three [0895371549895]
│ • XL Axiata [0859106980383]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana / LinkAja: 62895371549895
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
