const http=require("http")
const url=require('url')

//create new http server 
const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    //to get query parameter
    const q=url.parse(req.url,true).query
    console.log(req)
    console.log(q)
    //retrieve query string from request url
    //http://localhost:4000/?day=12&month=07&year=2024
    res.write(`Date is ${q.day}/${q.month}/${q.year} `)
    res.end()
})

//configure server to run on port no

server.listen(4000,function(){
    console.log("Server started on port no 4000")
})