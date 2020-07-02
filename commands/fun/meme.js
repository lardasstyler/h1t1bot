const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
  name: "meme",
  run: async(bot, message, args) =>{
    message.channel.send("Meme is processing")
    fetch('https://meme-api.herokuapp.com/gimme')
   .then(res => res.json())
   .then(json => {
   let embed = new Discord.MessageEmbed()
   .setTitle(json.title)
   .setImage(json.url)
   .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
   });
  }
}