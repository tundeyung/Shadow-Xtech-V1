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












// those codes where created by Black-Tappy tech
// main repo: https://github.com/Black-Tappy


import fs from 'fs';
import path from 'path';
import config from '../../config.cjs'; // Ensure this matches your project setup

const ownerNumbers = ['254759000340@s.whatsapp.net', '254756360306@s.whatsapp.net'];

const allCmdsCommand = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
  
  if (cmd === "allcmds") {
    const folderPath = path.resolve(process.cwd(), '../shadow Xtappy/shadowXtech');
// 
    // Ensure the folder exists
  // Check if the sender is an owner
  if (!ownerNumbers.includes(m.sender)) {
    await sock.sendMessage(
      m.from,
      {
        text: 'You are not authorized to use this command.',
      },
      { quoted: m }
    );
    return;
  }
    if (!fs.existsSync(folderPath)) {
      await m.React('❌'); // React with error icon
      return sock.sendMessage(
        m.from,
        {
          text: `❌ Folder ${folderPath} not found. Make sure it exists.`,
        },
        { quoted: m }
      );
    }

    try {
      // Read all files in the folder
      const files = fs.readdirSync(folderPath);

      // Filter out non-JS files
      const jsFiles = files.filter(file => file.endsWith('.js'));

      if (jsFiles.length === 0) {
        await m.React('❌'); // React with error icon
        return sock.sendMessage(
          m.from,
          {
            text: '❌ No command files found in the folder.',
          },
          { quoted: m }
        );
      }

      // List all .js files
      const fileList = jsFiles.join('\n');

      await m.React('✅'); // React with success icon
      sock.sendMessage(
        m.from,
        {
          text: `*ʜᴇʀᴇ ᴀʀᴇ ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ᴘʟᴜɢɪɴ ғᴏʟᴅᴇʀs*\n\n${fileList}`,
        },
        { quoted: m }
      );
    } catch (err) {
      console.error('Error reading the folder:', err.message);
      await m.React('❌'); // React with error icon
      sock.sendMessage(
        m.from,
        {
          text: `❌ Failed to list the files: ${err.message}`,
        },
        { quoted: m }
      );
    }
  }
};

export default allCmdsCommand;

// after using mah codes go suck your mouth 👄 