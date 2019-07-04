var http = require('http');
const app = require('./app/app');
const debug = require("debug")("node-angular")

const normalisePort = val => {
    var port = parseInt(val,10);
    if(isNaN(port)){
        //named pipe
        return val;
    }
    if(port>=0){
        return port;
    }
    return false;
};

const onError = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof addr === 'string' ? "pipe" + addr : "port" + port;
    switch (error.code) {
        case"EACESS":
            console.log(bind + "reqires elevated privileges");
            process.exit(1);
            break;

        case "EADDRINUSE":
            console.error(bind + "already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? "pipe" + addr : "port" + port;
    console.log("bind... ",bind);
    debug("Listening on" + bind);

};

const port = normalisePort(process.env.PORT || '3000');
app.set(port);

const server = http.createServer(app);
server.on("error",onError);
server.on("listening",onListening);

server.listen(port);

// mymango atlas password : GpjGgsB8bLmp15GK