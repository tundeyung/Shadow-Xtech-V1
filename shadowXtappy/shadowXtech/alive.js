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
const _0x588333 = function () {
  let _0x341c9e = true;
  return function (_0x3dd77f, _0x23d15b) {
    const _0x424728 = _0x341c9e ? function () {
      if (_0x23d15b) {
        const _0x35063f = _0x23d15b.apply(_0x3dd77f, arguments);
        _0x23d15b = null;
        return _0x35063f;
      }
    } : function () {};
    _0x341c9e = false;
    return _0x424728;
  };
}();
const _0x21448b = _0x588333(this, function () {
  return _0x21448b.toString().search("(((.+)+)+)+$").toString().constructor(_0x21448b).search("(((.+)+)+)+$");
});
_0x21448b();
(function () {
  let _0x316e47;
  try {
    const _0x5c9cde = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x316e47 = _0x5c9cde();
  } catch (_0x204870) {
    _0x316e47 = window;
  }
  _0x316e47.setInterval(_0x44d747, 4000);
})();
const _0x3439fc = function () {
  let _0x3f0825 = true;
  return function (_0x15e062, _0x2ef16a) {
    const _0x362e4a = _0x3f0825 ? function () {
      if (_0x2ef16a) {
        const _0x48a288 = _0x2ef16a.apply(_0x15e062, arguments);
        _0x2ef16a = null;
        return _0x48a288;
      }
    } : function () {};
    _0x3f0825 = false;
    return _0x362e4a;
  };
}();
(function () {
  _0x3439fc(this, function () {
    const _0x508526 = new RegExp("function *\\( *\\)");
    const _0x2d20ee = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x1d6fdf = _0x44d747("init");
    if (!_0x508526.test(_0x1d6fdf + "chain") || !_0x2d20ee.test(_0x1d6fdf + "input")) {
      _0x1d6fdf('0');
    } else {
      _0x44d747();
    }
  })();
})();
const _0x29a722 = function () {
  let _0x5df4d7 = true;
  return function (_0xd19bba, _0x497883) {
    const _0x24811e = _0x5df4d7 ? function () {
      if (_0x497883) {
        const _0x172c29 = _0x497883.apply(_0xd19bba, arguments);
        _0x497883 = null;
        return _0x172c29;
      }
    } : function () {};
    _0x5df4d7 = false;
    return _0x24811e;
  };
}();
const _0x29f8b4 = _0x29a722(this, function () {
  const _0x5813c5 = function () {
    let _0x5e7355;
    try {
      _0x5e7355 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x9c7657) {
      _0x5e7355 = window;
    }
    return _0x5e7355;
  };
  const _0x3b52fa = _0x5813c5();
  const _0x3f96d1 = _0x3b52fa.console = _0x3b52fa.console || {};
  const _0x3531de = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x37b7b0 = 0; _0x37b7b0 < _0x3531de.length; _0x37b7b0++) {
    const _0x4f43e4 = _0x29a722.constructor.prototype.bind(_0x29a722);
    const _0x3e0894 = _0x3531de[_0x37b7b0];
    const _0x1b4597 = _0x3f96d1[_0x3e0894] || _0x4f43e4;
    _0x4f43e4.__proto__ = _0x29a722.bind(_0x29a722);
    _0x4f43e4.toString = _0x1b4597.toString.bind(_0x1b4597);
    _0x3f96d1[_0x3e0894] = _0x4f43e4;
  }
});
_0x29f8b4();
import _0x1d1883 from 'moment-timezone';
import 'fs';
import 'os';
import _0x1a0b3d from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x1a0b3d;
import _0x56a61a from '../../config.cjs';
const joel = async (_0x250fc1, _0x1af3ce) => {
  const _0xa478b6 = _0x56a61a.PREFIX;
  const _0x3fc719 = _0x250fc1.body.startsWith(_0xa478b6) ? _0x250fc1.body.slice(_0xa478b6.length).split(" ")[0].toLowerCase() : '';
  if (_0x3fc719 === "uptime" || _0x3fc719 === "alive" || _0x3fc719 === "runtime") {
    await _0x250fc1.React('⏳');
    const _0x461315 = process.uptime();
    const _0x10dfdd = Math.floor(_0x461315 / 86400);
    const _0x108964 = Math.floor(_0x461315 % 86400 / 3600);
    const _0x1770de = Math.floor(_0x461315 % 3600 / 60);
    const _0x48de78 = Math.floor(_0x461315 % 60);
    const _0x3ffb4b = _0x1d1883().tz("Kenya/Nairobi").format("HH:mm:ss");
    let _0x4e446b = '';
    if (_0x3ffb4b < "05:00:00") {
      _0x4e446b = "Good Morning 🌄";
    } else {
      if (_0x3ffb4b < "11:00:00") {
        _0x4e446b = "Good Morning 🌄";
      } else {
        if (_0x3ffb4b < "15:00:00") {
          _0x4e446b = "Good Afternoon 🌅";
        } else {
          if (_0x3ffb4b < "18:00:00") {
            _0x4e446b = "Good Evening 🌃";
          } else {
            if (_0x3ffb4b < "19:00:00") {
              _0x4e446b = "Good Evening 🌃";
            } else {
              _0x4e446b = "Good Night 🌌";
            }
          }
        }
      }
    }
    await _0x250fc1.React('☄️');
    const _0x21f583 = {
      url: "https://files.catbox.moe/jrfk1n.mp3"
    };
    _0x1af3ce.sendMessage(_0x250fc1.from, {
      'audio': _0x21f583,
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'mentionedJid': [_0x250fc1.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363369453603973@newsletter",
          'newsletterName': "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ",
          'body': "UPTIME " + _0x10dfdd + "D " + _0x108964 + "H " + _0x1770de + "M " + _0x48de78 + 'S',
          'thumbnailUrl': "https://files.catbox.moe/3hrxbh.jpg",
          'sourceUrl': "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x250fc1
    });
  }
};
export default joel;
function _0x44d747(_0xce941d) {
  function _0x4b6089(_0x512981) {
    if (typeof _0x512981 === "string") {
      return function (_0x32b226) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x512981 / _0x512981).length !== 1 || _0x512981 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x4b6089(++_0x512981);
  }
  try {
    if (_0xce941d) {
      return _0x4b6089;
    } else {
      _0x4b6089(0);
    }
  } catch (_0x4ea2b0) {}
}