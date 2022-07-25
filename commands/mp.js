const Discord = require('discord.js');


module.exports.run = async(bot,message,args) => {
    message.delete()

  let author = message.author.id;
  let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!user)
    return message.channel.send(
      `<a:x:998319688377442426> Vous n'avez pas mentionné un utilisateur, ou vous avez donné un identifiant invalide !`
    );
  if (!args.slice(1).join(" "))
    return message.channel.send("<a:x:998319688377442426> __**Vous n'avez pas spécifié votre message**__");
    const emebd1 = new Discord.MessageEmbed()
    .setDescription(args.slice(1).join(" "))
    .setFooter(`By ${message.author.tag}`)
    .setColor(1127812)
  user.user
    .send(emebd1)
    .catch(() => message.channel.send("<a:x:998319688377442426> __cet utilisateur n'a pas pu être DM !__"))
        
};
