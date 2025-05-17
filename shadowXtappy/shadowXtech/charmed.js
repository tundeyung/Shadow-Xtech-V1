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
const _0x2c971f = function () {
  let _0x1dc0a3 = true;
  return function (_0x381aee, _0x1405ad) {
    const _0x4e046b = _0x1dc0a3 ? function () {
      if (_0x1405ad) {
        const _0x4e52eb = _0x1405ad.apply(_0x381aee, arguments);
        _0x1405ad = null;
        return _0x4e52eb;
      }
    } : function () {};
    _0x1dc0a3 = false;
    return _0x4e046b;
  };
}();
const _0x410467 = _0x2c971f(this, function () {
  return _0x410467.toString().search("(((.+)+)+)+$").toString().constructor(_0x410467).search("(((.+)+)+)+$");
});
_0x410467();
const _0x46d49e = function () {
  let _0x260ad9 = true;
  return function (_0x146f30, _0x29f84c) {
    const _0x4fbf09 = _0x260ad9 ? function () {
      if (_0x29f84c) {
        const _0x1fea31 = _0x29f84c.apply(_0x146f30, arguments);
        _0x29f84c = null;
        return _0x1fea31;
      }
    } : function () {};
    _0x260ad9 = false;
    return _0x4fbf09;
  };
}();
(function () {
  _0x46d49e(this, function () {
    const _0x57511f = new RegExp("function *\\( *\\)");
    const _0x166e27 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x59997b = _0x5d3488("init");
    if (!_0x57511f.test(_0x59997b + "chain") || !_0x166e27.test(_0x59997b + "input")) {
      _0x59997b('0');
    } else {
      _0x5d3488();
    }
  })();
})();
const _0x472fc7 = function () {
  let _0x399f69 = true;
  return function (_0x5e010e, _0xf59cd1) {
    const _0x2a86da = _0x399f69 ? function () {
      if (_0xf59cd1) {
        const _0x2ca3be = _0xf59cd1.apply(_0x5e010e, arguments);
        _0xf59cd1 = null;
        return _0x2ca3be;
      }
    } : function () {};
    _0x399f69 = false;
    return _0x2a86da;
  };
}();
const _0x5dc598 = _0x472fc7(this, function () {
  let _0x47e6ae;
  try {
    const _0x3a4d2e = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x47e6ae = _0x3a4d2e();
  } catch (_0x295b46) {
    _0x47e6ae = window;
  }
  const _0x5a0773 = _0x47e6ae.console = _0x47e6ae.console || {};
  const _0x4c824a = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x18acdc = 0; _0x18acdc < _0x4c824a.length; _0x18acdc++) {
    const _0x53e67c = _0x472fc7.constructor.prototype.bind(_0x472fc7);
    const _0x568cc3 = _0x4c824a[_0x18acdc];
    const _0x56f620 = _0x5a0773[_0x568cc3] || _0x53e67c;
    _0x53e67c.__proto__ = _0x472fc7.bind(_0x472fc7);
    _0x53e67c.toString = _0x56f620.toString.bind(_0x56f620);
    _0x5a0773[_0x568cc3] = _0x53e67c;
  }
});
_0x5dc598();
import _0x1dbf60 from 'moment-timezone';
import 'fs';
import 'os';
import _0x4cbece from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x4cbece;
import _0x3d4d22 from '../../config.cjs';
const alive = async (_0x34a254, _0x5b3b00) => {
  const _0x389af9 = _0x3d4d22.PREFIX;
  const _0x58d438 = _0x34a254.pushName || "User";
  const _0x23fdb3 = _0x34a254.body.startsWith(_0x389af9) ? _0x34a254.body.slice(_0x389af9.length).split(" ")[0].toLowerCase() : '';
  if (_0x23fdb3 === "chat") {
    await _0x34a254.React('💮');
    const _0x32f006 = _0x1dbf60().tz("Kenya/Nairobi").format("HH:mm:ss");
    let _0x25900d = '';
    if (_0x32f006 < "05:00:00") {
      _0x25900d = "Good Morning 🌄";
    } else {
      if (_0x32f006 < "11:00:00") {
        _0x25900d = "Good Morning 🌄";
      } else {
        if (_0x32f006 < "15:00:00") {
          _0x25900d = "Good Afternoon 🌅";
        } else {
          if (_0x32f006 < "18:00:00") {
            _0x25900d = "Good Evening 🌃";
          } else {
            if (_0x32f006 < "19:00:00") {
              _0x25900d = "Good Evening 🌃";
            } else {
              _0x25900d = "Good Night 🌌";
            }
          }
        }
      }
    }
    const _0x590615 = "oya\n *" + _0x58d438 + "* let's chat and don't chat bullshit";
    await _0x34a254.React('☄️');
    const _0x407da5 = {
      newsletterJid: "120363369453603973@newsletter",
      newsletterName: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      serverMessageId: -1
    };
    const _0x58b2d8 = {
      title: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      body: "let's chat",
      thumbnailUrl: "https://avatars.githubusercontent.com/u/162905644?v=4",
      sourceUrl: "wa.me-254759000340",
      mediaType: 0x1,
      renderLargerThumbnail: false
    };
    const _0xe8a3ec = {
      isForwarded: false,
      forwardedNewsletterMessageInfo: _0x407da5,
      forwardingScore: 0x3e7,
      externalAdReply: _0x58b2d8
    };
    const _0xa63181 = {
      text: _0x590615,
      contextInfo: _0xe8a3ec
    };
    _0x5b3b00.sendMessage(_0x34a254.from, _0xa63181, {
      'quoted': _0x34a254
    });
  }
};
export default alive;
function _0x5d3488(_0x267e54) {
  function _0x5699fe(_0xca8c82) {
    if (typeof _0xca8c82 === "string") {
      return function (_0x1ff148) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0xca8c82 / _0xca8c82).length !== 1 || _0xca8c82 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x5699fe(++_0xca8c82);
  }
  try {
    if (_0x267e54) {
      return _0x5699fe;
    } else {
      _0x5699fe(0);
    }
  } catch (_0x1b0ee5) {}
}
(function () {
  const _0x490bbe = function () {
    let _0x3e65a3;
    try {
      _0x3e65a3 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x18b284) {
      _0x3e65a3 = window;
    }
    return _0x3e65a3;
  };
  const _0x211a0d = _0x490bbe();
  _0x211a0d.setInterval(_0x5d3488, 4000);
})();