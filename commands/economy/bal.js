const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "bal",
  run: async(bot, message, args) =>{
    
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let pocket = db.fetch(`pocket_${message.author.id}`)
    let bank = db.fetch(`bank_${message.author.id}`)
    if(pocket === null) pocket = 0;
    if(bank === null) bank = 0;
    let balanceEmbed = new Discord.MessageEmbed()
    .setAuthor(`${user.user.tag}'s Balance`, message.author.displayAvatarURL())
    .setDescription(`\n **🩳 Pocket Change:** $${pocket}\n \n **💰 Bank Balance:** $${bank}`)
    .setColor('RANDOM')
    .setTimestamp()
    message.channel.send(balanceEmbed)
    
  }
}