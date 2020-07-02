const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
  name: "meme",
  run: async(bot, message, args) =>{
    message.channel.send("Meme is processing, this may take a while.").then(m => m.delete({ timeout: 4500}));
    fetch('https://meme-api.herokuapp.com/gimme')
   .then(res => res.json())
   .then(json => {
   let embed = new Discord.MessageEmbed()
   .setTitle(`${json.title}`)
   .setImage(json.url)
   .setColor(message.member.displayHexColor === '#000000' ? '#ffffff' : message.member.displayHexColor)
   .setFooter(`${json.postLink} • ${json.subreddit}`)
   .setTimestamp()
   message.channel.send(embed)
   });
  }
}