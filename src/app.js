require('dotenv').config()
const API = require('./API');
const DiscordClient = require('./CLIENT/discord');
const client = new DiscordClient();
client.login(process.env.token);
client.on('ready', () => {
  console.log(`${client.user.tag}`)
  new API(4000, client)
})