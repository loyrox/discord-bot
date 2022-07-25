const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
    let activities = [
        `Owner: Loyrox`,
        `Developper`,
        `believe in your dreams`
     ],
     i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "STREAMING",
          url: "https://twitch.tv/sl_loyrox"
        }), 100 * 60); 
    client.user
        .setStatus("streaming")
        .catch(console.error);
  console.log("Je suis en ligne!")
});

client.on("message", async message => {          
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)) return;


    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try {
        let commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        return commandFile.run(client, message, args);
    } catch (err) {
        console.log(err);
    }
})

client.login(process.env.TOKEN);