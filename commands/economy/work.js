const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "work",
  run: async(bot, message, args) =>{
    var num = Math.floor(Math.random() * 1001)
    let workSentences = [
      `You helped fix a federal fuilding and earned **$${num}**!`
    ]
    let pocket = db.fetch(`pocket_${message.author.id}`)
    db.add(`pocket_${message.author.id}`, num)
    var workSentencesOutput = workSentences[Math.floor(Math.random() * workSentences.length)];
    message.channel.send(workSentencesOutput)
  }
}