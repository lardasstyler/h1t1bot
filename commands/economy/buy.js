const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "buy",
  run: async(bot, message, args) =>{
     let errorEmbed = new Discord.MessageEmbed()
    .setTitle("**Error!**")
    .setColor("#FF0000")
    .setDescription("You have no pocket cash!")
     
      let errorEmbed1 = new Discord.MessageEmbed()
    .setTitle("**Error!**")
    .setColor("#FF0000")
    .setDescription("You don't have enough cash to buy this!")
      
    if(args[0] === '1') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 100) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 100)
      message.channel.send("Oh yeah... :sunglasses:")
    } else if(args[0] === '2') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 500) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 500)
      message.channel.send("Oh yeah... :sunglasses:")
    }
  }
}