const Discord = require('discord.js');
module.exports = {
  name: "help",
  run: async(bot, message, args) =>{
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Help Menu`, bot.user.displayAvatarURL())
    .setDescription("To learn more, use the command `;help [category]`.\n\n **💰 Economy**\n The servers economy system!\n\n")
    message.channel.send(embed)
  }
}