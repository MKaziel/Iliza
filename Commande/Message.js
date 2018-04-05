var deconnection = 0
var refuse = 0

module.exports = class Message {

    static match(message) {
        return message.content
    }

    static action(message){
        if (message.content.toLocaleLowerCase('PING') === "ping") {
            message.channel.send('Pong!')
        }
        
        if(message.isMentioned("424699304670658560"))
        {
            var contenu = message.content.toLowerCase("OHAYO")
            if(contenu.includes("ohayo"))
            {
                message.channel.send("<@"+message.author.id+"> Ohayo !")
            }
        }
        
        //Mode refus
        if(message.author.id === "226367048266022913")
        {   
            if(this.refuse === 1){this.refuse = 1}else{this.refuse = 0}
            if(message.content.includes("refus") && message.content.includes("active") && this.refuse === 0)
            {
                message.channel.send("La commande a été correctement exécutée, le mode refus a été activé")
                this.refuse = 1
            }
            else if(message.content.includes("refus") && message.content.includes("désactive") && this.refuse === 1)
            {
                message.channel.send("La commande a été correctement exécutée, le mode refus a été désactivé")
                this.refuse = 0
            }
        }
        
        // Fonction d'arrêt du bot
        if(message.content === "Iliza disconnect")
        {
            if(message.author.id === "226367048266022913")
            {
                message.channel.send('Oyasuminasai <@226367048266022913> :3')
                this.deconnection = 1
            }
            else if(message.author.id === "249947643453636610" && this.refuse === 0)
            {
                message.channel.send("C'est bien parce que c'est toi <@249947643453636610>, Oyasuminasai  :)")
                this.deconnection = 1
            }
            else
            {
                message.channel.send("Quelle est notre relation <@" + message.author.id +  "> pour que tu oses me demander ça ? je vais rester là :stuck_out_tongue_closed_eyes: ")
            }
        }
    }
}