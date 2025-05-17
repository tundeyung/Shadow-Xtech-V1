










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







import fs from "fs";
import config from "../../config.cjs";

const dbPath = "./shadowXevents/antilink.js";
let antilinkDB = fs.existsSync(dbPath)
  ? JSON.parse(fs.readFileSync(dbPath))
  : {};

const saveDB = () => fs.writeFileSync(dbPath, JSON.stringify(antilinkDB, null, 2));

const antiLink = async (m, gss) => {
  try {
    const cmd = m.body.toLowerCase().trim();
    const prefix = config.PREFIX;

    if (!cmd.startsWith(prefix)) return;

    const command = cmd.slice(prefix.length).trim();

    // Show usage if only "antilink" is typed
    if (command === "antilink") {
      return m.reply(`*╭─❍『 ANTILINK USAGE 』❍\n│  ➤ ${prefix}antilink on\n│  ➤ ${prefix}antilink off\n│\n│  Use to enable or disable link blocking.\n│  ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ\n╰───────────────━⊷*`);
    }

    // Toggle ON manually
    if (command === "antilink on") {
      if (!m.isGroup)
        return m.reply("*╭─❍『 ERROR 』❍\n│  *GROUPS ONLY!*\n╰───────────────━⊷*");

      const metadata = await gss.groupMetadata(m.from);
      const isAdmin = metadata.participants.find(p => p.id === m.sender)?.admin;

      if (!isAdmin)
        return m.reply("*╭─❍『 ERROR 』❍\n│  *ADMIN ONLY COMMAND!*\n╰───────────────━⊷*");

      antilinkDB[m.from] = true;
      saveDB();
      return m.reply(`*╭─❍『 ANTILINK 』❍\n│  ✅ Activated manually!\n│  Use ${prefix}antilink off to disable.\n│  ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ\n╰───────────────━⊷*`);
    }

    // Toggle OFF
    if (command === "antilink off") {
      if (!m.isGroup)
        return m.reply("*╭─❍『 ERROR 』❍\n│  *GROUPS ONLY!*\n╰───────────────━⊷*");

      const metadata = await gss.groupMetadata(m.from);
      const isAdmin = metadata.participants.find(p => p.id === m.sender)?.admin;

      if (!isAdmin)
        return m.reply("*╭─❍『 ERROR 』❍\n│  *ADMIN ONLY COMMAND!*\n╰───────────────━⊷*");

      delete antilinkDB[m.from];
      saveDB();
      return m.reply(`*╭─❍『 ANTILINK 』❍\n│  ❌ Deactivated manually!\n│  Use ${prefix}antilink on to enable.\n│  ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ\n╰───────────────━⊷*`);
    }

    // Auto-delete links (respects config.ANTILINK global toggle)
    const isAutoOn = config.ANTILINK === true;
    const groupEnabled = antilinkDB[m.from];
    const shouldBlockLinks = isAutoOn || groupEnabled;

    if (shouldBlockLinks && m.isGroup) {
      const linkRegex = /(https?:\/\/[^\s]+|chat\.whatsapp\.com\/[a-zA-Z0-9]+)/gi;
      const metadata = await gss.groupMetadata(m.from);
      const isAdmin = metadata.participants.find(p => p.id === m.sender)?.admin;

      if (!isAdmin && linkRegex.test(m.body)) {
        await gss.sendMessage(m.from, { delete: m.key });
        return m.reply("*╭─❍『 ANTILINK 』❍\n│  🚫 Link deleted!\n│  Links are not allowed here!\n╰───────────────━⊷*");
      }
    }

  } catch (e) {
    console.error("AntiLink Error:", e);
    m.reply("*╭─❍『 ERROR 』❍\n│  ⚠️ Something went wrong!\n╰───────────────━⊷*");
  }
};

export default antiLink;