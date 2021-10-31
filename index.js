const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

 
const token = process.env['token']
const GUILD_ID = process.env['guild']
const CLIENT_ID = process.env['client']


const commands = [
{
  name: 'heo',
  description: 'Replies with Where Heo!?'
},{
  name: 'problem',
  description: 'Replies with You is the because!'
}
]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();