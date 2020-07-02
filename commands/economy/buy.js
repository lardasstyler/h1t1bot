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
      message.channel.send("Nice! New baseball cap. Hopefully you put it to good use! 🧢")
    } else if(args[0] === '3') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 1000) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 1000)
      message.channel.send("What's on this piece of pizza? Cheese? Bacon? Pineapples? :pizza:")
    } else if(args[0] === '4') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 5000) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 5000)
      message.channel.send("Why is there blood on this thing? :axe:")
    } else if(args[0] === '5') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 10000) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 10000)
      message.channel.send("VRRR VRRRRRRR")
    } else if(args[0] === '6') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 69420) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 69420)
      message.channel.send("new dad! you think this one will run off?")
    } else if(args[0] === '7') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 100000) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 100000)
      message.channel.send("range rover sports truck", {files: ['https://cdn.discordapp.com/attachments/719488320450592829/727755769918783548/image0.jpg']});
    } else if(args[0] === '8') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 500000) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 500000)
      message.channel.send("Admins have been notified!");
      let logs = message.guild.channels.cache.get("728087458780020790");
      logs.send(`**${message.author.tag}** bought a custom role and is waiting for their role. ||<@&718541713005871125>||`)
    } else if(args[0] === '9') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      if(pocket === null) return message.channel.send(errorEmbed)
      if(pocket < 100000000) return message.channel.send(errorEmbed1)
      db.subtract(`pocket_${message.author.id}`, 100000000)
      message.channel.send("King, your trophy has been added.!");
      message.member.roles.add("728088829554327582")
    }
  }
}