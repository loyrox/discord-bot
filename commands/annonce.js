const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('Vous êtes pas autorisé à utiliser cette commande !');
  
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});


    const embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle(`Annonce ${message.guild.name}`)
        .setDescription(sayMessage)
        .setThumbnail(`https://cdn.discordapp.com/attachments/954711915702145064/998314438711054456/6286058d8c729.png`)
        .setFooter(`Système de Annonce pour ${message.guild.name}`)

        message.channel.send(embed)
};