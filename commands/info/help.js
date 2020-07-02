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
      .setDescription("**h**\nh\n\n**lookforthegummybearalbum**\nlyrics of song\n\n**meme**\n Displays a random meme.")
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send(embed)
     } if(args[0] === 'info'){
       let embed = new Discord.MessageEmbed()
      .setTitle("Info Commands")
      .setDescription("**help**\nDisplays all categories/commands.\n\n**serverinfo**\nThe servers information.")
      .setColor("RANDOM")
      .setTimestamp()
      message.channel.send(embed)
     } if(args[0] === 'staff') {
       if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
       let embed = new Discord.MessageEmbed()
       .setTitle("Staff Commands")
       .setColor("RANDOM")
       .setDescription("**addmoney**\nAdd cash to a users balance. (ADMIN)\n\n**ban**\nBan a user.\n\n**kick**\nKick a user.")
       message.channel.send(embed)
     } else {
      let embed = new Discord.MessageEmbed()
    .setAuthor(`Help Menu`, bot.user.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription("To learn more, use the command `;help [category]`.\n\n **💰 Economy**\n The servers economy system!\n\n**😂 Fun**\n Fun commands!\n\n**📖 Info**\nInformation.")
    message.channel.send(embed)
    }
  }
}