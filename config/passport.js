const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');



module.exports = function (passport) {
    // local stratergy
    passport.use(new LocalStrategy(function (UserName, Passowrd, done) {
        // match username
        var query = { UserName: UserName };
        User.findOne(query, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'no user found' });
            }

            // match password
            bcrypt.compare(Passowrd, user.Passowrd, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                }
                else {
                    return done(null, false, { message: 'wrong password' });  
                }
            });

        });
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
