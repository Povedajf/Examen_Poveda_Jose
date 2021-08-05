const hbs = require('hbs');
var fs=require('fs');
var dir=JSON.parse(fs.readFileSync('./data/datas.json'));

hbs.registerHelper('getBicicletas',function(){
    var bici="";
    dir.forEach(bicijs=>{
        bici+='<div class="cont"></div>';
        bici+='<img src="'+bicijs.link+'" alt="" >';
        bici+='<h1>'+bicijs.nombici+'</h1>';
        bici+='<h2>'+bicijs.costo+'</h2>';
        bici+='</div>';

        
    });
    return new hbs.SafeString(bici);
});