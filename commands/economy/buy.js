const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "buy",
  run: async(bot, message, args) =>{
    if(args[0] === '1') {
      let errorEmbed = new Discord.MessageEmbed()
    .setTitle("**Error!**")
    .setColor("#FF0000")
    .setDescription("You have no pocket cash!")
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket !== 100 )
    }
  }
}