const app = require('app')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port $(port)`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirnam + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('message', { manny: 'Hey how are you?'});
    socket.on('another event', (data) => {
        console.log(data);
    })
})