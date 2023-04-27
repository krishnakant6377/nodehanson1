const http = require("http");

const app = http.createServer((request,response)=>{
    response.write("<h1>Welcome TO Prepbytes</h1>")
if(request.url=="/login"){
    response.write("this is login page")
}
else if(request.url=="/signup"){
    response.write("this is login page")
}
response.end()
})
const PORT=7000
app.listen(PORT,()=>{
    console.log("port is working fine at port number ",PORT)
})
