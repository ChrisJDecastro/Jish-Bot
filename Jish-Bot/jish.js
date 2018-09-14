const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () =>{
    console.log("I am ready!");
})

var jishString = "";

for(let i = 0;i < 100;i++){
    jishString = jishString + "Jish ";
}

var insults = ["You're dumb Joshua","You suck at Fortnite Joshua", "You're a poopy pants Joshua","Joshua.... you're a pumpkin head", jishString ];
//console.log(jishString);

client.on("message" , (message) => {
    if(message.content.startsWith("ping")){
        message.channel.send("ponggggg!");
    }
    else if(message.author.id == '284586326873866241'){
        message.channel.send('Hello ' + message.author.username + ' aka Greatest Fortnite player of all time');
    }
    else if(message.author.id == '356315861881192448'){
        var randomInsult = insults[Math.floor(Math.random()*insults.length)];
        console.log(randomInsult);
        if(randomInsult == jishString){
            var randomInsult2 = insults[Math.floor(Math.random()*insults.length-1)];
            message.channel.send(randomInsult);
            setTimeout(function(){
                message.channel.send(randomInsult2);
            },2000);
            
        }
        else{
            message.channel.send(randomInsult);
        }

    }
    else if(message.author.id == '459532170046865448'){
        message.channel.send("Hannah you suck at Fortnite");
    }

});

client.login("");

//josh356315861881192448
//me 284586326873866241