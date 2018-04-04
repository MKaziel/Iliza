const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDI0Njk5MzA0NjcwNjU4NTYw.DY8ryQ.1U_xhjvjDPBd40NCMcURaXb26dQ');

bot.on("ready", function () {
    console.log(`je suis connecté en tant que ${bot.user.tag}!`);
    bot.user.setActivity("En cour de Dev");
  })
  
bot.on('message', function(message) {
    if (message.content === 'ping') {
        message.channel.send('Pong!');
    }
})

bot.on('message', function(message) {    
    if(message.isMemberMentioned(bot.user))
    {
        if(message.content.includes("Ohayo"))
        {
            message.reply(" Ohayo !");
        }
    }       
})

bot.on("message", function(message) {
    if(message.content === "Iliza disconect")
    {
        if(message.author.id === "226367048266022913")
        {
            message.channel.send('Oyasuminasai <@226367048266022913> :3');
            bot.destroy();
        }
        else
        {
            message.channel.send("Quelle est notre relation <@" + message.author.id +  "> pour que tu oses me demander ça ? je vais rester là :stuck_out_tongue_closed_eyes: ")
        }
    }

})