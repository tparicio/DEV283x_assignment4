const Account = require('../models/account')

module.exports = {
    // GET method for get all accounts
    get : function(req, res) {        
        console.log('account_controller.get')
        Account
        .find({}, (err, accounts) => {
            if (err) res.sendStatus(400)

            res.status(200).send(accounts)
        })
    },

    // POST method to create account
    add : function(req, res) {
        console.log('POST accounts', req.body)

        // whitelist account info
        let account = new Account({
            name : req.body.name,
            balance : req.body.balance
        })

        // add new account document
        account.save((err, results) => {
            if (err) res.sendStatus(400)

            console.log('Saved: ', results)
            res.status(201).send({id: account.id})
            
        })
    },

    // PUT method for update an account
    update : function(req, res) {
        console.log('PUT account', req.query.id)

        Account
        .findById(req.params.id, (err, account) => {
            if (err) res.sendStatus(400)
    
            account.balance = req.body.balance
            account.save((err, result) => {
                if (err) res.sendStatus(400)
    
                console.log('Account saved')
                res.status(200).send(result)
            })
        })
    },
    
    // DELETE method for delete an account
    remove : function(req, res) {
        console.log('DELETE account', req.params.id)

        Account.findById(req.params.id, (err, account) => {
            if (err) res.sendStatus(400)

            account.remove()
            res.status(204).send()
        })
    }    
}