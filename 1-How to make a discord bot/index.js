const { Collection, Discord, Client, MessageEmbed } = require('discord.js');
require('dotenv').config()
const client = new Client();

client.config = {
	prefix: process.env.PREFIX
};

client.config = {
	prefix: process.env.PREFIX,
	SOUNDCLOUD: process.env.SOUNDCLOUD_CLIENT_ID
};



let defaultPrefix = '*';
client.once('ready', () => { 
    console.log("THE BOT IS RUNNING")

})

client.on('message', async message => { 
if (message.content === '*ping') message.reply(`Pong!`)

})
client.login(process.env.TOKEN);
