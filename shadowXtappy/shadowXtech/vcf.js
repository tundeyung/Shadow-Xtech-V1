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
import path from "path";
import config from "../../config.cjs"; // Import the config file to get the PREFIX

const vcfCompiler = async (m, gss, sock) => {
  try {
    const cmd = m.body.toLowerCase().trim();

    // Ensure the command starts with the correct prefix
    if (!cmd.startsWith(config.PREFIX)) return;

    const command = cmd.slice(config.PREFIX.length).trim(); // Remove the prefix to get the actual command

    if (command !== "vcf") return;

    if (!m.isGroup) {
      return m.reply("*ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘꜱ!*");
    }

    m.reply("*ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ɪꜱ ᴄᴏᴍᴘɪʟɪɴɢ ᴛʜᴇ ᴄᴏɴᴛᴀᴄᴛꜱ*");

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;

    if (!participants.length) {
      return m.reply("*⚠️ No contacts found in this group*");
    }

    let vcfContent = `BEGIN:VCARD\nVERSION:3.0\nFN:WhatsApp Group Contacts\nEND:VCARD\n`;

    participants.forEach((member) => {
      const number = member.id.split("@")[0];
      const name = member.notify || member.name || `Unknown ${number}`;
      
      vcfContent += `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:+${number}
END:VCARD`;
    });

    const vcfPath = path.join("/tmp", `GroupContacts-${m.from}.vcf`);
    fs.writeFileSync(vcfPath, vcfContent, "utf8");

    await gss.sendMessage(m.from, { document: { url: vcfPath }, mimetype: "text/x-vcard", fileName: "Wa_Group_Contacts~By Black-Tappy" });

    // Send the newsletter message after generating the VCF file
    const responseText = "*✅ Contact list compiled successfully! Download and import it into your phone or Gmail.*";

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
            title: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
            body: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ᴄᴀʟᴄᴜʟᴀᴛɪᴏɴs",
            thumbnailUrl: 'https://files.catbox.moe/3hrxbh.jpg', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );

    m.reply("*✅ Contact list compiled successfully! Download and import it into your phone or Gmail.*");
  } catch (error) {
    console.error("Error in VCF Compilation:", error);
    m.reply("*here is your Vcf file.*");
  }
};

export default vcfCompiler;