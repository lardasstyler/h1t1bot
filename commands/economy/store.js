const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "store",
  run: async(bot, message, args) =>{
    let storeEmbed = new Discord.MessageEmbed()
    .setAuthor('Store', message.author.displayAvatarURL())
    .setDescription(`To buy an item use the command \`;buy [item]\`.\n\n **Sunglasses - $100**\n Get that dumb sun out of your eyes with these babies!\n\n **Baseball Cap - $500**\n Get that pesky bright star out of your face with this!\n\n **Pizza - $1000**\n Yummy!\n\n**Axe - $5000**\n Beat your enemies...\n\n**Chainsaw - $10,000**\n I'm not even going to explain this.\n\n**a dad - $69,420**\n dad\n\n**range rover sports truck - $100,000**\n lil yachty\n\n**The Holy "h" Trophy - `)                                                                                                                           
    message.channel.send(storeEmbed)
  }
} 