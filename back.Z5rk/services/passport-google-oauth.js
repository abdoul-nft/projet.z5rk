const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model')

const authGoogleOauth = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));
}

module.exports = {
    setGoogleOauth: (passport) => {
        authGoogleOauth(passport);
    },
};