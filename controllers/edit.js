const dbMethods = require('../lib/dbMethods');
var admin = false;
function edit(req,res,collection){
	const dbc = new dbMethods(req,collection);
        dbc.fetchByUrl().then(function(fetched_data){
                if(dbc.exists()){
                    data = dbc.edit_mode(error=0,setEditMode=fetched_data);
                    if(dbc.url_query=='howtouse' && !admin){
                        data['text_body'] = "Dude you can't edit this.";
                        data['edit_code'] = "hehehehe";
                    }
                    console.log(data);
                    res.render('home',data);
                }else{
                    res.send("nothing found here!!!!");
                }
        });
}

module.exports = edit;
