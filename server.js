var http = require("http");

//create http server
http.createServer(function(req,res){   //req = request , res = response
    res.writeHead(200, {"Content-Type":"text/plain"}); // 200 = OK, Declear the type of file
    res.write("Hello Word!");  //print out "Hello World"
    res.end(); // end the app 
}).listen(8080); // create any port number to view our app

console.log("The server is running on port 8080"); 