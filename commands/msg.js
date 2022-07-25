const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Vous êtes pas autorisé à utiliser cette commande !');
  
  const sayMessage = args.join(' ');       
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};