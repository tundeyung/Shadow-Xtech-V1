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








import axios from 'axios';
import config from '../../config.cjs';  // Your bot configuration

// Helper function to fetch and send an image
const sendImage = async (m, sock, imageUrl, caption) => {
  try {
    await sock.sendMessage(m.from, {
      image: { url: imageUrl },
      caption: caption,
    });
    await m.React('✅');  // React with a success icon
  } catch (error) {
    console.error(error);
    await sock.sendMessage(m.from, {
      text: 'Sorry, something went wrong while fetching the image!',
    });
  }
};

// Command parsing function
const parseCommand = (message) => {
  const prefix = config.PREFIX;
  if (message.body.startsWith(prefix)) {
    return message.body.slice(prefix.length).split(' ')[0].toLowerCase();
  }
  return '';
};

// Check if the command is NSFW related
const isNsfwCommand = (cmd) => ['hwaifu', 'trap', 'hneko'].includes(cmd);

const getNsfwImage = async (m, sock) => {
  const cmd = parseCommand(m);

  // If the command is not valid, do nothing
  if (!isNsfwCommand(cmd)) return;

  const botNumber = config.SUDO_NUMBER;  // The bot's phone number (without the + sign, e.g. "1234567890")
  const ownerNumber = config.OWNER_NUMBER;  // The bot owner's phone number (without the + sign, e.g. "0987654321")

  // If the message is from a group and the sender is neither the bot nor the owner, send a warning
  if (m.isGroup && m.from !== botNumber && m.from !== ownerNumber) {
    await sock.sendMessage(m.from, {
      text: 'This group is not a group of perverts, calm down my friend.',
    });
    return; // Stop further execution for non-bot/owner senders in group chats
  }

  // React with a loading icon for private chats or if the bot/owner sends in a group
  await m.React('💬');  

  let endpoint = '';
  let caption = '';

  // Determine the correct endpoint and caption based on the command
  if (cmd === 'hwaifu') {
    endpoint = 'nsfw/waifu';
    caption = 'Here is your random NSFW Waifu image!';
  } else if (cmd === 'trap') {
    endpoint = 'nsfw/trap';
    caption = 'Here is your random NSFW Trap image!';
  } else if (cmd === 'hneko') {
    endpoint = 'nsfw/neko';
    caption = 'Here is your random NSFW Neko image!';
  }

  try {
    // Fetch random NSFW image from the appropriate waifu.pics API endpoint
    const response = await axios.get(`https://api.waifu.pics/${endpoint}`);
    const imageUrl = response.data.url;  // Extract the image URL

    // Send the image
    await sendImage(m, sock, imageUrl, caption);

  } catch (error) {
    console.error(error);
    await sock.sendMessage(m.from, {
      text: 'Sorry, something went wrong while fetching the image!',
    });
  }
};

export default getNsfwImage;
