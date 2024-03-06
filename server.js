import dgram from 'node:dgram';

const server = dgram.createSocket('udp4');
const serverPort = 10000;

server.on('message', (msg, rinfo) => {
  console.log(`server ontving: ${msg} van ${rinfo.address}:${rinfo.port}`);
  console.log(`server stuurt antwoord terug`);
  server.send(Buffer.from('goed ontvangen!'), rinfo.port, rinfo.address);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server luistert naar ${address.address}:${address.port}`);
});

server.bind(serverPort);

export {}
