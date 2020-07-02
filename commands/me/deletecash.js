const db = require('quick.db');
module.exports = {
  name: "deletecash",
  run: async(bot, message, args) =>{
    if(message.author.id !== '648698528872398848') return;
    let pocket = (`pocket_${message.guild.id}`)
    let bank = (`bank_${message.guild.id}`)
    db.delete(`bank_${message.guild.id}`)
    db.delete(`pocket_${message.guild.id}`)
    let added = pocket + bank;
    message.channel.send(`Deleted a total of **$${added}**.`)
  }
} 