const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "addmoney",
  run: async(bot, message, args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.members.first() || message.guild.users.cache.get(args[0])
    let pocket = db.fetch(`pocket_${message.author.id}`)
    let bank = db.fetch(`bank_${message.author.id}`)
    if(!args[1]) return message.channel.send("please specify what to add to.");
    if(!args[2]) return message.channel.send("please specify how much to add.");
    if(message.content.includes('-')) return message.channel.send("you cant add negative money.");
    if(args[1] === 'pocket') {
      db.add(`pocket_${user.user.id}`, args[2])
      message.channel.send(`Successfully added **$${args[2]}** to ${user.user}'s pocket.`)
    } else if(args[1] === 'bank') {
      db.add(`bank_${user.user.id}`, args[2])
      message.channel.send(`Successfully added **$${args[2]}** to ${user.user}'s bank.`)
    }
  }
}