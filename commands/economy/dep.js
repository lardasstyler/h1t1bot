const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "dep",
  run: async(bot, message, args) =>{
    let pocket = db.fetch(`pocket_${message.author.id}`)
    let errorEmbed = new Discord.MessageEmbed()
    .setTitle("**Error!**")
    .setColor("#FF0000")
    .setDescription("You can't deposit air!")
    if(pocket === null) return message.channel.send(errorEmbed)
    
    db.delete(`pocket_${message.author.id}`, pocket)
    let bank = db.fetch(`bank_${message.author.id}`)
    db.add(`bank_${message.author.id}`, pocket)
    let successEmbed = new Discord.MessageEmbed()
    .setTitle("**Deposit Complete!**")
    .setDescription(`Successfully deposited **$${pocket}** to your bank account!`)
    .setColor('#00FF00')
    message.channel.send(successEmbed)
  }
}