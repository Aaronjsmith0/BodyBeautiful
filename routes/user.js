const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const Contact = require('../db/models/contactUs')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, userplan } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                userplan: userplan
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    }),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.post(
    '/userplan', (req, res) => {
        console.log('Plan selected', req.user);
        User.findOneAndUpdate({ username: req.body.username }, { userplan: req.body.userplan}, (err, user) => {
            res.send(user);
        })
    }
)

router.get('/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.post('/contact', (req, res) => {
    console.log('Contact Message Sent');

    const { email, message } = req.body
    const newContact = new Contact({
        email: email,
        message: message,
    })
    newContact.save((err, savedContact) => {
        if (err) return res.json(err)
        res.json(savedContact)
    })
})

module.exports = router