const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "work",
  run: async(bot, message, args) =>{
    var num = Math.floor(Math.random() * 1001)
    let workSentences = [
      `You helped fix a federal fuilding and earned **$${num}**!`,
      `You helped an old lady cross the street and she gave you **$${num}**!`,
      `You win a boxing match and you earn **$${num}**!`,
      `you are gay (you earned **$${num}**)`
    ]
    let pocket = db.fetch(`pocket_${message.author.id}`)
    db.add(`pocket_${message.author.id}`, num)
    var workSentencesOutput = workSentences[Math.floor(Math.random() * workSentences.length)];
    message.channel.send(workSentencesOutput)
  }
}