const Discord = require('discord.js');
const bot = new Discord.Client();
var refuse = 0;

bot.login('NDI0Njk5MzA0NjcwNjU4NTYw.DY8ryQ.1U_xhjvjDPBd40NCMcURaXb26dQ');

// Application des paramètre et commande lorsque le bot est lancé
bot.on("ready", function () {
    //Affiché où est ce que le bot est connecté avec son tag
    console.log(`je suis connecté en tant que ${bot.user.tag}!`);
    //Définition de son activité
    bot.user.setActivity("En cour de Dev").catch(console.error());
  })
 
// Fonction de réponse de base du bot, pour tester s'il fonctionne
bot.on('message', function(message) {
    if (message.content === 'ping') {
        message.channel.send('Pong!');
    }
})

// fonction pour dire bonjour au bot et avoir une réponse en fonction de l'utilisateur
bot.on('message', function(message) {    
    if(message.isMemberMentioned(bot.user))
    {
        if(message.content.toLocaleLowerCase.includes("ohayo"))
        {
            message.channel.send("<@"+message.author.id+"> Ohayo !");
        }
    }       
})

// Fonction d'arrêt du bot
bot.on("message", function(message) {
    if(message.content === "Iliza disconect")
    {
        if(message.author.id === "226367048266022913")
        {
            message.channel.send('Oyasuminasai <@226367048266022913> :3');
            bot.destroy().catch(console.error());
        }
        else if(message.author.id === "249947643453636610" && refuse === 0)
        {
            message.channel.send("C'est bien parce que c'est toi <@249947643453636610>, Oyasuminasai  :)");
            bot.destroy().catch(console.error());
        }
        else
        {
            message.channel.send("Quelle est notre relation <@" + message.author.id +  "> pour que tu oses me demander ça ? je vais rester là :stuck_out_tongue_closed_eyes: ")
        }
    }

})

// Modification de la variable refus pour activer/désactiver le mode refus
bot.on("message", function(message){
    if(message.author.id === "226367048266022913")
    {
        if(message.content.includes("refus") && message.content.includes("active")  && refuse === 0)
        {
            refuse = 1;
            message.channel.send("La commande a été correctement exécutée, le mode refus a été activé");
        }
        if(message.content.includes("refus") && message.content.includes("désactive")  && refuse === 1)
        {
            refuse = 0;
            message.channel.send("La commande a été correctement exécutée, le mode refus a été désactivé");
        }
    }
})