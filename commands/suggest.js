const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, écrire la suggestion après la commande`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, vous devez faire une suggestion. Votre message ne peut pas dépasser 1000 caractères !`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "ID SALON SUGGEST");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FF0000")
    .addField("Auteur:", message.author)
    .addField("Suggestion", content)
    .setFooter("ID de l'auteur: " + message.author.id)
    .setTimestamp()
  );

  const emojis = ["✅", "❌"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}