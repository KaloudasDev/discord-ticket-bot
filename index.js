const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
require('dotenv').config();
process.removeAllListeners('warning'); // Do Not Remove This Line


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// Define readyEvent function
const readyEvent = (client) => {
    console.log(`Logged in as ${client.user.tag}`);
};
const loadTickets = require('./modules/ticket.js');
loadTickets(client);

client.once("ready", () => readyEvent(client));

client.login(token);
