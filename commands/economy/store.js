const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "store",
  run: async(bot, message, args) =>{
    let storeEmbed = new Discord.MessageEmbed()
    .setAuthor('Store', message.author.displayAvatarURL())
    .setDescription(`To buy an item use the command \`;buy [number]\`.\n\n **Sunglasses [1] - $100**\n Get that dumb sun out of your eyes with these babies!\n\n **Baseball Cap [2] - $500**\n Get that pesky bright star out of your face with this!\n\n **Pizza [3] - $1000**\n Yummy!\n\n**Axe [4] - $5000**\n Beat your enemies...\n\n**Chainsaw [5] - $10,000**\n I'm not even going to explain this.\n\n**a dad [6] - $69,420**\n dad\n\n**range rover sports truck [7] - $100,000**\n lil yachty\n\n**Custom Role [8] - $500,000**\n Once you have bought this, notify an admin!\n\n**The Holy "h" Trophy [9] - $100,000,000**\n Only superiors can obtain this...`)                                                                                                                           
    message.channel.send(storeEmbed)
  }
} 