// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"svg.js":[function(require,module,exports) {
!function (e) {
  var t,
      c,
      _n,
      o,
      i,
      a,
      _l,
      d = '<svg><symbol id="icon-qingkong" viewBox="0 0 1024 1024"><path d="M51.227 667.58V504.606c0-49.921 40.417-90.532 90.092-90.532h217.437V90.532C358.755 40.612 399.172 0 448.847 0h126.3c49.68 0 90.092 40.612 90.092 90.532v323.541h217.442c49.675 0 90.092 40.612 90.092 90.532V667.58H51.227z m835.75-162.974c0-2.381-1.93-4.322-4.296-4.322H643.789c-35.481 0-64.346-29.003-64.346-64.658V90.532c0-2.381-1.925-4.322-4.296-4.322h-126.3c-2.371 0-4.301 1.941-4.301 4.322v345.094c0 35.655-28.865 64.658-64.346 64.658H141.319c-2.371 0-4.296 1.941-4.296 4.322v76.763h749.955v-76.763z m85.796 428.862c0 49.921-40.417 90.532-90.092 90.532H141.319c-49.675 0-90.092-40.612-90.092-90.532V721.674h921.547v211.794z m-835.75 0c0 2.381 1.925 4.322 4.296 4.322h511.58v-60.925c0-23.77 19.243-43.11 42.895-43.11 23.652 0 42.895 19.341 42.895 43.11v60.925h11.736v-60.925c0-23.77 19.243-43.11 42.895-43.11 23.652 0 42.895 19.341 42.895 43.11v60.925h46.464c2.371 0 4.296-1.941 4.296-4.322V807.885H137.023v125.583z"  ></path></symbol><symbol id="icon-xiangpi" viewBox="0 0 1024 1024"><path d="M973.952 243.712l-194.56-194.56c-64.512-64.512-178.176-64.512-243.2 0.512L50.304 535.552c-67.072 67.072-67.072 176.128 0 242.688l194.56 194.56c32.256 32.256 75.264 50.176 121.344 50.176s89.088-17.92 121.344-50.176L973.44 486.912c67.584-67.072 67.584-176.128 0.512-243.2z m-48.64 194.56L484.48 879.104 682.624 680.96l-340.48-339.968 243.2-243.2C604.8 78.336 630.4 67.584 658.048 67.584c27.648 0 53.76 10.752 72.704 30.208l194.56 194.56c39.936 40.448 39.936 105.472 0 145.92z"  ></path></symbol><symbol id="icon-huabi" viewBox="0 0 1078 1024"><path d="M188.61 545.415a243.76 243.76 0 0 0-64.292 230.354c0 2.438 0 4.875 1.828 7.008a163.93 163.93 0 0 1-45.4 145.952A163.32 163.32 0 0 1 0 972.911a457.052 457.052 0 0 0 533.227-82.879A243.76 243.76 0 0 0 188.61 545.415zM1068.587 9.75a36.26 36.26 0 0 0-45.705-3.047l-490.264 372.65a25.9 25.9 0 0 0-2.438 39.916l129.193 129.193a25.9 25.9 0 0 0 41.44-2.742l371.126-489.96a36.26 36.26 0 0 0-3.352-46.01z"  ></path></symbol><symbol id="icon-xiazai1x" viewBox="0 0 1024 1024"><path d="M994.83041223 695.81179222v185.66106112c0 15.43736889-5.29142557 28.71447666-16.16554666 39.46723555a53.64243001 53.64243001 0 0 1-39.46723556 16.16554667H84.80236999c-15.43736889 0-28.71447666-5.29142557-39.46723556-16.16554667a53.64243001 53.64243001 0 0 1-16.16554666-39.46723555v-185.66106112c0-15.4616411 5.29142557-28.73875001 16.16554666-39.46723555a53.64243001 53.64243001 0 0 1 39.46723556-16.18981888h269.91123001l78.35192889 78.95874331c22.45214777 21.72396999 48.64227555 32.47672889 78.93447111 32.4767289 30.29219555 0 56.48232334-10.8741211 78.93447111-32.4767289l78.95874332-78.95874331h269.42577778c15.43736889 0 28.71447666 5.33996999 39.46723556 16.18981888 10.51003221 10.97121223 16.04418333 24.12695666 16.04418446 39.46723555z m-188.54950002-330.1315311c6.65068999 15.80145778 3.88361443 29.44265443-8.20413554 40.68086443L538.06876445 666.36913779a34.27290112 34.27290112 0 0 1-26.06876445 10.97121222c-10.51003221 0-19.17534777-3.61661667-26.06876445-10.97121222L225.80186112 406.36112555c-11.96638777-11.23820999-14.73346333-24.75804445-8.20413667-40.68086443 6.62641778-15.09755221 17.9617189-22.57351111 34.27290112-22.57351111h148.59681109V83.09873779c0-10.02458112 3.61661667-18.83553223 10.97121223-26.09303667a35.87489223 35.87489223 0 0 1 26.09303666-10.97121223h148.57254002c10.02458112 0 18.83553223 3.61661667 26.09303665 10.97121223 7.23323221 7.37886777 10.97121223 16.06845667 10.97121223 26.09303667v260.00801222h148.71817444c16.28691001 0 27.76784555 7.4759589 34.39426332 22.57351111z m-45.38974776 486.32566443c7.37886777-7.35459555 10.99548445-16.04418333 10.99548444-26.06876445 0-10.02458112-3.64088889-18.83553223-10.97121223-26.06876443a36.06907221 36.06907221 0 0 0-26.09303666-10.99548445c-10.00030777 0-18.81125888 3.64088889-26.06876445 10.99548445a36.06907221 36.06907221 0 0 0-10.97121222 26.06876443c0 10.02458112 3.61661667 18.83553223 10.97121222 26.06876445 7.37886777 7.25750557 15.94709333 10.99548445 26.06876445 10.99548445a34.95253333 34.95253333 0 0 0 26.09303666-10.99548445z m148.59681222 0c7.37886777-7.35459555 10.99548445-16.04418333 10.99548445-26.06876445 0-10.02458112-3.64088889-18.83553223-10.99548445-26.06876443a36.06907221 36.06907221 0 0 0-26.06876444-10.99548445c-10.00030777 0-18.83553223 3.64088889-26.06876444 10.99548445a36.06907221 36.06907221 0 0 0-10.97121224 26.06876443c0 10.02458112 3.61661667 18.83553223 10.97121224 26.06876445 7.35459555 7.25750557 15.94709333 10.99548445 26.06876444 10.99548445 10.02458112 0.12136334 18.71416889-3.64088889 26.06876444-10.99548445z"  ></path></symbol><symbol id="icon-huifu" viewBox="0 0 1024 1024"><path d="M1024 896s-96-556.8-595.2-556.8V128L0 512l428.8 358.4V627.2c268.8 0 454.4 19.2 595.2 268.8z"  ></path></symbol></svg>',
      s = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  function h() {
    a || (a = !0, o());
  }

  c = function c() {
    var e,
        t,
        c,
        n,
        o,
        i = document.createElement("div");
    i.innerHTML = d, d = null, (e = i.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (c = document.body).firstChild ? (n = t, (o = c.firstChild).parentNode.insertBefore(n, o)) : c.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(c, 0) : (_n = function n() {
    document.removeEventListener("DOMContentLoaded", _n, !1), c();
  }, document.addEventListener("DOMContentLoaded", _n, !1)) : document.attachEvent && (o = c, i = e.document, a = !1, (_l = function l() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(_l, 50);
    }

    h();
  })(), i.onreadystatechange = function () {
    "complete" == i.readyState && (i.onreadystatechange = null, h());
  });
}(window);
},{}],"../../software/nodejs/node_cache/_npx/224/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59722" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../software/nodejs/node_cache/_npx/224/node_modules/parcel/src/builtins/hmr-runtime.js","svg.js"], null)
//# sourceMappingURL=/svg.559f1883.js.map