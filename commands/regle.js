const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Vous êtes pas autorisé à utiliser cette commande !');
  
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});


    const embed = new Discord.MessageEmbed()
        .setTitle(`Règles ${message.guild.name}`)
        .setColor("#FF0000")
        .setDescription(sayMessage)
        .setThumbnail(`https://cdn.discordapp.com/attachments/957722211379191860/957722271018024990/Logo.jpg`)
        .setFooter(`Système de règles | ${message.guild.name}`)

        message.channel.send(embed)
};