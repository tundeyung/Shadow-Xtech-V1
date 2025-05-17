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








import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import os from "os";
import path from "path";

const IMGUR_CLIENT_ID = "51c547f88a81855"; // Your Imgur Client ID

const tourl = async (m, sock) => {
  const prefix = ".";
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(" ")[0].toLowerCase()
    : "";

  if (cmd === "url2") {
    try {
      if (!m.quoted || !m.quoted.message) {
        throw "*Please reply to an image or video!*";
      }

      // Detect media type
      const message = m.quoted.message;
      let mimeType = "";
      let mediaMessage;

      if (message.imageMessage) {
        mimeType = "image/jpeg"; // WhatsApp images are usually JPEG
        mediaMessage = message.imageMessage;
      } else if (message.videoMessage) {
        mimeType = "video/mp4"; // WhatsApp videos are MP4
        mediaMessage = message.videoMessage;
      } else if (message.stickerMessage) {
        mimeType = "image/webp"; // Stickers are WebP
        mediaMessage = message.stickerMessage;
      }

      if (!mediaMessage) {
        throw "*Please reply to a valid image or video!*";
      }

      // Download media
      const fileBuffer = await m.quoted.download();
      if (!fileBuffer || fileBuffer.length === 0) {
        throw "*Media download failed!*";
      }

      // Save media temporarily
      const fileExt = mimeType.includes("video") ? "mp4" : "jpg";
      const tempFilePath = path.join(os.tmpdir(), `sarkar_temp_media.${fileExt}`);
      fs.writeFileSync(tempFilePath, fileBuffer);

      // Upload media to Imgur
      const formData = new FormData();
      formData.append("image", fs.createReadStream(tempFilePath));

      const apiUrl = `https://api.imgur.com/3/upload`;
      const response = await axios.post(apiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
        },
      });

      // Delete the temporary file
      fs.unlinkSync(tempFilePath);

      if (!response.data || !response.data.data || !response.data.data.link) {
        throw "Error uploading the media.";
      }

      const mediaUrl = response.data.data.link;
      const responseText = `*ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ᴜʀʟ ᴍᴇɴᴜ*\n\n*URL:* ${mediaUrl}\n\n*ᴋᴇᴇᴘ ᴜsɪɴɢ  ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ*`;

      await sock.sendMessage(
        m.from,
        { text: responseText },
        { quoted: m }
      );
    } catch (error) {
      await sock.sendMessage(m.from, { text: `Error: ${error.message || error}` }, { quoted: m });
      console.log(error);
    }
  }
};

export default tourl;
