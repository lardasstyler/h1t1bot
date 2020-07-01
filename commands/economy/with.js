const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "with",
  run: async(bot, message, args) =>{
      let bank = db.fetch(`bank_${message.author.id}`)
      let errorEmbed = new Discord.MessageEmbed()
    .setTitle("**Error!**")
    .setColor("#FF0000")
    .setDescription("You can't withdraw air!")
    if(bank === null) return message.channel.send(errorEmbed)
      db.delete(`bank_${message.author.id}`, bank)
      let pocket = db.fetch(`pocket_${message.author.id}`)
      db.add(`pocket_${message.author.id}`, bank)
    let successEmbed = new Discord.MessageEmbed()
    .setTitle("**Withdraw Complete!**")
    .setDescription(`Successfully withdrawn **$${bank}** to your pocket!`)
    .setColor('#00FF00')
    message.channel.send(successEmbed)
  }
}