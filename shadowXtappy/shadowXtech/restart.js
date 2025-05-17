import config from '../../config.cjs';
import process from 'process';

const reset = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  const validCommands = ['reset', 'restart', 'res'];

  if (validCommands.includes(cmd)) {
    await m.React('♻️'); // Optional: show restart reaction

    await sock.sendMessage(
      m.from,
      {
        text: '*♻️ Restarting bot... Please wait.*',
        contextInfo: {
          externalAdReply: {
            title: 'ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ',
            body: 'ʙᴏᴛ ʀᴇsᴛᴀʀᴛ ᴄᴏᴍᴍᴀɴᴅ ᴇxᴇᴄᴜᴛᴇᴅ',
            thumbnailUrl: 'https://files.catbox.moe/3hrxbh.jpg',
            sourceUrl: 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10',
            mediaType: 1,
          },
        },
      },
      { quoted: m }
    );

    // Restart after delay
    setTimeout(() => {
      process.exit(1); // Exit for auto-restart
    }, 2000);
  }
};

export default reset;
