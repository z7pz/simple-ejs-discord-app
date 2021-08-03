const express = require('express');
var path = require('path');
var logger = require('morgan');
const IndexRoute = require('./routes')
const ApiRoute = require('./routes/api')
const DiscordClient = require('../CLIENT/discord')
module.exports = class API {
    /**
     * 
     * @param {String} port 
     * @param {DiscordClient} client 
     */
    constructor(port = 3000, client) {
        this.client = client;
        this.port = port;
        
        this.app = express();
       
       
        this.app.set('views', path.join(__dirname,'..', 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));

        new IndexRoute(this.app, this.client);
        new ApiRoute(this.app, this.client)

        this.app.get('*', (req, res) => {
          res.render('error.ejs')
        })
          
          // error handler
          this.app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
          
            // render the error page
            res.status(err.status || 500);
            res.render('error');
          });

          this.app.listen(this.port || process.env.PORT, () => {
              console.log(`API is: ONLINE`)
          }) 
    }
}