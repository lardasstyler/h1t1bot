const Discord = require('discord.js');
module.exports = {
  name: "serverinfo",
  run: async(bot, message, args) =>{
     let embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle(`ID: ${message.guild.id}`)
    .setThumbnail(message.guild.iconURL())
    .addField('Verification level', message.guild.verificationLevel, true)
    .addField("Region", message.guild.region, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Total | Humans | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .addField(`Channels [${bot.guilds.cache.get(message.guild.id).channels.cache.size}]`, `Category: ${bot.guilds.cache.get(message.guild.id).channels.cache.filter(channel => channel.type == "category").size} \nText: ${bot.guilds.cache.get(message.guild.id).channels.cache.filter(channel => channel.type == "text").size} \nVoice: ${bot.guilds.cache.get(message.guild.id).channels.cache.filter(channel => channel.type == "voice").size}`)
    .addField('Server Owner', `${bot.guilds.cache.get(message.guild.id).owner.user.tag} [${bot.guilds.cache.get(message.guild.id).owner.id}]`)
    .setColor(message.member.displayHexColor === '#000000' ? '#ffffff' : message.member.displayHexColor)
    message.channel.send(embed)

  }
}