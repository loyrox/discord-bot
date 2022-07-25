const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return msg.reply('Vous êtes pas autorisé à utiliser cette commande !');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Système de Message`)
    .setColor("#FF0000")
    .setDescription('**Pour créer un Message, faites** \n```!msg <le message>```')
    .setThumbnail(`https://cdn.discordapp.com/attachments/954711915702145064/998314438711054456/6286058d8c729.png`)
    .setFooter(`Système de Message | ${message.guild.name}`)
    message.channel.send(embed)
};