const Discord = require('discord.js');
module.exports = {
  name: "help",
  run: async(bot, message, args) =>{
    if(args[0] === 'economy') {
      let embed = new Discord.MessageEmbed()
      .setTitle("Economy Commands")
      .setDescription("**bal**\nDisplays your balance.\n\n**work**\nGet money to buy stuff.\n\n**dep**\nDeposit the money from your pocket.\n\n**with**\nWithdraw the money from your bank.\n\n**store**\n Find stuff to buy.\n\n**buy**\nBuy stuff from the store.")
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send(embed)
    } if(args[0] === 'fun') {
      let embed = new Discord.MessageEmbed()
      .setTitle("Fun Commands")
      .setDescription("**h**\nh")
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send(embed)
     } else {
      let embed = new Discord.MessageEmbed()
    .setAuthor(`Help Menu`, bot.user.displayAvatarURL())
    .setDescription("To learn more, use the command `;help [category]`.\n\n **💰 Economy**\n The servers economy system!\n\n**😂 Fun**\n Fun commands!\n\n**📖 Info**\nInformation.")
    message.channel.send(embed)
    }
  }
}