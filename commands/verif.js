const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete()

    const loyroxte = message.guild.roles.cache.get('954709077395660903'); 
    

    await message.member.roles.add(loyroxte.id);

    message.member.send(`Vous avez été vérifié sur le serveur: **${message.guild.name}**`)
};