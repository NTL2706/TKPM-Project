const express = require("express");
const path= require("path");
const app = express();
const hbs_engine =require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const mainRoutes = require("./routes/index.js")
const mongoose = require("mongoose");
const initializePassport = require("./config/passport-config");
const port = 3000;
const hbs = hbs_engine.create({
    extname:"hbs",
    defaultLayout:'main',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    helpers:{
        "list":function(context, options) {
            //return "<h2>"+ context.Name +"</h1>"
            let a ="";
            for( let i = 0, j = context.length; i < j;i++){
                a = a + options.fn(context[i]);
            }
            
            return a;
        },
        "ifCond": function (v1, operator, v2, options) {

            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!=':
                    return (v1 != v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    }
});
mongoose.connect("mongodb://127.0.0.1:27017/PickPitch").then((data)=>{
    console.log("connected to database");
});

initializePassport(passport);

app.use(express.json())
app.use(express.urlencoded({extended:"true"}));

app.engine("hbs", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));


app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:false,
}))

app.use(passport.initialize());
app.use(passport.session());
mainRoutes(app);


app.listen(port,()=>{
    console.log(`listened to ${port}`);
})