const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Tu ne peux pas faire ça...');

    message.channel.delete()
};