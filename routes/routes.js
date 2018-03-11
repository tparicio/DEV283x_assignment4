const bodyParser = require('body-parser')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const accounts_controller = require('../controllers/accounts')

module.exports = (app) => {
    /*
     * middlewares
     * 
     * body-parser Parse incoming request bodies in a middleware before your 
     *             handlers, available under the req.body property.
     * morgan HTTP request logger middleware for node.js
     */ 
    app.use(bodyParser.json())
    app.use(morgan('dev'))

    // APP routes
    app.get('/accounts', accounts_controller.get)
    app.post('/accounts', accounts_controller.add)
    app.put('/accounts/:id', accounts_controller.update)
    app.delete('/accounts/:id', accounts_controller.remove)


    app.all('*', function(req, res, next){
        console.log('404');
        res.sendStatus(404)
    });

    /*
     * middlewares
     * 
     * errorhandler display as much about this object as possible, and will do 
     *              so by using content negotiation for the response between 
     *              HTML, JSON, and plain text.
     */ 
    app.use(errorhandler())
}