const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const loyrox = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, écrire le sujet du ticket`)
} else if (loyrox.length > 150) {
  return message.channel.send(`${message.author.username}, vous devez donner une raison. Votre message ne peut pas dépasser 150 caractères !`);
} else {
    message.guild.channels.create(`Ticket ${message.author.username}`, {
        type: "text",
        parent: "965747928419434536",
        topic: `Ticket de ${message.author.tag}`,
        permissionOverwrites: [
            { id:   message.author.id, allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
            { id:   message.guild.roles.everyone, deny: ["VIEW_CHANNEL"], },
            { id:   "954709077395660903", allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
            { id:   "954709077395660906", allow: ["SEND_MESSAGES", "VIEW_CHANNEL"], },
        ]
    })
    .then(ch => {
        ch.send(`||${message.author}|| ||<@965747928419434536>||`)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Ticket de ${message.author.username}`)
        .setDescription(`Ticket ouvert car : ${loyrox}`)
        .setColor("#FF0000")
        .addField(`Merci d'avoir ouvert un ticket, attendez maintenant que le personnel lise votre ticket et réponde. \nPour fermer le ticket, faites __!close__ (seul le personnel peut fermer le ticket)`)
        .setFooter(`Système de tickets | ${message.guild.name}`)
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/954711915702145064/998314438711054456/6286058d8c729.png')
        ch.send(embed)
        
    })
  

}
}