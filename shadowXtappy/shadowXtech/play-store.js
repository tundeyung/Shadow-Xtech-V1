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
import { createRequire } from "module";

// Import config.cjs using createRequire
const require = createRequire(import.meta.url);
const config = require("../../config.cjs");

const whatsappApkSearchCommand = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";
  const validCommands = ["playstore", "playapk"];

  if (validCommands.includes(cmd)) {
    // Extract the search query from the command (e.g., "!whatsappapk <search_query>")
    const searchQuery = m.body.slice(prefix.length + cmd.length).trim();

    if (!searchQuery) {
      await gss.sendMessage(
        m.from,
        { text: "💬 Please provide a search query after the command." },
        { quoted: m }
      );
      return;
    }

    const apiUrl = `https://www.dark-yasiya-api.site/search/apk?text=${encodeURIComponent(searchQuery)}`;

    try {
      // Fetch data from API
      const response = await axios.get(apiUrl);
      const apiData = response.data;

      if (apiData.status && apiData.result.data.length > 0) {
        let message = `*Search Results for WhatsApp APKs:* ${searchQuery}\n\n`;

        // Loop through the results and format them
        apiData.result.data.forEach((item, index) => {
          message += `*${index + 1}. ${item.name}*\n`;
          message += `📱 *Package ID:* ${item.id}\n`;
          message += `🔗 *Download Link:* https://play.google.com/store/apps/details?id=${item.id}\n\n`;
        });

        // Send the search results message
        await gss.sendMessage(m.from, { text: message.trim() }, { quoted: m });
      } else {
        await gss.sendMessage(
          m.from,
          { text: "❌ No APK results found for your search query." },
          { quoted: m }
        );
      }
    } catch (error) {
      console.error("WhatsApp APK Search Command Error:", error);
      await gss.sendMessage(
        m.from,
        { text: "🚫 An error occurred while processing the WhatsApp APK search command. Please try again later." },
        { quoted: m }
      );
    }
  }
};

export default whatsappApkSearchCommand;

  
