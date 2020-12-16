// const SyncServer = require('./WebSocketSyncServer web');
const SyncServer = require('./WebSocketSyncServer app');
const server = new SyncServer(8001);

server.start();