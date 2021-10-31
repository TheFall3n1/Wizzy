const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']

client.on('ready', () => {
  console.log(`Your kid is here mumma ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'heo') {
    await interaction.reply('Where Heo!?');
  }
  if (interaction.commandName === 'problem') {
    await interaction.reply('You is the because!');
  }
});

client.login(token);