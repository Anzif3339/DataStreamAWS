const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`

    <html>

    <head>

        <title>Galaxy DevOps</title>

        <style>

            body{
                background:#020617;
                color:white;
                text-align:center;
                font-family:Arial;
                padding-top:100px;
            }

            h1{
                color:#38bdf8;
                font-size:60px;
            }

            p{
                font-size:25px;
            }

        </style>

    </head>

    <body>

        <h1>🚀 Galaxy DevOps Pipeline</h1>

        <p>GitHub + Jenkins + Docker + EC2</p>

    </body>

    </html>

    `);

});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});
