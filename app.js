const http = require('http');

// function rqListener(req, res) {

// }

const server = http.createServer((req,res) => {
    console.log(req.url,req.method,req.headers);
    // process.exit();
    const url = req.url;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button</form</body>')
        res.write('</html>');
        res.end();
    }
    else if(url === '/home')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>');
        res.end();
    }
    else if(url === '/about')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to about Us page</h1></body>')
        res.write('</html>');
        res.end();
    }
    else if(url === '/node')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node.js project</h1></body>')
        res.write('</html>');
        res.end();
    }
})

server.listen(4000);