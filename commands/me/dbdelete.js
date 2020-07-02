const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "dbdelete",
  run: async(bot, message, args) =>{
    if(message.author.id !== '648698528872398848') return;
    let user = message.mentions.members.first();
    let pocket = db.fetch(`pocket_${message.author.id}`)
    let bank = db.fetch(`bank_${message.author.id}`)
    db.delete(`bank_${user.user.id}`)
    db.delete(`pocket_${user.user.id}`)
    message.channel.send(`**$${pocket}** was deleted from ${user.user.username}'s pocket and **$${bank}** was deleted from their bank.`)
  }
}
