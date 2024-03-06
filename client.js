import dgram from 'node:dgram';

const serverAddress = '127.0.0.1';
const serverPort = 10000;
const message = 'testbytes';

const client = dgram.createSocket('udp4');
client.on('message', (msg, rinfo) => {
    console.log('ontvangstbevestiging van de server!');
});
client.bind(); // geen poort = random
console.log(`client zal dadelijk bericht "${message}" versturen`);
client.send(Buffer.from(message), serverPort, serverAddress);

export {}
