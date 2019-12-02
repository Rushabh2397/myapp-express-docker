var express=require("express");
var router =express();
var mysql=require("mysql");
//var config=require("config");

var connection=mysql.createConnection({
    host:'172.18.5.97',
    database:'PuneDB',
    user:'root',
    password:'root',
    port:9099
});
connection.connect();
router.use(express.json());

router.get("/",(request,response)=>{
    var queryText="select * from Emp";
    connection.query(queryText,(err,result)=>{
        
     if(err==null)
     {
         response.send(JSON.stringify(result));
     } 
     else{
         response.send(JSON.stringify(err));
     }
    });
});
router.get("/:No",(request,response)=>{
    var queryText=`select * from Emp where No=${request.params.No}`;
    connection.query(queryText,(err,result)=>{
     if(err==null)
     {
         response.send(JSON.stringify(result));
     } 
     else{
         response.send(JSON.stringify(err));
     }
    });
});
router.post("/",(request,response)=>{
    var No=request.body.No;
    var Name=request.body.Name;
    var Age=request.body.Age;

    var queryText=`insert into Emp values(${No},'${Name}',${Age})`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err));
        }
    });
});
router.put("/:No",(request,response)=>{
    var No=request.params.No;
    var Name=request.body.Name;
    var Age=request.body.Age;

    var queryText=`update Emp set Name='${Name}',Age=${Age} where No=${No}`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err));
        }
    });
});

router.delete("/:No",(request,response)=>{
    var No = request.params.No;
    var queryText = `delete from Emp where No = ${No}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    }); 
})
module.exports=router;
