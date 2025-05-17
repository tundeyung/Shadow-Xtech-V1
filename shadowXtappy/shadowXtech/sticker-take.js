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




import fs from 'fs/promises';
import config from '../../config.cjs';

const stickerCommand = async (m, gss) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const [cmd, ...args] = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ') : [];
  const command = cmd.toLowerCase();

  const defaultPackname = "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ";
  const defaultAuthor = "ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ";

  if (['sticker', 's', 'take'].includes(command)) {
    const quoted = m.quoted || {};

    if (!quoted) return m.reply(`Reply to a media message to use the ${prefix + command} command.`);

    try {
      // STICKER CONVERSION (image or video to sticker)
      if (['sticker', 's'].includes(command)) {
        if (quoted.mtype !== 'imageMessage' && quoted.mtype !== 'videoMessage') {
          return m.reply(`Send/Reply with an image or video to convert into a sticker ${prefix + command}`);
        }

        const media = await quoted.download();
        if (!media) throw new Error('Failed to download media.');

        const filePath = `./${Date.now()}.${quoted.mtype === 'imageMessage' ? 'png' : 'mp4'}`;
        await fs.writeFile(filePath, media);

        if (quoted.mtype === 'imageMessage') {
          const stickerBuffer = await fs.readFile(filePath);
          await gss.sendImageAsSticker(m.from, stickerBuffer, m, {
            packname: defaultPackname,
            author: defaultAuthor
          });
        } else {
          await gss.sendVideoAsSticker(m.from, filePath, m, {
            packname: defaultPackname,
            author: defaultAuthor
          });
        }

        await fs.unlink(filePath); // Clean up
      }

      // TAKE COMMAND (change packname)
      if (command === 'take') {
        if (quoted.mtype !== 'stickerMessage') {
          return m.reply(`Please reply to a sticker to change its pack name.\nUsage: ${prefix}take joeljamestech`);
        }

        const newPackname = args.join(' ') || defaultPackname;
        const stickerMedia = await quoted.download();
        if (!stickerMedia) throw new Error('Failed to download sticker.');

        await gss.sendImageAsSticker(m.from, stickerMedia, m, {
          packname: newPackname,
          author: defaultAuthor
        });
      }

    } catch (error) {
      console.error("Error in sticker/take command:", error);
      await m.reply('Something went wrong while processing your request.');
    }
  }
};

export default stickerCommand;
