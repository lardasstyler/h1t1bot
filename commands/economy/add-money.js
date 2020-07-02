const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "add-money",
  run: async(bot, message, args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.members.first() || message.guild.users.cache.get(args[0])
    let pocket = db.fetch(`pocket_${message.author.id}`)
    let bank = db.fetch(`bank_${message.author.id}`)
    if(!args[1]) return message.channel.send("please specify what to add to.");
    if(!args[2]) return message.channel.send("please specify how much to add.");
    if(message.content.includes('-')) return message.channel.send("you cant add negative money.");
    if(args[1] === 'pocket') {
      db.add(``)
    }
  }
}