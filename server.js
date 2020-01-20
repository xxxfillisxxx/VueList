const list=[
    { Id: 11, Status: 'NEW' },
    { Id: 22, Status: 'IN_PROGRESS' },
    { Id: 333, Status: 'RESOLVED' },
    { Id: 212, Status: 'IN_PROGRESS' },
    { Id: 232, Status: 'RESOLVED' }
];
const http = require('http');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
    res.end(JSON.stringify(list));
})
  .listen(3000, ()=>{})