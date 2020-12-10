const SyncServer = require('./WebSocketSyncServer');
const server = new SyncServer(8080);

server.start();