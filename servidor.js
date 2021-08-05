const express = require('express');
const app = express();
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');
app.get('/', (req, res)=>{
    res.render('home');
 });
app.listen(3000,()=>{
 });

 require('./hbs/helper');
 hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
 hbs.registerPartial('partial_name', 'partial value');
