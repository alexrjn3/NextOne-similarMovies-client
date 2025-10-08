// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _cautaFilmJs = require("./controllerCautaFilm/cautaFilm.js");
var _schimbaActorJs = require("./controllerSchimbaActor/schimbaActor.js");
var _liveSearchJs = require("./controllerLiveSearch/liveSearch.js");
var _controllerPlayTrailerJs = require("./controllerPlayTrailer/controllerPlayTrailer.js");
//elemente html
const movie_btn = document.querySelector(".btn-search-movie");
const select = document.querySelector(".actorSelect");
const movieInput = document.querySelector('.search-movie'); // Get the input value
const resultsBox = document.querySelector('.results-box');
const titleApp = document.querySelector('.title-app');
const searchMovieId = document.querySelector('.search-movie-id');
//functii event
movie_btn.addEventListener("click", (0, _cautaFilmJs.cautaFilm));
select.addEventListener("change", (0, _schimbaActorJs.schimbaActor));
movieInput.addEventListener('input', (0, _liveSearchJs.liveSearch));
movieInput.addEventListener('keydown', (0, _liveSearchJs.liveSearch));
resultsBox.addEventListener('click', function(e) {
    (0, _liveSearchJs.liveSearchSelect)(e);
    (0, _cautaFilmJs.cautaFilm)();
});
titleApp.addEventListener('click', ()=>{
    location.reload(); //pe viitor resetam prin eliminare modificari in dom de la cel original
});
document.addEventListener('click', (0, _controllerPlayTrailerJs.playTrailer));
document.addEventListener('click', function(e) {
    // Dacă clickul NU a fost în interiorul resultsBox sau pe input
    if (!resultsBox.contains(e.target) && !movieInput.contains(e.target)) {
        resultsBox.classList.add('hidden');
        resultsBox.innerHTML = '';
    }
});
document.addEventListener('click', function(e) {
    // Verificăm dacă s-a dat click pe un .movie-poster sau pe copilul său (ex: img)
    const poster = e.target.closest('.movie-poster');
    // Dacă nu am dat click pe un .movie-poster, ieșim
    if (!poster) return;
    // Caută imaginea din interior și extrage data-id
    const img = poster.querySelector('img');
    const movieId = img?.dataset.id;
    const movieName = img?.alt;
    if (movieId) {
        console.log("Ai dat click pe filmul cu ID:", movieId);
        console.log("Ai dat click pe filmul:", movieName);
    // Poți face ce vrei cu movieId aici (ex: navigare, deschidere detalii etc.)
    }
    movieInput.value = movieName;
    searchMovieId.value = movieId;
    (0, _cautaFilmJs.cautaFilm)();
});
document.addEventListener('click', (e)=>{
    if (e.target && e.target.id === 'toggleVoteBtn') {
        const btn = e.target;
        const voteSpan = document.getElementById('voteValue');
        if (voteSpan.style.display === 'none') {
            voteSpan.style.display = 'inline';
            btn.textContent = 'HIDE';
        } else {
            voteSpan.style.display = 'none';
            btn.textContent = 'SHOW';
        }
    }
});

},{"./controllerCautaFilm/cautaFilm.js":"e6BSj","./controllerSchimbaActor/schimbaActor.js":"hHPTC","./controllerLiveSearch/liveSearch.js":"h58iu","./controllerPlayTrailer/controllerPlayTrailer.js":"92xyD"}],"e6BSj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cautaFilm", ()=>cautaFilm);
var _apiJs = require("../../util/api.js");
var _schimbaActorJs = require("../controllerSchimbaActor/schimbaActor.js");
const movie_input = document.querySelector(".search-movie");
const movie_btn = document.querySelector(".btn-search-movie");
const movie_result = document.querySelector(".movie-result");
const div_search = document.querySelector(".home-page");
const rec_for_plots = document.querySelector(".rec-for-plot");
const rec_for_actors = document.querySelector(".rec-for-actors");
const rec_for_idea = document.querySelector(".rec-for-idea");
const ideaMoviesCard = document.querySelector(".idea-movies-card");
const select = document.querySelector(".actorSelect");
const plotMoviesCard = document.querySelector(".plot-movies-card");
const errorMessageSearch = document.querySelector(".error-message-search");
const actorsMovieCard = document.querySelector(".actors-movies-card");
const searchMovieId = document.querySelector(".search-movie-id");
const searchBar = document.querySelector(".search-bar");
const loginForm = document.querySelector(".login-form");
const resultBox = document.querySelector(".results-box");
let stare = {}; //in viitor creat clasa
//la stare avem query, queryID, movie, credits, topActors, director
let rezultate = {}; // clasa in viitor?
//la rezultate avem directorMovies,
const genreName = function(id) {
    const genres = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };
    return genres[id] || "";
};
function popularityCategory(popularity) {
    if (popularity >= 100) return {
        label: "Very Popular"
    };
    if (popularity >= 30) return {
        label: "Popular"
    };
    if (popularity >= 10) return {
        label: "Known"
    };
    if (popularity >= 1) return {
        label: "Not Popular"
    };
    return {
        label: "Unknown / Low Popularity"
    };
}
const generateMarkupMovie = function() {
    movie_result.innerHTML = "";
    console.log(stare.topActors);
    movie_result.innerHTML = `
  <div class="movie-card">
    <div class="poster-container">
        <img src="https://image.tmdb.org/t/p/w300${stare.movie.poster_path}" alt="${stare.movie.title} poster" class="poster" >
        <div class="overlay" data-movie-id="${stare.movie.id}">
          <i class="fas fa-play icon"></i>
          <p class="paragraph-poster">PLAY TRAILER</p>
        </div>
    </div>
    <div class="movie-info">
      <h2 class="content">${stare.movie.title} (${stare.movie.release_date.slice(0, 4)})</h2>
      <p class="content"><strong class="content">Director: </strong> ${stare.director ? stare.director.name : "Unknown"}</p>
      <p class="content"><strong class="content">Top Actors: </strong> ${stare.topActors.map((a)=>a.name).join(", ")}</p>
      <p class="content"><strong class="content">Summary: </strong> ${stare.movie.overview}</p>
      <p class="content"><strong class="content">Release Date: </strong> ${stare.movie.release_date}</p>
      <p class="content"><strong class="content">Genre: </strong> ${stare.movie.genre_ids.map((g)=>genreName(g)).join(", ")}
      </p>
      <p class="content">
        <strong class="content">Popularity Score: </strong> ${(()=>{
        const { label } = popularityCategory(stare.movie.popularity);
        return `<span style="color: #E84545; font-weight: bold;">${label} (${stare.movie.popularity.toLocaleString()})</span>`;
    })()}
      </p>
      <p class="content">
        <strong class="content">Vote Average: </strong>
        <span id="voteValue" style="display:none;">
          ${stare.movie.vote_average.toFixed(1)}
        </span>
        <button id="toggleVoteBtn">SHOW</button>
      </p>
    </div>
  </div>
  `;
    //setam form in hidden
    div_search.classList.add("hidden");
};
const generateMarkupDirector = function(movie_d) {
    ideaMoviesCard.innerHTML += `
    <div class="idea-movies-card-item movie-poster">
    <img src="https://image.tmdb.org/t/p/w300${movie_d.poster_path}" alt="${movie_d.title}" data-id="${movie_d.id}">
    </div>
  `;
};
const getMovie = async function() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(stare.query)}`, (0, _apiJs.options));
    const data = await response.json();
    console.log(data);
    if (stare.queryID) stare.movie = data.results.find((movie)=>movie.id == stare.queryID);
    else stare.movie = data.results[0];
    if (!stare.movie) {
        errorMessageSearch.innerHTML = `No movie found`;
        return;
    }
};
const getCredits = async function() {
    const response2 = await fetch(`https://api.themoviedb.org/3/movie/${stare.movie.id}/credits`, (0, _apiJs.options));
    stare.credits = await response2.json();
    stare.topActors = stare.credits.cast.slice(0, 5);
    console.log(stare.credits);
    stare.director = stare.credits.crew.find((person)=>person.job === "Director");
    //afisam film:
    generateMarkupMovie();
};
const getOtherDirectorMovies = async function() {
    try {
        ideaMoviesCard.innerHTML = "";
        const response3 = await fetch(`https://api.themoviedb.org/3/person/${stare.director.id}/movie_credits`, (0, _apiJs.options));
        const directorCredits = await response3.json();
        //luam filmele directorului
        const directorMovies = directorCredits.crew.filter((movie)=>movie.job === "Director");
        //le sortam bazat pe popularitate
        rezultate.directorMovies = directorMovies.sort((a, b)=>b.popularity - a.popularity);
        console.log(rezultate.directorMovies); // Log the movies
        //Afisam filmele directorului in cards:
        let count = 0; // câte filme am adăugat deja
        for(let i = 0; i < rezultate.directorMovies.length; i++){
            const movie_d = rezultate.directorMovies[i];
            if (movie_d.id == stare.movie.id) continue; // dacă filmul e exclus, treci la următorul
            // dacă are poster, adaugă-l
            if (movie_d.poster_path) {
                generateMarkupDirector(movie_d);
                count++;
            }
            if (count === 6) break; // dacă avem deja 6 filme adăugate, oprim
        }
        if (!count) {
            //REFACTORIZAT
            const p = document.createElement("p");
            p.className = "director-error-msg";
            p.innerHTML = "Nu s-au gasit filme anterioare ale directorului";
            ideaMoviesCard.appendChild(p);
            throw error("Nu s-au gasit filme anterioare ale directorului");
        }
    } catch (err) {
        console.log(err);
    }
};
const populateActors = async function() {
    //populare select cu actori
    // select.innerHTML = `<option value="">Selectează un actor</option>`; // resetare
    try {
        actorsMovieCard.innerHTML = "";
        select.innerHTML = "";
        if (!Array.isArray(stare.topActors) || stare.topActors.length === 0) throw error("Nu s-au gasit actori");
        stare.topActors.forEach((actor)=>{
            const option = document.createElement("option");
            option.value = actor.id;
            option.textContent = actor.name;
            select.appendChild(option);
        });
        //Generam markup pentru primul actor
        const filme_actor = await (0, _schimbaActorJs.getFilmeActor)(stare.topActors[0].id);
        if (filme_actor.length == 1) {
            //REFACTORIZAT
            const p = document.createElement("p");
            p.className = "actor-error-msg";
            p.innerHTML = "Nu s-au gasit filme anterioare ale actorului";
            actorsMovieCard.appendChild(p);
            throw error("Nu s-au gasit filme anterioare ale actorului");
        }
        (0, _schimbaActorJs.generateMarkupActorFilme)(filme_actor);
    } catch (err) {
        console.log(err);
    }
};
const unhideCards = function() {
    movie_result.classList.remove("hidden");
    rec_for_idea.classList.remove("hidden");
    rec_for_actors.classList.remove("hidden");
    rec_for_plots.classList.remove("hidden");
    const errorMsg = document.querySelector(".similar-error-msg");
    if (errorMsg) errorMsg.remove();
    const directorMsg = document.querySelector(".director-error-msg");
    if (directorMsg) directorMsg.remove();
    const actorMsg = document.querySelector(".actor-error-msg");
    if (actorMsg) actorMsg.remove();
};
const submitMovie = async function() {
    if (stare.query) {
        // Construct the URL with the movie name
        const url = `http://127.0.0.1:3000/api/v1/movies/similarity/${encodeURIComponent(stare.movie.id)}`;
        try {
            // Use fetch to send the GET request to the server
            const response = await fetch(url);
            if (response.ok) {
                // Parse the JSON response and store it in a const
                const jsonResponse = await response.json();
                // Now jsonResponse contains the data, for example:
                // const similarMovies = jsonResponse.similarMovies;
                console.log(jsonResponse); // This logs the entire response to the console
                return jsonResponse.data.filme_similare;
            // Example: You can use `similarMovies` later in your code
            } else throw error("Error fetching data:", response.statusText);
        } catch (error1) {
            console.error("Error:", error1);
        }
    }
};
const generateMarkupFilmeSimilare = function(foarte_similare) {
    plotMoviesCard.innerHTML = "";
    if (!foarte_similare) {
        if (document.querySelector(".similar-error-msg")) return;
        plotMoviesCard.innerHTML = "";
        //nu am gasit film
        const p = document.createElement("p");
        p.textContent = "Couldn't find similar movies";
        p.classList.add("similar-error-msg"); // identificare ușoară
        plotMoviesCard.appendChild(p);
        return;
    }
    document.querySelector(".searching-alert").innerHTML = "";
    for(let i = 0; i < foarte_similare.length; i++){
        const movie_p = foarte_similare[i];
        if (movie_p.poster_path || movie_p._doc.poster_path) plotMoviesCard.innerHTML += `
        <div class="plot-movies-card-item movie-poster">
          <img src="https://image.tmdb.org/t/p/w300${movie_p.poster_path || movie_p._doc.poster_path}" alt="${movie_p.title || movie_p._doc.title}" data-id="${movie_p.api_id || movie_p._doc.api_id}">
          <p class="score-paragraph-similar">Similar: ${((movie_p.similarity || movie_p.similarity) * 100).toFixed(1)}%</p>
        </div>
      `;
    }
};
const moveSearch = function() {
    searchBar.append(loginForm);
    loginForm.classList.add("in-navbar");
    movie_input.value = "";
    console.log(resultBox);
    resultBox.innerHTML = "";
    resultBox.classList.add("hidden");
    console.log(resultBox);
    //nu prea face parte din functia asta, dar csf
    document.querySelector(".navbar").classList.remove("hidden");
    document.body.classList.add("no-bg");
};
const loadingPlotMovies = function() {
    plotMoviesCard.innerHTML = "";
    if (document.querySelector(".loading-similar")) return;
    const p = document.createElement("p");
    p.textContent = "Loading...";
    p.classList.add("loading-similar"); // identificare ușoară
    plotMoviesCard.appendChild(p);
};
async function cautaFilm(e) {
    try {
        //1.init:
        if (e) e.preventDefault();
        stare = {};
        stare.query = movie_input.value.trim();
        stare.queryID = searchMovieId.value.trim();
        if (!stare.query) throw error("Nimic scris in search!");
        if (!stare.queryID) console.log("Nimic scris in search id!");
        console.log(stare.query + " " + stare.queryID);
        //1.2  Mutat search in navbar
        moveSearch();
        //1.3 Scos hidden din elemente:
        unhideCards();
        //1.4 Plot is loading afisaj
        loadingPlotMovies();
        //2.Luam filmul scris in search:
        await getMovie();
        if (!stare.movie) throw error("Filmul nu a fost gasit!");
        console.log(stare.movie);
        //3.luam informatii despre film pentru a fii afisate
        await getCredits();
        if (!stare.credits) throw error("Creditele nu a fost gasit!");
        console.log(stare.credits);
        if (!stare.topActors) throw error("Actori nu au fost gasiti!");
        console.log(stare.topActors);
        if (!stare.director) throw error("Directorul nu a fost gasit!");
        console.log(stare.director);
        //3.2 Generam popularea selectului cu actori:
        await populateActors();
        //4.luam alte filme de la director
        await getOtherDirectorMovies(stare);
        if (!rezultate.directorMovies) throw error("Celalalte filme ale Directorului nu au fost gasit!");
        console.log(rezultate.directorMovies);
        //5. cautat filme similare bazate pe descriere. TREBUIE MUTAT CE E IN JOS IN CE AVEM IN DESCRIERE SIMILARA
        let foarte_similare = await submitMovie();
        console.log(foarte_similare);
        //6. Afisare
        generateMarkupFilmeSimilare(foarte_similare, stare.movie.id);
    } catch (err) {
        console.log(err);
    }
}

},{"../../util/api.js":"2okqX","../controllerSchimbaActor/schimbaActor.js":"hHPTC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2okqX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "options", ()=>options);
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjE2MzUzYzA5YzNlZTQ3MTAyNGU5ZTBjMWNiZDhlNyIsIm5iZiI6MTcxMzAyMzM1Mi45ODIsInN1YiI6IjY2MWFhOTc4OTgyZjc0MDE2MzQ2YTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZY03XoHzOtq6AjHoRBU9rcY2A-Zyw_ca_gJc86XGfog";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hHPTC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateMarkupActorFilme", ()=>generateMarkupActorFilme);
parcelHelpers.export(exports, "getFilmeActor", ()=>getFilmeActor);
parcelHelpers.export(exports, "schimbaActor", ()=>schimbaActor);
var _apiJs = require("../../util/api.js");
const select = document.querySelector(".actorSelect");
const actorsMovieCard = document.querySelector(".actors-movies-card");
const generateMarkupActorFilme = function(sortedMovies) {
    actorsMovieCard.innerHTML = "";
    let added = 0;
    for (let movie of sortedMovies){
        if (movie.poster_path) {
            actorsMovieCard.innerHTML += `
                    <div class="actors-movies-card-item movie-poster">
                        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" data-id="${movie.id}">
                    </div>`;
            added++;
        }
        if (added === 6) break;
    }
};
const getFilmeActor = async function(actorId) {
    const response4 = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits`, (0, _apiJs.options));
    const actor_filme = await response4.json();
    const sortedMovies = actor_filme.cast.sort((a, b)=>b.vote_count - a.vote_count);
    return sortedMovies;
};
async function schimbaActor(event) {
    const actorMsg = document.querySelector('.actor-error-msg');
    if (actorMsg) actorMsg.remove();
    const topActors = Array.from(select.options).filter((option)=>option.value !== "").map((option)=>[
            option.id_actor,
            option.nume_actor
        ]);
    const actorId = event.target.value;
    if (!actorId) return;
    //luam filme ale actorului, sortate bazat pe popularitatea filmului
    const sortedMovies = await getFilmeActor(actorId);
    if (sortedMovies.length == 1) {
        //REFACTORIZAT
        actorsMovieCard.innerHTML = "";
        const p = document.createElement("p");
        p.className = "actor-error-msg";
        p.innerHTML = "Nu s-au gasit filme anterioare ale actorului";
        actorsMovieCard.appendChild(p);
        return;
    }
    console.log(sortedMovies);
    generateMarkupActorFilme(sortedMovies);
}

},{"../../util/api.js":"2okqX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h58iu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "liveSearch", ()=>liveSearch);
parcelHelpers.export(exports, "liveSearchSelect", ()=>liveSearchSelect);
var _apiJs = require("../../util/api.js");
const resultsBox = document.querySelector('.results-box');
const errorMessageSearch = document.querySelector('.error-message-search');
const movieInput = document.querySelector('.search-movie'); // Get the input value
const searchMovieId = document.querySelector('.search-movie-id');
let debounceTimer;
async function fetchSuggestions(query) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, (0, _apiJs.options));
    const data = await response.json();
    const results = data.results.slice(0, 5); // doar primele 5 filme
    console.log(results);
    if (!results.length) {
        resultsBox.innerHTML = '<p>No movie found.</p>';
        return;
    }
    resultsBox.innerHTML = results.map((movie)=>`
    <div class="suggestion" data-id="${movie.id}">
      ${movie.title} (${movie.release_date?.slice(0, 4) || 'N/A'})
    </div>
  `).join('');
    resultsBox.classList.remove('hidden');
}
const liveSearch = function(e) {
    clearTimeout(debounceTimer);
    const query = movieInput.value.trim();
    if (!query) {
        resultsBox.classList.add('hidden');
        resultsBox.innerHTML = ''; // goliți sugestiile
        return;
    }
    if (e.type === 'keydown' && e.key === 'Enter') {
        resultsBox.classList.add('hidden');
        resultsBox.innerHTML = ''; // goliți sugestiile
        return;
    }
    debounceTimer = setTimeout(()=>{
        fetchSuggestions(query);
    }, 300); // așteaptă 300ms înainte de a căuta
};
const liveSearchSelect = function(e) {
    const clickedElement = e.target.closest('.suggestion');
    if (!clickedElement) return; // click în afara unei sugestii
    console.log(clickedElement);
    const text = clickedElement.textContent.trim();
    movieInput.value = text.split(" (")[0];
    searchMovieId.value = clickedElement.dataset.id; // "2024"
    console.log("Film selectat" + movieInput.value);
    console.log("Id film selectat:" + searchMovieId.value);
};

},{"../../util/api.js":"2okqX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"92xyD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playTrailer", ()=>playTrailer);
var _apiJs = require("../../util/api.js");
const playTrailer = async function(e) {
    try {
        const overlay = e.target.closest('.overlay');
        if (!overlay) return;
        console.log(overlay);
        const movieId = overlay.dataset.movieId; // presupunem că <img> e înainte de .overlay
        console.log('movieId:', movieId);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?`, (0, _apiJs.options));
        const data = await response.json();
        console.log(data);
        const trailer = data.results.reverse().find((video)=>video.type === "Trailer");
        if (trailer) {
            const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
            window.location.href = youtubeUrl;
        } else console.log("Nu a fost g\u0103sit niciun trailer.");
    } catch (err) {
        console.log(err);
    }
};

},{"../../util/api.js":"2okqX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequirec720", {})

//# sourceMappingURL=client.31b563d9.js.map
