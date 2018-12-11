const Discord = require('discord.js')
const bot = new Discord.Client();
const cfg = require('./index.json');
const prefix = ("/");

bot.on('ready', function(){
	console.log('je suis pret a être utilisé')
})

bot.login(cfg.token)