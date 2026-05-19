const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Galaxy DevOps</title>

<style>

body{
background:#050816;
color:white;
font-family:Arial;
text-align:center;
padding-top:100px;
}

h1{
font-size:60px;
color:#00ffe5;
}

.card{
width:350px;
margin:auto;
padding:30px;
border-radius:20px;
background:rgba(255,255,255,0.05);
}

button{
padding:15px 30px;
font-size:18px;
border:none;
background:#00ffe5;
border-radius:10px;
cursor:pointer;
}

</style>
</head>

<body>

<h1>🚀 Galaxy DevOps Pipeline</h1>

<div class="card">
<h2>Docker CI/CD Active</h2>
<p>Running Successfully</p>

<button onclick="alert('Deployment Successful')">
Launch
</button>

</div>

</body>
</html>
`;

const server = http.createServer((req,res)=>{
res.writeHead(200, {'Content-Type':'text/html'});
res.end(html);
});

server.listen(5000,'0.0.0.0',()=>{
console.log('Server Running');
});
