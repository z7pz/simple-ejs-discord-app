const { Application, Router } = require('express');
const DiscordClient = require('../../CLIENT/discord');
module.exports = class ApiRoute {
  /**
   * 
   * @param {Application} app 
   * @param {DiscordClient} client 
   */
  constructor(app, client) {
    this.client = client;
    this.app = app;
    this.router = Router()
    this.app.use('/api', this.router);
    /* GET home page. */
    this.router.get('/users', function (req, res) {
        res.send(client.users.cache.array())
    });
    this.router.get('/channels', function (req, res) {
        res.send(client.channels.cache.array())
    });
    this.router.get('/guilds', function (req, res) {
        res.send(client.guilds.cache.array())
    });
    this.router.get('/emojis', function (req, res) {
        res.send(client.emojis.cache.array())
    });
  }
}
