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
const _0x2e94f0 = function () {
  let _0x3d1f6a = true;
  return function (_0x477bee, _0x593bcb) {
    const _0x1d3b14 = _0x3d1f6a ? function () {
      if (_0x593bcb) {
        const _0x1723f6 = _0x593bcb.apply(_0x477bee, arguments);
        _0x593bcb = null;
        return _0x1723f6;
      }
    } : function () {};
    _0x3d1f6a = false;
    return _0x1d3b14;
  };
}();
const _0x21f3d8 = _0x2e94f0(this, function () {
  return _0x21f3d8.toString().search("(((.+)+)+)+$").toString().constructor(_0x21f3d8).search("(((.+)+)+)+$");
});
_0x21f3d8();
const _0x3fbe55 = function () {
  let _0x374072 = true;
  return function (_0x381722, _0x5d505c) {
    const _0x561cbf = _0x374072 ? function () {
      if (_0x5d505c) {
        const _0x3c1198 = _0x5d505c.apply(_0x381722, arguments);
        _0x5d505c = null;
        return _0x3c1198;
      }
    } : function () {};
    _0x374072 = false;
    return _0x561cbf;
  };
}();
(function () {
  _0x3fbe55(this, function () {
    const _0x528b96 = new RegExp("function *\\( *\\)");
    const _0x5bb5a0 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3cca56 = _0x3444ba("init");
    if (!_0x528b96.test(_0x3cca56 + "chain") || !_0x5bb5a0.test(_0x3cca56 + "input")) {
      _0x3cca56('0');
    } else {
      _0x3444ba();
    }
  })();
})();
const _0x1021dd = function () {
  let _0x5a96f9 = true;
  return function (_0x3b041c, _0x42932b) {
    const _0x21042c = _0x5a96f9 ? function () {
      if (_0x42932b) {
        const _0x6e457a = _0x42932b.apply(_0x3b041c, arguments);
        _0x42932b = null;
        return _0x6e457a;
      }
    } : function () {};
    _0x5a96f9 = false;
    return _0x21042c;
  };
}();
(function () {
  let _0x28fd1c;
  try {
    const _0x188024 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x28fd1c = _0x188024();
  } catch (_0x3cdc44) {
    _0x28fd1c = window;
  }
  _0x28fd1c.setInterval(_0x3444ba, 4000);
})();
const _0x122b4f = _0x1021dd(this, function () {
  let _0x1dbdc5;
  try {
    const _0x1bcac3 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1dbdc5 = _0x1bcac3();
  } catch (_0x35e9d2) {
    _0x1dbdc5 = window;
  }
  const _0x3f2612 = _0x1dbdc5.console = _0x1dbdc5.console || {};
  const _0xc219e0 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x22b31b = 0; _0x22b31b < _0xc219e0.length; _0x22b31b++) {
    const _0x365063 = _0x1021dd.constructor.prototype.bind(_0x1021dd);
    const _0x1245ba = _0xc219e0[_0x22b31b];
    const _0x26dc84 = _0x3f2612[_0x1245ba] || _0x365063;
    _0x365063.__proto__ = _0x1021dd.bind(_0x1021dd);
    _0x365063.toString = _0x26dc84.toString.bind(_0x26dc84);
    _0x3f2612[_0x1245ba] = _0x365063;
  }
});
_0x122b4f();
import _0x3812dc from '../../config.cjs';
const ping = async (_0x325ff0, _0x1f20ee) => {
  const _0xe47fd3 = _0x3812dc.PREFIX;
  const _0x24fc4a = _0x325ff0.body.startsWith(_0xe47fd3) ? _0x325ff0.body.slice(_0xe47fd3.length).split(" ")[0].toLowerCase() : '';
  if (_0x24fc4a === "ping") {
    const _0x559e3f = new Date().getTime();
    await _0x325ff0.React('⏳');
    const _0x57855d = new Date().getTime();
    const _0x3a8701 = (_0x57855d - _0x559e3f).toFixed(2);
    const _0x579f84 = "*Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ Pᴏɴɢ Sᴘᴇᴇᴅ: " + _0x3a8701 + " ms*";
    await _0x325ff0.React('✅');
    const _0x32f346 = {
      newsletterJid: "120363369453603973@newsletter",
      newsletterName: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      serverMessageId: -1
    };
    const _0x5eb09d = {
      title: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      body: "ᴘɪɴɢ sᴘᴇᴇᴅ ᴄᴀʟᴄᴜʟᴀᴛɪᴏɴs",
      thumbnailUrl: "https://files.catbox.moe/3hrxbh.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
      mediaType: 0x1,
      renderLargerThumbnail: false
    };
    const _0x8a2519 = {
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x32f346,
      forwardingScore: 0x3e7,
      externalAdReply: _0x5eb09d
    };
    const _0x3ac276 = {
      text: _0x579f84,
      contextInfo: _0x8a2519
    };
    _0x1f20ee.sendMessage(_0x325ff0.from, _0x3ac276, {
      'quoted': _0x325ff0
    });
  }
};
export default ping;
function _0x3444ba(_0x280607) {
  function _0x53c0bc(_0x25218c) {
    if (typeof _0x25218c === "string") {
      return function (_0x55b1d7) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x25218c / _0x25218c).length !== 1 || _0x25218c % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x53c0bc(++_0x25218c);
  }
  try {
    if (_0x280607) {
      return _0x53c0bc;
    } else {
      _0x53c0bc(0);
    }
  } catch (_0x597ab2) {}
}