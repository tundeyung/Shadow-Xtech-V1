const _0x355a61 = function () {
  let _0x4de979 = true;
  return function (_0x3c969d, _0x37429b) {
    const _0x171640 = _0x4de979 ? function () {
      if (_0x37429b) {
        const _0x211419 = _0x37429b.apply(_0x3c969d, arguments);
        _0x37429b = null;
        return _0x211419;
      }
    } : function () {};
    _0x4de979 = false;
    return _0x171640;
  };
}();
const _0x5a2dde = _0x355a61(this, function () {
  return _0x5a2dde.toString().search("(((.+)+)+)+$").toString().constructor(_0x5a2dde).search("(((.+)+)+)+$");
});
_0x5a2dde();
const _0x19c089 = function () {
  let _0x539f0d = true;
  return function (_0x27da94, _0x58b2ca) {
    const _0x2e8db9 = _0x539f0d ? function () {
      if (_0x58b2ca) {
        const _0x152be0 = _0x58b2ca.apply(_0x27da94, arguments);
        _0x58b2ca = null;
        return _0x152be0;
      }
    } : function () {};
    _0x539f0d = false;
    return _0x2e8db9;
  };
}();
(function () {
  _0x19c089(this, function () {
    const _0x156948 = new RegExp("function *\\( *\\)");
    const _0x594311 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x26af25 = _0x59c9ba("init");
    if (!_0x156948.test(_0x26af25 + "chain") || !_0x594311.test(_0x26af25 + "input")) {
      _0x26af25('0');
    } else {
      _0x59c9ba();
    }
  })();
})();
const _0x167aa1 = function () {
  let _0x15c96b = true;
  return function (_0x541685, _0x430ea0) {
    const _0x2f3bf5 = _0x15c96b ? function () {
      if (_0x430ea0) {
        const _0x344c5d = _0x430ea0.apply(_0x541685, arguments);
        _0x430ea0 = null;
        return _0x344c5d;
      }
    } : function () {};
    _0x15c96b = false;
    return _0x2f3bf5;
  };
}();
(function () {
  const _0x415565 = function () {
    let _0x1dbacb;
    try {
      _0x1dbacb = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5dada4) {
      _0x1dbacb = window;
    }
    return _0x1dbacb;
  };
  const _0x50134a = _0x415565();
  _0x50134a.setInterval(_0x59c9ba, 4000);
})();
const _0x669802 = _0x167aa1(this, function () {
  let _0x246c30;
  try {
    const _0x28de28 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x246c30 = _0x28de28();
  } catch (_0x423c30) {
    _0x246c30 = window;
  }
  const _0x3a17fe = _0x246c30.console = _0x246c30.console || {};
  const _0x336b27 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x443175 = 0; _0x443175 < _0x336b27.length; _0x443175++) {
    const _0x16e429 = _0x167aa1.constructor.prototype.bind(_0x167aa1);
    const _0x2f7c35 = _0x336b27[_0x443175];
    const _0xf9b1d4 = _0x3a17fe[_0x2f7c35] || _0x16e429;
    _0x16e429.__proto__ = _0x167aa1.bind(_0x167aa1);
    _0x16e429.toString = _0xf9b1d4.toString.bind(_0xf9b1d4);
    _0x3a17fe[_0x2f7c35] = _0x16e429;
  }
});
_0x669802();
import _0x2d21f0 from 'axios';
import _0x229b16 from 'yt-search';
import _0x23328e from '../../config.cjs';
const play2 = async (_0x4af714, _0x25a99d) => {
  const _0x5afda4 = _0x23328e.PREFIX;
  const _0x56b246 = _0x4af714.body.startsWith(_0x5afda4) ? _0x4af714.body.slice(_0x5afda4.length).split(" ")[0].toLowerCase() : '';
  const _0x2c3711 = _0x4af714.body.slice(_0x5afda4.length + _0x56b246.length).trim();
  if (_0x56b246 !== "video") {
    return;
  }
  if (!_0x2c3711) {
    return _0x4af714.reply("❌ *Please provide a YouTube link or search query!*\n\nExample:\n.video Alan Walker Faded\n.video https://youtu.be/xyz");
  }
  try {
    if (typeof _0x4af714.React === "function") {
      await _0x4af714.React('🎥');
    }
    await _0x4af714.reply("🔎 *Searching for your video...*");
    let _0x20c1cd;
    let _0x3e0b13;
    let _0x5e118c;
    let _0x58111d;
    let _0x3665e2;
    let _0x2d0e1e;
    let _0x647f59;
    if (_0x2c3711.match(/(youtube\.com|youtu\.be)/)) {
      const _0x435a9f = _0x2c3711.includes("watch?v=") ? _0x2c3711.split("watch?v=")[1].split('&')[0] : _0x2c3711.split('/').pop();
      const _0x2cda4f = {
        videoId: _0x435a9f
      };
      const _0x446be6 = await _0x229b16(_0x2cda4f);
      if (!_0x446be6 || !_0x446be6.title) {
        return _0x4af714.reply("❌ *Couldn’t fetch details from the provided link.*");
      }
      _0x20c1cd = _0x2c3711;
      _0x3e0b13 = _0x446be6.title;
      _0x5e118c = _0x446be6.thumbnail;
      _0x58111d = _0x446be6.seconds;
      _0x3665e2 = _0x446be6.views;
      _0x647f59 = _0x446be6.ago;
      _0x2d0e1e = _0x446be6.author.name;
    } else {
      const _0x1ab802 = await _0x229b16(_0x2c3711);
      if (!_0x1ab802.videos.length) {
        return _0x4af714.reply("❌ *No results found. Try a different keyword.*");
      }
      const _0x55d97c = _0x1ab802.videos[0];
      _0x20c1cd = _0x55d97c.url;
      _0x3e0b13 = _0x55d97c.title;
      _0x5e118c = _0x55d97c.thumbnail;
      _0x58111d = _0x55d97c.seconds;
      _0x3665e2 = _0x55d97c.views;
      _0x647f59 = _0x55d97c.ago;
      _0x2d0e1e = _0x55d97c.author.name;
    }
    const _0x333e51 = "https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x20c1cd);
    const _0x1436d7 = {
      timeout: 0x4e20
    };
    const {
      data: _0x378fcb
    } = await _0x2d21f0.get(_0x333e51, _0x1436d7);
    if (!_0x378fcb.success || !_0x378fcb.result?.["download_url"]) {
      return _0x4af714.reply("❌ *Download failed. Try again later.*");
    }
    const _0x544662 = _0x378fcb.result.download_url;
    const _0x1e070d = _0x378fcb.result.image || _0x5e118c;
    const _0x700663 = {
      url: _0x1e070d
    };
    await _0x25a99d.sendMessage(_0x4af714.from, {
      'image': _0x700663,
      'caption': "╭───⌈  *ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ*  ⌋\n│ 🏷️ *Title:* " + _0x3e0b13 + "\n│ ⏱️ *Duration:* " + _0x58111d + "s\n│ 👁️ *Views:* " + _0x3665e2.toLocaleString() + "\n│ 📤 *Uploaded:* " + _0x647f59 + "\n│ 🎙️ *Channel:* " + _0x2d0e1e + "\n╰──────────────────────────╯\n_▶ Sending video file next..._",
      'contextInfo': {
        'externalAdReply': {
          'title': _0x3e0b13,
          'body': "ɴᴏᴡ ᴘʟᴀʏɪɴɢ ᴠɪᴀ ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
          'thumbnailUrl': _0x1e070d,
          'sourceUrl': _0x20c1cd,
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x4af714
    });
    const _0x7c166a = {
      url: _0x544662
    };
    const _0x1dcef4 = {
      video: _0x7c166a,
      mimetype: "video/mp4",
      caption: "*▶️ Now Playing:* " + _0x3e0b13 + "\n⏳ *Duration:* " + _0x58111d + "s\n\n_🎧 Powered by Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ_",
      contextInfo: {}
    };
    _0x1dcef4.contextInfo.isForwarded = true;
    _0x1dcef4.contextInfo.forwardingScore = 0x309;
    _0x1dcef4.contextInfo.forwardedNewsletterMessageInfo = {};
    _0x1dcef4.contextInfo.externalAdReply = {};
    _0x1dcef4.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363369453603973@newsletter";
    _0x1dcef4.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ";
    _0x1dcef4.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x8f;
    _0x1dcef4.contextInfo.externalAdReply.title = "🎬 Shadow-Xtech YouTube Player";
    _0x1dcef4.contextInfo.externalAdReply.body = "Powered by Black-Tappy";
    _0x1dcef4.contextInfo.externalAdReply.thumbnailUrl = _0x1e070d;
    _0x1dcef4.contextInfo.externalAdReply.sourceUrl = _0x20c1cd;
    _0x1dcef4.contextInfo.externalAdReply.mediaType = 0x1;
    _0x1dcef4.contextInfo.externalAdReply.renderLargerThumbnail = true;
    await _0x25a99d.sendMessage(_0x4af714.from, _0x1dcef4, {
      'quoted': _0x4af714
    });
    if (typeof _0x4af714.React === "function") {
      await _0x4af714.React('✅');
    }
    await _0x4af714.reply("✅ *Video sent successfully!*\n\nKeep enjoying with *Shadow-Xtech*!");
  } catch (_0x44a1e5) {
    console.error("Video handler error:", _0x44a1e5);
    await _0x4af714.reply("❌ *An error occurred!*\nTry again or use a different video.\n\n_" + _0x44a1e5.message + '_');
    if (typeof _0x4af714.React === "function") {
      await _0x4af714.React('❌');
    }
  }
};
export default play2;
function _0x59c9ba(_0x1749a3) {
  function _0x170633(_0x408416) {
    if (typeof _0x408416 === "string") {
      return function (_0xca5fba) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x408416 / _0x408416).length !== 1 || _0x408416 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x170633(++_0x408416);
  }
  try {
    if (_0x1749a3) {
      return _0x170633;
    } else {
      _0x170633(0);
    }
  } catch (_0x19f12f) {}
}