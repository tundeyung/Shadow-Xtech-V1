function hi() {
  const _0x1bcc90 = function () {
    let _0x4d6687 = true;
    return function (_0x242934, _0x461759) {
      const _0x7c8966 = _0x4d6687 ? function () {
        if (_0x461759) {
          const _0x9d2b7f = _0x461759.apply(_0x242934, arguments);
          _0x461759 = null;
          return _0x9d2b7f;
        }
      } : function () {};
      _0x4d6687 = false;
      return _0x7c8966;
    };
  }();
  const _0x28639b = _0x1bcc90(this, function () {
    return _0x28639b.toString().search("(((.+)+)+)+$").toString().constructor(_0x28639b).search("(((.+)+)+)+$");
  });
  _0x28639b();
  const _0x3f10be = function () {
    let _0x4c4bda = true;
    return function (_0x2d01b2, _0x31e822) {
      const _0x266f64 = _0x4c4bda ? function () {
        if (_0x31e822) {
          const _0x1035f3 = _0x31e822.apply(_0x2d01b2, arguments);
          _0x31e822 = null;
          return _0x1035f3;
        }
      } : function () {};
      _0x4c4bda = false;
      return _0x266f64;
    };
  }();
  (function () {
    _0x3f10be(this, function () {
      const _0x111cd2 = new RegExp("function *\\( *\\)");
      const _0x46fbed = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x299ce9 = _0x547b4e("init");
      if (!_0x111cd2.test(_0x299ce9 + "chain") || !_0x46fbed.test(_0x299ce9 + "input")) {
        _0x299ce9('0');
      } else {
        _0x547b4e();
      }
    })();
  })();
  const _0x4dff7f = function () {
    let _0x57be1a = true;
    return function (_0x4c3d7e, _0x448d99) {
      const _0x50f1bc = _0x57be1a ? function () {
        if (_0x448d99) {
          const _0x505016 = _0x448d99.apply(_0x4c3d7e, arguments);
          _0x448d99 = null;
          return _0x505016;
        }
      } : function () {};
      _0x57be1a = false;
      return _0x50f1bc;
    };
  }();
  const _0x3d7cb8 = _0x4dff7f(this, function () {
    const _0x3e0e50 = function () {
      let _0x1b87a3;
      try {
        _0x1b87a3 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x5cac1f) {
        _0x1b87a3 = window;
      }
      return _0x1b87a3;
    };
    const _0x5ca7a2 = _0x3e0e50();
    const _0x1701eb = _0x5ca7a2.console = _0x5ca7a2.console || {};
    const _0x423f99 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x13e901 = 0; _0x13e901 < _0x423f99.length; _0x13e901++) {
      const _0x4c26ea = _0x4dff7f.constructor.prototype.bind(_0x4dff7f);
      const _0x4f10f4 = _0x423f99[_0x13e901];
      const _0x52558a = _0x1701eb[_0x4f10f4] || _0x4c26ea;
      _0x4c26ea.__proto__ = _0x4dff7f.bind(_0x4dff7f);
      _0x4c26ea.toString = _0x52558a.toString.bind(_0x52558a);
      _0x1701eb[_0x4f10f4] = _0x4c26ea;
    }
  });
  _0x3d7cb8();
  console.log("Hello World!");
}
hi();
import _0x31a193 from '../../config.cjs';
const profileCommand = async (_0x2dbeb7, _0x523256) => {
  const _0x4affb1 = _0x31a193.PREFIX;
  const _0x65bb52 = _0x2dbeb7.body.startsWith(_0x4affb1) ? _0x2dbeb7.body.slice(_0x4affb1.length).split(" ")[0].toLowerCase() : '';
  if (_0x65bb52 === "profile" || _0x65bb52 === "whois") {
    let _0x3c2c23 = _0x2dbeb7.quoted ? _0x2dbeb7.quoted.sender : _0x2dbeb7.sender;
    let _0xc65167 = _0x2dbeb7.quoted ? '@' + _0x3c2c23.split('@')[0] : _0x2dbeb7.pushName || "Unknown";
    let _0x24f26f;
    try {
      _0x24f26f = await _0x523256.profilePictureUrl(_0x3c2c23, "image");
    } catch {
      _0x24f26f = "https://telegra.ph/file/95680cd03e012bb08b9e6.jpg";
    }
    let _0x2e318b;
    try {
      _0x2e318b = await _0x523256.fetchStatus(_0x3c2c23);
    } catch (_0x6851f8) {
      const _0x313444 = {
        status: "💬 About not accessible due to user privacy"
      };
      _0x2e318b = _0x313444;
    }
    const _0x507bbc = "╭──❍ *ᴘʀᴏғɪʟᴇ ɪɴғᴏ* ❍──╮\n\n│  *👑 Name:* " + _0xc65167 + "\n\n│  *♻️ About:* " + _0x2e318b.status + "\n\n╰───────────────━⊷\n\n╭─「 *ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ɴᴇᴡꜱ* 」─╮\n\n│ 🟢 Stay tuned for new features,\n\n│ ⚙️ epic commands, and secret drops!\n\n│ 🎀 Join our channel for updates:\n\n╰───────────────━⊷\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*";
    const _0x14f957 = {
      url: _0x24f26f
    };
    const _0x377565 = {
      mentions: [_0x3c2c23]
    };
    const _0x55e3c3 = {
      'image': _0x14f957,
      'caption': _0x507bbc,
      'thumbnail': "https://files.catbox.moe/3hrxbh.jpg",
      'contextInfo': {
        'isForwarded': true,
        'forwardingScore': 0x3e7,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363369453603973@newsletter",
          'newsletterName': "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
          'serverMessageId': 0x8f
        },
        'externalAdReply': {
          'title': "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
          'body': "Powered by Black-Tappy 🎀",
          'thumbnailUrl': "https://files.catbox.moe/3hrxbh.jpg",
          'sourceUrl': "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
          'mediaType': 0x1,
          'renderLargerThumbnail': false
        }
      },
      ...(_0x2dbeb7.quoted ? _0x377565 : {})
    };
    await _0x523256.sendMessage(_0x2dbeb7.from, _0x55e3c3, {
      'quoted': _0x2dbeb7
    });
  }
};
export default profileCommand;
(function () {
  let _0x5653fc;
  try {
    const _0x4c5d3a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5653fc = _0x4c5d3a();
  } catch (_0x12b027) {
    _0x5653fc = window;
  }
  _0x5653fc.setInterval(_0x547b4e, 4);
})();
function _0x547b4e(_0x5609ca) {
  function _0x5965ee(_0x46d018) {
    if (typeof _0x46d018 === "string") {
      return function (_0x4fc283) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x46d018 / _0x46d018).length !== 1 || _0x46d018 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x5965ee(++_0x46d018);
  }
  try {
    if (_0x5609ca) {
      return _0x5965ee;
    } else {
      _0x5965ee(0);
    }
  } catch (_0x3fc784) {}
}