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




import config from '../../config.cjs';

const tagCommands = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefix = config.PREFIX;
    const body = m.body.trim();
    const cmd = body.startsWith(prefix) ? body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['tagall', 'tagadmin', 'tagnotadmin', 'hidetag'];
    if (!validCommands.includes(cmd)) return;
    if (!m.isGroup) return m.reply('╰┈➤ *This command only works in groups.*');

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;

    let filteredParticipants;

    switch (cmd) {
      case 'tagadmin':
        filteredParticipants = participants.filter(p => p.admin);
        break;
      case 'tagnotadmin':
        filteredParticipants = participants.filter(p => !p.admin);
        break;
      case 'tagall':
      case 'hidetag':
        filteredParticipants = participants;
        break;
    }

    const headers = {
      tagall: '╭─────◆◇◆─────╮\n  *ATTENTION EVERYONE*\n╰─────◆◇◆─────╯',
      tagadmin: '╭─────◆◇◆─────╮\n    *ADMINS ONLY*\n╰─────◆◇◆─────╯',
      tagnotadmin: '╭─────◆◇◆─────╮\n  *NON-ADMINS ONLY*\n╰─────◆◇◆─────╯',
      hidetag: '╭─────◆◇◆─────╮\n     *HIDDEN TAG*\n╰─────◆◇◆─────╯'
    };

    const title = headers[cmd];
    const msgText = m.quoted?.text || text || 'no message';
    let message = `${title}\n\n*✦ Message:* ${msgText}\n\n`;

    if (cmd !== 'hidetag') {
      for (let participant of filteredParticipants) {
        message += `┊➥ @${participant.id.split('@')[0]}\n`;
      }
    }

    await gss.sendMessage(
      m.from,
      {
        text: cmd === 'hidetag' ? msgText : message,
        mentions: filteredParticipants.map(p => p.id)
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error:', error);
    await m.reply('⚠️ *Oops! Something glitched while tagging. Joel XMD Squad is on it!*');
  }
};

export default tagCommands;