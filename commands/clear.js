const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const numeromessage = message.content.split(' ');
    const loyroxargument = numeromessage.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('les perms?!');

    let clearmessageloyrox;

    if (isNaN(loyroxargument[0]) || parseInt(loyroxargument[0]) <= 0) { return message.reply('Veuillez indiquer le nombre de messages à supprimer (1-99) !') }

    if (parseInt(loyroxargument[0]) > 100) {
        return message.reply('Vous ne pouvez supprimer que 99 messages à la fois... !')
    } else {
        clearmessageloyrox = parseInt(loyroxargument[0]);
    }

    message.channel.bulkDelete(clearmessageloyrox + 1, true);
    message.channel.send(`**Succès** ***${clearmessageloyrox}*** messages supprimés.`)
}

