function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  this.sendContact(m.chat, '62895371549895', '@moexti', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
