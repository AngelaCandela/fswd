const http = require("http");

http.createServer((request, response) => {
    
    response.write("Hello world");
    response.end();
}).listen(4000, () => {
    console.log(`Server is running on http://${host}:${port}`);
});