const Discord = require("discord.js");
module.exports = {
    name: "kick",
    run: async (bot, message, args) => {
      
      if(!message.member.hasPermission("KICK_MEMBERS")) return;

      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(user.hasPermission("KICK_MEMBERS")) return message.channel.send("I can't kick a staff member!")
      
      if(!user) return message.channel.send("Please provide a user!")
      let reason = args.slice(1).join(' ') || "No reason provided!"
      user.send(`You were kicked from **${message.guild}** for \`${reason}\`.`).catch(e => console.log(e))
      
      await user.kick(reason)
      
      message.channel.send(`${user.user.tag} was kicked from the guild for **${reason}**.`)
    }
}