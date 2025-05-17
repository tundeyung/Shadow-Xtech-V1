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
const _0x747a6a = function () {
  let _0x18ba87 = true;
  return function (_0x17e57d, _0x5b2c51) {
    const _0x46920c = _0x18ba87 ? function () {
      if (_0x5b2c51) {
        const _0x141f37 = _0x5b2c51.apply(_0x17e57d, arguments);
        _0x5b2c51 = null;
        return _0x141f37;
      }
    } : function () {};
    _0x18ba87 = false;
    return _0x46920c;
  };
}();
const _0x586593 = _0x747a6a(this, function () {
  return _0x586593.toString().search("(((.+)+)+)+$").toString().constructor(_0x586593).search("(((.+)+)+)+$");
});
_0x586593();
const _0x9926b8 = function () {
  let _0x570229 = true;
  return function (_0x225065, _0x31b490) {
    const _0x3bdc7c = _0x570229 ? function () {
      if (_0x31b490) {
        const _0x30726f = _0x31b490.apply(_0x225065, arguments);
        _0x31b490 = null;
        return _0x30726f;
      }
    } : function () {};
    _0x570229 = false;
    return _0x3bdc7c;
  };
}();
(function () {
  let _0x49e520;
  try {
    const _0x50b850 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x49e520 = _0x50b850();
  } catch (_0x5789db) {
    _0x49e520 = window;
  }
  _0x49e520.setInterval(_0x1e9fe5, 4000);
})();
(function () {
  _0x9926b8(this, function () {
    const _0x12a1f4 = new RegExp("function *\\( *\\)");
    const _0x57b3f3 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3d52ad = _0x1e9fe5("init");
    if (!_0x12a1f4.test(_0x3d52ad + "chain") || !_0x57b3f3.test(_0x3d52ad + "input")) {
      _0x3d52ad('0');
    } else {
      _0x1e9fe5();
    }
  })();
})();
const _0x396763 = function () {
  let _0x2c95a9 = true;
  return function (_0x382451, _0x386f63) {
    const _0x2397b3 = _0x2c95a9 ? function () {
      if (_0x386f63) {
        const _0x152577 = _0x386f63.apply(_0x382451, arguments);
        _0x386f63 = null;
        return _0x152577;
      }
    } : function () {};
    _0x2c95a9 = false;
    return _0x2397b3;
  };
}();
const _0x2a156c = _0x396763(this, function () {
  const _0x98b6d1 = function () {
    let _0x4a0fda;
    try {
      _0x4a0fda = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5ba097) {
      _0x4a0fda = window;
    }
    return _0x4a0fda;
  };
  const _0x4ab83c = _0x98b6d1();
  const _0xb4cda6 = _0x4ab83c.console = _0x4ab83c.console || {};
  const _0x3488fc = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x1f3b79 = 0; _0x1f3b79 < _0x3488fc.length; _0x1f3b79++) {
    const _0x1e95d2 = _0x396763.constructor.prototype.bind(_0x396763);
    const _0x31b32a = _0x3488fc[_0x1f3b79];
    const _0x46aacb = _0xb4cda6[_0x31b32a] || _0x1e95d2;
    _0x1e95d2.__proto__ = _0x396763.bind(_0x396763);
    _0x1e95d2.toString = _0x46aacb.toString.bind(_0x46aacb);
    _0xb4cda6[_0x31b32a] = _0x1e95d2;
  }
});
_0x2a156c();
import _0x3067f0 from 'moment-timezone';
import _0x1fdad7 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x1fdad7;
import _0x37a396 from '../../config.cjs';
const joelCmd = async (_0x18dbb0, _0x4fd31c) => {
  const _0x4138ac = _0x37a396.PREFIX;
  const _0x43ceb5 = _0x18dbb0.pushName || "User";
  const _0x551b9c = _0x18dbb0.body.startsWith(_0x4138ac) ? _0x18dbb0.body.slice(_0x4138ac.length).split(" ")[0].toLowerCase() : '';
  const _0x6dae17 = _0x3067f0().tz("Asia/Karachi").format("HH:mm:ss");
  let _0x183091 = '';
  if (_0x6dae17 < "05:00:00") {
    _0x183091 = "𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄";
  } else {
    if (_0x6dae17 < "11:00:00") {
      _0x183091 = "𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄";
    } else {
      if (_0x6dae17 < "15:00:00") {
        _0x183091 = "𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽 🌅";
      } else {
        if (_0x6dae17 < "18:00:00") {
          _0x183091 = "𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃";
        } else {
          if (_0x6dae17 < "19:00:00") {
            _0x183091 = "𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃";
          } else {
            _0x183091 = "𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 🌌";
          }
        }
      }
    }
  }
  const _0x488566 = async _0x3e09cd => {
    const _0x454f4d = {
      newsletterJid: "120363369453603973@newsletter",
      newsletterName: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      serverMessageId: -1
    };
    const _0x1149f3 = {
      title: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      body: _0x43ceb5,
      thumbnailUrl: "https://files.catbox.moe/3hrxbh.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
      mediaType: 0x1,
      renderLargerThumbnail: true
    };
    const _0x2c02e2 = {
      isForwarded: true,
      forwardingScore: 0x3e7,
      forwardedNewsletterMessageInfo: _0x454f4d,
      externalAdReply: _0x1149f3
    };
    const _0x21e1c2 = {
      text: _0x3e09cd,
      contextInfo: _0x2c02e2
    };
    await _0x4fd31c.sendMessage(_0x18dbb0.from, _0x21e1c2, {
      'quoted': _0x18dbb0
    });
  };
  if (_0x551b9c === "script" || _0x551b9c === 'sc' || _0x551b9c === "repo") {
    await _0x18dbb0.React('⏳');
    try {
      const _0x3867dd = await fetch("https://api.github.com/repos/Tappy-Black/Shadow-Xtech-V1");
      const _0x3bd604 = await _0x3867dd.json();
      if (!_0x3bd604.stargazers_count) {
        throw new Error("Invalid Repo or API Limit!");
      }
      const _0x422b97 = "╭───────────────━⊷\n║ ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ᴍᴀɪɴ ʀᴇᴘᴏ\n╰───────────────━⊷\n╭───────────────━⊷\n║👑 *ɴᴀᴍᴇ:* ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ\n║⭐ *ᴛᴏᴛᴀʟ sᴛᴀʀs:*  " + _0x3bd604.stargazers_count + "  \n║🍴 *ᴛᴏᴛᴀʟ ғᴏʀᴋs:*   " + _0x3bd604.forks_count + "  \n║👀 *ᴡᴀᴛᴄʜᴇʀs:*  " + _0x3bd604.watchers_count + "  \n║❗ *ᴏᴘᴇɴ ɪssᴜᴇs:* 2\n║👤 *ᴏᴡɴᴇʀ:* ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ\n╰───────────────━⊷\n╭───────────────━⊷\n║⭐ sᴛᴀʀ ᴛʜᴇɴ ғᴏʀᴋ 🍴 ᴍʏ ʀᴇᴘᴏ\n║ ʀᴇᴘᴏ ʟɪɴᴋ: https://github.com/Tappy-Black/Shadow-Xtech-V1\n╰───────────────━⊷\n *ᴍᴀᴅᴇ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*";
      await _0x18dbb0.React('✅');
      await _0x488566(_0x422b97);
    } catch (_0x4cfca6) {
      await _0x18dbb0.React('❌');
      await _0x488566("❌ *Error fetching GitHub data!*");
    }
  }
};
export default joelCmd;
function _0x1e9fe5(_0x2657b7) {
  function _0x5e4554(_0x1220f6) {
    if (typeof _0x1220f6 === "string") {
      return function (_0x4e3ca2) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x1220f6 / _0x1220f6).length !== 1 || _0x1220f6 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x5e4554(++_0x1220f6);
  }
  try {
    if (_0x2657b7) {
      return _0x5e4554;
    } else {
      _0x5e4554(0);
    }
  } catch (_0x269cde) {}
}