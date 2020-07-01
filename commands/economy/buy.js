const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "buy",
  run: async(bot, message, args) =>{
    if(args[0] === '1') {
      let pocket = db.fetch(`pocket_${message.author.id}`)
      
    }
  }
}