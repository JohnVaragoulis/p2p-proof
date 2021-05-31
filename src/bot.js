import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} Is Now Online!`));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hi!');
})
bot.login('ODQwNjkwMTQyOTU1MTc1OTU2.YJb3tQ._O-OniL_QGvvRHbawwz5WdAyki0');