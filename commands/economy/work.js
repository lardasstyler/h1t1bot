const Discord = require('discord.js');
const db = require('quick.db');
const used = new Map();
const Duration = require('humanize-duration');
module.exports = {
  name: "work",
  run: async(bot, message, args) =>{
    const cooldown = used.get(message.author.id);
    if(cooldown) {
      const remaining = Duration(cooldown - Date.now(), { units: ['h', 'm'], round: true})
      return message.channel.send(`${message.author}, you can't use this command for another **${remaining}**!`)
    } else {
      used.set(message.author.id, Date.now() + 1000 * 60 * 10);
      setTimeout(() => { used.delete(message.author.id), 1000 * 60 * 10});
    }
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
