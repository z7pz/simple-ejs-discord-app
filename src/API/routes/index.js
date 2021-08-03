const { Application, Router } = require('express');
const DiscordClient = require('../../CLIENT/discord');
module.exports = class IndexRoute {
  /**
   * 
   * @param {Application} app 
   * @param {DiscordClient} client 
   */
  constructor(app, client) {
    this.client = client;
    this.app = app;
    this.router = Router()
    this.app.use('/', this.router);
    /* GET home page. */
    this.router.get('/', function (req, res, next) {
      res.render('index', { title: 'Express', client });
    });

  }
}
