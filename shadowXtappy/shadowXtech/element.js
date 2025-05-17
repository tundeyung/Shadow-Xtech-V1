const _0x170780 = function () {
  const _0xf43858 = {
    PsyAg: function (_0x185f97, _0x3317a9) {
      return _0x185f97 === _0x3317a9;
    },
    WYuUv: "BFhQL",
    viCjd: function (_0x593eda, _0x261142) {
      return _0x593eda !== _0x261142;
    },
    joOFs: "dilVu"
  };
  _0xf43858.DjVbs = function (_0x4ef3f9, _0x5b3faf) {
    return _0x4ef3f9 !== _0x5b3faf;
  };
  _0xf43858.eLAAn = "OtAhy";
  let _0x246f9f = true;
  return function (_0x13d3fb, _0x3a5cf4) {
    if (_0xf43858.DjVbs(_0xf43858.eLAAn, _0xf43858.eLAAn)) {
      const _0x459d5f = _0x405ecb ? function () {
        if (_0x38d765) {
          const _0xa4014d = _0x46df35.apply(_0x12dbc2, arguments);
          _0x55020b = null;
          return _0xa4014d;
        }
      } : function () {};
      _0x572200 = false;
      return _0x459d5f;
    } else {
      const _0x137269 = _0x246f9f ? function () {
        if (_0x3a5cf4) {
          const _0x53b027 = _0x3a5cf4.apply(_0x13d3fb, arguments);
          _0x3a5cf4 = null;
          return _0x53b027;
        }
      } : function () {};
      _0x246f9f = false;
      return _0x137269;
    }
  };
}();
const _0x2e88df = _0x170780(this, function () {
  return _0x2e88df.toString().search("(((.+)+)+)+$").toString().constructor(_0x2e88df).search("(((.+)+)+)+$");
});
_0x2e88df();
const _0x109f65 = function () {
  let _0xa40b64 = true;
  return function (_0x142e7e, _0x360761) {
    const _0x36becf = _0xa40b64 ? function () {
      if (_0x360761) {
        const _0x155549 = _0x360761.apply(_0x142e7e, arguments);
        _0x360761 = null;
        return _0x155549;
      }
    } : function () {};
    _0xa40b64 = false;
    return _0x36becf;
  };
}();
(function () {
  _0x109f65(this, function () {
    const _0x306914 = new RegExp("function *\\( *\\)");
    const _0x4148b0 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x492703 = _0x378fca("init");
    if (!_0x306914.test(_0x492703 + "chain") || !_0x4148b0.test(_0x492703 + "input")) {
      _0x492703('0');
    } else {
      _0x378fca();
    }
  })();
})();
const _0x19b7bb = function () {
  let _0x5a6f03 = true;
  return function (_0x138f67, _0x4bab4c) {
    const _0x5d49d0 = _0x5a6f03 ? function () {
      if (_0x4bab4c) {
        const _0x1ca5f8 = _0x4bab4c.apply(_0x138f67, arguments);
        _0x4bab4c = null;
        return _0x1ca5f8;
      }
    } : function () {};
    _0x5a6f03 = false;
    return _0x5d49d0;
  };
}();
const _0x6d92bb = _0x19b7bb(this, function () {
  const _0xc917ba = function () {
    let _0x2a8bde;
    try {
      _0x2a8bde = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x59ebe5) {
      _0x2a8bde = window;
    }
    return _0x2a8bde;
  };
  const _0x3cb920 = _0xc917ba();
  const _0x7f93d1 = _0x3cb920.console = _0x3cb920.console || {};
  const _0xee163b = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x2a0c51 = 0; _0x2a0c51 < _0xee163b.length; _0x2a0c51++) {
    const _0xbd663a = _0x19b7bb.constructor.prototype.bind(_0x19b7bb);
    const _0x573ca0 = _0xee163b[_0x2a0c51];
    const _0x254241 = _0x7f93d1[_0x573ca0] || _0xbd663a;
    _0xbd663a.__proto__ = _0x19b7bb.bind(_0x19b7bb);
    _0xbd663a.toString = _0x254241.toString.bind(_0x254241);
    _0x7f93d1[_0x573ca0] = _0xbd663a;
  }
});
_0x6d92bb();
(function () {
  const _0x485ddb = function () {
    let _0x1b7bd9;
    try {
      _0x1b7bd9 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x242faa) {
      _0x1b7bd9 = window;
    }
    return _0x1b7bd9;
  };
  const _0x327a6d = _0x485ddb();
  _0x327a6d.setInterval(_0x378fca, 4000);
})();
import _0x391710 from 'moment-timezone';
import 'fs';
import 'os';
import _0x5ce306 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x5ce306;
import _0x5247a4 from '../../config.cjs';
const joel = async (_0x4af0bd, _0x43f4d9) => {
  const _0x1a5f76 = _0x5247a4.PREFIX;
  const _0x269b7b = _0x4af0bd.body.startsWith(_0x1a5f76) ? _0x4af0bd.body.slice(_0x1a5f76.length).split(" ")[0].toLowerCase() : '';
  if (_0x269b7b === "elements") {
    await _0x4af0bd.React('💮');
    const _0x241020 = _0x391710().tz("Kenya/Nairobi").format("HH:mm:ss");
    let _0xb50e1f = '';
    if (_0x241020 < "05:00:00") {
      _0xb50e1f = "Good Morning 🌄";
    } else {
      if (_0x241020 < "11:00:00") {
        _0xb50e1f = "Good Morning 🌄";
      } else {
        if (_0x241020 < "15:00:00") {
          _0xb50e1f = "Good Afternoon 🌅";
        } else {
          if (_0x241020 < "18:00:00") {
            _0xb50e1f = "Good Evening 🌃";
          } else {
            if (_0x241020 < "19:00:00") {
              _0xb50e1f = "Good Evening 🌃";
            } else {
              _0xb50e1f = "Good Night 🌌";
            }
          }
        }
      }
    }
    await _0x4af0bd.React('☄️');
    const _0x3fa879 = {
      newsletterJid: "120363369453603973@newsletter",
      newsletterName: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      serverMessageId: -1
    };
    const _0x4e8577 = {
      title: "ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ",
      body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ",
      thumbnailUrl: "https://files.catbox.moe/3hrxbh.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
      mediaType: 0x1,
      renderLargerThumbnail: true
    };
    const _0x48f15b = {
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x3fa879,
      forwardingScore: 0x3e7,
      externalAdReply: _0x4e8577
    };
    const _0x2417a4 = {
      text: "*Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ Eʟᴇᴍᴇɴᴛ*\nHere is a list of all 118 elements in the periodic table \n\n--------------------\n1. *Hydrogen* - H\n2. *Helium* - He\n3. *Lithium* - Li\n4. *Beryllium* - Be\n5. *Boron* - B\n6. *Carbon* - C\n7. *Nitrogen* - N\n8. *Oxygen* - O\n9. *Fluorine* - F\n10. *Neon* - Ne\n11. *Sodium* - Na\n12. *Magnesium* - Mg\n13. *Aluminum* - Al\n14. *Silicon* - Si\n15. *Phosphorus* - P\n16. *Sulfur* - S\n17. *Chlorine* - Cl\n18. *Argon* - Ar\n19. *Potassium* - K\n20. *Calcium* - Ca\n21. *Scandium* - Sc\n22. *Titanium* - Ti\n23. *Vanadium* - V\n24. *Chromium* - Cr\n25. *Manganese* - Mn\n26. *Iron* - Fe\n27. *Cobalt* - Co\n28. *Nickel* - Ni\n29. *Copper* - Cu\n30. *Zinc* - Zn\n31. *Gallium* - Ga\n32. *Germanium* - Ge\n33. *Arsenic* - As\n34. *Selenium* - Se\n35. *Bromine* - Br\n36. *Krypton* - Kr\n37. *Rubidium* - Rb\n38. *Strontium* - Sr\n39. *Yttrium* - Y\n40. *Zirconium* - Zr\n41. *Niobium* - Nb\n42. *Molybdenum* - Mo\n43. *Technetium* - Tc\n44. *Ruthenium* - Ru\n45. *Rhodium* - Rh\n46. *Palladium* - Pd\n47. *Silver* - Ag\n48. *Cadmium* - Cd\n49. *Indium* - In\n50. *Tin* - Sn\n51. *Antimony* - Sb\n52. *Tellurium* - Te\n53. *Iodine* - I\n54. *Xenon* - Xe\n55. *Cesium* - Cs\n56. *Barium* - Ba\n57. *Lanthanum* - La\n58. *Cerium* - Ce\n59. *Praseodymium* - Pr\n60. *Neodymium* - Nd\n61. *Promethium* - Pm\n62. *Samarium* - Sm\n63. *Europium* - Eu\n64. *Gadolinium* - Gd\n65. *Terbium* - Tb\n66. *Dysprosium* - Dy\n67. *Holmium* - Ho\n68. *Erbium* - Er\n69. *Thulium* - Tm\n70. *Ytterbium* - Yb\n71. *Lutetium* - Lu\n72. *Hafnium* - Hf\n73. *Tantalum* - Ta\n74. *Tungsten* - W\n75. *Rhenium* - Re\n76. *Osmium* - Os\n77. *Iridium* - Ir\n78. *Platinum* - Pt\n79. *Gold* - Au\n80. *Mercury* - Hg\n81. *Thallium* - Tl\n82. *Lead* - Pb\n83. *Bismuth* - Bi\n84. *Polonium* - Po\n85. *Astatine* - At\n86. *Radon* - Rn\n87. *Francium* - Fr\n88. *Radium* - Ra\n89. *Actinium* - Ac\n90. *Thorium* - Th\n91. *Protactinium* - Pa\n92. *Uranium* - U\n93. *Neptunium* - Np\n94. *Plutonium* - Pu\n95. *Americium* - Am\n96. *Curium* - Cm\n97. *Berkelium* - Bk\n98. *Californium* - Cf\n99. *Einsteinium* - Es\n100. *Fermium* - Fm\n101. *Mendelevium* - Md\n102. *Nobelium* - No\n103. *Lawrencium* - Lr\n104. *Rutherfordium* - Rf\n105. *Dubnium* - Db\n106. *Seaborgium* - Sg\n107. *Bohrium* - Bh\n108. *Hassium* - Hs\n109. *Meitnerium* - Mt\n110. *Darmstadtium* - Ds\n111. *Roentgenium* - Rg\n112. *Copernicium* - Cn\n113. *Nihonium* - Nh\n114. *Flerovium* - Fl\n115. *Moscovium* - Mc\n116. *Livermorium* - Lv\n117. *Tennessine* - Ts\n118. *Oganesson* - Og\n\n-----------------------\n\nnote: the periodic table contains 118 elements. There are no elements beyond element 118, though some scientists are researching potential elements beyond the current periodic table.",
      contextInfo: _0x48f15b
    };
    _0x43f4d9.sendMessage(_0x4af0bd.from, _0x2417a4, {
      'quoted': _0x4af0bd
    });
  }
};
export default joel;
function _0x378fca(_0x54d50a) {
  function _0x47fae4(_0x5398f9) {
    if (typeof _0x5398f9 === "string") {
      return function (_0x1e0209) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x5398f9 / _0x5398f9).length !== 1 || _0x5398f9 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x47fae4(++_0x5398f9);
  }
  try {
    if (_0x54d50a) {
      return _0x47fae4;
    } else {
      _0x47fae4(0);
    }
  } catch (_0x3b8ae4) {}
}