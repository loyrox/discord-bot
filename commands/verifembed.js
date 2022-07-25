const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return msg.reply('Vous êtes pas autorisé à utiliser cette commande !');

    const embed = new Discord.MessageEmbed()
    .setTitle(`Système de vérification`)
    .setColor("#FF0000")
    .setDescription('**Pour vous vérifier, tapez simplement :** \n```!verif```')
    .setThumbnail(`https://cdn.discordapp.com/attachments/954711915702145064/998314438711054456/6286058d8c729.png`)
    .setFooter(`Système de vérification | ${message.guild.name}`)
    message.channel.send(embed)
};

