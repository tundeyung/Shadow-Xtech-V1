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
import config from "../../config.cjs";

const groupInfo = async (message, sock) => {
    const prefix = config.PREFIX;
    const command = message.body.startsWith(prefix)
        ? message.body.slice(prefix.length).split(" ")[0].toLowerCase()
        : "";

    if (command !== "groupinfo") return;

    const chatId = message.key.remoteJid;
    const isGroup = chatId.endsWith("@g.us");
    if (!isGroup) return message.reply("*This command only works in group chats!*");

    try {
        const metadata = await sock.groupMetadata(chatId);
        const admins = metadata.participants.filter(p => p.admin);
        const creatorJid = metadata.owner || null;
        const creatorTag = creatorJid ? `@${creatorJid.split("@")[0]}` : "Unknown";
        const description = metadata.desc || "No description set.";
        const creationDate = new Date(metadata.creation * 1000).toLocaleString();

        const infoText = `
╭────✧〈 *GROUP INTEL PANEL* 〉 ✧───◆
┴╭─────────────────────━⊷❍
┃🟢┃
│🛰️┃ *Name:* _${metadata.subject}_
┃🆔┃ *ID:* _${metadata.id}_
┃👥┃ *Members:* _${metadata.participants.length}_
┃🛡️┃ *Admins:* _${admins.length}_
┃👑┃ *Creator:* _${creatorTag}_
┃🕐┃ *Created:* _${creationDate}_
┃🟢┃
┬╰─────────────────────━⊷❍
╰─── ···▸Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ··──◆❍

🧾 *Description:*
_${description}_

──────〔 ⚡ 𝗦𝗛𝗔𝗗𝗢𝗪 𝗫𝗧𝗘𝗖𝗛 𝐁𝐎𝐓 ⚡ 〕──────
`.trim();

        await sock.sendMessage(chatId, {
            text: infoText,
            mentions: creatorJid ? [creatorJid] : []
        }, { quoted: message });

    } catch (error) {
        console.error(`Group Info Error in ${chatId}:`, error);
        return message.reply("*🔒 Something went wrong while fetching group info. Please try again later!*");
    }
};

export default groupInfo;