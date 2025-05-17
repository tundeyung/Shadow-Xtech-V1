/*                                   
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
made by Black-Tappy
contact owner +254759000340

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Shadow-Xtech-V1 
   * @author : Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ
   * @youtube : https://www.youtube.com/@Black-Tappy
   * @infoription : Shadow-Xtech-V1 ,A Multi-functional whatsapp user bot.
   * @version 10 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Black-Tappy tech info.
   * © 2025 Shadow-Xtech-V1 ✭ ⛥.
   * plugin date : 16/5/2025
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/





import axios from 'axios'; // Ensure axios is imported
import config from '../../config.cjs'; // Ensure this matches your project setup
import fs from 'fs'; // Import fs to handle file system (for saving downloaded audio file)

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  // Ping Command
  if (cmd === "speed") {
    const start = new Date().getTime();
    await m.React('⏳'); // React with a loading icon
    const end = new Date().getTime();
    const responseTime = (end - start).toFixed(2);

    // Updated text style with Sarkar-MD branding and response rate
    const responseText = `*Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ Sᴘᴇᴇᴅ: ${responseTime} ms*`;

    await m.React('✅'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: responseText,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363369453603973@newsletter',
            newsletterName: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ",
            body: "ᴘɪɴɢ sᴘᴇᴇᴅ ᴄᴀʟᴄᴜʟᴀᴛɪᴏɴs",
            thumbnailUrl: 'https://files.catbox.moe/3hrxbh.jpg', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  }

  // Joke Command
  if (cmd === "joke") {
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      const joke = response.data;

      // Construct the joke message
      const jokeText = `${joke.setup}\n\n*${joke.punchline}*`;

      // Send the joke to the user
      await m.React('😂'); // React with a laughing emoji

      sock.sendMessage(
        m.from,
        {
          text: jokeText,
          contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363369453603973@newsletter',
              newsletterName: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
              serverMessageId: -1,
            },
            forwardingScore: 999, // Score to indicate it has been forwarded
            externalAdReply: {
              title: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
              body: "ʜᴇʀᴇ'ʀᴇ ᴀ ᴊᴏᴋᴇ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ʟᴀᴜɢʜ",
              thumbnailUrl: 'https://files.catbox.moe/3hrxbh.jpg', // Add thumbnail URL if required
              sourceUrl: 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10', // Add source URL if necessary
              mediaType: 1,
              renderLargerThumbnail: false,
            },
          },
        },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error fetching joke:", error);

      // Send an error message if something goes wrong with the joke request
      sock.sendMessage(
        m.from,
        { text: "💬 Oops! Something went wrong while fetching the joke. Please try again later." },
        { quoted: m }
      );
    }
  }

  // Ringtone Command (Voice Note)
  if (cmd === "ringtone") {
    if (!text) {
      return sock.sendMessage(m.from, { text: "💬 Please provide text for the ringtone. Example: !ringtone Hello" }, { quoted: m });
    }

    try {
      // Fetch the ringtone audio file URL
      const response = await axios.get(`https://www.dark-yasiya-api.site/download/ringtone?text=${encodeURIComponent(text)}`, {
        responseType: 'arraybuffer', // Request the response as raw data (binary)
      });

      // Save the ringtone file to the local disk
      const audioFilePath = `./ringtone.mp3`; // Define the file path where the audio will be saved
      fs.writeFileSync(audioFilePath, response.data); // Write the binary data to the file

      // Send the audio file as a voice note (audio file)
      await m.React('🔊'); // React with a speaker emoji

      sock.sendMessage(
        m.from,
        {
          audio: fs.readFileSync(audioFilePath), // Read the saved audio file
          mimetype: 'audio/mp3', // Set the correct mimetype for voice notes
          ptt: true, // Set to true to indicate this is a voice note
        },
        { quoted: m }
      );

      // Clean up the file after sending (optional)
      fs.unlinkSync(audioFilePath); // Delete the audio file from the disk after sending
    } catch (error) {
      console.error("Error fetching ringtone:", error);

      // Send an error message if something goes wrong with the ringtone request
      sock.sendMessage(
        m.from,
        { text: "💬 Oops! Something went wrong while generating the ringtone. Please try again later." },
        { quoted: m }
      );
    }
  }
};
// Black-Tappy
export default ping;
