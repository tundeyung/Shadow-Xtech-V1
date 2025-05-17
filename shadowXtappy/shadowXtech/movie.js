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
const _0x264065 = function () {
  let _0x396b9f = true;
  return function (_0x394e8b, _0x1cd42a) {
    const _0x399839 = _0x396b9f ? function () {
      if (_0x1cd42a) {
        const _0x4b53ef = _0x1cd42a.apply(_0x394e8b, arguments);
        _0x1cd42a = null;
        return _0x4b53ef;
      }
    } : function () {};
    _0x396b9f = false;
    return _0x399839;
  };
}();
const _0x33ec19 = _0x264065(this, function () {
  return _0x33ec19.toString().search("(((.+)+)+)+$").toString().constructor(_0x33ec19).search("(((.+)+)+)+$");
});
_0x33ec19();
const _0x4d4411 = function () {
  let _0x145d0b = true;
  return function (_0x339ad3, _0x30d7a7) {
    const _0x2a9cec = _0x145d0b ? function () {
      if (_0x30d7a7) {
        const _0x1720ba = _0x30d7a7.apply(_0x339ad3, arguments);
        _0x30d7a7 = null;
        return _0x1720ba;
      }
    } : function () {};
    _0x145d0b = false;
    return _0x2a9cec;
  };
}();
(function () {
  _0x4d4411(this, function () {
    const _0x16e525 = new RegExp("function *\\( *\\)");
    const _0x4d3e13 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x2d6575 = _0x1ee1c2("init");
    if (!_0x16e525.test(_0x2d6575 + "chain") || !_0x4d3e13.test(_0x2d6575 + "input")) {
      _0x2d6575('0');
    } else {
      _0x1ee1c2();
    }
  })();
})();
const _0x54a1c3 = function () {
  let _0x1f3b89 = true;
  return function (_0x18fe28, _0x16b28f) {
    const _0x20335d = _0x1f3b89 ? function () {
      if (_0x16b28f) {
        const _0x340b4b = _0x16b28f.apply(_0x18fe28, arguments);
        _0x16b28f = null;
        return _0x340b4b;
      }
    } : function () {};
    _0x1f3b89 = false;
    return _0x20335d;
  };
}();
(function () {
  const _0x36c780 = function () {
    let _0x14e763;
    try {
      _0x14e763 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5e1604) {
      _0x14e763 = window;
    }
    return _0x14e763;
  };
  const _0x2c923b = _0x36c780();
  _0x2c923b.setInterval(_0x1ee1c2, 4000);
})();
const _0x326b17 = _0x54a1c3(this, function () {
  let _0x2f0ed8;
  try {
    const _0x4a52dc = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2f0ed8 = _0x4a52dc();
  } catch (_0x192ae5) {
    _0x2f0ed8 = window;
  }
  const _0x534454 = _0x2f0ed8.console = _0x2f0ed8.console || {};
  const _0x214f9b = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x4f0239 = 0; _0x4f0239 < _0x214f9b.length; _0x4f0239++) {
    const _0x3afa3f = _0x54a1c3.constructor.prototype.bind(_0x54a1c3);
    const _0x5b99fd = _0x214f9b[_0x4f0239];
    const _0x538ff8 = _0x534454[_0x5b99fd] || _0x3afa3f;
    _0x3afa3f.__proto__ = _0x54a1c3.bind(_0x54a1c3);
    _0x3afa3f.toString = _0x538ff8.toString.bind(_0x538ff8);
    _0x534454[_0x5b99fd] = _0x3afa3f;
  }
});
_0x326b17();
import _0x387848 from 'axios';
import _0xe82bcd from '../../config.cjs';
const imdb = async (_0x3bbcd1, _0x5a7c49) => {
  try {
    const _0x2a3cf5 = _0xe82bcd.PREFIX;
    const _0x21dc8d = _0x3bbcd1.body.startsWith(_0x2a3cf5) ? _0x3bbcd1.body.slice(_0x2a3cf5.length).split(" ")[0].toLowerCase() : '';
    const _0x4bebdb = _0x3bbcd1.body.slice(_0x2a3cf5.length + _0x21dc8d.length).trim();
    const _0x1cd500 = ["movie"];
    if (!_0x1cd500.includes(_0x21dc8d)) {
      return;
    }
    if (!_0x4bebdb) {
      return _0x3bbcd1.reply("Give me a series or movie name");
    }
    let _0x42508c = await _0x387848.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + encodeURIComponent(_0x4bebdb) + "&plot=full");
    let _0x358502 = '';
    if (_0x42508c.data.Response === "False") {
      return _0x3bbcd1.reply("Movie or series not found");
    }
    _0x358502 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n";
    _0x358502 += " ```*ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ᴍᴏᴠɪᴇs*```\n";
    _0x358502 += "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
    _0x358502 += "🎬Title      : " + _0x42508c.data.Title + "\n";
    _0x358502 += "📅Year       : " + _0x42508c.data.Year + "\n";
    _0x358502 += "⭐Rated      : " + _0x42508c.data.Rated + "\n";
    _0x358502 += "📆Released   : " + _0x42508c.data.Released + "\n";
    _0x358502 += "⏳Runtime    : " + _0x42508c.data.Runtime + "\n";
    _0x358502 += "🌀Genre      : " + _0x42508c.data.Genre + "\n";
    _0x358502 += "👨🏻‍💻Director   : " + _0x42508c.data.Director + "\n";
    _0x358502 += "✍Writer     : " + _0x42508c.data.Writer + "\n";
    _0x358502 += "👨Actors     : " + _0x42508c.data.Actors + "\n";
    _0x358502 += "📃Plot       : " + _0x42508c.data.Plot + "\n";
    _0x358502 += "🌐Language   : " + _0x42508c.data.Language + "\n";
    _0x358502 += "🌍Country    : " + _0x42508c.data.Country + "\n";
    _0x358502 += "🎖️Awards     : " + _0x42508c.data.Awards + "\n";
    _0x358502 += "📦BoxOffice  : " + _0x42508c.data.BoxOffice + "\n";
    _0x358502 += "🏙️Production : " + _0x42508c.data.Production + "\n";
    _0x358502 += "🌟imdbRating : " + _0x42508c.data.imdbRating + "\n";
    _0x358502 += "✅imdbVotes  : " + _0x42508c.data.imdbVotes + "\n";
    const _0x3c871c = {
      url: _0x42508c.data.Poster
    };
    const _0x42deb6 = {
      image: _0x3c871c,
      caption: _0x358502
    };
    await _0x5a7c49.sendMessage(_0x3bbcd1.from, _0x42deb6, {
      'quoted': _0x3bbcd1
    });
  } catch (_0x21617e) {
    console.error("Error:", _0x21617e);
    _0x3bbcd1.reply("An error occurred while fetching the data.");
  }
};
export default imdb;
function _0x1ee1c2(_0x4c3ac7) {
  function _0x2be764(_0x12f483) {
    if (typeof _0x12f483 === "string") {
      return function (_0x354739) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x12f483 / _0x12f483).length !== 1 || _0x12f483 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x2be764(++_0x12f483);
  }
  try {
    if (_0x4c3ac7) {
      return _0x2be764;
    } else {
      _0x2be764(0);
    }
  } catch (_0x25b287) {}
}