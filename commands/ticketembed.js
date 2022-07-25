const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('Vous êtes pas autorisé à utiliser cette commande !');

    const embed = new Discord.MessageEmbed()
    .setTitle("Système de tickets")
    .setDescription('**Pour ouvrir un ticket, tapez simplement :** \n```!ticket <raison du ticket>```')
    .setColor("#FF0000")
    .setThumbnail(`https://cdn.discordapp.com/attachments/954711915702145064/998314438711054456/6286058d8c729.png`)
    .setFooter(`Système de tickets | ${message.guild.name}`)
    message.channel.send(embed)
};