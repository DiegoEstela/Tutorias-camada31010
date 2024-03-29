const express = require('express')
const exphbs = require('express-handlebars');
const session = require('express-session')

const passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_CLIENT_ID = 'diee';
const FACEBOOK_CLIENT_SECRET = 'ezee';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'emails'],
    scope: ['email']
}, function (accessToken, refreshToken, profile, done) {

    let userProfile = profile;
    return done(null, userProfile);
}));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});


const app = express()
app.use(session({
    secret: 'dieee',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))


app.use(passport.initialize());
app.use(passport.session());

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    }
    else {
        res.redirect('/login')
    }
})


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook',
    {
        successRedirect: '/',
        failureRedirect: '/faillogin'
    }
));

app.get('/faillogin', (req, res) => {
    res.render('login-error', {});
})


app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        if (!req.user.contador) req.user.contador = 0
        req.user.contador++
        res.render('datos', {
            nombre: req.user.displayName,
            foto: req.user.photos[0].value,
            email: req.user.emails[0].value,
            contador: req.user.contador
        });
    }
    else {
        res.redirect('/login')
    }
})


app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
