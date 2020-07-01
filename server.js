const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const fs = require('fs');
const prefix = ';';
const db = require('quick.db');
var schedule = require('node-schedule');

bot.on("ready", message => {
bot.user.setActivity(`keyboard sounds`, { type: "LISTENING"})
})
const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Command", "Load status");
  fs.readdirSync("./commands/").forEach(dir => {
    
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
    for (let file of commands) {
      let pull = require(`./commands/${dir}/${file}`);
    
      if (pull.name) {
        bot.commands.set(pull.name, pull);
        table.addRow(file, '✅');
      } else {
        table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
        continue;
      }
    
      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
    }
  });
  console.log(table.toString());
bot.on('message', (message) => {
  
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = bot.commands.get(command) || bot.aliases.get(bot.aliases.get(command));
  if(cmd) cmd.run(bot, message, args)
})

bot.login("NzEyMTU3MDI3NDEzMjYyMzM3.XuGfkQ.vCbmOlsc9JJZK5W0FpXfWR0z3hY");