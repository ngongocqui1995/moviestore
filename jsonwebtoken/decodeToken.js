var jwt = require('jsonwebtoken');
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var passport = require("passport");

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = '21aa6f321956308351b6a327a24e1c6ec797f7892bdef733230f06c8a7ab40e9';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    next(null, jwt_payload)
});

passport.use(strategy);

export {
    jwt, jwtOptions
}