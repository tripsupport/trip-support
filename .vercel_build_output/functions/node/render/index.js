var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key2 of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key2) && key2 !== "default")
        __defProp(target, key2, { get: () => module2[key2], enumerable: !(desc = __getOwnPropDesc(module2, key2)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/@sveltejs/kit/dist/chunks/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m3, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new File(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m3 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m3) {
        entryName = m3[2] || m3[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var import_node_fs, import_node_path, import_node_worker_threads, import_node_http, import_node_https, import_node_zlib, import_node_stream, import_node_util, import_node_url, import_net, s, S, f, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/@sveltejs/kit/dist/chunks/multipart-parser.js"() {
    import_node_fs = __toModule(require("fs"));
    import_node_path = __toModule(require("path"));
    import_node_worker_threads = __toModule(require("worker_threads"));
    init_install_fetch();
    import_node_http = __toModule(require("http"));
    import_node_https = __toModule(require("https"));
    import_node_zlib = __toModule(require("zlib"));
    import_node_stream = __toModule(require("stream"));
    import_node_util = __toModule(require("util"));
    import_node_url = __toModule(require("url"));
    import_net = __toModule(require("net"));
    globalThis.DOMException || (() => {
      const port = new import_node_worker_threads.MessageChannel().port1;
      const ab = new ArrayBuffer(0);
      try {
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        return err.constructor;
      }
    })();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f = 1;
    F = {
      PART_BOUNDARY: f,
      LAST_BOUNDARY: f *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base642 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i2 = 1; i2 < meta.length; i2++) {
    if (meta[i2] === "base64") {
      base642 = true;
    } else {
      typeFull += `;${meta[i2]}`;
      if (meta[i2].indexOf("charset=") === 0) {
        charset = meta[i2].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base642 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0;
      while (position !== part.size) {
        const chunk = part.slice(position, Math.min(part.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
function formDataToBlob(F2, B = Blob$1) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  const { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (!(body instanceof import_node_stream2.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error2 = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error2);
        throw error2;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    const error_ = error2 instanceof FetchBaseError ? error2 : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
function fromRawHeaders(headers = []) {
  return new Headers2(headers.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_net2.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (/^(.+\.)*localhost$/.test(url.host)) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request2(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dataUriToBuffer(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? import_node_https2.default : import_node_http2.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_node_stream2.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL, options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error2) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error2.message}`, "system", error2));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error2) => {
      response.body.destroy(error2);
    });
    if (process.version < "v14") {
      request_.on("socket", (s3) => {
        let endedWithEventsCount;
        s3.prependListener("end", () => {
          endedWithEventsCount = s3._eventsCount;
        });
        s3.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s3._eventsCount && !hadError) {
            const error2 = new Error("Premature close");
            error2.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error2);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              headers.set("Location", locationURL);
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers2(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream2.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve2(fetch2(new Request2(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), reject);
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib2.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib2.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib2.default.createGunzip(zlibOptions), reject);
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), reject);
        raw.once("data", (chunk) => {
          body = (chunk[0] & 15) === 8 ? (0, import_node_stream2.pipeline)(body, import_node_zlib2.default.createInflate(), reject) : (0, import_node_stream2.pipeline)(body, import_node_zlib2.default.createInflateRaw(), reject);
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib2.default.createBrotliDecompress(), reject);
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error2 = new Error("Premature close");
        error2.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error2);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived = Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    });
  });
}
function __fetch_polyfill() {
  Object.defineProperties(globalThis, {
    fetch: {
      enumerable: true,
      configurable: true,
      value: fetch2
    },
    Response: {
      enumerable: true,
      configurable: true,
      value: Response2
    },
    Request: {
      enumerable: true,
      configurable: true,
      value: Request2
    },
    Headers: {
      enumerable: true,
      configurable: true,
      value: Headers2
    }
  });
}
var import_node_http2, import_node_https2, import_node_zlib2, import_node_stream2, import_node_util2, import_node_url2, import_net2, commonjsGlobal, ponyfill_es2018, POOL_SIZE$1, POOL_SIZE, _parts, _type, _size, _a, _Blob, Blob, Blob$1, _lastModified, _name, _a2, _File, File, t, i, h, r, m, f2, e, x, _d, _a3, FormData, FetchBaseError, FetchError, NAME, isURLSearchParameters, isBlob, isAbortSignal, INTERNALS$2, Body, clone, getNonSpecFormDataBoundary, extractContentType, getTotalBytes, writeToStream, validateHeaderName, validateHeaderValue, Headers2, redirectStatus, isRedirect, INTERNALS$1, Response2, getSearch, ReferrerPolicy, DEFAULT_REFERRER_POLICY, INTERNALS, isRequest, Request2, getNodeRequestOptions, AbortError, supportedSchemas;
var init_install_fetch = __esm({
  "node_modules/@sveltejs/kit/dist/install-fetch.js"() {
    import_node_http2 = __toModule(require("http"));
    import_node_https2 = __toModule(require("https"));
    import_node_zlib2 = __toModule(require("zlib"));
    import_node_stream2 = __toModule(require("stream"));
    import_node_util2 = __toModule(require("util"));
    import_node_url2 = __toModule(require("url"));
    import_net2 = __toModule(require("net"));
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    ponyfill_es2018 = { exports: {} };
    (function(module2, exports) {
      (function(global2, factory) {
        factory(exports);
      })(commonjsGlobal, function(exports2) {
        const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
        function noop4() {
          return void 0;
        }
        function getGlobals() {
          if (typeof self !== "undefined") {
            return self;
          } else if (typeof window !== "undefined") {
            return window;
          } else if (typeof commonjsGlobal !== "undefined") {
            return commonjsGlobal;
          }
          return void 0;
        }
        const globals = getGlobals();
        function typeIsObject(x2) {
          return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
        }
        const rethrowAssertionErrorRejection = noop4;
        const originalPromise = Promise;
        const originalPromiseThen = Promise.prototype.then;
        const originalPromiseResolve = Promise.resolve.bind(originalPromise);
        const originalPromiseReject = Promise.reject.bind(originalPromise);
        function newPromise(executor) {
          return new originalPromise(executor);
        }
        function promiseResolvedWith(value) {
          return originalPromiseResolve(value);
        }
        function promiseRejectedWith(reason) {
          return originalPromiseReject(reason);
        }
        function PerformPromiseThen(promise, onFulfilled, onRejected) {
          return originalPromiseThen.call(promise, onFulfilled, onRejected);
        }
        function uponPromise(promise, onFulfilled, onRejected) {
          PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
        }
        function uponFulfillment(promise, onFulfilled) {
          uponPromise(promise, onFulfilled);
        }
        function uponRejection(promise, onRejected) {
          uponPromise(promise, void 0, onRejected);
        }
        function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
          return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
        }
        function setPromiseIsHandledToTrue(promise) {
          PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
        }
        const queueMicrotask = (() => {
          const globalQueueMicrotask = globals && globals.queueMicrotask;
          if (typeof globalQueueMicrotask === "function") {
            return globalQueueMicrotask;
          }
          const resolvedPromise = promiseResolvedWith(void 0);
          return (fn) => PerformPromiseThen(resolvedPromise, fn);
        })();
        function reflectCall(F2, V, args) {
          if (typeof F2 !== "function") {
            throw new TypeError("Argument is not a function");
          }
          return Function.prototype.apply.call(F2, V, args);
        }
        function promiseCall(F2, V, args) {
          try {
            return promiseResolvedWith(reflectCall(F2, V, args));
          } catch (value) {
            return promiseRejectedWith(value);
          }
        }
        const QUEUE_MAX_ARRAY_SIZE = 16384;
        class SimpleQueue {
          constructor() {
            this._cursor = 0;
            this._size = 0;
            this._front = {
              _elements: [],
              _next: void 0
            };
            this._back = this._front;
            this._cursor = 0;
            this._size = 0;
          }
          get length() {
            return this._size;
          }
          push(element) {
            const oldBack = this._back;
            let newBack = oldBack;
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
              newBack = {
                _elements: [],
                _next: void 0
              };
            }
            oldBack._elements.push(element);
            if (newBack !== oldBack) {
              this._back = newBack;
              oldBack._next = newBack;
            }
            ++this._size;
          }
          shift() {
            const oldFront = this._front;
            let newFront = oldFront;
            const oldCursor = this._cursor;
            let newCursor = oldCursor + 1;
            const elements = oldFront._elements;
            const element = elements[oldCursor];
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
              newFront = oldFront._next;
              newCursor = 0;
            }
            --this._size;
            this._cursor = newCursor;
            if (oldFront !== newFront) {
              this._front = newFront;
            }
            elements[oldCursor] = void 0;
            return element;
          }
          forEach(callback) {
            let i2 = this._cursor;
            let node = this._front;
            let elements = node._elements;
            while (i2 !== elements.length || node._next !== void 0) {
              if (i2 === elements.length) {
                node = node._next;
                elements = node._elements;
                i2 = 0;
                if (elements.length === 0) {
                  break;
                }
              }
              callback(elements[i2]);
              ++i2;
            }
          }
          peek() {
            const front = this._front;
            const cursor = this._cursor;
            return front._elements[cursor];
          }
        }
        function ReadableStreamReaderGenericInitialize(reader, stream) {
          reader._ownerReadableStream = stream;
          stream._reader = reader;
          if (stream._state === "readable") {
            defaultReaderClosedPromiseInitialize(reader);
          } else if (stream._state === "closed") {
            defaultReaderClosedPromiseInitializeAsResolved(reader);
          } else {
            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
          }
        }
        function ReadableStreamReaderGenericCancel(reader, reason) {
          const stream = reader._ownerReadableStream;
          return ReadableStreamCancel(stream, reason);
        }
        function ReadableStreamReaderGenericRelease(reader) {
          if (reader._ownerReadableStream._state === "readable") {
            defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
          } else {
            defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
          }
          reader._ownerReadableStream._reader = void 0;
          reader._ownerReadableStream = void 0;
        }
        function readerLockException(name) {
          return new TypeError("Cannot " + name + " a stream using a released reader");
        }
        function defaultReaderClosedPromiseInitialize(reader) {
          reader._closedPromise = newPromise((resolve2, reject) => {
            reader._closedPromise_resolve = resolve2;
            reader._closedPromise_reject = reject;
          });
        }
        function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
          defaultReaderClosedPromiseInitialize(reader);
          defaultReaderClosedPromiseReject(reader, reason);
        }
        function defaultReaderClosedPromiseInitializeAsResolved(reader) {
          defaultReaderClosedPromiseInitialize(reader);
          defaultReaderClosedPromiseResolve(reader);
        }
        function defaultReaderClosedPromiseReject(reader, reason) {
          if (reader._closedPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(reader._closedPromise);
          reader._closedPromise_reject(reason);
          reader._closedPromise_resolve = void 0;
          reader._closedPromise_reject = void 0;
        }
        function defaultReaderClosedPromiseResetToRejected(reader, reason) {
          defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
        }
        function defaultReaderClosedPromiseResolve(reader) {
          if (reader._closedPromise_resolve === void 0) {
            return;
          }
          reader._closedPromise_resolve(void 0);
          reader._closedPromise_resolve = void 0;
          reader._closedPromise_reject = void 0;
        }
        const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
        const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
        const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
        const PullSteps = SymbolPolyfill("[[PullSteps]]");
        const NumberIsFinite = Number.isFinite || function(x2) {
          return typeof x2 === "number" && isFinite(x2);
        };
        const MathTrunc = Math.trunc || function(v) {
          return v < 0 ? Math.ceil(v) : Math.floor(v);
        };
        function isDictionary(x2) {
          return typeof x2 === "object" || typeof x2 === "function";
        }
        function assertDictionary(obj, context) {
          if (obj !== void 0 && !isDictionary(obj)) {
            throw new TypeError(`${context} is not an object.`);
          }
        }
        function assertFunction(x2, context) {
          if (typeof x2 !== "function") {
            throw new TypeError(`${context} is not a function.`);
          }
        }
        function isObject(x2) {
          return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
        }
        function assertObject(x2, context) {
          if (!isObject(x2)) {
            throw new TypeError(`${context} is not an object.`);
          }
        }
        function assertRequiredArgument(x2, position, context) {
          if (x2 === void 0) {
            throw new TypeError(`Parameter ${position} is required in '${context}'.`);
          }
        }
        function assertRequiredField(x2, field, context) {
          if (x2 === void 0) {
            throw new TypeError(`${field} is required in '${context}'.`);
          }
        }
        function convertUnrestrictedDouble(value) {
          return Number(value);
        }
        function censorNegativeZero(x2) {
          return x2 === 0 ? 0 : x2;
        }
        function integerPart(x2) {
          return censorNegativeZero(MathTrunc(x2));
        }
        function convertUnsignedLongLongWithEnforceRange(value, context) {
          const lowerBound = 0;
          const upperBound = Number.MAX_SAFE_INTEGER;
          let x2 = Number(value);
          x2 = censorNegativeZero(x2);
          if (!NumberIsFinite(x2)) {
            throw new TypeError(`${context} is not a finite number`);
          }
          x2 = integerPart(x2);
          if (x2 < lowerBound || x2 > upperBound) {
            throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
          }
          if (!NumberIsFinite(x2) || x2 === 0) {
            return 0;
          }
          return x2;
        }
        function assertReadableStream(x2, context) {
          if (!IsReadableStream(x2)) {
            throw new TypeError(`${context} is not a ReadableStream.`);
          }
        }
        function AcquireReadableStreamDefaultReader(stream) {
          return new ReadableStreamDefaultReader(stream);
        }
        function ReadableStreamAddReadRequest(stream, readRequest) {
          stream._reader._readRequests.push(readRequest);
        }
        function ReadableStreamFulfillReadRequest(stream, chunk, done) {
          const reader = stream._reader;
          const readRequest = reader._readRequests.shift();
          if (done) {
            readRequest._closeSteps();
          } else {
            readRequest._chunkSteps(chunk);
          }
        }
        function ReadableStreamGetNumReadRequests(stream) {
          return stream._reader._readRequests.length;
        }
        function ReadableStreamHasDefaultReader(stream) {
          const reader = stream._reader;
          if (reader === void 0) {
            return false;
          }
          if (!IsReadableStreamDefaultReader(reader)) {
            return false;
          }
          return true;
        }
        class ReadableStreamDefaultReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
            assertReadableStream(stream, "First parameter");
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = new SimpleQueue();
          }
          get closed() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          cancel(reason = void 0) {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("cancel"));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
          }
          read() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(defaultReaderBrandCheckException("read"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("read from"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readRequest = {
              _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
              _closeSteps: () => resolvePromise({ value: void 0, done: true }),
              _errorSteps: (e2) => rejectPromise(e2)
            };
            ReadableStreamDefaultReaderRead(this, readRequest);
            return promise;
          }
          releaseLock() {
            if (!IsReadableStreamDefaultReader(this)) {
              throw defaultReaderBrandCheckException("releaseLock");
            }
            if (this._ownerReadableStream === void 0) {
              return;
            }
            if (this._readRequests.length > 0) {
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            }
            ReadableStreamReaderGenericRelease(this);
          }
        }
        Object.defineProperties(ReadableStreamDefaultReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamDefaultReader",
            configurable: true
          });
        }
        function IsReadableStreamDefaultReader(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
            return false;
          }
          return x2 instanceof ReadableStreamDefaultReader;
        }
        function ReadableStreamDefaultReaderRead(reader, readRequest) {
          const stream = reader._ownerReadableStream;
          stream._disturbed = true;
          if (stream._state === "closed") {
            readRequest._closeSteps();
          } else if (stream._state === "errored") {
            readRequest._errorSteps(stream._storedError);
          } else {
            stream._readableStreamController[PullSteps](readRequest);
          }
        }
        function defaultReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
        }
        const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
        }).prototype);
        class ReadableStreamAsyncIteratorImpl {
          constructor(reader, preventCancel) {
            this._ongoingPromise = void 0;
            this._isFinished = false;
            this._reader = reader;
            this._preventCancel = preventCancel;
          }
          next() {
            const nextSteps = () => this._nextSteps();
            this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
            return this._ongoingPromise;
          }
          return(value) {
            const returnSteps = () => this._returnSteps(value);
            return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
          }
          _nextSteps() {
            if (this._isFinished) {
              return Promise.resolve({ value: void 0, done: true });
            }
            const reader = this._reader;
            if (reader._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("iterate"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readRequest = {
              _chunkSteps: (chunk) => {
                this._ongoingPromise = void 0;
                queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
              },
              _closeSteps: () => {
                this._ongoingPromise = void 0;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                resolvePromise({ value: void 0, done: true });
              },
              _errorSteps: (reason) => {
                this._ongoingPromise = void 0;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                rejectPromise(reason);
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promise;
          }
          _returnSteps(value) {
            if (this._isFinished) {
              return Promise.resolve({ value, done: true });
            }
            this._isFinished = true;
            const reader = this._reader;
            if (reader._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("finish iterating"));
            }
            if (!this._preventCancel) {
              const result = ReadableStreamReaderGenericCancel(reader, value);
              ReadableStreamReaderGenericRelease(reader);
              return transformPromiseWith(result, () => ({ value, done: true }));
            }
            ReadableStreamReaderGenericRelease(reader);
            return promiseResolvedWith({ value, done: true });
          }
        }
        const ReadableStreamAsyncIteratorPrototype = {
          next() {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
            }
            return this._asyncIteratorImpl.next();
          },
          return(value) {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
            }
            return this._asyncIteratorImpl.return(value);
          }
        };
        if (AsyncIteratorPrototype !== void 0) {
          Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
        }
        function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
          const reader = AcquireReadableStreamDefaultReader(stream);
          const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
          const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
          iterator._asyncIteratorImpl = impl;
          return iterator;
        }
        function IsReadableStreamAsyncIterator(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
            return false;
          }
          try {
            return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
          } catch (_a4) {
            return false;
          }
        }
        function streamAsyncIteratorBrandCheckException(name) {
          return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
        }
        const NumberIsNaN = Number.isNaN || function(x2) {
          return x2 !== x2;
        };
        function CreateArrayFromList(elements) {
          return elements.slice();
        }
        function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
          new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
        }
        function TransferArrayBuffer(O) {
          return O;
        }
        function IsDetachedBuffer(O) {
          return false;
        }
        function ArrayBufferSlice(buffer, begin, end) {
          if (buffer.slice) {
            return buffer.slice(begin, end);
          }
          const length = end - begin;
          const slice = new ArrayBuffer(length);
          CopyDataBlockBytes(slice, 0, buffer, begin, length);
          return slice;
        }
        function IsNonNegativeNumber(v) {
          if (typeof v !== "number") {
            return false;
          }
          if (NumberIsNaN(v)) {
            return false;
          }
          if (v < 0) {
            return false;
          }
          return true;
        }
        function CloneAsUint8Array(O) {
          const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
          return new Uint8Array(buffer);
        }
        function DequeueValue(container) {
          const pair = container._queue.shift();
          container._queueTotalSize -= pair.size;
          if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0;
          }
          return pair.value;
        }
        function EnqueueValueWithSize(container, value, size) {
          if (!IsNonNegativeNumber(size) || size === Infinity) {
            throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
          }
          container._queue.push({ value, size });
          container._queueTotalSize += size;
        }
        function PeekQueueValue(container) {
          const pair = container._queue.peek();
          return pair.value;
        }
        function ResetQueue(container) {
          container._queue = new SimpleQueue();
          container._queueTotalSize = 0;
        }
        class ReadableStreamBYOBRequest {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get view() {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("view");
            }
            return this._view;
          }
          respond(bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("respond");
            }
            assertRequiredArgument(bytesWritten, 1, "respond");
            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
            if (this._associatedReadableByteStreamController === void 0) {
              throw new TypeError("This BYOB request has been invalidated");
            }
            if (IsDetachedBuffer(this._view.buffer))
              ;
            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
          }
          respondWithNewView(view) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException("respondWithNewView");
            }
            assertRequiredArgument(view, 1, "respondWithNewView");
            if (!ArrayBuffer.isView(view)) {
              throw new TypeError("You can only respond with array buffer views");
            }
            if (this._associatedReadableByteStreamController === void 0) {
              throw new TypeError("This BYOB request has been invalidated");
            }
            if (IsDetachedBuffer(view.buffer))
              ;
            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
          }
        }
        Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
          respond: { enumerable: true },
          respondWithNewView: { enumerable: true },
          view: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamBYOBRequest",
            configurable: true
          });
        }
        class ReadableByteStreamController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get byobRequest() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("byobRequest");
            }
            return ReadableByteStreamControllerGetBYOBRequest(this);
          }
          get desiredSize() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("desiredSize");
            }
            return ReadableByteStreamControllerGetDesiredSize(this);
          }
          close() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("close");
            }
            if (this._closeRequested) {
              throw new TypeError("The stream has already been closed; do not close it again!");
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== "readable") {
              throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
            }
            ReadableByteStreamControllerClose(this);
          }
          enqueue(chunk) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("enqueue");
            }
            assertRequiredArgument(chunk, 1, "enqueue");
            if (!ArrayBuffer.isView(chunk)) {
              throw new TypeError("chunk must be an array buffer view");
            }
            if (chunk.byteLength === 0) {
              throw new TypeError("chunk must have non-zero byteLength");
            }
            if (chunk.buffer.byteLength === 0) {
              throw new TypeError(`chunk's buffer must have non-zero byteLength`);
            }
            if (this._closeRequested) {
              throw new TypeError("stream is closed or draining");
            }
            const state = this._controlledReadableByteStream._state;
            if (state !== "readable") {
              throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
            }
            ReadableByteStreamControllerEnqueue(this, chunk);
          }
          error(e2 = void 0) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException("error");
            }
            ReadableByteStreamControllerError(this, e2);
          }
          [CancelSteps](reason) {
            ReadableByteStreamControllerClearPendingPullIntos(this);
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableByteStreamControllerClearAlgorithms(this);
            return result;
          }
          [PullSteps](readRequest) {
            const stream = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
              const entry34 = this._queue.shift();
              this._queueTotalSize -= entry34.byteLength;
              ReadableByteStreamControllerHandleQueueDrain(this);
              const view = new Uint8Array(entry34.buffer, entry34.byteOffset, entry34.byteLength);
              readRequest._chunkSteps(view);
              return;
            }
            const autoAllocateChunkSize = this._autoAllocateChunkSize;
            if (autoAllocateChunkSize !== void 0) {
              let buffer;
              try {
                buffer = new ArrayBuffer(autoAllocateChunkSize);
              } catch (bufferE) {
                readRequest._errorSteps(bufferE);
                return;
              }
              const pullIntoDescriptor = {
                buffer,
                bufferByteLength: autoAllocateChunkSize,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: "default"
              };
              this._pendingPullIntos.push(pullIntoDescriptor);
            }
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableByteStreamControllerCallPullIfNeeded(this);
          }
        }
        Object.defineProperties(ReadableByteStreamController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          byobRequest: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableByteStreamController",
            configurable: true
          });
        }
        function IsReadableByteStreamController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream")) {
            return false;
          }
          return x2 instanceof ReadableByteStreamController;
        }
        function IsReadableStreamBYOBRequest(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController")) {
            return false;
          }
          return x2 instanceof ReadableStreamBYOBRequest;
        }
        function ReadableByteStreamControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
          if (!shouldPull) {
            return;
          }
          if (controller._pulling) {
            controller._pullAgain = true;
            return;
          }
          controller._pulling = true;
          const pullPromise = controller._pullAlgorithm();
          uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
          }, (e2) => {
            ReadableByteStreamControllerError(controller, e2);
          });
        }
        function ReadableByteStreamControllerClearPendingPullIntos(controller) {
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          controller._pendingPullIntos = new SimpleQueue();
        }
        function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
          let done = false;
          if (stream._state === "closed") {
            done = true;
          }
          const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
          if (pullIntoDescriptor.readerType === "default") {
            ReadableStreamFulfillReadRequest(stream, filledView, done);
          } else {
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
          }
        }
        function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
          const bytesFilled = pullIntoDescriptor.bytesFilled;
          const elementSize = pullIntoDescriptor.elementSize;
          return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
        }
        function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
          controller._queue.push({ buffer, byteOffset, byteLength });
          controller._queueTotalSize += byteLength;
        }
        function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
          const elementSize = pullIntoDescriptor.elementSize;
          const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
          const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
          const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
          const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
          let totalBytesToCopyRemaining = maxBytesToCopy;
          let ready = false;
          if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
          }
          const queue = controller._queue;
          while (totalBytesToCopyRemaining > 0) {
            const headOfQueue = queue.peek();
            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) {
              queue.shift();
            } else {
              headOfQueue.byteOffset += bytesToCopy;
              headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
          }
          return ready;
        }
        function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
          pullIntoDescriptor.bytesFilled += size;
        }
        function ReadableByteStreamControllerHandleQueueDrain(controller) {
          if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(controller._controlledReadableByteStream);
          } else {
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
        }
        function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
          if (controller._byobRequest === null) {
            return;
          }
          controller._byobRequest._associatedReadableByteStreamController = void 0;
          controller._byobRequest._view = null;
          controller._byobRequest = null;
        }
        function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
          while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
              return;
            }
            const pullIntoDescriptor = controller._pendingPullIntos.peek();
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
          const stream = controller._controlledReadableByteStream;
          let elementSize = 1;
          if (view.constructor !== DataView) {
            elementSize = view.constructor.BYTES_PER_ELEMENT;
          }
          const ctor = view.constructor;
          const buffer = TransferArrayBuffer(view.buffer);
          const pullIntoDescriptor = {
            buffer,
            bufferByteLength: buffer.byteLength,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize,
            viewConstructor: ctor,
            readerType: "byob"
          };
          if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor);
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            return;
          }
          if (stream._state === "closed") {
            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            readIntoRequest._closeSteps(emptyView);
            return;
          }
          if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
              const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
              ReadableByteStreamControllerHandleQueueDrain(controller);
              readIntoRequest._chunkSteps(filledView);
              return;
            }
            if (controller._closeRequested) {
              const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              ReadableByteStreamControllerError(controller, e2);
              readIntoRequest._errorSteps(e2);
              return;
            }
          }
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
          const stream = controller._controlledReadableByteStream;
          if (ReadableStreamHasBYOBReader(stream)) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
              const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
          if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
            return;
          }
          ReadableByteStreamControllerShiftPendingPullInto(controller);
          const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
          if (remainderSize > 0) {
            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
          }
          pullIntoDescriptor.bytesFilled -= remainderSize;
          ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        }
        function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            ReadableByteStreamControllerRespondInClosedState(controller);
          } else {
            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerShiftPendingPullInto(controller) {
          const descriptor = controller._pendingPullIntos.shift();
          return descriptor;
        }
        function ReadableByteStreamControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableByteStream;
          if (stream._state !== "readable") {
            return false;
          }
          if (controller._closeRequested) {
            return false;
          }
          if (!controller._started) {
            return false;
          }
          if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableByteStreamControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = void 0;
          controller._cancelAlgorithm = void 0;
        }
        function ReadableByteStreamControllerClose(controller) {
          const stream = controller._controlledReadableByteStream;
          if (controller._closeRequested || stream._state !== "readable") {
            return;
          }
          if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
          }
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (firstPendingPullInto.bytesFilled > 0) {
              const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              ReadableByteStreamControllerError(controller, e2);
              throw e2;
            }
          }
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
        function ReadableByteStreamControllerEnqueue(controller, chunk) {
          const stream = controller._controlledReadableByteStream;
          if (controller._closeRequested || stream._state !== "readable") {
            return;
          }
          const buffer = chunk.buffer;
          const byteOffset = chunk.byteOffset;
          const byteLength = chunk.byteLength;
          const transferredBuffer = TransferArrayBuffer(buffer);
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek();
            if (IsDetachedBuffer(firstPendingPullInto.buffer))
              ;
            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
          }
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          if (ReadableStreamHasDefaultReader(stream)) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            } else {
              if (controller._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
              }
              const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
              ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
          } else if (ReadableStreamHasBYOBReader(stream)) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
          } else {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
        function ReadableByteStreamControllerError(controller, e2) {
          const stream = controller._controlledReadableByteStream;
          if (stream._state !== "readable") {
            return;
          }
          ReadableByteStreamControllerClearPendingPullIntos(controller);
          ResetQueue(controller);
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamError(stream, e2);
        }
        function ReadableByteStreamControllerGetBYOBRequest(controller) {
          if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
            controller._byobRequest = byobRequest;
          }
          return controller._byobRequest;
        }
        function ReadableByteStreamControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableByteStream._state;
          if (state === "errored") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableByteStreamControllerRespond(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            if (bytesWritten !== 0) {
              throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
            }
          } else {
            if (bytesWritten === 0) {
              throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
            }
            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
              throw new RangeError("bytesWritten out of range");
            }
          }
          firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
          ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
        }
        function ReadableByteStreamControllerRespondWithNewView(controller, view) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const state = controller._controlledReadableByteStream._state;
          if (state === "closed") {
            if (view.byteLength !== 0) {
              throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
            }
          } else {
            if (view.byteLength === 0) {
              throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
            }
          }
          if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
            throw new RangeError("The region specified by view does not match byobRequest");
          }
          if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
            throw new RangeError("The buffer of view has different capacity than byobRequest");
          }
          if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
            throw new RangeError("The region specified by view is larger than byobRequest");
          }
          const viewByteLength = view.byteLength;
          firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
          ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
        }
        function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
          controller._controlledReadableByteStream = stream;
          controller._pullAgain = false;
          controller._pulling = false;
          controller._byobRequest = null;
          controller._queue = controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._closeRequested = false;
          controller._started = false;
          controller._strategyHWM = highWaterMark;
          controller._pullAlgorithm = pullAlgorithm;
          controller._cancelAlgorithm = cancelAlgorithm;
          controller._autoAllocateChunkSize = autoAllocateChunkSize;
          controller._pendingPullIntos = new SimpleQueue();
          stream._readableStreamController = controller;
          const startResult = startAlgorithm();
          uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }, (r2) => {
            ReadableByteStreamControllerError(controller, r2);
          });
        }
        function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
          const controller = Object.create(ReadableByteStreamController.prototype);
          let startAlgorithm = () => void 0;
          let pullAlgorithm = () => promiseResolvedWith(void 0);
          let cancelAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingByteSource.start !== void 0) {
            startAlgorithm = () => underlyingByteSource.start(controller);
          }
          if (underlyingByteSource.pull !== void 0) {
            pullAlgorithm = () => underlyingByteSource.pull(controller);
          }
          if (underlyingByteSource.cancel !== void 0) {
            cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
          }
          const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
          if (autoAllocateChunkSize === 0) {
            throw new TypeError("autoAllocateChunkSize must be greater than 0");
          }
          SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
        }
        function SetUpReadableStreamBYOBRequest(request, controller, view) {
          request._associatedReadableByteStreamController = controller;
          request._view = view;
        }
        function byobRequestBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
        }
        function byteStreamControllerBrandCheckException(name) {
          return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
        }
        function AcquireReadableStreamBYOBReader(stream) {
          return new ReadableStreamBYOBReader(stream);
        }
        function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
          stream._reader._readIntoRequests.push(readIntoRequest);
        }
        function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
          const reader = stream._reader;
          const readIntoRequest = reader._readIntoRequests.shift();
          if (done) {
            readIntoRequest._closeSteps(chunk);
          } else {
            readIntoRequest._chunkSteps(chunk);
          }
        }
        function ReadableStreamGetNumReadIntoRequests(stream) {
          return stream._reader._readIntoRequests.length;
        }
        function ReadableStreamHasBYOBReader(stream) {
          const reader = stream._reader;
          if (reader === void 0) {
            return false;
          }
          if (!IsReadableStreamBYOBReader(reader)) {
            return false;
          }
          return true;
        }
        class ReadableStreamBYOBReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
            assertReadableStream(stream, "First parameter");
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            }
            if (!IsReadableByteStreamController(stream._readableStreamController)) {
              throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = new SimpleQueue();
          }
          get closed() {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          cancel(reason = void 0) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
            }
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("cancel"));
            }
            return ReadableStreamReaderGenericCancel(this, reason);
          }
          read(view) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException("read"));
            }
            if (!ArrayBuffer.isView(view)) {
              return promiseRejectedWith(new TypeError("view must be an array buffer view"));
            }
            if (view.byteLength === 0) {
              return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
            }
            if (view.buffer.byteLength === 0) {
              return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
            }
            if (IsDetachedBuffer(view.buffer))
              ;
            if (this._ownerReadableStream === void 0) {
              return promiseRejectedWith(readerLockException("read from"));
            }
            let resolvePromise;
            let rejectPromise;
            const promise = newPromise((resolve2, reject) => {
              resolvePromise = resolve2;
              rejectPromise = reject;
            });
            const readIntoRequest = {
              _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
              _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
              _errorSteps: (e2) => rejectPromise(e2)
            };
            ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
            return promise;
          }
          releaseLock() {
            if (!IsReadableStreamBYOBReader(this)) {
              throw byobReaderBrandCheckException("releaseLock");
            }
            if (this._ownerReadableStream === void 0) {
              return;
            }
            if (this._readIntoRequests.length > 0) {
              throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
            }
            ReadableStreamReaderGenericRelease(this);
          }
        }
        Object.defineProperties(ReadableStreamBYOBReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamBYOBReader",
            configurable: true
          });
        }
        function IsReadableStreamBYOBReader(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
            return false;
          }
          return x2 instanceof ReadableStreamBYOBReader;
        }
        function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
          const stream = reader._ownerReadableStream;
          stream._disturbed = true;
          if (stream._state === "errored") {
            readIntoRequest._errorSteps(stream._storedError);
          } else {
            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
          }
        }
        function byobReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
        }
        function ExtractHighWaterMark(strategy, defaultHWM) {
          const { highWaterMark } = strategy;
          if (highWaterMark === void 0) {
            return defaultHWM;
          }
          if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError("Invalid highWaterMark");
          }
          return highWaterMark;
        }
        function ExtractSizeAlgorithm(strategy) {
          const { size } = strategy;
          if (!size) {
            return () => 1;
          }
          return size;
        }
        function convertQueuingStrategy(init2, context) {
          assertDictionary(init2, context);
          const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
          const size = init2 === null || init2 === void 0 ? void 0 : init2.size;
          return {
            highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
            size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
          };
        }
        function convertQueuingStrategySize(fn, context) {
          assertFunction(fn, context);
          return (chunk) => convertUnrestrictedDouble(fn(chunk));
        }
        function convertUnderlyingSink(original, context) {
          assertDictionary(original, context);
          const abort = original === null || original === void 0 ? void 0 : original.abort;
          const close = original === null || original === void 0 ? void 0 : original.close;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const type = original === null || original === void 0 ? void 0 : original.type;
          const write = original === null || original === void 0 ? void 0 : original.write;
          return {
            abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
            close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
            start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
            write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
            type
          };
        }
        function convertUnderlyingSinkAbortCallback(fn, original, context) {
          assertFunction(fn, context);
          return (reason) => promiseCall(fn, original, [reason]);
        }
        function convertUnderlyingSinkCloseCallback(fn, original, context) {
          assertFunction(fn, context);
          return () => promiseCall(fn, original, []);
        }
        function convertUnderlyingSinkStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertUnderlyingSinkWriteCallback(fn, original, context) {
          assertFunction(fn, context);
          return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
        }
        function assertWritableStream(x2, context) {
          if (!IsWritableStream(x2)) {
            throw new TypeError(`${context} is not a WritableStream.`);
          }
        }
        function isAbortSignal2(value) {
          if (typeof value !== "object" || value === null) {
            return false;
          }
          try {
            return typeof value.aborted === "boolean";
          } catch (_a4) {
            return false;
          }
        }
        const supportsAbortController = typeof AbortController === "function";
        function createAbortController() {
          if (supportsAbortController) {
            return new AbortController();
          }
          return void 0;
        }
        class WritableStream {
          constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
            if (rawUnderlyingSink === void 0) {
              rawUnderlyingSink = null;
            } else {
              assertObject(rawUnderlyingSink, "First parameter");
            }
            const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
            InitializeWritableStream(this);
            const type = underlyingSink.type;
            if (type !== void 0) {
              throw new RangeError("Invalid type is specified");
            }
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
          }
          get locked() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2("locked");
            }
            return IsWritableStreamLocked(this);
          }
          abort(reason = void 0) {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2("abort"));
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
            }
            return WritableStreamAbort(this, reason);
          }
          close() {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2("close"));
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
            }
            if (WritableStreamCloseQueuedOrInFlight(this)) {
              return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
            }
            return WritableStreamClose(this);
          }
          getWriter() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2("getWriter");
            }
            return AcquireWritableStreamDefaultWriter(this);
          }
        }
        Object.defineProperties(WritableStream.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          getWriter: { enumerable: true },
          locked: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStream",
            configurable: true
          });
        }
        function AcquireWritableStreamDefaultWriter(stream) {
          return new WritableStreamDefaultWriter(stream);
        }
        function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
          const stream = Object.create(WritableStream.prototype);
          InitializeWritableStream(stream);
          const controller = Object.create(WritableStreamDefaultController.prototype);
          SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
          return stream;
        }
        function InitializeWritableStream(stream) {
          stream._state = "writable";
          stream._storedError = void 0;
          stream._writer = void 0;
          stream._writableStreamController = void 0;
          stream._writeRequests = new SimpleQueue();
          stream._inFlightWriteRequest = void 0;
          stream._closeRequest = void 0;
          stream._inFlightCloseRequest = void 0;
          stream._pendingAbortRequest = void 0;
          stream._backpressure = false;
        }
        function IsWritableStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")) {
            return false;
          }
          return x2 instanceof WritableStream;
        }
        function IsWritableStreamLocked(stream) {
          if (stream._writer === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamAbort(stream, reason) {
          var _a4;
          if (stream._state === "closed" || stream._state === "errored") {
            return promiseResolvedWith(void 0);
          }
          stream._writableStreamController._abortReason = reason;
          (_a4 = stream._writableStreamController._abortController) === null || _a4 === void 0 ? void 0 : _a4.abort();
          const state = stream._state;
          if (state === "closed" || state === "errored") {
            return promiseResolvedWith(void 0);
          }
          if (stream._pendingAbortRequest !== void 0) {
            return stream._pendingAbortRequest._promise;
          }
          let wasAlreadyErroring = false;
          if (state === "erroring") {
            wasAlreadyErroring = true;
            reason = void 0;
          }
          const promise = newPromise((resolve2, reject) => {
            stream._pendingAbortRequest = {
              _promise: void 0,
              _resolve: resolve2,
              _reject: reject,
              _reason: reason,
              _wasAlreadyErroring: wasAlreadyErroring
            };
          });
          stream._pendingAbortRequest._promise = promise;
          if (!wasAlreadyErroring) {
            WritableStreamStartErroring(stream, reason);
          }
          return promise;
        }
        function WritableStreamClose(stream) {
          const state = stream._state;
          if (state === "closed" || state === "errored") {
            return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
          }
          const promise = newPromise((resolve2, reject) => {
            const closeRequest = {
              _resolve: resolve2,
              _reject: reject
            };
            stream._closeRequest = closeRequest;
          });
          const writer = stream._writer;
          if (writer !== void 0 && stream._backpressure && state === "writable") {
            defaultWriterReadyPromiseResolve(writer);
          }
          WritableStreamDefaultControllerClose(stream._writableStreamController);
          return promise;
        }
        function WritableStreamAddWriteRequest(stream) {
          const promise = newPromise((resolve2, reject) => {
            const writeRequest = {
              _resolve: resolve2,
              _reject: reject
            };
            stream._writeRequests.push(writeRequest);
          });
          return promise;
        }
        function WritableStreamDealWithRejection(stream, error2) {
          const state = stream._state;
          if (state === "writable") {
            WritableStreamStartErroring(stream, error2);
            return;
          }
          WritableStreamFinishErroring(stream);
        }
        function WritableStreamStartErroring(stream, reason) {
          const controller = stream._writableStreamController;
          stream._state = "erroring";
          stream._storedError = reason;
          const writer = stream._writer;
          if (writer !== void 0) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
          }
          if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
            WritableStreamFinishErroring(stream);
          }
        }
        function WritableStreamFinishErroring(stream) {
          stream._state = "errored";
          stream._writableStreamController[ErrorSteps]();
          const storedError = stream._storedError;
          stream._writeRequests.forEach((writeRequest) => {
            writeRequest._reject(storedError);
          });
          stream._writeRequests = new SimpleQueue();
          if (stream._pendingAbortRequest === void 0) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const abortRequest = stream._pendingAbortRequest;
          stream._pendingAbortRequest = void 0;
          if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
          uponPromise(promise, () => {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          }, (reason) => {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          });
        }
        function WritableStreamFinishInFlightWrite(stream) {
          stream._inFlightWriteRequest._resolve(void 0);
          stream._inFlightWriteRequest = void 0;
        }
        function WritableStreamFinishInFlightWriteWithError(stream, error2) {
          stream._inFlightWriteRequest._reject(error2);
          stream._inFlightWriteRequest = void 0;
          WritableStreamDealWithRejection(stream, error2);
        }
        function WritableStreamFinishInFlightClose(stream) {
          stream._inFlightCloseRequest._resolve(void 0);
          stream._inFlightCloseRequest = void 0;
          const state = stream._state;
          if (state === "erroring") {
            stream._storedError = void 0;
            if (stream._pendingAbortRequest !== void 0) {
              stream._pendingAbortRequest._resolve();
              stream._pendingAbortRequest = void 0;
            }
          }
          stream._state = "closed";
          const writer = stream._writer;
          if (writer !== void 0) {
            defaultWriterClosedPromiseResolve(writer);
          }
        }
        function WritableStreamFinishInFlightCloseWithError(stream, error2) {
          stream._inFlightCloseRequest._reject(error2);
          stream._inFlightCloseRequest = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._reject(error2);
            stream._pendingAbortRequest = void 0;
          }
          WritableStreamDealWithRejection(stream, error2);
        }
        function WritableStreamCloseQueuedOrInFlight(stream) {
          if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamHasOperationMarkedInFlight(stream) {
          if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
            return false;
          }
          return true;
        }
        function WritableStreamMarkCloseRequestInFlight(stream) {
          stream._inFlightCloseRequest = stream._closeRequest;
          stream._closeRequest = void 0;
        }
        function WritableStreamMarkFirstWriteRequestInFlight(stream) {
          stream._inFlightWriteRequest = stream._writeRequests.shift();
        }
        function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
          if (stream._closeRequest !== void 0) {
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = void 0;
          }
          const writer = stream._writer;
          if (writer !== void 0) {
            defaultWriterClosedPromiseReject(writer, stream._storedError);
          }
        }
        function WritableStreamUpdateBackpressure(stream, backpressure) {
          const writer = stream._writer;
          if (writer !== void 0 && backpressure !== stream._backpressure) {
            if (backpressure) {
              defaultWriterReadyPromiseReset(writer);
            } else {
              defaultWriterReadyPromiseResolve(writer);
            }
          }
          stream._backpressure = backpressure;
        }
        class WritableStreamDefaultWriter {
          constructor(stream) {
            assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
            assertWritableStream(stream, "First parameter");
            if (IsWritableStreamLocked(stream)) {
              throw new TypeError("This stream has already been locked for exclusive writing by another writer");
            }
            this._ownerWritableStream = stream;
            stream._writer = this;
            const state = stream._state;
            if (state === "writable") {
              if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                defaultWriterReadyPromiseInitialize(this);
              } else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
              }
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === "erroring") {
              defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === "closed") {
              defaultWriterReadyPromiseInitializeAsResolved(this);
              defaultWriterClosedPromiseInitializeAsResolved(this);
            } else {
              const storedError = stream._storedError;
              defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
              defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
            }
          }
          get closed() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
            }
            return this._closedPromise;
          }
          get desiredSize() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException("desiredSize");
            }
            if (this._ownerWritableStream === void 0) {
              throw defaultWriterLockException("desiredSize");
            }
            return WritableStreamDefaultWriterGetDesiredSize(this);
          }
          get ready() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
            }
            return this._readyPromise;
          }
          abort(reason = void 0) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
            }
            if (this._ownerWritableStream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("abort"));
            }
            return WritableStreamDefaultWriterAbort(this, reason);
          }
          close() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("close"));
            }
            const stream = this._ownerWritableStream;
            if (stream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("close"));
            }
            if (WritableStreamCloseQueuedOrInFlight(stream)) {
              return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
            }
            return WritableStreamDefaultWriterClose(this);
          }
          releaseLock() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException("releaseLock");
            }
            const stream = this._ownerWritableStream;
            if (stream === void 0) {
              return;
            }
            WritableStreamDefaultWriterRelease(this);
          }
          write(chunk = void 0) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(defaultWriterBrandCheckException("write"));
            }
            if (this._ownerWritableStream === void 0) {
              return promiseRejectedWith(defaultWriterLockException("write to"));
            }
            return WritableStreamDefaultWriterWrite(this, chunk);
          }
        }
        Object.defineProperties(WritableStreamDefaultWriter.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          releaseLock: { enumerable: true },
          write: { enumerable: true },
          closed: { enumerable: true },
          desiredSize: { enumerable: true },
          ready: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStreamDefaultWriter",
            configurable: true
          });
        }
        function IsWritableStreamDefaultWriter(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
            return false;
          }
          return x2 instanceof WritableStreamDefaultWriter;
        }
        function WritableStreamDefaultWriterAbort(writer, reason) {
          const stream = writer._ownerWritableStream;
          return WritableStreamAbort(stream, reason);
        }
        function WritableStreamDefaultWriterClose(writer) {
          const stream = writer._ownerWritableStream;
          return WritableStreamClose(stream);
        }
        function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
            return promiseResolvedWith(void 0);
          }
          if (state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          return WritableStreamDefaultWriterClose(writer);
        }
        function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error2) {
          if (writer._closedPromiseState === "pending") {
            defaultWriterClosedPromiseReject(writer, error2);
          } else {
            defaultWriterClosedPromiseResetToRejected(writer, error2);
          }
        }
        function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error2) {
          if (writer._readyPromiseState === "pending") {
            defaultWriterReadyPromiseReject(writer, error2);
          } else {
            defaultWriterReadyPromiseResetToRejected(writer, error2);
          }
        }
        function WritableStreamDefaultWriterGetDesiredSize(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (state === "errored" || state === "erroring") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
        }
        function WritableStreamDefaultWriterRelease(writer) {
          const stream = writer._ownerWritableStream;
          const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
          WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
          stream._writer = void 0;
          writer._ownerWritableStream = void 0;
        }
        function WritableStreamDefaultWriterWrite(writer, chunk) {
          const stream = writer._ownerWritableStream;
          const controller = stream._writableStreamController;
          const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
          if (stream !== writer._ownerWritableStream) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          const state = stream._state;
          if (state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
            return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
          }
          if (state === "erroring") {
            return promiseRejectedWith(stream._storedError);
          }
          const promise = WritableStreamAddWriteRequest(stream);
          WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
          return promise;
        }
        const closeSentinel = {};
        class WritableStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get abortReason() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("abortReason");
            }
            return this._abortReason;
          }
          get signal() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("signal");
            }
            if (this._abortController === void 0) {
              throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
            }
            return this._abortController.signal;
          }
          error(e2 = void 0) {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2("error");
            }
            const state = this._controlledWritableStream._state;
            if (state !== "writable") {
              return;
            }
            WritableStreamDefaultControllerError(this, e2);
          }
          [AbortSteps](reason) {
            const result = this._abortAlgorithm(reason);
            WritableStreamDefaultControllerClearAlgorithms(this);
            return result;
          }
          [ErrorSteps]() {
            ResetQueue(this);
          }
        }
        Object.defineProperties(WritableStreamDefaultController.prototype, {
          abortReason: { enumerable: true },
          signal: { enumerable: true },
          error: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "WritableStreamDefaultController",
            configurable: true
          });
        }
        function IsWritableStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")) {
            return false;
          }
          return x2 instanceof WritableStreamDefaultController;
        }
        function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
          controller._controlledWritableStream = stream;
          stream._writableStreamController = controller;
          controller._queue = void 0;
          controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._abortReason = void 0;
          controller._abortController = createAbortController();
          controller._started = false;
          controller._strategySizeAlgorithm = sizeAlgorithm;
          controller._strategyHWM = highWaterMark;
          controller._writeAlgorithm = writeAlgorithm;
          controller._closeAlgorithm = closeAlgorithm;
          controller._abortAlgorithm = abortAlgorithm;
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
          const startResult = startAlgorithm();
          const startPromise = promiseResolvedWith(startResult);
          uponPromise(startPromise, () => {
            controller._started = true;
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (r2) => {
            controller._started = true;
            WritableStreamDealWithRejection(stream, r2);
          });
        }
        function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
          const controller = Object.create(WritableStreamDefaultController.prototype);
          let startAlgorithm = () => void 0;
          let writeAlgorithm = () => promiseResolvedWith(void 0);
          let closeAlgorithm = () => promiseResolvedWith(void 0);
          let abortAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingSink.start !== void 0) {
            startAlgorithm = () => underlyingSink.start(controller);
          }
          if (underlyingSink.write !== void 0) {
            writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
          }
          if (underlyingSink.close !== void 0) {
            closeAlgorithm = () => underlyingSink.close();
          }
          if (underlyingSink.abort !== void 0) {
            abortAlgorithm = (reason) => underlyingSink.abort(reason);
          }
          SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        }
        function WritableStreamDefaultControllerClearAlgorithms(controller) {
          controller._writeAlgorithm = void 0;
          controller._closeAlgorithm = void 0;
          controller._abortAlgorithm = void 0;
          controller._strategySizeAlgorithm = void 0;
        }
        function WritableStreamDefaultControllerClose(controller) {
          EnqueueValueWithSize(controller, closeSentinel, 0);
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
          try {
            return controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
          }
        }
        function WritableStreamDefaultControllerGetDesiredSize(controller) {
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
          }
          const stream = controller._controlledWritableStream;
          if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
          const stream = controller._controlledWritableStream;
          if (!controller._started) {
            return;
          }
          if (stream._inFlightWriteRequest !== void 0) {
            return;
          }
          const state = stream._state;
          if (state === "erroring") {
            WritableStreamFinishErroring(stream);
            return;
          }
          if (controller._queue.length === 0) {
            return;
          }
          const value = PeekQueueValue(controller);
          if (value === closeSentinel) {
            WritableStreamDefaultControllerProcessClose(controller);
          } else {
            WritableStreamDefaultControllerProcessWrite(controller, value);
          }
        }
        function WritableStreamDefaultControllerErrorIfNeeded(controller, error2) {
          if (controller._controlledWritableStream._state === "writable") {
            WritableStreamDefaultControllerError(controller, error2);
          }
        }
        function WritableStreamDefaultControllerProcessClose(controller) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkCloseRequestInFlight(stream);
          DequeueValue(controller);
          const sinkClosePromise = controller._closeAlgorithm();
          WritableStreamDefaultControllerClearAlgorithms(controller);
          uponPromise(sinkClosePromise, () => {
            WritableStreamFinishInFlightClose(stream);
          }, (reason) => {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
          });
        }
        function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkFirstWriteRequestInFlight(stream);
          const sinkWritePromise = controller._writeAlgorithm(chunk);
          uponPromise(sinkWritePromise, () => {
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            DequeueValue(controller);
            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
              const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
              WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (reason) => {
            if (stream._state === "writable") {
              WritableStreamDefaultControllerClearAlgorithms(controller);
            }
            WritableStreamFinishInFlightWriteWithError(stream, reason);
          });
        }
        function WritableStreamDefaultControllerGetBackpressure(controller) {
          const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
          return desiredSize <= 0;
        }
        function WritableStreamDefaultControllerError(controller, error2) {
          const stream = controller._controlledWritableStream;
          WritableStreamDefaultControllerClearAlgorithms(controller);
          WritableStreamStartErroring(stream, error2);
        }
        function streamBrandCheckException$2(name) {
          return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
        }
        function defaultControllerBrandCheckException$2(name) {
          return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
        }
        function defaultWriterBrandCheckException(name) {
          return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
        }
        function defaultWriterLockException(name) {
          return new TypeError("Cannot " + name + " a stream using a released writer");
        }
        function defaultWriterClosedPromiseInitialize(writer) {
          writer._closedPromise = newPromise((resolve2, reject) => {
            writer._closedPromise_resolve = resolve2;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = "pending";
          });
        }
        function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
          defaultWriterClosedPromiseInitialize(writer);
          defaultWriterClosedPromiseReject(writer, reason);
        }
        function defaultWriterClosedPromiseInitializeAsResolved(writer) {
          defaultWriterClosedPromiseInitialize(writer);
          defaultWriterClosedPromiseResolve(writer);
        }
        function defaultWriterClosedPromiseReject(writer, reason) {
          if (writer._closedPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(writer._closedPromise);
          writer._closedPromise_reject(reason);
          writer._closedPromise_resolve = void 0;
          writer._closedPromise_reject = void 0;
          writer._closedPromiseState = "rejected";
        }
        function defaultWriterClosedPromiseResetToRejected(writer, reason) {
          defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
        }
        function defaultWriterClosedPromiseResolve(writer) {
          if (writer._closedPromise_resolve === void 0) {
            return;
          }
          writer._closedPromise_resolve(void 0);
          writer._closedPromise_resolve = void 0;
          writer._closedPromise_reject = void 0;
          writer._closedPromiseState = "resolved";
        }
        function defaultWriterReadyPromiseInitialize(writer) {
          writer._readyPromise = newPromise((resolve2, reject) => {
            writer._readyPromise_resolve = resolve2;
            writer._readyPromise_reject = reject;
          });
          writer._readyPromiseState = "pending";
        }
        function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
          defaultWriterReadyPromiseInitialize(writer);
          defaultWriterReadyPromiseReject(writer, reason);
        }
        function defaultWriterReadyPromiseInitializeAsResolved(writer) {
          defaultWriterReadyPromiseInitialize(writer);
          defaultWriterReadyPromiseResolve(writer);
        }
        function defaultWriterReadyPromiseReject(writer, reason) {
          if (writer._readyPromise_reject === void 0) {
            return;
          }
          setPromiseIsHandledToTrue(writer._readyPromise);
          writer._readyPromise_reject(reason);
          writer._readyPromise_resolve = void 0;
          writer._readyPromise_reject = void 0;
          writer._readyPromiseState = "rejected";
        }
        function defaultWriterReadyPromiseReset(writer) {
          defaultWriterReadyPromiseInitialize(writer);
        }
        function defaultWriterReadyPromiseResetToRejected(writer, reason) {
          defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
        }
        function defaultWriterReadyPromiseResolve(writer) {
          if (writer._readyPromise_resolve === void 0) {
            return;
          }
          writer._readyPromise_resolve(void 0);
          writer._readyPromise_resolve = void 0;
          writer._readyPromise_reject = void 0;
          writer._readyPromiseState = "fulfilled";
        }
        const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
        function isDOMExceptionConstructor(ctor) {
          if (!(typeof ctor === "function" || typeof ctor === "object")) {
            return false;
          }
          try {
            new ctor();
            return true;
          } catch (_a4) {
            return false;
          }
        }
        function createDOMExceptionPolyfill() {
          const ctor = function DOMException2(message, name) {
            this.message = message || "";
            this.name = name || "Error";
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, this.constructor);
            }
          };
          ctor.prototype = Object.create(Error.prototype);
          Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
          return ctor;
        }
        const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
        function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
          const reader = AcquireReadableStreamDefaultReader(source);
          const writer = AcquireWritableStreamDefaultWriter(dest);
          source._disturbed = true;
          let shuttingDown = false;
          let currentWrite = promiseResolvedWith(void 0);
          return newPromise((resolve2, reject) => {
            let abortAlgorithm;
            if (signal !== void 0) {
              abortAlgorithm = () => {
                const error2 = new DOMException$1("Aborted", "AbortError");
                const actions = [];
                if (!preventAbort) {
                  actions.push(() => {
                    if (dest._state === "writable") {
                      return WritableStreamAbort(dest, error2);
                    }
                    return promiseResolvedWith(void 0);
                  });
                }
                if (!preventCancel) {
                  actions.push(() => {
                    if (source._state === "readable") {
                      return ReadableStreamCancel(source, error2);
                    }
                    return promiseResolvedWith(void 0);
                  });
                }
                shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
              };
              if (signal.aborted) {
                abortAlgorithm();
                return;
              }
              signal.addEventListener("abort", abortAlgorithm);
            }
            function pipeLoop() {
              return newPromise((resolveLoop, rejectLoop) => {
                function next(done) {
                  if (done) {
                    resolveLoop();
                  } else {
                    PerformPromiseThen(pipeStep(), next, rejectLoop);
                  }
                }
                next(false);
              });
            }
            function pipeStep() {
              if (shuttingDown) {
                return promiseResolvedWith(true);
              }
              return PerformPromiseThen(writer._readyPromise, () => {
                return newPromise((resolveRead, rejectRead) => {
                  ReadableStreamDefaultReaderRead(reader, {
                    _chunkSteps: (chunk) => {
                      currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop4);
                      resolveRead(false);
                    },
                    _closeSteps: () => resolveRead(true),
                    _errorSteps: rejectRead
                  });
                });
              });
            }
            isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
              if (!preventAbort) {
                shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
              } else {
                shutdown(true, storedError);
              }
            });
            isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
              if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
              } else {
                shutdown(true, storedError);
              }
            });
            isOrBecomesClosed(source, reader._closedPromise, () => {
              if (!preventClose) {
                shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
              } else {
                shutdown();
              }
            });
            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
              const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
              if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
              } else {
                shutdown(true, destClosed);
              }
            }
            setPromiseIsHandledToTrue(pipeLoop());
            function waitForWritesToFinish() {
              const oldCurrentWrite = currentWrite;
              return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
            }
            function isOrBecomesErrored(stream, promise, action) {
              if (stream._state === "errored") {
                action(stream._storedError);
              } else {
                uponRejection(promise, action);
              }
            }
            function isOrBecomesClosed(stream, promise, action) {
              if (stream._state === "closed") {
                action();
              } else {
                uponFulfillment(promise, action);
              }
            }
            function shutdownWithAction(action, originalIsError, originalError) {
              if (shuttingDown) {
                return;
              }
              shuttingDown = true;
              if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), doTheRest);
              } else {
                doTheRest();
              }
              function doTheRest() {
                uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
              }
            }
            function shutdown(isError, error2) {
              if (shuttingDown) {
                return;
              }
              shuttingDown = true;
              if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error2));
              } else {
                finalize(isError, error2);
              }
            }
            function finalize(isError, error2) {
              WritableStreamDefaultWriterRelease(writer);
              ReadableStreamReaderGenericRelease(reader);
              if (signal !== void 0) {
                signal.removeEventListener("abort", abortAlgorithm);
              }
              if (isError) {
                reject(error2);
              } else {
                resolve2(void 0);
              }
            }
          });
        }
        class ReadableStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("desiredSize");
            }
            return ReadableStreamDefaultControllerGetDesiredSize(this);
          }
          close() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("close");
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError("The stream is not in a state that permits close");
            }
            ReadableStreamDefaultControllerClose(this);
          }
          enqueue(chunk = void 0) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("enqueue");
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError("The stream is not in a state that permits enqueue");
            }
            return ReadableStreamDefaultControllerEnqueue(this, chunk);
          }
          error(e2 = void 0) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1("error");
            }
            ReadableStreamDefaultControllerError(this, e2);
          }
          [CancelSteps](reason) {
            ResetQueue(this);
            const result = this._cancelAlgorithm(reason);
            ReadableStreamDefaultControllerClearAlgorithms(this);
            return result;
          }
          [PullSteps](readRequest) {
            const stream = this._controlledReadableStream;
            if (this._queue.length > 0) {
              const chunk = DequeueValue(this);
              if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this);
                ReadableStreamClose(stream);
              } else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
              }
              readRequest._chunkSteps(chunk);
            } else {
              ReadableStreamAddReadRequest(stream, readRequest);
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
          }
        }
        Object.defineProperties(ReadableStreamDefaultController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStreamDefaultController",
            configurable: true
          });
        }
        function IsReadableStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")) {
            return false;
          }
          return x2 instanceof ReadableStreamDefaultController;
        }
        function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
          if (!shouldPull) {
            return;
          }
          if (controller._pulling) {
            controller._pullAgain = true;
            return;
          }
          controller._pulling = true;
          const pullPromise = controller._pullAlgorithm();
          uponPromise(pullPromise, () => {
            controller._pulling = false;
            if (controller._pullAgain) {
              controller._pullAgain = false;
              ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
          }, (e2) => {
            ReadableStreamDefaultControllerError(controller, e2);
          });
        }
        function ReadableStreamDefaultControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableStream;
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return false;
          }
          if (!controller._started) {
            return false;
          }
          if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableStreamDefaultControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = void 0;
          controller._cancelAlgorithm = void 0;
          controller._strategySizeAlgorithm = void 0;
        }
        function ReadableStreamDefaultControllerClose(controller) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
          }
          const stream = controller._controlledReadableStream;
          controller._closeRequested = true;
          if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
          }
        }
        function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return;
          }
          const stream = controller._controlledReadableStream;
          if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
            ReadableStreamFulfillReadRequest(stream, chunk, false);
          } else {
            let chunkSize;
            try {
              chunkSize = controller._strategySizeAlgorithm(chunk);
            } catch (chunkSizeE) {
              ReadableStreamDefaultControllerError(controller, chunkSizeE);
              throw chunkSizeE;
            }
            try {
              EnqueueValueWithSize(controller, chunk, chunkSize);
            } catch (enqueueE) {
              ReadableStreamDefaultControllerError(controller, enqueueE);
              throw enqueueE;
            }
          }
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
        function ReadableStreamDefaultControllerError(controller, e2) {
          const stream = controller._controlledReadableStream;
          if (stream._state !== "readable") {
            return;
          }
          ResetQueue(controller);
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamError(stream, e2);
        }
        function ReadableStreamDefaultControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableStream._state;
          if (state === "errored") {
            return null;
          }
          if (state === "closed") {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableStreamDefaultControllerHasBackpressure(controller) {
          if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
            return false;
          }
          return true;
        }
        function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
          const state = controller._controlledReadableStream._state;
          if (!controller._closeRequested && state === "readable") {
            return true;
          }
          return false;
        }
        function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
          controller._controlledReadableStream = stream;
          controller._queue = void 0;
          controller._queueTotalSize = void 0;
          ResetQueue(controller);
          controller._started = false;
          controller._closeRequested = false;
          controller._pullAgain = false;
          controller._pulling = false;
          controller._strategySizeAlgorithm = sizeAlgorithm;
          controller._strategyHWM = highWaterMark;
          controller._pullAlgorithm = pullAlgorithm;
          controller._cancelAlgorithm = cancelAlgorithm;
          stream._readableStreamController = controller;
          const startResult = startAlgorithm();
          uponPromise(promiseResolvedWith(startResult), () => {
            controller._started = true;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }, (r2) => {
            ReadableStreamDefaultControllerError(controller, r2);
          });
        }
        function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
          const controller = Object.create(ReadableStreamDefaultController.prototype);
          let startAlgorithm = () => void 0;
          let pullAlgorithm = () => promiseResolvedWith(void 0);
          let cancelAlgorithm = () => promiseResolvedWith(void 0);
          if (underlyingSource.start !== void 0) {
            startAlgorithm = () => underlyingSource.start(controller);
          }
          if (underlyingSource.pull !== void 0) {
            pullAlgorithm = () => underlyingSource.pull(controller);
          }
          if (underlyingSource.cancel !== void 0) {
            cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
          }
          SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        }
        function defaultControllerBrandCheckException$1(name) {
          return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
        }
        function ReadableStreamTee(stream, cloneForBranch2) {
          if (IsReadableByteStreamController(stream._readableStreamController)) {
            return ReadableByteStreamTee(stream);
          }
          return ReadableStreamDefaultTee(stream);
        }
        function ReadableStreamDefaultTee(stream, cloneForBranch2) {
          const reader = AcquireReadableStreamDefaultReader(stream);
          let reading = false;
          let readAgain = false;
          let canceled1 = false;
          let canceled2 = false;
          let reason1;
          let reason2;
          let branch1;
          let branch2;
          let resolveCancelPromise;
          const cancelPromise = newPromise((resolve2) => {
            resolveCancelPromise = resolve2;
          });
          function pullAlgorithm() {
            if (reading) {
              readAgain = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const readRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgain = false;
                  const chunk1 = chunk;
                  const chunk2 = chunk;
                  if (!canceled1) {
                    ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                  }
                  if (!canceled2) {
                    ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                  }
                  reading = false;
                  if (readAgain) {
                    pullAlgorithm();
                  }
                });
              },
              _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                  ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
            return promiseResolvedWith(void 0);
          }
          function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function startAlgorithm() {
          }
          branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
          branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
          uponRejection(reader._closedPromise, (r2) => {
            ReadableStreamDefaultControllerError(branch1._readableStreamController, r2);
            ReadableStreamDefaultControllerError(branch2._readableStreamController, r2);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
          return [branch1, branch2];
        }
        function ReadableByteStreamTee(stream) {
          let reader = AcquireReadableStreamDefaultReader(stream);
          let reading = false;
          let readAgainForBranch1 = false;
          let readAgainForBranch2 = false;
          let canceled1 = false;
          let canceled2 = false;
          let reason1;
          let reason2;
          let branch1;
          let branch2;
          let resolveCancelPromise;
          const cancelPromise = newPromise((resolve2) => {
            resolveCancelPromise = resolve2;
          });
          function forwardReaderError(thisReader) {
            uponRejection(thisReader._closedPromise, (r2) => {
              if (thisReader !== reader) {
                return;
              }
              ReadableByteStreamControllerError(branch1._readableStreamController, r2);
              ReadableByteStreamControllerError(branch2._readableStreamController, r2);
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            });
          }
          function pullWithDefaultReader() {
            if (IsReadableStreamBYOBReader(reader)) {
              ReadableStreamReaderGenericRelease(reader);
              reader = AcquireReadableStreamDefaultReader(stream);
              forwardReaderError(reader);
            }
            const readRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgainForBranch1 = false;
                  readAgainForBranch2 = false;
                  const chunk1 = chunk;
                  let chunk2 = chunk;
                  if (!canceled1 && !canceled2) {
                    try {
                      chunk2 = CloneAsUint8Array(chunk);
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                      ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                      return;
                    }
                  }
                  if (!canceled1) {
                    ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                  }
                  if (!canceled2) {
                    ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                  }
                  reading = false;
                  if (readAgainForBranch1) {
                    pull1Algorithm();
                  } else if (readAgainForBranch2) {
                    pull2Algorithm();
                  }
                });
              },
              _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                  ReadableByteStreamControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerClose(branch2._readableStreamController);
                }
                if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                }
                if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamDefaultReaderRead(reader, readRequest);
          }
          function pullWithBYOBReader(view, forBranch2) {
            if (IsReadableStreamDefaultReader(reader)) {
              ReadableStreamReaderGenericRelease(reader);
              reader = AcquireReadableStreamBYOBReader(stream);
              forwardReaderError(reader);
            }
            const byobBranch = forBranch2 ? branch2 : branch1;
            const otherBranch = forBranch2 ? branch1 : branch2;
            const readIntoRequest = {
              _chunkSteps: (chunk) => {
                queueMicrotask(() => {
                  readAgainForBranch1 = false;
                  readAgainForBranch2 = false;
                  const byobCanceled = forBranch2 ? canceled2 : canceled1;
                  const otherCanceled = forBranch2 ? canceled1 : canceled2;
                  if (!otherCanceled) {
                    let clonedChunk;
                    try {
                      clonedChunk = CloneAsUint8Array(chunk);
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                      ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                      return;
                    }
                    if (!byobCanceled) {
                      ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                  } else if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  reading = false;
                  if (readAgainForBranch1) {
                    pull1Algorithm();
                  } else if (readAgainForBranch2) {
                    pull2Algorithm();
                  }
                });
              },
              _closeSteps: (chunk) => {
                reading = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!byobCanceled) {
                  ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                }
                if (!otherCanceled) {
                  ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                }
                if (chunk !== void 0) {
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                  }
                }
                if (!byobCanceled || !otherCanceled) {
                  resolveCancelPromise(void 0);
                }
              },
              _errorSteps: () => {
                reading = false;
              }
            };
            ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
          }
          function pull1Algorithm() {
            if (reading) {
              readAgainForBranch1 = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
            if (byobRequest === null) {
              pullWithDefaultReader();
            } else {
              pullWithBYOBReader(byobRequest._view, false);
            }
            return promiseResolvedWith(void 0);
          }
          function pull2Algorithm() {
            if (reading) {
              readAgainForBranch2 = true;
              return promiseResolvedWith(void 0);
            }
            reading = true;
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
            if (byobRequest === null) {
              pullWithDefaultReader();
            } else {
              pullWithBYOBReader(byobRequest._view, true);
            }
            return promiseResolvedWith(void 0);
          }
          function cancel1Algorithm(reason) {
            canceled1 = true;
            reason1 = reason;
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function cancel2Algorithm(reason) {
            canceled2 = true;
            reason2 = reason;
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              resolveCancelPromise(cancelResult);
            }
            return cancelPromise;
          }
          function startAlgorithm() {
            return;
          }
          branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
          branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
          forwardReaderError(reader);
          return [branch1, branch2];
        }
        function convertUnderlyingDefaultOrByteSource(source, context) {
          assertDictionary(source, context);
          const original = source;
          const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
          const cancel = original === null || original === void 0 ? void 0 : original.cancel;
          const pull = original === null || original === void 0 ? void 0 : original.pull;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const type = original === null || original === void 0 ? void 0 : original.type;
          return {
            autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
            cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
            pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
            start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
            type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
          };
        }
        function convertUnderlyingSourceCancelCallback(fn, original, context) {
          assertFunction(fn, context);
          return (reason) => promiseCall(fn, original, [reason]);
        }
        function convertUnderlyingSourcePullCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => promiseCall(fn, original, [controller]);
        }
        function convertUnderlyingSourceStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertReadableStreamType(type, context) {
          type = `${type}`;
          if (type !== "bytes") {
            throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
          }
          return type;
        }
        function convertReaderOptions(options, context) {
          assertDictionary(options, context);
          const mode = options === null || options === void 0 ? void 0 : options.mode;
          return {
            mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
          };
        }
        function convertReadableStreamReaderMode(mode, context) {
          mode = `${mode}`;
          if (mode !== "byob") {
            throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
          }
          return mode;
        }
        function convertIteratorOptions(options, context) {
          assertDictionary(options, context);
          const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
          return { preventCancel: Boolean(preventCancel) };
        }
        function convertPipeOptions(options, context) {
          assertDictionary(options, context);
          const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
          const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
          const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
          const signal = options === null || options === void 0 ? void 0 : options.signal;
          if (signal !== void 0) {
            assertAbortSignal(signal, `${context} has member 'signal' that`);
          }
          return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal
          };
        }
        function assertAbortSignal(signal, context) {
          if (!isAbortSignal2(signal)) {
            throw new TypeError(`${context} is not an AbortSignal.`);
          }
        }
        function convertReadableWritablePair(pair, context) {
          assertDictionary(pair, context);
          const readable2 = pair === null || pair === void 0 ? void 0 : pair.readable;
          assertRequiredField(readable2, "readable", "ReadableWritablePair");
          assertReadableStream(readable2, `${context} has member 'readable' that`);
          const writable3 = pair === null || pair === void 0 ? void 0 : pair.writable;
          assertRequiredField(writable3, "writable", "ReadableWritablePair");
          assertWritableStream(writable3, `${context} has member 'writable' that`);
          return { readable: readable2, writable: writable3 };
        }
        class ReadableStream2 {
          constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
            if (rawUnderlyingSource === void 0) {
              rawUnderlyingSource = null;
            } else {
              assertObject(rawUnderlyingSource, "First parameter");
            }
            const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
            InitializeReadableStream(this);
            if (underlyingSource.type === "bytes") {
              if (strategy.size !== void 0) {
                throw new RangeError("The strategy for a byte stream cannot have a size function");
              }
              const highWaterMark = ExtractHighWaterMark(strategy, 0);
              SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
            } else {
              const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
              const highWaterMark = ExtractHighWaterMark(strategy, 1);
              SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
            }
          }
          get locked() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("locked");
            }
            return IsReadableStreamLocked(this);
          }
          cancel(reason = void 0) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1("cancel"));
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
            }
            return ReadableStreamCancel(this, reason);
          }
          getReader(rawOptions = void 0) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("getReader");
            }
            const options = convertReaderOptions(rawOptions, "First parameter");
            if (options.mode === void 0) {
              return AcquireReadableStreamDefaultReader(this);
            }
            return AcquireReadableStreamBYOBReader(this);
          }
          pipeThrough(rawTransform, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("pipeThrough");
            }
            assertRequiredArgument(rawTransform, 1, "pipeThrough");
            const transform = convertReadableWritablePair(rawTransform, "First parameter");
            const options = convertPipeOptions(rawOptions, "Second parameter");
            if (IsReadableStreamLocked(this)) {
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
            }
            if (IsWritableStreamLocked(transform.writable)) {
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
            }
            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            setPromiseIsHandledToTrue(promise);
            return transform.readable;
          }
          pipeTo(destination, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
            }
            if (destination === void 0) {
              return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
            }
            if (!IsWritableStream(destination)) {
              return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
            }
            let options;
            try {
              options = convertPipeOptions(rawOptions, "Second parameter");
            } catch (e2) {
              return promiseRejectedWith(e2);
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
            }
            if (IsWritableStreamLocked(destination)) {
              return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
            }
            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          }
          tee() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("tee");
            }
            const branches = ReadableStreamTee(this);
            return CreateArrayFromList(branches);
          }
          values(rawOptions = void 0) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1("values");
            }
            const options = convertIteratorOptions(rawOptions, "First parameter");
            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
          }
        }
        Object.defineProperties(ReadableStream2.prototype, {
          cancel: { enumerable: true },
          getReader: { enumerable: true },
          pipeThrough: { enumerable: true },
          pipeTo: { enumerable: true },
          tee: { enumerable: true },
          values: { enumerable: true },
          locked: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
            value: "ReadableStream",
            configurable: true
          });
        }
        if (typeof SymbolPolyfill.asyncIterator === "symbol") {
          Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
            value: ReadableStream2.prototype.values,
            writable: true,
            configurable: true
          });
        }
        function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
          const stream = Object.create(ReadableStream2.prototype);
          InitializeReadableStream(stream);
          const controller = Object.create(ReadableStreamDefaultController.prototype);
          SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
          return stream;
        }
        function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
          const stream = Object.create(ReadableStream2.prototype);
          InitializeReadableStream(stream);
          const controller = Object.create(ReadableByteStreamController.prototype);
          SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
          return stream;
        }
        function InitializeReadableStream(stream) {
          stream._state = "readable";
          stream._reader = void 0;
          stream._storedError = void 0;
          stream._disturbed = false;
        }
        function IsReadableStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")) {
            return false;
          }
          return x2 instanceof ReadableStream2;
        }
        function IsReadableStreamLocked(stream) {
          if (stream._reader === void 0) {
            return false;
          }
          return true;
        }
        function ReadableStreamCancel(stream, reason) {
          stream._disturbed = true;
          if (stream._state === "closed") {
            return promiseResolvedWith(void 0);
          }
          if (stream._state === "errored") {
            return promiseRejectedWith(stream._storedError);
          }
          ReadableStreamClose(stream);
          const reader = stream._reader;
          if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._closeSteps(void 0);
            });
            reader._readIntoRequests = new SimpleQueue();
          }
          const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
          return transformPromiseWith(sourceCancelPromise, noop4);
        }
        function ReadableStreamClose(stream) {
          stream._state = "closed";
          const reader = stream._reader;
          if (reader === void 0) {
            return;
          }
          defaultReaderClosedPromiseResolve(reader);
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._closeSteps();
            });
            reader._readRequests = new SimpleQueue();
          }
        }
        function ReadableStreamError(stream, e2) {
          stream._state = "errored";
          stream._storedError = e2;
          const reader = stream._reader;
          if (reader === void 0) {
            return;
          }
          defaultReaderClosedPromiseReject(reader, e2);
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._errorSteps(e2);
            });
            reader._readRequests = new SimpleQueue();
          } else {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._errorSteps(e2);
            });
            reader._readIntoRequests = new SimpleQueue();
          }
        }
        function streamBrandCheckException$1(name) {
          return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
        }
        function convertQueuingStrategyInit(init2, context) {
          assertDictionary(init2, context);
          const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
          assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
          return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
          };
        }
        const byteLengthSizeFunction = (chunk) => {
          return chunk.byteLength;
        };
        Object.defineProperty(byteLengthSizeFunction, "name", {
          value: "size",
          configurable: true
        });
        class ByteLengthQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
            options = convertQueuingStrategyInit(options, "First parameter");
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
          }
          get highWaterMark() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException("highWaterMark");
            }
            return this._byteLengthQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException("size");
            }
            return byteLengthSizeFunction;
          }
        }
        Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: "ByteLengthQueuingStrategy",
            configurable: true
          });
        }
        function byteLengthBrandCheckException(name) {
          return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
        }
        function IsByteLengthQueuingStrategy(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark")) {
            return false;
          }
          return x2 instanceof ByteLengthQueuingStrategy;
        }
        const countSizeFunction = () => {
          return 1;
        };
        Object.defineProperty(countSizeFunction, "name", {
          value: "size",
          configurable: true
        });
        class CountQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, "CountQueuingStrategy");
            options = convertQueuingStrategyInit(options, "First parameter");
            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
          }
          get highWaterMark() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException("highWaterMark");
            }
            return this._countQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException("size");
            }
            return countSizeFunction;
          }
        }
        Object.defineProperties(CountQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
            value: "CountQueuingStrategy",
            configurable: true
          });
        }
        function countBrandCheckException(name) {
          return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
        }
        function IsCountQueuingStrategy(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark")) {
            return false;
          }
          return x2 instanceof CountQueuingStrategy;
        }
        function convertTransformer(original, context) {
          assertDictionary(original, context);
          const flush = original === null || original === void 0 ? void 0 : original.flush;
          const readableType = original === null || original === void 0 ? void 0 : original.readableType;
          const start = original === null || original === void 0 ? void 0 : original.start;
          const transform = original === null || original === void 0 ? void 0 : original.transform;
          const writableType = original === null || original === void 0 ? void 0 : original.writableType;
          return {
            flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
            readableType,
            start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
            transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
            writableType
          };
        }
        function convertTransformerFlushCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => promiseCall(fn, original, [controller]);
        }
        function convertTransformerStartCallback(fn, original, context) {
          assertFunction(fn, context);
          return (controller) => reflectCall(fn, original, [controller]);
        }
        function convertTransformerTransformCallback(fn, original, context) {
          assertFunction(fn, context);
          return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
        }
        class TransformStream {
          constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
            if (rawTransformer === void 0) {
              rawTransformer = null;
            }
            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
            const transformer = convertTransformer(rawTransformer, "First parameter");
            if (transformer.readableType !== void 0) {
              throw new RangeError("Invalid readableType specified");
            }
            if (transformer.writableType !== void 0) {
              throw new RangeError("Invalid writableType specified");
            }
            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
            let startPromise_resolve;
            const startPromise = newPromise((resolve2) => {
              startPromise_resolve = resolve2;
            });
            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
            if (transformer.start !== void 0) {
              startPromise_resolve(transformer.start(this._transformStreamController));
            } else {
              startPromise_resolve(void 0);
            }
          }
          get readable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException("readable");
            }
            return this._readable;
          }
          get writable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException("writable");
            }
            return this._writable;
          }
        }
        Object.defineProperties(TransformStream.prototype, {
          readable: { enumerable: true },
          writable: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
            value: "TransformStream",
            configurable: true
          });
        }
        function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
          function startAlgorithm() {
            return startPromise;
          }
          function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
          }
          function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
          }
          function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream);
          }
          stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
          function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream);
          }
          function cancelAlgorithm(reason) {
            TransformStreamErrorWritableAndUnblockWrite(stream, reason);
            return promiseResolvedWith(void 0);
          }
          stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          stream._backpressure = void 0;
          stream._backpressureChangePromise = void 0;
          stream._backpressureChangePromise_resolve = void 0;
          TransformStreamSetBackpressure(stream, true);
          stream._transformStreamController = void 0;
        }
        function IsTransformStream(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_transformStreamController")) {
            return false;
          }
          return x2 instanceof TransformStream;
        }
        function TransformStreamError(stream, e2) {
          ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2);
          TransformStreamErrorWritableAndUnblockWrite(stream, e2);
        }
        function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
          TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
          WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2);
          if (stream._backpressure) {
            TransformStreamSetBackpressure(stream, false);
          }
        }
        function TransformStreamSetBackpressure(stream, backpressure) {
          if (stream._backpressureChangePromise !== void 0) {
            stream._backpressureChangePromise_resolve();
          }
          stream._backpressureChangePromise = newPromise((resolve2) => {
            stream._backpressureChangePromise_resolve = resolve2;
          });
          stream._backpressure = backpressure;
        }
        class TransformStreamDefaultController {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("desiredSize");
            }
            const readableController = this._controlledTransformStream._readable._readableStreamController;
            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
          }
          enqueue(chunk = void 0) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("enqueue");
            }
            TransformStreamDefaultControllerEnqueue(this, chunk);
          }
          error(reason = void 0) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("error");
            }
            TransformStreamDefaultControllerError(this, reason);
          }
          terminate() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException("terminate");
            }
            TransformStreamDefaultControllerTerminate(this);
          }
        }
        Object.defineProperties(TransformStreamDefaultController.prototype, {
          enqueue: { enumerable: true },
          error: { enumerable: true },
          terminate: { enumerable: true },
          desiredSize: { enumerable: true }
        });
        if (typeof SymbolPolyfill.toStringTag === "symbol") {
          Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
            value: "TransformStreamDefaultController",
            configurable: true
          });
        }
        function IsTransformStreamDefaultController(x2) {
          if (!typeIsObject(x2)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream")) {
            return false;
          }
          return x2 instanceof TransformStreamDefaultController;
        }
        function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
          controller._controlledTransformStream = stream;
          stream._transformStreamController = controller;
          controller._transformAlgorithm = transformAlgorithm;
          controller._flushAlgorithm = flushAlgorithm;
        }
        function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
          const controller = Object.create(TransformStreamDefaultController.prototype);
          let transformAlgorithm = (chunk) => {
            try {
              TransformStreamDefaultControllerEnqueue(controller, chunk);
              return promiseResolvedWith(void 0);
            } catch (transformResultE) {
              return promiseRejectedWith(transformResultE);
            }
          };
          let flushAlgorithm = () => promiseResolvedWith(void 0);
          if (transformer.transform !== void 0) {
            transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
          }
          if (transformer.flush !== void 0) {
            flushAlgorithm = () => transformer.flush(controller);
          }
          SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
        }
        function TransformStreamDefaultControllerClearAlgorithms(controller) {
          controller._transformAlgorithm = void 0;
          controller._flushAlgorithm = void 0;
        }
        function TransformStreamDefaultControllerEnqueue(controller, chunk) {
          const stream = controller._controlledTransformStream;
          const readableController = stream._readable._readableStreamController;
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
            throw new TypeError("Readable side is not in a state that permits enqueue");
          }
          try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
          } catch (e2) {
            TransformStreamErrorWritableAndUnblockWrite(stream, e2);
            throw stream._readable._storedError;
          }
          const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
          if (backpressure !== stream._backpressure) {
            TransformStreamSetBackpressure(stream, true);
          }
        }
        function TransformStreamDefaultControllerError(controller, e2) {
          TransformStreamError(controller._controlledTransformStream, e2);
        }
        function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
          const transformPromise = controller._transformAlgorithm(chunk);
          return transformPromiseWith(transformPromise, void 0, (r2) => {
            TransformStreamError(controller._controlledTransformStream, r2);
            throw r2;
          });
        }
        function TransformStreamDefaultControllerTerminate(controller) {
          const stream = controller._controlledTransformStream;
          const readableController = stream._readable._readableStreamController;
          ReadableStreamDefaultControllerClose(readableController);
          const error2 = new TypeError("TransformStream terminated");
          TransformStreamErrorWritableAndUnblockWrite(stream, error2);
        }
        function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
          const controller = stream._transformStreamController;
          if (stream._backpressure) {
            const backpressureChangePromise = stream._backpressureChangePromise;
            return transformPromiseWith(backpressureChangePromise, () => {
              const writable3 = stream._writable;
              const state = writable3._state;
              if (state === "erroring") {
                throw writable3._storedError;
              }
              return TransformStreamDefaultControllerPerformTransform(controller, chunk);
            });
          }
          return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        }
        function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
          TransformStreamError(stream, reason);
          return promiseResolvedWith(void 0);
        }
        function TransformStreamDefaultSinkCloseAlgorithm(stream) {
          const readable2 = stream._readable;
          const controller = stream._transformStreamController;
          const flushPromise = controller._flushAlgorithm();
          TransformStreamDefaultControllerClearAlgorithms(controller);
          return transformPromiseWith(flushPromise, () => {
            if (readable2._state === "errored") {
              throw readable2._storedError;
            }
            ReadableStreamDefaultControllerClose(readable2._readableStreamController);
          }, (r2) => {
            TransformStreamError(stream, r2);
            throw readable2._storedError;
          });
        }
        function TransformStreamDefaultSourcePullAlgorithm(stream) {
          TransformStreamSetBackpressure(stream, false);
          return stream._backpressureChangePromise;
        }
        function defaultControllerBrandCheckException(name) {
          return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
        }
        function streamBrandCheckException(name) {
          return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
        }
        exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
        exports2.CountQueuingStrategy = CountQueuingStrategy;
        exports2.ReadableByteStreamController = ReadableByteStreamController;
        exports2.ReadableStream = ReadableStream2;
        exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
        exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
        exports2.ReadableStreamDefaultController = ReadableStreamDefaultController;
        exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
        exports2.TransformStream = TransformStream;
        exports2.TransformStreamDefaultController = TransformStreamDefaultController;
        exports2.WritableStream = WritableStream;
        exports2.WritableStreamDefaultController = WritableStreamDefaultController;
        exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    })(ponyfill_es2018, ponyfill_es2018.exports);
    POOL_SIZE$1 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          };
          Object.assign(globalThis, require("stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error2) {
          process2.emitWarning = emitWarning;
          throw error2;
        }
      } catch (error2) {
        Object.assign(globalThis, ponyfill_es2018.exports);
      }
    }
    try {
      const { Blob: Blob2 } = require("buffer");
      if (Blob2 && !Blob2.prototype.stream) {
        Blob2.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error2) {
    }
    POOL_SIZE = 65536;
    _Blob = (_a = class {
      constructor(blobParts = [], options = {}) {
        __privateAdd(this, _parts, []);
        __privateAdd(this, _type, "");
        __privateAdd(this, _size, 0);
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null)
          options = {};
        const encoder2 = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof _a) {
            part = element;
          } else {
            part = encoder2.encode(element);
          }
          __privateSet(this, _size, __privateGet(this, _size) + (ArrayBuffer.isView(part) ? part.byteLength : part.size));
          __privateGet(this, _parts).push(part);
        }
        const type = options.type === void 0 ? "" : String(options.type);
        __privateSet(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : "");
      }
      get size() {
        return __privateGet(this, _size);
      }
      get type() {
        return __privateGet(this, _type);
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(__privateGet(this, _parts), false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(__privateGet(this, _parts), false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(__privateGet(this, _parts), true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = __privateGet(this, _parts);
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new _a([], { type: String(type).toLowerCase() });
        __privateSet(blob, _size, span);
        __privateSet(blob, _parts, blobParts);
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    }, _parts = new WeakMap(), _type = new WeakMap(), _size = new WeakMap(), _a);
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob = _Blob;
    Blob$1 = Blob;
    _File = (_a2 = class extends Blob$1 {
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        __privateAdd(this, _lastModified, 0);
        __privateAdd(this, _name, "");
        if (options === null)
          options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          __privateSet(this, _lastModified, lastModified);
        }
        __privateSet(this, _name, String(fileName));
      }
      get name() {
        return __privateGet(this, _name);
      }
      get lastModified() {
        return __privateGet(this, _lastModified);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }, _lastModified = new WeakMap(), _name = new WeakMap(), _a2);
    File = _File;
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f2 = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new File([b], c, b) : b] : [a, b + ""]);
    e = (c, f3) => (f3 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
      }
    };
    FormData = (_a3 = class {
      constructor(...a) {
        __privateAdd(this, _d, []);
        if (a.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2);
        __privateGet(this, _d).push(f2(...a));
      }
      delete(a) {
        x("delete", arguments, 1);
        a += "";
        __privateSet(this, _d, __privateGet(this, _d).filter(([b]) => b !== a));
      }
      get(a) {
        x("get", arguments, 1);
        a += "";
        for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1]));
        return b;
      }
      has(a) {
        x("has", arguments, 1);
        a += "";
        return __privateGet(this, _d).some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = true;
        a = f2(...a);
        __privateGet(this, _d).forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        __privateSet(this, _d, b);
      }
      *entries() {
        yield* __privateGet(this, _d);
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    }, _d = new WeakMap(), _a3);
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    FetchError = class extends FetchBaseError {
      constructor(message, type, systemError) {
        super(message, type);
        if (systemError) {
          this.code = this.errno = systemError.code;
          this.erroredSysCall = systemError.syscall;
        }
      }
    };
    NAME = Symbol.toStringTag;
    isURLSearchParameters = (object) => {
      return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
    };
    isBlob = (object) => {
      return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
    };
    isAbortSignal = (object) => {
      return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
    };
    INTERNALS$2 = Symbol("Body internals");
    Body = class {
      constructor(body, {
        size = 0
      } = {}) {
        let boundary = null;
        if (body === null) {
          body = null;
        } else if (isURLSearchParameters(body)) {
          body = Buffer.from(body.toString());
        } else if (isBlob(body))
          ;
        else if (Buffer.isBuffer(body))
          ;
        else if (import_node_util2.types.isAnyArrayBuffer(body)) {
          body = Buffer.from(body);
        } else if (ArrayBuffer.isView(body)) {
          body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof import_node_stream2.default)
          ;
        else if (body instanceof FormData) {
          body = formDataToBlob(body);
          boundary = body.type.split("=")[1];
        } else {
          body = Buffer.from(String(body));
        }
        let stream = body;
        if (Buffer.isBuffer(body)) {
          stream = import_node_stream2.default.Readable.from(body);
        } else if (isBlob(body)) {
          stream = import_node_stream2.default.Readable.from(body.stream());
        }
        this[INTERNALS$2] = {
          body,
          stream,
          boundary,
          disturbed: false,
          error: null
        };
        this.size = size;
        if (body instanceof import_node_stream2.default) {
          body.on("error", (error_) => {
            const error2 = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
            this[INTERNALS$2].error = error2;
          });
        }
      }
      get body() {
        return this[INTERNALS$2].stream;
      }
      get bodyUsed() {
        return this[INTERNALS$2].disturbed;
      }
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          const formData = new FormData();
          const parameters = new URLSearchParams(await this.text());
          for (const [name, value] of parameters) {
            formData.append(name, value);
          }
          return formData;
        }
        const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
        return toFormData2(this.body, ct);
      }
      async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
        const buf = await this.buffer();
        return new Blob$1([buf], {
          type: ct
        });
      }
      async json() {
        const buffer = await consumeBody(this);
        return JSON.parse(buffer.toString());
      }
      async text() {
        const buffer = await consumeBody(this);
        return buffer.toString();
      }
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = (0, import_node_util2.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    clone = (instance, highWaterMark) => {
      let p1;
      let p2;
      let { body } = instance[INTERNALS$2];
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof import_node_stream2.default && typeof body.getBoundary !== "function") {
        p1 = new import_node_stream2.PassThrough({ highWaterMark });
        p2 = new import_node_stream2.PassThrough({ highWaterMark });
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS$2].stream = p1;
        body = p2;
      }
      return body;
    };
    getNonSpecFormDataBoundary = (0, import_node_util2.deprecate)((body) => body.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
    extractContentType = (body, request) => {
      if (body === null) {
        return null;
      }
      if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      }
      if (isURLSearchParameters(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      }
      if (isBlob(body)) {
        return body.type || null;
      }
      if (Buffer.isBuffer(body) || import_node_util2.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
      }
      if (body instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
      }
      if (body && typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
      }
      if (body instanceof import_node_stream2.default) {
        return null;
      }
      return "text/plain;charset=UTF-8";
    };
    getTotalBytes = (request) => {
      const { body } = request[INTERNALS$2];
      if (body === null) {
        return 0;
      }
      if (isBlob(body)) {
        return body.size;
      }
      if (Buffer.isBuffer(body)) {
        return body.length;
      }
      if (body && typeof body.getLengthSync === "function") {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
      }
      return null;
    };
    writeToStream = (dest, { body }) => {
      if (body === null) {
        dest.end();
      } else {
        body.pipe(dest);
      }
    };
    validateHeaderName = typeof import_node_http2.default.validateHeaderName === "function" ? import_node_http2.default.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error2 = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
        throw error2;
      }
    };
    validateHeaderValue = typeof import_node_http2.default.validateHeaderValue === "function" ? import_node_http2.default.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error2 = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_CHAR" });
        throw error2;
      }
    };
    Headers2 = class extends URLSearchParams {
      constructor(init2) {
        let result = [];
        if (init2 instanceof Headers2) {
          const raw = init2.raw();
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]));
          }
        } else if (init2 == null)
          ;
        else if (typeof init2 === "object" && !import_node_util2.types.isBoxedPrimitive(init2)) {
          const method = init2[Symbol.iterator];
          if (method == null) {
            result.push(...Object.entries(init2));
          } else {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            result = [...init2].map((pair) => {
              if (typeof pair !== "object" || import_node_util2.types.isBoxedPrimitive(pair)) {
                throw new TypeError("Each header pair must be an iterable object");
              }
              return [...pair];
            }).map((pair) => {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              return [...pair];
            });
          }
        } else {
          throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        result = result.length > 0 ? result.map(([name, value]) => {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return [String(name).toLowerCase(), String(value)];
        }) : void 0;
        super(result);
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => {
                  validateHeaderName(name);
                  validateHeaderValue(name, String(value));
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
                };
              case "delete":
              case "has":
              case "getAll":
                return (name) => {
                  validateHeaderName(name);
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                };
              case "keys":
                return () => {
                  target.sort();
                  return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                };
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
          return null;
        }
        let value = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase();
        }
        return value;
      }
      forEach(callback, thisArg = void 0) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
        }
      }
      *values() {
        for (const name of this.keys()) {
          yield this.get(name);
        }
      }
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((result, key2) => {
          result[key2] = this.getAll(key2);
          return result;
        }, {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key2) => {
          const values = this.getAll(key2);
          if (key2 === "host") {
            result[key2] = values[0];
          } else {
            result[key2] = values.length > 1 ? values : values[0];
          }
          return result;
        }, {});
      }
    };
    Object.defineProperties(Headers2.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
      result[property] = { enumerable: true };
      return result;
    }, {}));
    redirectStatus = new Set([301, 302, 303, 307, 308]);
    isRedirect = (code) => {
      return redirectStatus.has(code);
    };
    INTERNALS$1 = Symbol("Response internals");
    Response2 = class extends Body {
      constructor(body = null, options = {}) {
        super(body, options);
        const status = options.status != null ? options.status : 200;
        const headers = new Headers2(options.headers);
        if (body !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body, this);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$1] = {
          type: "default",
          url: options.url,
          status,
          statusText: options.statusText || "",
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        };
      }
      get type() {
        return this[INTERNALS$1].type;
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      get highWaterMark() {
        return this[INTERNALS$1].highWaterMark;
      }
      clone() {
        return new Response2(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size,
          highWaterMark: this.highWaterMark
        });
      }
      static redirect(url, status = 302) {
        if (!isRedirect(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new Response2(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        });
      }
      static error() {
        const response = new Response2(null, { status: 0, statusText: "" });
        response[INTERNALS$1].type = "error";
        return response;
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    Object.defineProperties(Response2.prototype, {
      type: { enumerable: true },
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    getSearch = (parsedURL) => {
      if (parsedURL.search) {
        return parsedURL.search;
      }
      const lastOffset = parsedURL.href.length - 1;
      const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
      return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
    };
    ReferrerPolicy = new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
    DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
    INTERNALS = Symbol("Request internals");
    isRequest = (object) => {
      return typeof object === "object" && typeof object[INTERNALS] === "object";
    };
    Request2 = class extends Body {
      constructor(input, init2 = {}) {
        let parsedURL;
        if (isRequest(input)) {
          parsedURL = new URL(input.url);
        } else {
          parsedURL = new URL(input);
          input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
          throw new TypeError(`${parsedURL} is an url with embedded credentails.`);
        }
        let method = init2.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init2.size || input.size || 0
        });
        const headers = new Headers2(init2.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody, this);
          if (contentType) {
            headers.set("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init2) {
          signal = init2.signal;
        }
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        let referrer = init2.referrer == null ? input.referrer : init2.referrer;
        if (referrer === "") {
          referrer = "no-referrer";
        } else if (referrer) {
          const parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
          referrer = void 0;
        }
        this[INTERNALS] = {
          method,
          redirect: init2.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        };
        this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
        this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
        this.counter = init2.counter || input.counter || 0;
        this.agent = init2.agent || input.agent;
        this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
        this.referrerPolicy = init2.referrerPolicy || input.referrerPolicy || "";
      }
      get method() {
        return this[INTERNALS].method;
      }
      get url() {
        return (0, import_node_url2.format)(this[INTERNALS].parsedURL);
      }
      get headers() {
        return this[INTERNALS].headers;
      }
      get redirect() {
        return this[INTERNALS].redirect;
      }
      get signal() {
        return this[INTERNALS].signal;
      }
      get referrer() {
        if (this[INTERNALS].referrer === "no-referrer") {
          return "";
        }
        if (this[INTERNALS].referrer === "client") {
          return "about:client";
        }
        if (this[INTERNALS].referrer) {
          return this[INTERNALS].referrer.toString();
        }
        return void 0;
      }
      get referrerPolicy() {
        return this[INTERNALS].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      clone() {
        return new Request2(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request2.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
      referrer: { enumerable: true },
      referrerPolicy: { enumerable: true }
    });
    getNodeRequestOptions = (request) => {
      const { parsedURL } = request[INTERNALS];
      const headers = new Headers2(request[INTERNALS].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      let contentLengthValue = null;
      if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body !== null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
      }
      if (request.referrer && request.referrer !== "no-referrer") {
        request[INTERNALS].referrer = determineRequestsReferrer(request);
      } else {
        request[INTERNALS].referrer = "no-referrer";
      }
      if (request[INTERNALS].referrer instanceof URL) {
        headers.set("Referer", request.referrer);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate,br");
      }
      let { agent } = request;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      const search = getSearch(parsedURL);
      const options = {
        path: parsedURL.pathname + search,
        method: request.method,
        headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      };
      return {
        parsedURL,
        options
      };
    };
    AbortError = class extends FetchBaseError {
      constructor(message, type = "aborted") {
        super(message, type);
      }
    };
    supportedSchemas = new Set(["data:", "http:", "https:"]);
  }
});

// .svelte-kit/output/server/chunks/index-77482e32.js
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function custom_event(type, detail, bubbles = false) {
  const e2 = document.createEvent("CustomEvent");
  e2.initCustomEvent(type, bubbles, false, detail);
  return e2;
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
}
function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);
  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;
    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += " " + classes_to_add;
      }
    }
    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name) => {
    if (invalid_attribute_name_character.test(name))
      return;
    const value = attributes[name];
    if (value === true)
      str += " " + name;
    else if (boolean_attributes.has(name.toLowerCase())) {
      if (value)
        str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};
  for (const individual_style of style_attribute.split(";")) {
    const colon_index = individual_style.indexOf(":");
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name)
      continue;
    style_object[name] = value;
  }
  for (const name in style_directive) {
    const value = style_directive[name];
    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }
  return style_object;
}
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function escape_attribute_value(value) {
  return typeof value === "string" ? escape(value) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key2 in obj) {
    result[key2] = escape_attribute_value(obj[key2]);
  }
  return result;
}
function each(items, fn) {
  let str = "";
  for (let i2 = 0; i2 < items.length; i2 += 1) {
    str += fn(items[i2], i2);
  }
  return str;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css37) => css37.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true && boolean_attributes.has(name) ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function style_object_to_string(style_object) {
  return Object.keys(style_object).filter((key2) => style_object[key2]).map((key2) => `${key2}: ${style_object[key2]};`).join(" ");
}
var current_component, boolean_attributes, invalid_attribute_name_character, escaped, missing_component, on_destroy;
var init_index_77482e32 = __esm({
  ".svelte-kit/output/server/chunks/index-77482e32.js"() {
    Promise.resolve();
    boolean_attributes = /* @__PURE__ */ new Set([
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]);
    invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
    escaped = {
      '"': "&quot;",
      "'": "&#39;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;"
    };
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index-02f50c33.js
function writable2(value, start = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue2.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue2.length; i2 += 2) {
            subscriber_queue2[i2][0](subscriber_queue2[i2 + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var Icon, subscriber_queue2;
var init_index_02f50c33 = __esm({
  ".svelte-kit/output/server/chunks/index-02f50c33.js"() {
    init_index_77482e32();
    Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$restProps = compute_rest_props($$props, ["src", "size", "solid", "class"]);
      let { src = [] } = $$props;
      let { size = "100%" } = $$props;
      let { solid = false } = $$props;
      let { class: customClass = "" } = $$props;
      if (size !== "100%") {
        if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
          try {
            size = parseInt(size) + "px";
          } catch (error2) {
            size = "100%";
          }
        }
      }
      if ($$props.src === void 0 && $$bindings.src && src !== void 0)
        $$bindings.src(src);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
        $$bindings.solid(solid);
      if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
        $$bindings.class(customClass);
      return `${src && src != [] ? `${solid ? `<svg${spread([
        { xmlns: "http://www.w3.org/2000/svg" },
        { fill: "currentColor" },
        { viewBox: "0 0 20 20" },
        {
          class: escape_attribute_value(customClass)
        },
        { width: escape_attribute_value(size) },
        { height: escape_attribute_value(size) },
        escape_object($$restProps)
      ], {})}>${each(src[0] ?? [], (att) => {
        return `
        <path${spread([escape_object(att)], {})}></path>`;
      })}</svg>` : `<svg${spread([
        { xmlns: "http://www.w3.org/2000/svg" },
        { fill: "none" },
        { viewBox: "0 0 24 24" },
        { stroke: "currentColor" },
        {
          class: escape_attribute_value(customClass)
        },
        { width: escape_attribute_value(size) },
        { height: escape_attribute_value(size) },
        escape_object($$restProps)
      ], {})}>${each(src[1] ?? [], (att) => {
        return `
        <path${spread([escape_object(att)], {})}></path>`;
      })}</svg>`}` : ``}`;
    });
    subscriber_queue2 = [];
  }
});

// .svelte-kit/output/server/chunks/OutClick-6647c5ef.js
var OutClick;
var init_OutClick_6647c5ef = __esm({
  ".svelte-kit/output/server/chunks/OutClick-6647c5ef.js"() {
    init_index_77482e32();
    OutClick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      createEventDispatcher();
      let { class: className = "" } = $$props;
      let { excludeByDOMNode = [] } = $$props;
      let { excludeByQuerySelector = [] } = $$props;
      let { useWrapper = false } = $$props;
      let { includeSelf = false } = $$props;
      let wrapper;
      if ($$props.class === void 0 && $$bindings.class && className !== void 0)
        $$bindings.class(className);
      if ($$props.excludeByDOMNode === void 0 && $$bindings.excludeByDOMNode && excludeByDOMNode !== void 0)
        $$bindings.excludeByDOMNode(excludeByDOMNode);
      if ($$props.excludeByQuerySelector === void 0 && $$bindings.excludeByQuerySelector && excludeByQuerySelector !== void 0)
        $$bindings.excludeByQuerySelector(excludeByQuerySelector);
      if ($$props.useWrapper === void 0 && $$bindings.useWrapper && useWrapper !== void 0)
        $$bindings.useWrapper(useWrapper);
      if ($$props.includeSelf === void 0 && $$bindings.includeSelf && includeSelf !== void 0)
        $$bindings.includeSelf(includeSelf);
      return `


<div class="${"outclick " + escape(className)}"${add_attribute("style", !className && !useWrapper ? "display: contents" : "", 0)}${add_attribute("this", wrapper, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
var Exclamation, AlertCovid, MobMenuBtn, RightNavMenuItems, ProfileDropdown, Signup, MainNav, Header, FooterLogos, Copyright, FooterLinks, Footer, _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_77482e32();
    init_index_02f50c33();
    init_OutClick_6647c5ef();
    Exclamation = [[{ "fill-rule": "evenodd", "d": "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", "clip-rule": "evenodd" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }]];
    AlertCovid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<nav aria-label="${"Top"}" class="${"relative z-[1]"}">
	<div class="${"bg-gray-900"}"><div class="${"max-w-7xl lg:mx-auto py-2 px-4 flex items-center justify-between"}"><div class="${"hidden lg:flex"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: Exclamation,
        class: "h-6 text-slate-50 w-5 mr-2"
      }, {}, {})}
				<span class="${"text-xz my-auto text-white"}">All air passengers must comply with COVID-19 travel and vaccination requirements imposed
					by the Government of Canada.</span></div>

			<div class="${"lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"}"><a href="${"javascript:void(0)"}" class="${"-m-3 p-3 flex items-center "}">
					<svg class="${"sm:hidden flex-shrink-0 h-4 w-4 text-gray-100"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}"></path></svg>
					<a href="${"javascript:void(0)"}" class="${"ml-4 sm:text-xz text-xs font-medium text-white hover:text-gray-100"}">Check Covid-19 Restrictions</a></a></div></div></div></nav>`;
    });
    MobMenuBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let btnDropdownRef;
      let popoverDropdownRef;
      return `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `
	<button type="${"button"}" class="${"inline-flex items-center justify-center ml-2 text-slate-700 hover:text-slate-900 "}"${add_attribute("this", btnDropdownRef, 0)}><span class="${"sr-only"}">Open main menu</span>
		
		<svg class="${"block h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>
		
		<svg class="${"hidden h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button>
	
	<div class="${"w-[100vw] mx-auto bg-white text-tiny font-medium z-30 float-left py-2 list-none text-left rounded shadow-xl " + escape("hidden")}"${add_attribute("this", popoverDropdownRef, 0)}><div class="${"pt-2 pb-3 space-y-2"}">
			<a href="${"flights"}" class="${"bg-pblue-50 border-rose-500 text-pblue-900 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Flights</a>
			<a href="${"vacations"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Vacations</a>
			<a href="${"hotels"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Hotels</a>
			<a href="${"javascript:void(0)"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Hotel + Flight</a>
			<a href="${"javascript:void(0)"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Things to do</a></div></div>`;
        }
      })}`;
    });
    RightNavMenuItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $signedInMenu, $$unsubscribe_signedInMenu;
      let $showSignin, $$unsubscribe_showSignin;
      let $showForgotPass, $$unsubscribe_showForgotPass;
      let $showCreateAccount, $$unsubscribe_showCreateAccount;
      function useToggle(initialState) {
        const { subscribe: subscribe2, update } = writable2(initialState);
        return { subscribe: subscribe2, toggle: () => update((x2) => !x2) };
      }
      const showSignin = useToggle(false);
      $$unsubscribe_showSignin = subscribe(showSignin, (value) => $showSignin = value);
      const showForgotPass = useToggle(false);
      $$unsubscribe_showForgotPass = subscribe(showForgotPass, (value) => $showForgotPass = value);
      const showCreateAccount = useToggle(false);
      $$unsubscribe_showCreateAccount = subscribe(showCreateAccount, (value) => $showCreateAccount = value);
      const signedIn = useToggle(false);
      const signedInMenu = useToggle(false);
      $$unsubscribe_signedInMenu = subscribe(signedInMenu, (value) => $signedInMenu = value);
      $$unsubscribe_signedInMenu();
      $$unsubscribe_showSignin();
      $$unsubscribe_showForgotPass();
      $$unsubscribe_showCreateAccount();
      return `
<div class="${"flex-shrink-0 flex"}"><a href="${"javascript:void(0)"}" class="${"text-slate-900 hover:text-rose-600 flex items-center"}"><img src="${"https://tailwindui.com/img/flags/flag-canada.svg"}" alt="${""}" class="${"w-5 h-auto block flex-shrink-0"}">
		<span class="${"ml-3 block text-tiny font-medium"}">Francais </span>
		<span class="${"sr-only"}">, change language</span></a></div>


<div class="${"flex-shrink-0 "}"><a href="${"/contact-us"}" class="${"text-slate-900 hover:text-rose-600 flex items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-auto mr-0"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"none"}" d="${"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}"></path></svg>

		<span class="${"ml-3 block text-tiny font-medium"}">Contact Us </span>
		<span class="${"sr-only"}">contact us</span></a></div>
<span class="${"h-6 w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
<div class="${"hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"}">
	
	<button type="${"button"}" class="${"bg-white p-1 rounded-full text-gray-700 hover:text-gray-600 focus:outline-none "}" data-collapse-toggle="${"user-profile"}"><span class="${"sr-only"}">User login</span>
		
		<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-7 w-7"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button>
	${signedIn ? `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"mx-2 relative"}"><div><button type="${"button"}" class="${"bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500 ease-linear transition-all duration-150"}"><span class="${"sr-only"}">Open user menu</span>
						<img class="${"h-8 w-8 rounded-full"}" src="${"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}"></button></div>
				${$signedInMenu ? `<div class="${"bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[44px] -translate-x-[348px]"}"><div class="${"pt-2 pb-3 space-y-1"}">
							<a href="${"flights"}" class="${"bg-pblue-50 border-rose-600 text-pblue-900 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Profile</a>
							<a href="${"vacations"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Settings</a>
							<a href="${"vacations"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Sign out</a></div></div>` : ``}</div>`;
        }
      })}` : ``}
	${$showSignin ? `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[58px] -translate-x-[348px]"}"><form class="${"space-y-4 p-6"}" action="${"#"}" method="${"POST"}"><div><label for="${"email"}" class="${"block text-sm font-medium text-gray-700"}">Email address
						</label>
						<div class="${"mt-1"}"><input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>

					<div><label for="${"password"}" class="${"block text-sm font-medium text-gray-700"}">Password </label>
						<div class="${"mt-1"}"><input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>

					<div class="${"flex items-center justify-between"}"><div class="${"flex items-center"}"><input id="${"remember-me"}" name="${"remember-me"}" type="${"checkbox"}" class="${"h-4 w-4 text-pblue-600 focus:ring-pblue-500 border-gray-300 rounded"}">
							<label for="${"remember-me"}" class="${"ml-2 block text-sm text-gray-900"}">Remember me
							</label></div>

						<button class="${"text-sm"}"><a href="${"#"}" class="${"font-medium text-pblue-600 hover:text-pblue-500"}">Forgot your password?
							</a></button></div>

					<div><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"}">Sign in</button></div>
					
					<div class="${"relative "}"><div class="${"absolute inset-0 flex items-center"}" aria-hidden="${"true"}"><div class="${"w-full border-t border-gray-300"}"></div></div>
						<div class="${"relative flex justify-center"}"><span class="${"px-2 bg-white text-sm text-gray-500"}">Don&#39;t have an account? </span></div></div>
					<div><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"}">Create Account</button></div></form></div>`;
        }
      })}` : ``}
	${$showForgotPass ? `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[58px] -translate-x-[348px] pt-3 pb-6"}"><div class="${"px-6 py-2"}"><h2 class="${"font-bold "}">Forgot your password?</h2>
					<p class="${"text-sz"}">Please enter your email below</p></div>
				<form class="${"space-y-4 px-6"}" action="${"#"}" method="${"POST"}"><div><label for="${"email"}" class="${"block text-sm font-medium text-gray-700"}">Email address
						</label>
						<div class="${"mt-1"}"><input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>

					<div><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"}">Reset Password</button></div></form></div>`;
        }
      })}` : ``}
	${$showCreateAccount ? `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[58px] -translate-x-[348px] pt-3 pb-6"}"><div class="${"px-6 py-2"}"><h2 class="${"font-bold "}">Create an account</h2>
					<p class="${"text-sz"}">Please fill in the form below</p></div>
				<form class="${"space-y-4 px-6"}" action="${"#"}" method="${"POST"}"><div><label for="${"first_name"}" class="${"block text-sm font-medium text-gray-700"}">First Name
						</label>
						<div class="${"mt-1"}"><input id="${"first_name"}" name="${"first_name"}" type="${"text"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>
					<div><label for="${"last_name"}" class="${"block text-sm font-medium text-gray-700"}">Last Name
						</label>
						<div class="${"mt-1"}"><input id="${"last_name"}" name="${"last_name"}" type="${"text"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>
					<div><label for="${"email"}" class="${"block text-sm font-medium text-gray-700"}">Email address
						</label>
						<div class="${"mt-1"}"><input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>
					<div><label for="${"password"}" class="${"block text-sm font-medium text-gray-700"}">Password </label>
						<div class="${"mt-1"}"><input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"off"}" required class="${"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"}"></div></div>
					<div><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"}">Create Account</button></div>
					<div class="${"relative "}"><div class="${"absolute inset-0 flex items-center"}" aria-hidden="${"true"}"><div class="${"w-full border-t border-gray-300"}"></div></div>
						<div class="${"relative flex justify-center"}"><span class="${"px-2 bg-white text-sm text-gray-500"}">Already have an account?</span></div></div>
					<div><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"}">Sign in</button></div></form></div>`;
        }
      })}` : ``}</div>`;
    });
    ProfileDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let btnDropdownRef;
      let popoverDropdownRef;
      return `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `
	<div class="${"mx-2 relative "}"><div><button type="${"button"}" class="${"bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 ease-linear transition-all duration-150"}" aria-expanded="${"false"}" aria-haspopup="${"true"}" data-collapse-toggle="${"user-profile"}"${add_attribute("this", btnDropdownRef, 0)}><span class="${"sr-only"}">Open user menu</span>
				<img class="${"h-8 w-8 rounded-full"}" src="${"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}"></button></div>
		<div class="${"bg-white text-base z-[10] py-2 list-none w-[100vw] rounded shadow-lg " + escape("hidden")}"${add_attribute("this", popoverDropdownRef, 0)}><a href="${"flights"}" class="${"bg-pblue-50 border-rose-600 text-pblue-900 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Profile</a>
			<a href="${"vacations"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Settings</a>
			<a href="${"vacations"}" class="${"border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"}">Sign out</a></div></div>`;
        }
      })}`;
    });
    Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
    MainNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<nav class="${"bg-white shadow relative mb-1"}"><div class="${"max-w-7xl mx-auto py-2"}"><div class="${"flex flex-wrap justify-between items-center "}"><div class="${"flex pl-4"}">
				<a sveltekit:prefetch href="${"/"}" class="${"flex-shrink-0 flex place-items-start"}"><img class="${"h-9 sm:h-11 w-auto"}" src="${"logo.svg"}" alt="${"Trip Support Logo"}"></a>

				
				<div class="${"hidden lg:flex items-center gap-1 px-4"}">
					<div class="${"hidden md:ml-6 lg:flex md:space-x-8"}"><a sveltekit:prefetch href="${"/flights"}" class="${"text-tiny inline-flex items-center px-1 pt-1 sm:ml-4 hover:text-rose-600 " + escape("text-gray-900 font-medium")}">Flights
						</a>
						<a sveltekit:prefetch href="${"/vacations"}" class="${"text-tiny inline-flex items-center px-1 pt-1 sm:ml-4 hover:text-rose-600 " + escape("text-gray-900 font-medium")}">Vacations
						</a>
						<a sveltekit:prefetch href="${"/hotels"}" class="${"text-tiny inline-flex items-center px-1 pt-1 sm:ml-4 hover:text-rose-600 " + escape("text-gray-900 font-medium")}">Hotels
						</a></div></div></div>

			<div class="${"inline-flex items-center py-2 text-sm text-gray-900 rounded-lg lg:hidden pr-4"}"><a href="${"tel:1-855-606-0606"}" class="${"text-pblue-900 hover:text-rose-600 "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-auto mr-2"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"none"}" d="${"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}"></path></svg></a>
				${validate_component(Signup, "Signup").$$render($$result, {}, {}, {})}
				${validate_component(ProfileDropdown, "ProfileDropdown").$$render($$result, {}, {}, {})}
				${validate_component(MobMenuBtn, "MobMenuBtn").$$render($$result, {}, {}, {})}</div>

			<div class="${"hidden lg:flex items-center gap-1 sm:gap-8 px-6"}">${validate_component(RightNavMenuItems, "RightNavMenuItems").$$render($$result, {}, {}, {})}</div></div></div></nav>`;
    });
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<header class="${"relative overflow-hidden"}">${validate_component(AlertCovid, "AlertCovid").$$render($$result, {}, {}, {})}
	${validate_component(MainNav, "MainNav").$$render($$result, {}, {}, {})}
	</header>`;
    });
    FooterLogos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white"}"><div class="${"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"}"><div class="${"grid grid-cols-9 gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-9"}"><div class="${"col-span-2 flex lg:justify-center sm:col-span-2 md:col-span-2 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-tico.svg"}" alt="${"Tuple"}"></div>
			<div class="${"col-span-2 flex justify-center md:col-span-2 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-iata.svg"}" alt="${"Mirage"}"></div>
			<div class="${"col-span-3 flex justify-center md:col-span-2 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-asta.svg"}" alt="${"StaticKit"}"></div>
			<div class="${"col-span-2 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-visa.svg"}" alt="${"Workcation"}"></div>
			<div class="${"col-span-3 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-firstData.svg"}" alt="${"Transistor"}"></div>
			<div class="${"col-span-2 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-masterCard.svg"}" alt="${"Workcation"}"></div>
			<div class="${"col-span-2 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-americanExpress.svg"}" alt="${"Workcation"}"></div>
			<div class="${"col-span-2 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"https://tripsupport.s3.ca-central-1.amazonaws.com/footer-icons/svg/footer-icon-BBB.svg"}" alt="${"Workcation"}"></div>
			</div></div></div>`;
    });
    Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"py-6 md:flex md:items-center md:justify-between border-t"}"><div class="${"md:text-left "}"><p class="${"text-xs font-medium sm:text-xs text-gray-500"}">\xA9 2022 Trip Support.
				<span class="${"text-xs font-medium ml-6 border-l border-gray-200 pl-6"}"></span> All Rights Reserved
			</p></div>

		<div class="${"flex space-x-8"}"><a sveltekit:prefetch href="${"/terms-conditions"}" class="${"text-xs font-medium text-gray-500 hover:text-gray-600"}">Terms &amp; Conditions
			</a>

			<a sveltekit:prefetch href="${"/privacy-policy"}" class="${"text-xs font-medium text-gray-500 hover:text-gray-600"}">Privacy Policy
			</a>
			<a sveltekit:prefetch href="${"baggage-policy"}" class="${"text-xs font-medium text-gray-500 hover:text-gray-600"}">Baggage policy</a>

			<a sveltekit:prefetch href="${"/pay-later-terms"}" class="${"text-xs font-medium text-gray-500 hover:text-gray-600"}">Pay Later Terms
			</a></div>

		</div></div>`;
    });
    FooterLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const vacationDeals = [
        {
          name: "Spring Vacations",
          href: "/vacation-deals"
        },
        {
          name: "Winter Vacations",
          href: "/vacation-deals"
        },
        {
          name: "Summer Vacations",
          href: "/vacation-deals"
        },
        {
          name: "Fall Vacations",
          href: "/vacation-deals"
        },
        {
          name: "Group Travel",
          href: "/vacation-deals"
        }
      ];
      const destinations = [
        {
          name: "Westjet Vacations",
          href: "/destinations"
        },
        {
          name: "Porter Vacations",
          href: "/destinations"
        },
        {
          name: "sunwing Vacations",
          href: "/destinations"
        },
        {
          name: "sunquest Vacations",
          href: "/destinations"
        },
        {
          name: "signature Vacations",
          href: "/destinations"
        }
      ];
      const flightDeals = [
        {
          name: "Cheap Flight To Edmonton",
          href: "/flight-deals"
        },
        {
          name: "Cheap Flight To Calgary",
          href: "/flight-deals"
        },
        {
          name: "Cheap Flight To San Francisco",
          href: "/flight-deals"
        },
        {
          name: "Cheap Flight To Toronto",
          href: "/flight-deals"
        },
        {
          name: "Cheap Flight To Vancouver",
          href: "/flight-deals"
        }
      ];
      const travelDeals = [
        {
          name: "All Inclusive Resorts",
          href: "/travel-deals"
        },
        {
          name: "Singles Vacations",
          href: "/travel-deals"
        },
        {
          name: "3 to 5 Day Vacation Deals",
          href: "/travel-deals"
        },
        {
          name: "2 Week Vacation Deals",
          href: "/travel-deals"
        },
        {
          name: "Best Family Resorts",
          href: "/travel-deals"
        }
      ];
      return `<div class="${"mx-auto max-w-7xl py-2 px-4 sm:px-6 sm:py-8 lg:py-20 lg:px-8 lg:pb-8"}"><div class="${"mt-12 grid grid-cols-6 gap-8 xl:col-span-12 xl:mt-0"}"><div class="${"col-span-3 sm:col-span-2 lg:col-span-1"}"><h3 class="${"font-semibold uppercase text-slate-800 text-sm tracking-normal "}">Vacation Deals
			</h3>
			<ul${add_attribute("role", "list", 0)} class="${"mt-4 space-y-2"}">${each(vacationDeals, (link) => {
        return `<li><a sveltekit:prefetch${add_attribute("href", link.href, 0)} class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">${escape(link.name)}</a>
					</li>`;
      })}</ul></div>

		<div class="${"col-span-3 sm:col-span-2 lg:col-span-1"}"><h3 class="${"font-semibold uppercase text-slate-800 text-sm tracking-normal "}">Destinations</h3>
			<ul${add_attribute("role", "list", 0)} class="${"mt-4 space-y-2"}">${each(destinations, (link) => {
        return `<li><a sveltekit:prefetch${add_attribute("href", link.href, 0)} class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">${escape(link.name)}</a>
					</li>`;
      })}</ul></div>

		<div class="${"col-span-3 sm:col-span-2 lg:col-span-1"}"><h3 class="${"font-semibold uppercase text-slate-800 text-sm tracking-normal "}">Flight Deals</h3>
			<ul${add_attribute("role", "list", 0)} class="${"mt-4 space-y-2"}">${each(flightDeals, (link) => {
        return `<li><a sveltekit:prefetch${add_attribute("href", link.href, 0)} class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">${escape(link.name)}</a>
					</li>`;
      })}</ul></div>

		<div class="${"col-span-3 sm:col-span-2 lg:col-span-1"}"><h3 class="${"font-semibold uppercase text-slate-800 text-sm tracking-normal "}">travel deals</h3>
			<ul${add_attribute("role", "list", 0)} class="${"mt-4 space-y-2"}">${each(travelDeals, (link) => {
        return `<li><a sveltekit:prefetch${add_attribute("href", link.href, 0)} class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">${escape(link.name)}</a>
					</li>`;
      })}</ul></div>

		<div class="${"col-span-3 sm:col-span-2 lg:col-span-1"}"><h3 class="${"font-semibold uppercase text-slate-800 text-sm tracking-normal "}">quick links</h3>
			<ul${add_attribute("role", "list", 0)} class="${"mt-4 space-y-2"}"><li><a sveltekit:prefetch href="${"/blog"}" class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">blog</a></li>

				<li><a sveltekit:prefetch href="${"/faqs"}" class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">faqs</a></li>
				<li><a sveltekit:prefetch href="${"/about-us"}" class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">about us</a></li>
				<li><a sveltekit:prefetch href="${"/contact-us"}" class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">contact us</a></li>
				<li><a sveltekit:prefetch href="${"/customer-support"}" class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">customer support</a></li>
				<li><a href="${"/book-now-pay-later"}" class="${"capitalize text-slate-600 text-sm hover:text-gray-900"}">book now pay later</a></li></ul></div>
		<div class="${"col-span-3 sm:col-span-2 lg:col-span-1"}"><h3 class="${"font-semibold uppercase text-slate-800 text-sm tracking-normal "}">Social media</h3>

			<ul${add_attribute("role", "list", 0)} class="${"mt-4 space-y-2"}"><li><a sveltekit:prefetch href="${"https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"}" target="${"_blank"}" rel="${"noopener nofollow noreferrer"}" class="${"flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-facebook mr-2 -ml-1 w-4 h-4"}" viewBox="${"0 0 16 16"}"><path d="${"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}"></path></svg>
						Facebook
					</a></li>

				<li><a sveltekit:prefetch href="${"https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"}" target="${"_blank"}" rel="${"noopener nofollow noreferrer"}" class="${"flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-instagram mr-2 -ml-1 w-4 h-4"}" viewBox="${"0 0 16 16"}"><path d="${"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}"></path></svg>
						Instagram
					</a></li>

				<li><a sveltekit:prefetch href="${"https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"}" target="${"_blank"}" rel="${"noopener nofollow noreferrer"}" class="${"flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-pred-700 focus:z-10 focus:ring-2 focus:ring-pred-700 focus:text-pred-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-youtube mr-2 -ml-1 w-4 h-4"}" viewBox="${"0 0 16 16"}"><path d="${"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"}"></path></svg>
						Youtube
					</a></li>

				<li><a sveltekit:prefetch href="${"https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"}" target="${"_blank"}" rel="${"noopener nofollow noreferrer"}" class="${"flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-pred-700 focus:z-10 focus:ring-2 focus:ring-pred-700 focus:text-pred-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-pinterest mr-2 -ml-1 w-4 h-4"}" viewBox="${"0 0 16 16"}"><path d="${"M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"}"></path></svg>
						Pinterest
					</a></li>
				<li><a sveltekit:prefetch href="${"https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"}" target="${"_blank"}" rel="${"noopener nofollow noreferrer"}" class="${"flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-2 focus:ring-slate-700 focus:text-slate-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-at mr-2 -ml-1 w-4 h-4"}" viewBox="${"0 0 16 16"}"><path d="${"M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"}"></path></svg>
						Email us
					</a></li></ul></div></div></div>`;
    });
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<footer class="${"border-t bg-white px-4"}" aria-labelledby="${"footer-heading"}"><h2 id="${"footer-heading"}" class="${"sr-only"}">Footer</h2>
	${validate_component(FooterLinks, "FooterLinks").$$render($$result, {}, {}, {})}
	${validate_component(FooterLogos, "FooterLogos").$$render($$result, {}, {}, {})}
	${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})}</footer>`;
    });
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-white"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main>${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => layout_svelte_exports
});
var entry, js, css;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_svelte();
    entry = "pages/__layout.svelte-d6060821.js";
    js = ["pages/__layout.svelte-d6060821.js", "chunks/vendor-3e73c3b8.js"];
    css = ["assets/pages/__layout.svelte-6ac39c78.css"];
  }
});

// .svelte-kit/output/server/entries/pages/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2,
  load: () => load
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/error.svelte.js"() {
    init_index_77482e32();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  css: () => css2,
  entry: () => entry2,
  js: () => js2,
  module: () => error_svelte_exports
});
var entry2, js2, css2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_error_svelte();
    entry2 = "error.svelte-a155870d.js";
    js2 = ["error.svelte-a155870d.js", "chunks/vendor-3e73c3b8.js"];
    css2 = [];
  }
});

// .svelte-kit/output/server/chunks/HotelsIcon-f7770270.js
var FlightsIcon, VacationsIcon, HotelsIcon;
var init_HotelsIcon_f7770270 = __esm({
  ".svelte-kit/output/server/chunks/HotelsIcon-f7770270.js"() {
    init_index_77482e32();
    FlightsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mr-2 h-5 w-5"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M3.64 14.26l2.86.95 4.02-4.02-8-4.59 1.16-1.16c.1-.1.26-.14.41-.1l9.3 2.98c1.58-1.58 3.15-3.2 4.77-4.75.31-.33.7-.58 1.16-.73.45-.16.87-.27 1.25-.34.55-.05.98.4.93.93-.07.38-.18.8-.34 1.25-.15.46-.4.85-.73 1.16l-4.75 4.78 2.97 9.29c.05.15 0 .29-.1.41l-1.17 1.16-4.57-8.02L8.8 17.5l.95 2.84L8.6 21.5l-2.48-3.62L2.5 15.4l1.14-1.14z"}" clip-rule="${"evenodd"}"></path></svg>`;
    });
    VacationsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mr-2 h-5 w-5"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M21.59 11.59h-2.36V8.66c0-.23-.2-.41-.43-.41h-5.82a.42.42 0 00-.43.41v2.93H10.2a.42.42 0 00-.43.41v8.34c0 .23.21.41.43.41h11.4c.21 0 .41-.2.41-.41V12c0-.23-.2-.41-.41-.41zm-7.36-1.68h3.32v1.68h-3.32V9.91zm3.79 9.06l-1.2-1.17 2.37-2.36 1.17 1.17-2.34 2.36zM10.89 4.91V3.66a.4.4 0 00-.41-.41H4.64a.4.4 0 00-.41.41v2.93H2.4A.4.4 0 002 7v13.34c0 .2.18.41.41.41h5.7V10.34c0-.23.18-.43.41-.43h2.37v-5zM9.23 6.59H5.89V4.91h3.34v1.68z"}" clip-rule="${"evenodd"}"></path></svg>`;
    });
    HotelsIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mr-2 h-5 w-5"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M21.61 21.41l-.47-1.1a.49.49 0 00-.16-.2.4.4 0 00-.23-.06h-.84V7.4a.4.4 0 00-.12-.28.38.38 0 00-.29-.13h-3.75V2.41a.4.4 0 00-.12-.28.38.38 0 00-.29-.13H4.5a.38.38 0 00-.3.13.4.4 0 00-.11.28v17.64h-.84a.4.4 0 00-.23.07.49.49 0 00-.16.18l-.47 1.11a.44.44 0 00-.03.2c0 .08.03.14.07.2a.38.38 0 00.33.2h18.48a.38.38 0 00.33-.2.36.36 0 00.07-.2c0-.06 0-.13-.03-.2zM9.09 17h-2.5v-2.5h2.5V17zm0-5h-2.5V9.5h2.5V12zm0-5h-2.5V4.5h2.5V7zm4.16 12.77h-2.5V14.5h2.5v5.27zm0-7.77h-2.5V9.5h2.5V12zm0-5h-2.5V4.5h2.5V7zm4.16 10h-2.5v-2.5h2.5V17zm0-5h-2.5V9.5h2.5V12z"}" clip-rule="${"evenodd"}"></path></svg>`;
    });
  }
});

// .svelte-kit/output/server/chunks/BookingWidget-9bbd6ea9.js
var SwitchHorizontal, Cabin, TravellersMob, Travellers, RoundtripSearchBtn, SearchOptions, Plane, PlaneSearch, SearchFlights, RoundTrip, SearchFlightsMob, leaving, RoundTripMobForm, FlightsTab, BookingWidget;
var init_BookingWidget_9bbd6ea9 = __esm({
  ".svelte-kit/output/server/chunks/BookingWidget-9bbd6ea9.js"() {
    init_index_77482e32();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    SwitchHorizontal = [[{ "d": "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" }]];
    Cabin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let btnDropdownRef;
      let popoverDropdownRef;
      return `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"flex"}"><button class="${"flex text-pblue-900 font-semibold capitalize text-sm px-2 py-0 outline-none focus:outline-none ease-linear transition-all duration-150"}" type="${"button"}"${add_attribute("this", btnDropdownRef, 0)}>Economy
			<svg class="${"hi-solid hi-chevron-down inline-block w-5 h-5 opacity-100"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
		<div class="${"bg-white text-base z-30 float-left py-2 list-none text-left rounded shadow-lg mt-1 w-56 " + escape("hidden")}"${add_attribute("this", popoverDropdownRef, 0)}><a href="${"#pablo"}" class="${"text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap text-gray-900 items-center bg-gray-100 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"}">Economy
			</a>
			<a href="${"#pablo"}" class="${"text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap bg-transparent text-gray-700 items-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"}">Premium Economy
			</a>
			<a href="${"#pablo"}" class="${"text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap bg-transparent text-gray-700 items-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"}">Business Class
			</a>
			<a href="${"#pablo"}" class="${"text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap bg-transparent text-gray-700 items-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"}">First Class
			</a></div></div>`;
        }
      })}`;
    });
    TravellersMob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let countAdult;
      let countChild;
      let countInfant;
      let passengerCount;
      countAdult = 1;
      countChild = 0;
      countInfant = 0;
      passengerCount = countAdult + countChild + countInfant;
      return `

${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"flex flex-wrap"}"><div class="${"relative inline-flex items-center w-full"}"><button class="${"flex text-pblue-900 font-semibold capitalize text-sm px-2 py-0 outline-none focus:outline-none ease-linear transition-all duration-150"}" type="${"button"}"${add_attribute("aria-expanded", "false", 0)}>${escape(passengerCount)} Travellers
				<svg class="${"hi-solid hi-chevron-down inline-block w-5 h-5 opacity-100"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button></div></div>
	${``}`;
        }
      })}`;
    });
    Travellers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let countAdult;
      let countChild;
      let countInfant;
      let totalCount;
      let btnDropdownRef;
      let popoverDropdownRef;
      countAdult = 1;
      countChild = 0;
      countInfant = 0;
      totalCount = countAdult + countChild + countInfant;
      return `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"flex flex-wrap "}"><button class="${"flex text-pblue-900 font-semibold capitalize text-sm px-2 py-0 outline-none focus:outline-none ease-linear transition-all duration-150"}" type="${"button"}"${add_attribute("this", btnDropdownRef, 0)}>${escape(totalCount)} Travellers
			<svg class="${"hi-solid hi-chevron-down inline-block w-5 h-5 opacity-100"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
		<div class="${"bg-white text-base z-30 float-left py-2 list-none text-left rounded shadow-lg mt-4 w-96 " + escape("hidden")}"${add_attribute("this", popoverDropdownRef, 0)}><div class="${"px-4 py-3 sm:px-6"}"><h3 class="${"text-lg leading-6 font-medium text-gray-900"}">Travellers</h3>
				<p class="${"mt-1 max-w-2xl text-xs text-gray-500 font-light"}">Please choose the number of travellers
				</p></div>

			<div class="${"border-t text-left border-gray-200 px-4 py-4 sm:px-6"}"><dl class="${"grid grid-cols-2 gap-x-2 gap-y-4"}"><div class="${"col-span-1 my-auto"}"><dt class="${"text-tiny font-medium text-gray-900"}">Adults</dt>
						<dd class="${"text-xs font-normal text-gray-500"}">Age 12+</dd>
					</div><div class="${"col-span-1"}"><div class="${"inline-flex my-2"}"><button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"inline-block w-5 h-5 text-rose-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg></button>
							<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-2 leading-6 active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><span>${escape(countAdult)}</span></button>
							<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><svg class="${"hi-solid hi-plus inline-block w-5 h-5 text-emerald-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"}" clip-rule="${"evenodd"}"></path></svg></button></div>
					</div><div class="${"col-span-1 my-auto"}"><dt class="${"text-tiny font-medium text-gray-900"}">Children</dt>
						<dd class="${"text-xs font-normal text-gray-500"}">Age 2-11</dd>
					</div><div class="${"col-span-1 w-full"}"><div class="${"inline-flex my-2"}"><button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"inline-block w-5 h-5 text-rose-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg></button>
							<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-2 leading-6 active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><span>${escape(countChild)}</span></button>

							<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><svg class="${"hi-solid hi-plus inline-block w-5 h-5 text-emerald-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"}" clip-rule="${"evenodd"}"></path></svg></button></div>
					</div><div class="${"col-span-1 my-auto"}"><dt class="${"text-tiny font-medium text-gray-900"}">Infant</dt>
						<dd class="${"text-xs font-normal text-gray-500"}">Age under 2</dd>
					</div><div class="${"col-span-1"}"><div class="${"inline-flex my-2"}"><button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"inline-block w-5 h-5 text-rose-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg></button>
							<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-2 leading-6 active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><span>${escape(countInfant)}</span></button>
							<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 active:bg-white active:border-white active:shadow-none"}"><svg class="${"hi-solid hi-plus inline-block w-5 h-5 text-emerald-500"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"}" clip-rule="${"evenodd"}"></path></svg></button></div></div></dl></div>
			<div class="${"flex items-center justify-center mt-0 mb-6"}"><button type="${"button"}" class="${"w-full mx-4 items-center content-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"}"${add_attribute("aria-expanded", "false", 0)}>Done</button></div></div></div>`;
        }
      })}
`;
    });
    RoundtripSearchBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"space-x-2 rounded sm:bg-transparent sm:px-0"}"><a href="${"javascript:void(0)"}" class="${"inline-flex justify-center items-center space-x-2 border font-medium tracking-wide focus:outline-none px-3 py-2 text-sm rounded-full bg-pblue-800 text-white hover:text-white hover:bg-pblue-900 focus:ring focus:ring-pblue-500 focus:ring-opacity-50 w-full "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg>
		<span class="${"flex"}">Search Roundtrip Flights</span></a></div>`;
    });
    SearchOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<fieldset><div class="${"flex items-center space-x-4 sm:space-x-8 lg:space-x-10 justify-between sm:justify-start"}"><div class="${"inline-flex items-center"}"><div class="${"form-check"}"><input class="${"appearance-none h-4 w-4 border border-gray-300 rounded-full bg-white checked:bg-pblue-600 checked:border-pblue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"checkbox"}" value="${""}">
				<label class="${"form-check-label inline-block text-gray-700 font-medium text-sm"}" for="${"flexCheckDefault"}">Flexible search
				</label></div></div>
		<div class="${"inline-flex"}"><div class="${"form-check ml-3"}"><input class="${"appearance-none h-4 w-4 border border-gray-300 rounded-full bg-white checked:bg-pblue-600 checked:border-pblue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"checkbox"}" value="${""}">
				<label class="${"form-check-label inline-block text-gray-700 font-medium text-sm"}" for="${"flexCheckDefault"}">Non-stop flights only
				</label></div></div></div></fieldset>`;
    });
    Plane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mr-2 h-5 w-5 text-pblue-500"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M3.64 14.26l2.86.95 4.02-4.02-8-4.59 1.16-1.16c.1-.1.26-.14.41-.1l9.3 2.98c1.58-1.58 3.15-3.2 4.77-4.75.31-.33.7-.58 1.16-.73.45-.16.87-.27 1.25-.34.55-.05.98.4.93.93-.07.38-.18.8-.34 1.25-.15.46-.4.85-.73 1.16l-4.75 4.78 2.97 9.29c.05.15 0 .29-.1.41l-1.17 1.16-4.57-8.02L8.8 17.5l.95 2.84L8.6 21.5l-2.48-3.62L2.5 15.4l1.14-1.14z"}" clip-rule="${"evenodd"}"></path></svg>`;
    });
    PlaneSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mr-2 h-5 w-5 text-pblue-500"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M14.71 14h.79l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28a6.5 6.5 0 11.7-.7l.28.27zM5 9.5a4.5 4.5 0 108.99.01A4.5 4.5 0 005 9.5z"}" clip-rule="${"evenodd"}"></path></svg>`;
    });
    SearchFlights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"absolute z-40 pb-2 bg-white w-1/2 rounded shadow ease-linear transition-all"}"><ul class="${"space-y-0 py-2 z-40"}">
		<li class="${"parent hover:bg-gray-50 p-2 "}"><button class="${"mx-2 flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Toronto Pearson Intl. Airport (YYZ)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">Canada
					</div></div></button></li>
		
		<li class="${"child hover:bg-gray-50 py-1 pl-8"}"><button class="${"flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Billy Bishop Toronto City Airport (YTZ)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">11 Miles Away
					</div></div></button></li>
		
		<li class="${"child hover:bg-gray-50 py-1 pl-8"}"><button class="${"flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>John C. Munro Hamilton Intl. Airport (YHM)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">11 Miles Away
					</div></div></button></li>
		
		<li class="${"child hover:bg-gray-50 py-1 pl-8"}"><button class="${"flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Kitchener (YKF - Region of Waterloo Intl.)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">42 Miles Away
					</div></div></button></li>
		<li class="${"parent hover:bg-gray-50 p-2"}"><button class="${"flex mx-2 items-center mt-1 text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Boston (BOS - All Airports)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">Near West Yarmouth, Massachusetts, United States
					</div></div></button></li>
		<li class="${"parent hover:bg-gray-50 p-2"}"><button class="${"flex mx-2 items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Motu Mute Airport (BOB)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">Near Bora Bora, Leeward Islands, French Polynesia
					</div></div></button></li>
		<li class="${"parent hover:bg-gray-50 p-2"}"><button class="${"flex mx-2 items-center text-sm text-pblue font-bold bg-white py-1 bg-transparent flex-nowrap justify-start text-left "}">${validate_component(PlaneSearch, "PlaneSearch").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Search for \u201Cyyz\u201D</span></div></div></button></li></ul></div>`;
    });
    RoundTrip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $searchFrom, $$unsubscribe_searchFrom;
      let $searchTo, $$unsubscribe_searchTo;
      function useToggle(initialState) {
        const { subscribe: subscribe2, update } = writable2(initialState);
        return { subscribe: subscribe2, toggle: () => update((x2) => !x2) };
      }
      const searchFrom = useToggle(false);
      $$unsubscribe_searchFrom = subscribe(searchFrom, (value) => $searchFrom = value);
      const searchTo = useToggle(false);
      $$unsubscribe_searchTo = subscribe(searchTo, (value) => $searchTo = value);
      $$unsubscribe_searchFrom();
      $$unsubscribe_searchTo();
      return `<div class="${"my-6"}"><div class="${"grid grid-cols-12 lg:gird-cols-12 gap-4 items-center"}"><div class="${"col-span-12 lg:col-span-8"}"><div class="${"grid grid-cols-12 items-center gap-6 py-2 md:py-1 relative"}"><div class="${"col-span-12 md:col-span-6"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Leaving from?</label>
						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-pblue-800 mt-[5px]"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

						<input type="${"text"}" autocomplete="${"off"}" name="${"name"}" class="${"block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}"></div>

					${$searchFrom ? `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SearchFlights, "SearchFlights").$$render($$result, {}, {}, {})}`;
        }
      })}` : ``}</div>

				<div class="${"z-20 hidden md:block absolute top-[45%] left-[49.97%] transform -translate-x-1/2 -translate-y-3 "}">${validate_component(Icon, "Icon").$$render($$result, {
        src: SwitchHorizontal,
        class: "bg-white h-8 text-pblue-900 w-8 border rounded-full p-[5px] border-pblue-500"
      }, {}, {})}</div>

				<div class="${"z-30 md:hidden absolute top-[47.3%] left-[94%] transform -translate-x-1/2 -translate-y-3"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: SwitchHorizontal,
        class: "bg-white h-8 text-pblue-900 w-8 rotate-90 border rounded-full p-[5px] border-pblue-500"
      }, {}, {})}</div>

				<div class="${"col-span-12 md:col-span-6"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Going to?</label>
						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-pblue-800 mt-[5px]"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

						<input type="${"text"}" name="${"name"}" class="${"block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}" autocomplete="${"off"}"></div>
					${$searchTo ? `${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SearchFlights, "SearchFlights").$$render($$result, {}, {}, {})}`;
        }
      })}` : ``}</div></div></div>
		
		<div class="${"col-span-12 lg:col-span-4"}"><div date-rangepicker="${""}" datepicker-orientation="${"bottom"}" class="${"flex items-center"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 "}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Departure / Return</label>

					<div class="${"flex items-center"}"><div class="${"flex items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 text-pblue-800"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"}" clip-rule="${"evenodd"}"></path></svg>
							<input type="${"text"}" name="${"name"}" id="${"name"}" class="${"block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}" autocomplete="${"off"}"></div>

						<div class="${"flex place-self-center items-center"}"><span class="${"mx-2 h-6 w-px bg-pblue-400 "}" aria-hidden="${"true"}"></span></div>

						<div class="${"place-self-start"}"><div class="${"flex items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 text-pblue-800"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"}" clip-rule="${"evenodd"}"></path></svg>
								<input type="${"text"}" name="${"name"}" id="${"name"}" class="${"block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}" autocomplete="${"off"}"></div></div></div></div></div></div></div></div>`;
    });
    SearchFlightsMob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"pb-2 bg-white w-full"}"><ul class="${"space-y-0 py-2 z-40"}">
		<li class="${"parent hover:bg-gray-50 p-2 "}"><button class="${"mx-3 flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Toronto Pearson Intl. Airport (YYZ)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">Canada
					</div></div></button></li>
		
		<li class="${"child hover:bg-gray-50 py-1 pl-10"}"><button class="${"flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Billy Bishop Toronto City Airport (YTZ)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">11 Miles Away
					</div></div></button></li>
		
		<li class="${"child hover:bg-gray-50 py-1 pl-10"}"><button class="${"flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>John C. Munro Hamilton Intl. Airport (YHM)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">11 Miles Away
					</div></div></button></li>
		
		<li class="${"child hover:bg-gray-50 py-1 pl-10"}"><button class="${"flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Kitchener (YKF - Region of Waterloo Intl.)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">42 Miles Away
					</div></div></button></li>
		<li class="${"parent hover:bg-gray-50 p-2"}"><button class="${"flex mx-3 items-center mt-1 text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Boston (BOS - All Airports)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">Near West Yarmouth, Massachusetts, United States
					</div></div></button></li>
		<li class="${"parent hover:bg-gray-50 p-2"}"><button class="${"flex mx-3 items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left "}">${validate_component(Plane, "Plane").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Motu Mute Airport (BOB)</span></div>
					<div class="${"truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"}">Near Bora Bora, Leeward Islands, French Polynesia
					</div></div></button></li>
		<li class="${"parent hover:bg-gray-50 p-2"}"><button class="${"flex mx-3 items-center text-sm text-pblue font-bold bg-white py-1 bg-transparent flex-nowrap justify-start text-left "}">${validate_component(PlaneSearch, "PlaneSearch").$$render($$result, {}, {}, {})}
				<div class="${"text-pblue-900 flex-wrap ml-[0.5rem] justify-start"}"><div class="${"truncate"}"><span>Search for \u201Cyyz\u201D</span></div></div></button></li></ul></div>`;
    });
    leaving = "Leaving from?";
    RoundTripMobForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let title;
      let showRoundTrip;
      let $searchFrom, $$unsubscribe_searchFrom;
      let leavingFrom = "";
      let goingTo = "";
      function useToggle(initialState) {
        const { subscribe: subscribe2, update } = writable2(initialState);
        return { subscribe: subscribe2, toggle: () => update((x2) => !x2) };
      }
      const searchFrom = useToggle(true);
      $$unsubscribe_searchFrom = subscribe(searchFrom, (value) => $searchFrom = value);
      title = leaving;
      showRoundTrip = false;
      $$unsubscribe_searchFrom();
      return `<div class="${"my-6"}"><div class="${"grid grid-cols-12 lg:gird-cols-12 gap-4 items-center"}"><div class="${"col-span-12 lg:col-span-8"}"><div class="${"grid grid-cols-12 items-center gap-6 py-2 md:py-1 relative"}"><div class="${"col-span-12 md:col-span-6"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Leaving from?</label>
						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-pblue-800 mt-[5px]"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

						<input type="${"button"}" name="${"departure"}" class="${"block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}" autocomplete="${"off"}"${add_attribute("aria-expanded", showRoundTrip ? "true" : "false", 0)}></div></div>

				<div class="${"z-30 absolute top-[47.3%] left-[94%] transform -translate-x-1/2 -translate-y-3"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: SwitchHorizontal,
        class: "bg-white h-8 text-pblue-900 w-8 rotate-90 border rounded-full p-[5px] border-pblue-500"
      }, {}, {})}</div>

				<div class="${"col-span-12 md:col-span-6"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Going to?</label>
						<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-pblue-800 mt-[5px]"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

						<input type="${"button"}" name="${"departure"}" class="${"block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}"${add_attribute("aria-expanded", showRoundTrip ? "true" : "false", 0)}></div></div>

				${showRoundTrip ? `<div class="${"absolute"}"><div class="${"bg-white z-50 shadow sm:rounded-lg fixed w-full h-[100%] top-0 right-0"}"><div class="${"flex p-4 sm:px-6 justify-between border-b"}"><div class="${"text-tiny leading-6 font-semibold text-gray-900"}">${escape(title)}</div>
								<button type="${"button"}"${add_attribute("aria-expanded", showRoundTrip ? "true" : "false", 0)}><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fillrule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" cliprule="${"evenodd"}"></path></svg></button></div>
							
							<div>
								<div class="${"mt-4 py-3 px-4"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Leaving from?</label>
										<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-pblue-800 mt-[5px]"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

										<input type="${"text"}" name="${"departure"}" class="${"block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}"${add_attribute("value", leavingFrom, 0)}></div></div>
								<div class="${"py-3 px-4"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Going to?</label>
										<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-5 h-5 text-pblue-800 mt-[5px]"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg>

										<input type="${"text"}" name="${"departure"}" class="${"block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}"${add_attribute("value", goingTo, 0)}></div></div>
								
								<div class="${"z-30 md:hidden absolute top-[143px] left-[90%] transform -translate-x-1/2 -translate-y-3"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: SwitchHorizontal,
        class: "bg-white h-8 text-pblue-900 w-8 rotate-90 border rounded-full p-[5px] border-pblue-500"
      }, {}, {})}</div>
								<div class="${"pt-3 px-5 font-semibold text-sm"}">Matching with <span class="${"font-bold text-sm"}">${escape(leavingFrom)}</span> to
									<span class="${"font-bold text-sm"}">${escape(goingTo)}</span></div>
								${$searchFrom ? `${validate_component(SearchFlightsMob, "SearchFlightsMob").$$render($$result, {}, {}, {})}` : ``}</div></div></div>` : ``}</div></div>
		
		<div class="${"col-span-12 lg:col-span-4"}"><div class="${"relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 "}"><label for="${"name"}" class="${"absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"}">Departure / Return</label>

				<div class="${"flex items-center"}"><div class="${"flex items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 text-pblue-800"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"}" clip-rule="${"evenodd"}"></path></svg>
						<input type="${"text"}" name="${"name"}" id="${"name"}" class="${"block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}"></div>

					<div class="${"flex place-self-center items-center"}"><span class="${"mx-2 h-6 w-px bg-pblue-400 "}" aria-hidden="${"true"}"></span></div>

					<div class="${"place-self-start"}"><div class="${"flex items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 text-pblue-800"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"}" clip-rule="${"evenodd"}"></path></svg>
							<input type="${"text"}" name="${"name"}" id="${"name"}" class="${"block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"}" placeholder="${""}"></div></div></div></div></div></div></div>`;
    });
    FlightsTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"grid grid-cols-12"}"><div class="${"col-span-12 md:col-span-8 flex gap-x-4 justify-start"}"><div class="${"col-span-2 lg:col-span-1"}">
			<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("text-white bg-pblue-800 border-white shadow-none")}">Roundtrip
			</button>
			</div>
		<div class="${"col-span-2 lg:col-span-1 lg:gap-4"}">
			
			<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">One-way
			</button>
			</div>
		<div class="${"col-span-2 lg:col-span-1 lg:gap-4"}">
			<button type="${"button"}" class="${"inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Multi-city
			</button>
			</div></div>
	<div class="${"col-span-12 md:col-span-4 flex md:justify-end justify-start sm:mt-0 mt-4"}"><div class="${"hidden sm:flex col-span-2 lg:col-span-1"}">${validate_component(Travellers, "Travellers").$$render($$result, {}, {}, {})}</div>

		<div class="${"sm:hidden flex col-span-2 lg:col-span-1"}">${validate_component(TravellersMob, "TravellersMob").$$render($$result, {}, {}, {})}</div>

		<div class="${"col-span-2 lg:col-span-1"}">${validate_component(Cabin, "Cabin").$$render($$result, {}, {}, {})}</div></div>

	</div>


${`<div class="${"hidden sm:block"}">${validate_component(RoundTrip, "RoundTrip").$$render($$result, {}, {}, {})}</div>
	<div class="${"block sm:hidden"}">${validate_component(RoundTripMobForm, "RoundTripMobForm").$$render($$result, {}, {}, {})}</div>
	<div class="${"grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center"}"><div class="${"col-span-6 md:col-span-4"}">${validate_component(SearchOptions, "SearchOptions").$$render($$result, {}, {}, {})}</div>
		<div class="${"col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0"}">${validate_component(RoundtripSearchBtn, "RoundtripSearchBtn").$$render($$result, {}, {}, {})}</div></div>`}


${``}


${``}`;
    });
    BookingWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<section class="${"relative max-w-7xl -mt-5 mx-auto xl:-mt-32 lg:-mt-28 md:-mt-8 px-0 md:px-4 pb-12 lg:px-6 lg:mb-6"}" aria-labelledby="${"contact-heading"}"><div class="${"flex flex-col rounded-xl bg-white shadow-xl"}">

		
		<div class="${"py-2 px-5 lg:px-6 w-full"}"><nav class="${"flex items-center sm:justify-start justify-between border-b border-gray-200"}"><button type="${"button"}" class="${"text-tiny px-3 md:px-5 -mb-px flex items-center space-x-2 py-4 capitalize " + escape("text-pblue-800 border-b-2 border-pblue-800 font-bold")}">${validate_component(FlightsIcon, "FlightsIcon").$$render($$result, {}, {}, {})}
					Flights
				</button>
				<button type="${"button"}" class="${"text-tiny px-3 md:px-5 -mb-px flex items-center space-x-2 py-4 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}">${validate_component(VacationsIcon, "VacationsIcon").$$render($$result, {}, {}, {})}
					Vacations
				</button>
				<button type="${"button"}" class="${"text-tiny px-3 md:px-5 -mb-px flex items-center space-x-2 py-4 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}">${validate_component(HotelsIcon, "HotelsIcon").$$render($$result, {}, {}, {})}
					Hotels
				</button></nav></div>
		

		<div class="${"px-5 py-3 mb-3 lg:px-6 lg:pb-4 grow w-full"}">${`${validate_component(FlightsTab, "FlightsTab").$$render($$result, {}, {}, {})}`}
			${``}
			${``}</div>
		</div></section>`;
    });
  }
});

// .svelte-kit/output/server/chunks/BlogPosts-1de0bacf.js
var BlogPosts;
var init_BlogPosts_1de0bacf = __esm({
  ".svelte-kit/output/server/chunks/BlogPosts-1de0bacf.js"() {
    init_index_77482e32();
    BlogPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-gray-50"}"><div class="${"max-w-7xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:px-8 mt-6 sm:mt-2"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Inspirational Stories from Experts</span>
				</h1>

			<a href="${"/blog"}" class="${"hidden text-sm font-semibold text-rose-600 hover:text-pblue-900 sm:block"}">Browse all Blog Posts<span aria-hidden="${"true"}">\u2192</span></a></div>

		<div class="${"max-w-4xl"}"><p class="${"mt-2 text-base text-gray-700 sm:mt-3 md:mt-3 md:text-md lg:mx-0"}">Have trouble deciding where you want to spend your dream vacation? Don\u2019t worry, we can help
				you with that too! From listing the best hotel deals in Europe to the top attractions in
				South Korea, Trip Support is home to countless articles specifically dedicated to helping
				you discover your dream destination.
			</p></div></div>

	<div class="${"mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 md:grid-cols-2 md:max-w-7xl lg:px-8 lg:grid-cols-3 lg:max-w-7xl pb-16"}"><div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}"><img class="${"h-48 w-full object-cover"}" src="${"images/home/mexico.jpg"}" alt="${""}"></div>
			<div class="${"flex-1 bg-white p-6 flex flex-col justify-between"}"><div class="${"flex-1"}"><p class="${"text-sm font-medium text-pblue-600"}"><a href="${"#"}" class="${"hover:underline"}">Blog </a></p>
					<a href="${"#"}" class="${"block mt-2"}"><p class="${"text-lg lg:text-lg font-semibold text-gray-900"}">Top 15 Tips For Traveling To Mexico
						</p>
						<p class="${"mt-3 text-tiny text-gray-500"}">Looking for travelling to Mexico tips?
							<br> Mexico is a colourful, vibrant country full of history, culture, nature and some...
						</p></a></div>
				<div class="${"mt-6 flex items-center"}"><div class="${"flex-shrink-0"}"><a href="${"#"}"><img class="${"h-10 w-10 rounded-full"}" src="${"images/blog/shefali.jpg"}" alt="${"Roel Aufderehar"}"></a></div>
					<div class="${"ml-3"}"><p class="${"text-sm font-medium text-gray-900"}"><a href="${"#"}" class="${"hover:underline"}">Shefali </a></p>
						<div class="${"flex space-x-1 text-sm text-gray-500"}"><time datetime="${"2020-03-16"}">Mar 16, 2020 </time>
							<span aria-hidden="${"true"}">\xB7 </span></div></div></div></div></div>

		<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}"><img class="${"h-48 w-full object-cover"}" src="${"images/home/destination-europe.jpg"}" alt="${""}"></div>
			<div class="${"flex-1 bg-white p-6 flex flex-col justify-between"}"><div class="${"flex-1"}"><p class="${"text-sm font-medium text-pblue-600"}"><a href="${"#"}" class="${"hover:underline"}">Blog </a></p>
					<a href="${"#"}" class="${"block mt-2"}"><p class="${"text-lg lg:text-lg font-semibold text-gray-900"}">10 Snowiest Cities in Canada
						</p>
						<p class="${"mt-3 text-tiny text-gray-500"}">Let\u2019s plan a trip to one of the snowiest cities in Canada. If you enjoy winter
							activities and cooler climates, Canada...
						</p></a></div>
				<div class="${"mt-6 flex items-center"}"><div class="${"flex-shrink-0"}"><a href="${"#"}"><img class="${"h-10 w-10 rounded-full"}" src="${"images/home/montreal.jpg"}" alt="${"Brenna Goyette"}"></a></div>
					<div class="${"ml-3"}"><p class="${"text-sm font-medium text-gray-900"}"><a href="${"#"}" class="${"hover:underline"}">Sina </a></p>
						<div class="${"flex space-x-1 text-sm text-gray-500"}"><time datetime="${"2020-03-10"}">Mar 10, 2020 </time>
							<span aria-hidden="${"true"}">\xB7 </span></div></div></div></div></div>

		<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}"><img class="${"h-48 w-full object-cover"}" src="${"images/home/montreal.jpg"}" alt="${""}"></div>
			<div class="${"flex-1 bg-white p-6 flex flex-col justify-between"}"><div class="${"flex-1"}"><p class="${"text-sm font-medium text-pblue-600"}"><a href="${"#"}" class="${"hover:underline"}">Blog </a></p>
					<a href="${"#"}" class="${"block mt-2"}"><p class="${"text-lg lg:text-lg font-semibold text-gray-900"}">10 Downtown Honolulu Restaurants
						</p>
						<p class="${"mt-3 text-tiny text-gray-500"}">Say aloha to some delicious dining experiences when you arrive in sunny Honolulu. From
							fine dining to cheap
						</p></a></div>
				<div class="${"mt-6 flex items-center"}"><div class="${"flex-shrink-0"}"><a href="${"#"}"><img class="${"h-10 w-10 rounded-full"}" src="${"images/home/montreal.jpg"}" alt="${"Daniela Metz"}"></a></div>
					<div class="${"ml-3"}"><p class="${"text-sm font-medium text-gray-900"}"><a href="${"#"}" class="${"hover:underline"}">Shefali </a></p>
						<div class="${"flex space-x-1 text-sm text-gray-500"}"><time datetime="${"2020-02-12"}">Feb 12, 2020 </time>
							<span aria-hidden="${"true"}">\xB7 </span></div></div></div></div></div>
		<div class="${"sm:hidden"}"><a href="${"javascript:void(0)"}" class="${"block text-sm font-semibold text-rose-600 hover:text-rose-400"}">View all blog posts<span aria-hidden="${"true"}">\u2192</span></a></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/Subscribe-bb3f7014.js
var Subscribe;
var init_Subscribe_bb3f7014 = __esm({
  ".svelte-kit/output/server/chunks/Subscribe-bb3f7014.js"() {
    init_index_77482e32();
    Subscribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative my-3 lg:my-12 bg-white"}"><div class="${"max-w-7xl mx-auto bg-white lg:bg-transparent lg:px-6"}"><div class="${"lg:grid lg:grid-cols-12"}"><div class="${"relative z-[1] lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:py-0 lg:bg-transparent"}"><div class="${"absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"}" aria-hidden="${"true"}"></div>
				<div class="${"max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-1 lg:aspect-w-1"}"><img class="${"object-cover object-center md:rounded-l-xl lg:shadow-2xl"}" src="${"images/home/subscribe.jpg"}" alt="${""}"></div></div></div>

			<div class="${"relative bg-white lg:col-start-1 lg:row-start-1 lg:col-span-12 lg:rounded-xl lg:grid lg:grid-cols-10 lg:items-center shadow-xl"}"><div class="${"relative max-w-md mx-auto py-8 px-4 space-y-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-4xl lg:p-0 lg:col-start-4 lg:col-span-6"}"><h2 class="${"text-2xl font-extrabold text-slate-900"}" id="${"join-heading"}">Sign up today. We\u2019ve got deals to share!
					</h2>

					<p class="${"text-sm font-medium text-slate-900 "}">Become a member and gain access to all of our great rates and savings. Sign up to get
						email updates on upcoming deals and events.
					</p>
					<form action="${"#"}" method="${"post"}" id="${"revue-form"}" name="${"revue-form"}" target="${"_blank"}"><div class="${"flex items-end mb-3"}"><div class="${"relative mr-3 w-full revue-form-group"}"><label for="${"member_email"}" class="${"hidden text-sm font-medium text-gray-900 "}">Email address</label>
								<div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}"></path><path d="${"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}"></path></svg></div>
								<input class="${"revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pblue-500 focus:border-pblue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-pblue-500 dark:focus:border-pblue-500"}" placeholder="${"Your email address..."}" type="${"email"}" name="${"member[email]"}" id="${"member_email"}" required="${""}"></div>
							<div class="${"revue-form-actions my-auto"}"><input type="${"submit"}" value="${"Subscribe"}" class="${"cursor-pointer text-slate-900 bg-gray-200 hover:bg-pblue-900 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"}" name="${"member[subscribe]"}" id="${"member_submit"}"></div></div>
						<div class="${"text-sm text-slate-900 revue-form-footer "}">By subscribing, you agree with Revue\u2019s
							<a target="${"_blank"}" rel="${"nofollow"}" href="${"/terms-conditions"}" class="${"text-slate-900 font-bold hover:underline"}">Terms of Service</a>
							and
							<a target="${"_blank"}" rel="${"nofollow"}" class="${"text-slate-900 font-bold hover:underline"}" href="${"https://www.getrevue.co/privacy"}">Privacy Policy</a>.
						</div></form></div></div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes
});
var Hero, PopularFlightDeals, VacationDestinations, PromoSection, Routes;
var init_index_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_BlogPosts_1de0bacf();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"mx-auto max-w-7xl"}"><div class="${"grid grid-cols-1 sm:grid-cols-12 sm:h-[400px]"}"><div class="${"col-span-1 sm:col-span-6"}"><div class="${"lg:pt-12 pb-4 sm:pb-2 px-4 sm:px-8 z-10 "}"><h1 class="${"bg-gradient-to-r from-pblue-900 to-rose-600 bg-clip-text text-transparent text-3xl mt-4 tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xxl capitalize"}"><span class="${"flex"}">Book Now Pay Later</span></h1>

				<p class="${"prose text-sm sm:text-lg max-w-sm font-semibold text-slate-700"}">No Credit Check Needed.
				</p></div></div>

		<div class="${"hidden sm:flex col-span-6"}"><div class="${"-mt-10"}"><img class="${"hidden h-56 max-w-7xl object-cover sm:h-72 md:h-full lg:block lg:w-full lg:h-full "}" src="${"images/hero/hotair-bg.jpg"}" alt="${""}"></div></div></div></div>`;
    });
    PopularFlightDeals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-white overflow-hidden"}"><div class="${"max-w-7xl mx-auto"}"><div class="${"relative z-[3] pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-5xl lg:w-full lg:pb-12 xl:pb-12"}"><svg class="${"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"}" fill="${"currentColor"}" viewBox="${"0 0 100 100"}" preserveAspectRatio="${"none"}" aria-hidden="${"true"}"><polygon points="${"50,0 100,0 50,100 0,100"}"></polygon></svg>

			<div class="${"mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8"}"><div class="${"text-left"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Popular Flight Deals</span>
							</h1>

						<a href="${"/flights#popular_flights"}" class="${"hidden text-sm font-semibold text-rose-600 hover:text-pblue-900 sm:block"}">Browse all Popular Flight Deals<span aria-hidden="${"true"}">\u2192</span></a></div>
					<p class="${"mt-2 text-base text-gray-700 sm:mt-3 md:mt-3 md:text-md lg:mx-0"}">Trip Support is here to connect you to the rest of the world at a rate you can afford.
						We offer tons of flights packages and other flight deals that are tailored to your wants
						and needs as a traveller. All you need to do is pick a flight that works for you, and
						we\u2019ll do the rest.
					</p>

					<div class="${"mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-10 "}"><div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/alberta.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Alberta
									</a></h3>
								<div class="${"text-gray-500 font-medium"}"><del>$750</del></div></div>
							<div class="${"mt-0 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><p class="${"mt-1 text-sm text-gray-500"}">Round trip</p>
								<div class="${"text-rose-600"}">$468</div></div></div>

						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/california.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										California
									</a></h3>
								<div class="${"text-slate-900 font-medium"}"><p>$750</p></div></div>
							<div class="${"mt-0 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><p class="${"mt-1 text-sm text-gray-500"}">Round trip</p>
								</div></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/montreal.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Montreal
									</a></h3>
								<div class="${"text-gray-500 font-medium"}"><del>$750</del></div></div>
							<div class="${"mt-0 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><p class="${"mt-1 text-sm text-gray-500"}">One-way</p>
								<div class="${"text-rose-600"}">$468</div></div></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/newyork.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										New York
									</a></h3>
								<p>$129</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">One-way</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/singapore.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Singapore
									</a></h3>
								<div class="${"text-gray-500 font-medium"}"><del>$750</del></div></div>
							<div class="${"mt-0 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><p class="${"mt-1 text-sm text-gray-500"}">One-way</p>
								<div class="${"text-rose-600"}">$468</div></div></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/vancouver.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Vancouver
									</a></h3>
								<p>$349</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div></div></div></div></div></div>
	<div class="${"sm:hidden px-4"}"><a href="${"/flights#popular_flights"}" class="${"block text-sm font-semibold text-rose-600 hover:text-rose-400"}">Browse all vacation destinations<span aria-hidden="${"true"}">\u2192</span></a></div>
	<div class="${"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"}"><img class="${"hidden h-56 max-w-7xl object-cover sm:h-72 md:h-full lg:block lg:w-full lg:h-full"}" src="${"images/home/flights-section.jpg"}" alt="${""}"></div></div>`;
    });
    VacationDestinations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white"}"><div class="${"max-w-7xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:px-8 mt-6 sm:mt-2"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Vacation Destinations</span>
				</h1>

			<a href="${"/vacations#popular_vacations"}" class="${"hidden text-sm font-semibold text-rose-600 hover:text-pblue-900 sm:block"}">Browse all Vacation Deals<span aria-hidden="${"true"}">\u2192</span></a></div>
		<div class="${"max-w-5xl"}"><p class="${"mt-2 text-base text-gray-700 sm:mt-3 md:mt-3 md:text-md lg:mx-0"}">The world is filled with many wonderful and exciting places great for spending a long
				overdue vacation. Our goal is to make vacationing in these wonderful and exciting places
				more affordable and accessible to every Canadian through our book now, pay later payment
				plan.
			</p></div>

		<div class="${"mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"}"><div class="${"group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"}"><img src="${"images/home/destination-sun.jpg"}" alt="${"Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."}" class="${"object-center object-cover group-hover:opacity-75"}">
				<div aria-hidden="${"true"}" class="${"bg-gradient-to-b from-transparent to-black opacity-50"}"></div>
				<div class="${"p-6 flex items-end"}"><div><h3 class="${"font-semibold text-white"}"><a href="${"javascript:void(0)"}"><span class="${"absolute inset-0"}"></span>
								Sun Destinations
							</a></h3>
						<p aria-hidden="${"true"}" class="${"mt-1 text-sm text-white"}">Escape the cold with a sun destination vacation package
						</p></div></div></div>
			<div class="${"group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"}"><img src="${"images/home/destination-europe.jpg"}" alt="${"Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."}" class="${"object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"}">
				<div aria-hidden="${"true"}" class="${"bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"}"></div>
				<div class="${"p-6 flex items-end sm:absolute sm:inset-0"}"><div><h3 class="${"font-semibold text-white"}"><a href="${"javascript:void(0)"}"><span class="${"absolute inset-0"}"></span>
								Euro Pakcages
							</a></h3>
						<p aria-hidden="${"true"}" class="${"mt-1 text-sm text-white"}">Be adventureous and visit multiple neighbouring euorpean countries
						</p></div></div></div>
			<div class="${"group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"}"><img src="${"images/home/destination-dubai.jpg"}" alt="${"Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."}" class="${"object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"}">
				<div aria-hidden="${"true"}" class="${"bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"}"></div>
				<div class="${"p-6 flex items-end sm:absolute sm:inset-0"}"><div><h3 class="${"font-semibold text-white"}"><a href="${"javascript:void(0)"}"><span class="${"absolute inset-0"}"></span>
								Dubai - the city of wonders
							</a></h3>
						<p aria-hidden="${"true"}" class="${"mt-1 text-sm text-white"}">If you haven&#39;t, you must visit Dubai
						</p></div></div></div></div>

		<div class="${"mt-6 sm:hidden"}"><a href="${"javascript:void(0)"}" class="${"block text-sm font-semibold text-rose-600 hover:text-rose-400"}">Browse all vacation destinations<span aria-hidden="${"true"}">\u2192</span></a></div></div></div>`;
    });
    PromoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white"}"><div class="${"pt-32 overflow-hidden sm:pt-14"}"><div class="${"bg-gradient-to-r from-blue-900 to-rose-500 "}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"relative pt-48 pb-16 sm:pb-24"}"><div class="${"sm:px-4 sm:max-w-xl"}"><h2 id="${"sale-heading"}" class="${"hidden sm:block text-4xl font-extrabold sm:leading-snug tracking-tight sm:tracking-normal text-white md:text-5xl"}">Vacation Deals, Offers and Packages
						</h2>
						<h2 id="${"sale-heading"}" class="${"block sm:hidden text-2xl font-extrabold tracking-tight sm:tracking-normal text-white"}">Vacation Deals upto 50% off
						</h2>
						<div class="${"mt-6 text-base"}"><a href="${"javascript:void(0)"}" class="${"font-semibold text-white"}">See what promotions are currently available<span aria-hidden="${"true"}">\u2192</span></a></div></div>

					<div class="${"absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0"}"><div class="${"ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8"}"><div class="${"flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"}"><div class="${"flex-shrink-0"}"><img class="${"h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"}" src="${"images/home/deals-8.jpg"}" alt="${""}"></div>

								<div class="${"mt-6 flex-shrink-0 sm:mt-0"}"><img class="${"h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"}" src="${"images/home/deals-2.jpg"}" alt="${""}"></div></div>
							<div class="${"flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"}"><div class="${"flex-shrink-0"}"><img class="${"h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"}" src="${"images/home/deals-7.jpg"}" alt="${""}"></div>

								<div class="${"mt-6 flex-shrink-0 sm:mt-0"}"><img class="${"h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"}" src="${"images/home/deals-6.jpg"}" alt="${""}"></div></div>
							<div class="${"flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8"}"><div class="${"flex-shrink-0"}"><img class="${"h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"}" src="${"images/home/deals-3.jpg"}" alt="${""}"></div>

								<div class="${"mt-6 flex-shrink-0 sm:mt-0"}"><img class="${"h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"}" src="${"images/home/deals-5.jpg"}" alt="${""}"></div></div></div></div></div></div></div></div></div>`;
    });
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

${validate_component(PopularFlightDeals, "PopularFlightDeals").$$render($$result, {}, {}, {})}
${validate_component(VacationDestinations, "VacationDestinations").$$render($$result, {}, {}, {})}
${validate_component(BlogPosts, "BlogPosts").$$render($$result, {}, {}, {})}

${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}

${validate_component(PromoSection, "PromoSection").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  css: () => css3,
  entry: () => entry3,
  js: () => js3,
  module: () => index_svelte_exports
});
var entry3, js3, css3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_index_svelte();
    entry3 = "pages/index.svelte-840c81a1.js";
    js3 = ["pages/index.svelte-840c81a1.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/BlogPosts-8d357881.js", "chunks/Subscribe-39a11f67.js"];
    css3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/signature-vacations.svelte.js
var signature_vacations_svelte_exports = {};
__export(signature_vacations_svelte_exports, {
  default: () => Signature_vacations
});
var Signature_vacations;
var init_signature_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/signature-vacations.svelte.js"() {
    init_index_77482e32();
    Signature_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  css: () => css4,
  entry: () => entry4,
  js: () => js4,
  module: () => signature_vacations_svelte_exports
});
var entry4, js4, css4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_signature_vacations_svelte();
    entry4 = "pages/signature-vacations.svelte-6095f932.js";
    js4 = ["pages/signature-vacations.svelte-6095f932.js", "chunks/vendor-3e73c3b8.js"];
    css4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/book-now-pay-later.svelte.js
var book_now_pay_later_svelte_exports = {};
__export(book_now_pay_later_svelte_exports, {
  default: () => Book_now_pay_later
});
var BookNowHero, BookNowFeature, WeeklyExample, HowDoesItWork, PaymentPlans, BnplFaqs, Book_now_pay_later;
var init_book_now_pay_later_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/book-now-pay-later.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    BookNowHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-white"}"><div class="${"overflow-hidden"}"><div class="${"bg-gradient-to-r from-pblue-900 to-rose-900"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"relative pt-6 sm:pt-28 pb-10 sm:pb-48"}"><div><h2 id="${"sale-heading"}" class="${"text-4xl font-extrabold tracking-tight text-white md:text-6xl"}">Book Now, Pay Later
						</h2>
						<p class="${"hidden sm:flex prose text-sm sm:text-lg md:max-w-sm font-medium text-slate-100 mt-2"}">Secure your ticket with a small deposit.
							<br>No Credit Check Needed.
						</p>
						<div class="${"mt-4 text-base"}"><a href="${"#"}" class="${"font-semibold text-white"}">View Offers<span aria-hidden="${"true"}" class="${"ml-2"}">\u2192</span></a></div></div>

					<div class="${"hidden sm:flex absolute top-24 left-1/2 transform -translate-x-1/2 sm:top-4 sm:translate-x-0"}"><div class="${"ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-4"}"><div class="${"flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-4"}"><div class="${"flex-shrink-0"}"><img class="${"h-[200px] w-[180px] rounded-lg object-cover"}" src="${"/images/blog/blog-bg.jpg"}" alt="${""}"></div>

								<div class="${"mt-6 flex-shrink-0 sm:mt-0"}"><img class="${"h-[200px] w-[180px] rounded-lg object-cover"}" src="${"/images/hotels/hotel-11.jpg"}" alt="${""}"></div></div>
							<div class="${"flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-4"}"><div class="${"flex-shrink-0"}"><img class="${"h-[250px] w-[180px] rounded-lg object-cover"}" src="${"/images/hero/hero-2.jpg"}" alt="${""}"></div>

								<div class="${"mt-6 flex-shrink-0 sm:mt-0"}"><img class="${"h-[250px] w-[180px] rounded-lg object-cover"}" src="${"/images/home/flights-section.jpg"}" alt="${""}"></div></div>
							<div class="${"flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-4"}"><div class="${"flex-shrink-0"}"><img class="${"h-[200px] w-[180px] rounded-lg object-cover"}" src="${"/images/vacations/acapulco.jpg"}" alt="${""}"></div>

								<div class="${"mt-6 flex-shrink-0 sm:mt-0"}"><img class="${"h-[200px] w-[180px] rounded-lg object-cover"}" src="${"/images/hotels/muskoka.jpg"}" alt="${""}"></div></div></div></div></div></div></div></div></div>`;
    });
    BookNowFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `


<div class="${"bg-white overflow-hidden"}"><div class="${"container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-12"}"><div class="${"flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-12"}">
			<div class="${"lg:w-6/12 xl:w-6/12 md:py-12 space-y-10"}"><div class="${"prose"}"><div class="${"text-sm uppercase font-bold tracking-wider mb-1 text-rose-600"}">Trip Support
					</div>
					<h2 class="${"text-3xl md:text-4xl font-extrabold mb-4 mt-0"}">Our Book Now Pay Later Feature
					</h2>
					<p class="${"mt-4 text-gray-700 max-w-4xl prose"}">Ready to pursue your wanderlust and explore the world easier than ever before? Trip
						Support\u2019s Book Now Pay Later Travel plan can help cover your travel expenses in a
						cost-effective manner. These expenses can include transportation costs, accommodations,
						food, activities, tours, and more. Uniquely, we offer this approach without the need for
						credit checks and extra boring, time-consuming documentation.
						<span class="${"font-bold"}">We believe that people should be able to travel regardless of their credit score</span>.
					</p></div></div>
			

			
			<div class="${"lg:w-6/12 xl:w-6/12 flex-none relative"}"><div class="${"pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10"}"></div>
				<div class="${"pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-20 transform translate-x-10 translate-y-10"}"></div>
				<div class="${"relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0"}"><div class="${"md:w-1/2 space-y-6"}"><div class="${"group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-orange-300"}"><div class="${"inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative"}"><div class="${"absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-blue-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"}"></div>
								<div class="${"absolute inset-0 rounded-2xl transform -rotate-6 bg-blue-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"}"></div>
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-chart-pie inline-block w-7 h-7"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}"></path><path fill-rule="${"evenodd"}" d="${"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"}" clip-rule="${"evenodd"}"></path></svg></div>
							<h4 class="${"text-lg font-bold mb-2"}">No Credit Check</h4>
							<p class="${"leading-relaxed text-tb text-gray-600"}">Pursue your wanderlust and explore the world easier than ever before
							</p></div>
						<div class="${"group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-red-300"}"><div class="${"inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative"}"><div class="${"absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"}"></div>
								<div class="${"absolute inset-0 rounded-2xl transform -rotate-6 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"}"></div>
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-lightning-bolt inline-block w-6 h-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}" clip-rule="${"evenodd"}"></path><path d="${"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}"></path></svg></div>
							<h4 class="${"text-lg font-bold mb-2"}">No hidden fees</h4>
							<p class="${"leading-relaxed text-gray-600"}">Everything is laid out at the start and included in the package
							</p></div></div>
					<div class="${"md:w-1/2 space-y-6"}"><div class="${"group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-emerald-300"}"><div class="${"inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative"}"><div class="${"absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-emerald-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"}"></div>
								<div class="${"absolute inset-0 rounded-2xl transform -rotate-6 bg-emerald-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"}"></div>
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-globe inline-block w-7 h-7"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"}" clip-rule="${"evenodd"}"></path></svg></div>
							<h4 class="${"text-lg font-bold mb-2"}">Flexible Payments</h4>
							<p class="${"leading-relaxed text-tb text-gray-600"}">Choose between weekly, bi-monthly or monthly payments
							</p></div>
						<div class="${"group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-purple-300"}"><div class="${"inline-flex items-center justify-center w-10 h-10 m-2 mb-6 relative"}"><div class="${"absolute inset-0 rounded-3xl -m-2 transform rotate-6 bg-purple-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105"}"></div>
								<div class="${"absolute inset-0 rounded-2xl transform -rotate-6 bg-purple-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"}"></div>
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-puzzle inline-block w-6 h-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"}" clip-rule="${"evenodd"}"></path></svg></div>
							<h4 class="${"text-lg font-bold mb-2"}">Fast &amp; convenient</h4>
							<p class="${"leading-relaxed text-gray-600"}">We will process and approve your travel loan right away.
							</p></div></div></div></div>
			</div></div></div>
`;
    });
    WeeklyExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"flex pt-6"}"><h3 class="${"text-lg font-bold text-gray-900"}">Varadero, Cuba</h3></div>
<div><p class="${"text-sm text-gray-400"}">Taxes included</p></div>
<div class="${"flex-wrap sm:flex sm:space-x-10 my-2 sm:mb-0"}"><p class="${"text-sm text-slate-700"}">Booking Date: <span class="${"font-bold"}">March 16, 2022</span></p>
	<p class="${"text-sm text-slate-700"}">Departure Date: <span class="${"font-bold"}">April 13, 2022</span></p>
	<p class="${"text-sm text-slate-700"}">Total: <span class="${"font-bold"}">CA $2,124.60</span> (Adult x 2)
	</p>
	<p class="${"text-sm text-slate-700"}">Total Due Now: <span class="${"font-bold"}">CA $684.12</span></p>
	<p class="${"text-sm text-slate-700"}">Weekly Installments: <span class="${"font-bold"}">CA $495.74</span></p></div>
<div class="${"space-y-16 pt-4 lg:pt-10"}" role="${"tabpanel"}"><div class="${"flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-16"}"><div class="${"mt-6 lg:mt-0 lg:col-span-8"}">
			<div class="${"relative py-12"}">
				<div class="${"w-10 md:w-12 absolute top-0 left-0 bottom-0 flex flex-col justify-center lg:left-1/2 lg:-ml-6"}"><div class="${"mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-indigo-100 rounded-t"}"></div>
					<div class="${"mx-auto w-1 grow bg-indigo-100"}"></div>
					<div class="${"mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-indigo-100 rounded-b"}"></div></div>
				

				
				<ul class="${"relative space-y-4 pl-10 md:pl-12 lg:pl-0"}">
					<li class="${"relative lg:w-1/2 lg:pr-6 lg:mr-auto"}"><div class="${"w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0"}"><div class="${"w-3 h-3 bg-indigo-500 rounded-full ring ring-indigo-100 ring-opacity-100 ring-offset-2"}"></div></div>
						<div class="${"bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4"}"><h4 class="${"font-bold text-tiny mb-2 text-slate-800"}">Booking Date</h4>
							<p class="${"text-sm leading-relaxed text-slate-600"}">Total due now: <span class="${"font-bold"}">CA $684.12</span></p>
							<p class="${"text-sm leading-relaxed text-slate-600"}">Your first weekly installment will be <span class="${"font-bold"}">CA $495.74</span></p></div>
						<div class="${"px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6"}"><p class="${"text-sm font-semibold text-slate-600"}">March 16, 2022</p></div></li>
					

					
					<li class="${"relative lg:w-1/2 lg:pl-6 lg:ml-auto"}"><div class="${"w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6"}"><div class="${"w-3 h-3 bg-indigo-500 rounded-full ring ring-indigo-100 ring-opacity-100 ring-offset-2"}"></div></div>
						<div class="${"bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4"}"><h4 class="${"font-bold text-tiny text-slate-800"}">1<span class="${"align-super text-xx"}">st</span> Weekly Installment:
								<span class="${"font-normal text-sm"}">CA</span> $495.74
							</h4></div>
						<div class="${"px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6"}"><p class="${"text-sm font-semibold text-slate-600"}">March 23, 2022</p></div></li>
					

					
					<li class="${"relative lg:w-1/2 lg:pr-6 lg:mr-auto"}"><div class="${"w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0"}"><div class="${"w-3 h-3 bg-indigo-500 rounded-full ring ring-indigo-100 ring-opacity-100 ring-offset-2"}"></div></div>
						<div class="${"bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4"}"><h4 class="${"font-bold text-tiny text-slate-800"}">2<span class="${"align-super text-xx"}">nd</span> Weekly Installment:
								<span class="${"font-normal text-sm"}">CA</span> $495.74
							</h4></div>
						<div class="${"px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6"}"><p class="${"text-sm font-semibold text-slate-600"}">March 30, 2022</p></div></li>
					

					
					<li class="${"relative lg:w-1/2 lg:pl-6 lg:ml-auto"}"><div class="${"w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6"}"><div class="${"w-3 h-3 bg-indigo-500 rounded-full ring ring-indigo-100 ring-opacity-100 ring-offset-2"}"></div></div>
						<div class="${"bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4"}"><h4 class="${"font-bold text-tiny text-slate-800"}">3<span class="${"align-super text-xx"}">rd</span> Weekly Installment:
								<span class="${"font-normal text-sm"}">CA</span> $495.74
							</h4>
							<p class="${"text-sm leading-relaxed text-slate-600"}">Your final installment payment.</p></div>
						<div class="${"px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pl-0 lg:pr-6"}"><p class="${"text-sm font-semibold text-slate-600"}">April 6, 2022</p></div></li>
					
					
					<li class="${"relative lg:w-1/2 lg:pr-6 lg:mr-auto"}"><div class="${"w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0"}"><div class="${"w-3 h-3 bg-indigo-500 rounded-full ring ring-indigo-100 ring-opacity-100 ring-offset-2"}"></div></div>
						<div class="${"bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4"}"><h4 class="${"font-bold text-tiny text-slate-800"}">Departure date</h4></div>
						<div class="${"px-4 py-2 lg:w-40 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pr-0 lg:pl-6"}"><p class="${"text-sm font-semibold text-slate-600"}">April 13, 2022</p></div></li>
					</ul>
				</div>

			<div class="${"grid grid-cols-1 sm:grid-cols-2 gap-4"}"><div class="${"rounded-md bg-blue-50 p-4 w-full"}"><div class="${"flex"}"><div class="${"flex-shrink-0"}">
							<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 text-pblue-500"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>
						<div class="${"ml-3 flex-1 md:flex md:justify-between"}"><p class="${"text-sm text-slate-900"}">Number of weekly installments depends on your departure date.
							</p></div></div></div>
				<div class="${"rounded-md bg-emerald-50 p-4 w-full"}"><div class="${"flex"}"><div class="${"flex-shrink-0"}">
							<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 text-pblue-500"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
						<div class="${"ml-3 flex-1 md:flex md:justify-between"}"><p class="${"text-sm text-slate-900"}">The total amount must be paid in full a week prior to your departure date.
							</p></div></div></div></div>
			<div class="${"flex mt-4"}"><p class="${"text-xs text-gray-500"}">Some conditions do apply. Please see our
					<a href="${"#"}" class="${"text-rose-600"}">Pay Later Terms</a>.
				</p></div>
			</div>
		<div class="${"lg:col-span-4"}"><div class="${"aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-2 sm:aspect-h-3"}"><img src="${"/images/booknow-paylater/cuba-varadero.jpg"}" alt="${"Maple organizer base with slots, supporting white polycarbonate trays of various sizes."}" class="${"object-center object-cover"}"></div></div></div></div>`;
    });
    HowDoesItWork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-white"}"><section aria-labelledby="${"features-heading"}" class="${"max-w-7xl mx-auto py-4 sm:py-12 sm:px-2 lg:px-8"}"><div class="${"max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none"}"><div class="${"max-w-7xl "}"><h2 class="${"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"}">How Does This Work?
				</h2>
				<p class="${"mt-4 text-gray-700 max-w-4xl prose"}">At Trip Support, we believe in offering you simple solutions for your travel needs. That\u2019s
					why our Book Now Pay Later system is as easy as can be. Simply choose your travel
					destination, and we will do the rest. We will buy your tickets and your vacation packages.
					Once that happens, you\u2019d be asked to pay us in installments. Our Book Now Pay Later option
					allows you to enjoy the benefits of early bookings savings. Instead of paying the full
					amount of your trip in advance, you only have to place a deposit to secure your tickets.
				</p></div>

			<div class="${"mt-4"}"><div class="${"-mx-4 flex overflow-x-auto sm:mx-0"}"><div class="${"flex-auto px-4 border-b border-gray-200 sm:px-0"}"><div class="${"-mb-px flex space-x-10"}" aria-orientation="${"horizontal"}" role="${"tablist"}">
							<button class="${"border-transparent whitespace-nowrap py-6 border-b-2 font-medium text-tb " + escape('border-rose-600 text-rose-600", text-rose-600 font-bold')}" role="${"tab"}" type="${"button"}">Weekly Payment Plan
							</button>

							<button class="${"border-transparent whitespace-nowrap py-6 border-b-2 font-medium text-tb " + escape("text-gray-500  hover:text-rose-600 hover:border-rose-600 font-semibold")}" role="${"tab"}" type="${"button"}">Bi-Weekly Payment Plan
							</button>
							<button class="${"border-transparent whitespace-nowrap py-6 border-b-2 font-medium text-tb " + escape("text-gray-500  hover:text-rose-600 hover:border-rose-600 font-semibold")}" role="${"tab"}" type="${"button"}">Monthly Payment Plan
							</button></div></div></div>

				${`${validate_component(WeeklyExample, "WeeklyExample").$$render($$result, {}, {}, {})}`}

				${``}

				${``}</div></div></section></div>`;
    });
    PaymentPlans = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white overflow-hidden"}">

	<div class="${"flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 gap-x-12"}"><div class="${"lg:w-1/3 lg:mr-16 lg:flex lg:justify-center lg:items-center"}"><div class="${"lg:w-96 relative"}"><div class="${"absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"}"></div>

				<div class="${"absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"}"></div>
				<div class="${"aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-1 sm:aspect-h-2"}"><img src="${"images/hero/hero-2.jpg"}" alt="${"Maple organizer base with slots, supporting white polycarbonate trays of various sizes."}" class="${"object-center object-cover"}"></div></div></div>
		<div class="${"lg:w-2/3 lg:flex lg:items-center"}"><div><div class="${"font-medium inline-flex px-2 py-1.5 leading-4 mb-2 text-sm rounded text-emerald-700 bg-emerald-200"}">Trip Support makes travelling easy for everyone
				</div>
				<h2 class="${"text-3xl md:text-4xl font-extrabold mb-4"}">Book Now Pay Later Payment Plans</h2>
				<p class="${"mt-4 text-gray-700 max-w-4xl prose"}">Book Now Pay Later allows you to pay off flights in installments. Everyone is eligible for
					the book now pay later plan with no credit check required. All you have to do is Book Now
					and Pay using our easy monthly installment options.
				</p>
				<div class="${"lg:w-full lg:flex lg:items-center pt-10"}"><div><h2 class="${"text-xl md:text-2xl font-extrabold mb-4"}">Flights</h2>
						<p class="${"mt-4 text-gray-700 max-w-4xl prose"}">Flights can be one of the costliest expenses you have to make when going on a trip.
							Whether you\u2019re travelling for work, for visiting family, or for relaxation purposes,
							flying is almost always an inevitable part of the process, but it doesn\u2019t have to be
							an expensive part. You can pay off flights in installments with our Book Now, Pay
							Later Flight plan. Everyone is eligible for a flight payment plan with no credit check
							required. All you have to do is Book Now and Pay using our easy monthly installment
							options.
						</p>
						<div class="${"flex w-1/2 flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 py-6 mb-6"}"><a href="${"javascript:void(0)"}" class="${"inline-flex w-full justify-center items-center tracking-wide space-x-2 border font-semibold focus:outline-none text-tiny px-4 py-2.5 rounded-full border-pblue-800 bg-pblue-800 text-white hover:text-white hover:bg-pblue-700 hover:border-pblue-800 focus:ring focus:ring-pblue-500 focus:ring-opacity-50 active:bg-pblue-700 active:border-pblue-700"}"><span>Book your flight now, pay later</span>
								<svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></a></div></div></div>
				<div class="${"lg:w-full lg:flex lg:items-center"}"><div><h2 class="${"text-xl md:text-2xl font-extrabold mb-4"}">Vacations</h2>
						<p class="${"mt-4 text-gray-700 max-w-4xl prose"}">Everyone has daydreamed about their ideal vacation paradise at least a few times, but
							for many people who think they can\u2019t afford to go on a vacation, this only stays as a
							dream. At Trip Support, we believe everyone and anyone should be able to take the trip
							of their dreams regardless of their financial situation. We do this through our Book
							Now Pay Later plan for Vacation Packages. Simply decide where you want to go, and
							we\u2019ll do the rest.
						</p>
						<div class="${"flex w-1/2 flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 py-6 mb-6"}"><a href="${"javascript:void(0)"}" class="${"inline-flex w-full justify-center items-center tracking-wide space-x-2 border font-medium focus:outline-none text-tiny px-4 py-2.5 rounded-full border-pblue-800 bg-pblue-800 text-white hover:text-white hover:bg-pblue-700 hover:border-pblue-800 focus:ring focus:ring-pblue-500 focus:ring-opacity-50"}"><span>Book your vacation now, pay later</span>
								<svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></a></div></div></div>
				<div class="${"lg:w-full lg:flex lg:items-center"}"><div><h2 class="${"text-xl md:text-2xl font-extrabold mb-4"}">Hotels</h2>
						<h3 class="${"md:leading-relaxed font-medium text-gray-600"}">Book Now, Pay Later Feature for hotels is coming soon..
						</h3></div></div></div></div></div>
	</div>
`;
    });
    BnplFaqs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white"}"><div class="${"space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"}">
		<div class="${"text-left"}"><div class="${"text-sm uppercase font-bold tracking-wider mb-1 text-rose-600"}">We take pride in our customer support
			</div>
			<h2 class="${"text-3xl md:text-4xl font-extrabold mb-4"}">Frequently Asked Questions</h2></div>
		

		
		<div class="${"grid grid-cols-1 md:grid-cols-3 gap-4"}"><div class="${"space-y-4"}"><div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Do I get access to the community?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti.
						Pellentesque non accumsan orci. Praesent at lacinia dolor.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Can I get a refund just in case?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Pellentesque non accumsan orci. Praesent at lacinia dolor.
					</p></div>
				<div class="${"bg-purple-50 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">What features are included?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Can I use PayPal to pay you?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti.
						Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Can I use PayPal to pay you?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Etiam egestas fringilla enim, id convallis lectus laoreet at.
					</p></div></div>
			<div class="${"space-y-4"}"><div class="${"bg-purple-50 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">What features are included?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Can I use PayPal to pay you?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Etiam egestas fringilla enim, id convallis lectus laoreet at.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Do you offer email support?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Quisque egestas nisl id lectus facilisis scelerisque.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Are the updates free for life?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula
						ipsum. Donec vitae ultrices dolor.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Do I get access to the community?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas tempor est,
						in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Is there a free version?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Etiam egestas fringilla enim, id convallis lectus laoreet at.
					</p></div></div>
			<div class="${"space-y-4"}"><div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Can I get a refund just in case?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida
						sed consectetur ut, interdum quis nisi.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Do you offer email support?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Quisque egestas nisl id lectus facilisis scelerisque.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Are the updates free for life?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl
						id lectus facilisis scelerisque.
					</p></div>
				<div class="${"bg-gray-100 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">Can I get a refund just in case?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Etiam egestas fringilla enim, id convallis lectus laoreet at.
					</p></div>
				<div class="${"bg-purple-50 rounded p-5"}"><h4 class="${"font-semibold mb-2"}">What features are included?</h4>
					<p class="${"text-sm text-gray-600 leading-relaxed"}">Gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis
						scelerisque.
					</p></div></div></div>
		

		
		<div class="${"text-center"}"><a href="${"javascript:void(0)"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"opacity-50 hi-solid hi-external-link inline-block w-5 h-5"}"><path d="${"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}"></path><path d="${"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}"></path></svg>
				<span>Can&#39;t find an answer to your question?</span></a></div>
		</div></div>
`;
    });
    Book_now_pay_later = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(BookNowHero, "BookNowHero").$$render($$result, {}, {}, {})}
${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}
${validate_component(BookNowFeature, "BookNowFeature").$$render($$result, {}, {}, {})}
${validate_component(HowDoesItWork, "HowDoesItWork").$$render($$result, {}, {}, {})}

${validate_component(PaymentPlans, "PaymentPlans").$$render($$result, {}, {}, {})}

${validate_component(BnplFaqs, "BnplFaqs").$$render($$result, {}, {}, {})}
${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  css: () => css5,
  entry: () => entry5,
  js: () => js5,
  module: () => book_now_pay_later_svelte_exports
});
var entry5, js5, css5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_book_now_pay_later_svelte();
    entry5 = "pages/book-now-pay-later.svelte-1442c7ea.js";
    js5 = ["pages/book-now-pay-later.svelte-1442c7ea.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/Subscribe-39a11f67.js"];
    css5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/sunquest-vacations.svelte.js
var sunquest_vacations_svelte_exports = {};
__export(sunquest_vacations_svelte_exports, {
  default: () => Sunquest_vacations
});
var Sunquest_vacations;
var init_sunquest_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/sunquest-vacations.svelte.js"() {
    init_index_77482e32();
    Sunquest_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  css: () => css6,
  entry: () => entry6,
  js: () => js6,
  module: () => sunquest_vacations_svelte_exports
});
var entry6, js6, css6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_sunquest_vacations_svelte();
    entry6 = "pages/sunquest-vacations.svelte-a76af3af.js";
    js6 = ["pages/sunquest-vacations.svelte-a76af3af.js", "chunks/vendor-3e73c3b8.js"];
    css6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/sunwing-vacations.svelte.js
var sunwing_vacations_svelte_exports = {};
__export(sunwing_vacations_svelte_exports, {
  default: () => Sunwing_vacations
});
var Sunwing_vacations;
var init_sunwing_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/sunwing-vacations.svelte.js"() {
    init_index_77482e32();
    Sunwing_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  css: () => css7,
  entry: () => entry7,
  js: () => js7,
  module: () => sunwing_vacations_svelte_exports
});
var entry7, js7, css7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_sunwing_vacations_svelte();
    entry7 = "pages/sunwing-vacations.svelte-80b3342f.js";
    js7 = ["pages/sunwing-vacations.svelte-80b3342f.js", "chunks/vendor-3e73c3b8.js"];
    css7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/westjet-vacations.svelte.js
var westjet_vacations_svelte_exports = {};
__export(westjet_vacations_svelte_exports, {
  default: () => Westjet_vacations
});
var Westjet_vacations;
var init_westjet_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/westjet-vacations.svelte.js"() {
    init_index_77482e32();
    Westjet_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  css: () => css8,
  entry: () => entry8,
  js: () => js8,
  module: () => westjet_vacations_svelte_exports
});
var entry8, js8, css8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_westjet_vacations_svelte();
    entry8 = "pages/westjet-vacations.svelte-b12b3bce.js";
    js8 = ["pages/westjet-vacations.svelte-b12b3bce.js", "chunks/vendor-3e73c3b8.js"];
    css8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/customer-support.svelte.js
var customer_support_svelte_exports = {};
__export(customer_support_svelte_exports, {
  default: () => Customer_support
});
var Customer_support;
var init_customer_support_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/customer-support.svelte.js"() {
    init_index_77482e32();
    init_OutClick_6647c5ef();
    Customer_support = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let q3;
      q3 = false;
      return `
<div class="${"bg-slate-900"}"><div class="${"max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8"}"><div class="${"text-center"}"><h2 class="${"sm:text-tiny text-xs font-semibold text-gray-300 tracking-wide uppercase"}">support when you need it
			</h2>
			<p class="${"mt-1 text-xl font-extrabold text-white sm:text-5xl sm:trackin lg:text-6xl"}">Hello. How can we help you today?
			</p>
			<p class="${"max-w-xl mt-5 mx-auto sm:text-lg text-tiny text-gray-300"}">FAQs, Helpful guide videos and so much more ...
			</p></div>
		
		<div class="${"max-w-xs mx-auto w-full lg:max-w-2xl mt-4"}"><label for="${"search"}" class="${"sr-only"}">Search</label>
			<div class="${"relative text-white focus-within:text-gray-600"}"><div class="${"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"}">
					<svg class="${"h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></div>
				<input id="${"search"}" class="${"block w-full text-white bg-white bg-opacity-20 py-3 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"}" placeholder="${"Search"}" type="${"search"}" name="${"search"}"></div></div></div></div>

<div class="${"mx-auto max-w-7xl bg-white"}">
	<section class="${"pb-6 pt-12 sm:pt-24 sm:pb-12 relative z-20 overflow-hidden "}">
		<div class="${"container"}"><div class="${"flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"mb-6 lg:mb-10 max-w-[520px]"}"><span class="${"font-normal text-tiny block text-rose-600"}">FAQs </span>
						<h2 class="${"font-extrabold text-2xl sm:text-4xl text-gray-900 mb-4 "}">Frequently Asked Questions
						</h2>
						<p class="${"sm:text-base text-tiny text-body-color"}">See below for specific answers to frequently asked questions.
						</p></div></div></div>
			<div class="${"flex flex-wrap -mx-4"}"><div class="${"w-full lg:w-1/2 px-4"}">
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I get a copy of my itinerary or booking details?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I get a copy of my itinerary or booking details?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Why was my booking canceled?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${q3 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"}" clip-rule="${"evenodd"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${q3 ? `<div class="${"faq-content"}"><p class="${"text-tiny text-body-color leading-relaxed py-3"}">Unfortunately, there can be several reasons for a cancellation. You will find a
										detailed message regarding the status of your itinerary at your <b>\u2018My Booking Page\u2019</b> . A cancellation email was also sent to you verifying the status of your booking.
									</p></div>` : ``}`;
        }
      })}</div></div>
				<div class="${"w-full lg:w-1/2 px-4"}"><div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">What is Trip Support\u2019s cancellation policy?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How do I know my booking is confirmed?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Can I print my e-ticket?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div></div></div>
			<div class="${"flex justify-end px-4"}"><a sveltekit:prefetch href="${"/faqs"}" class="${"text-tiny font-medium text-pblue-600 hover:text-pblue-500"}">View all FAQs</a></div></div>
		<div class="${"absolute bottom-0 right-0 z-[-1]"}"><svg width="${"1440"}" height="${"886"}" viewBox="${"0 0 1440 886"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path opacity="${"0.5"}" d="${"M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"}" fill="${"url(#paint0_linear)"}"></path><defs><linearGradient id="${"paint0_linear"}" x1="${"1308.65"}" y1="${"1142.58"}" x2="${"602.827"}" y2="${"-418.681"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#3056D3"}" stop-opacity="${"0.36"}"></stop><stop offset="${"1"}" stop-color="${"#F5F2FD"}" stop-opacity="${"0"}"></stop><stop offset="${"1"}" stop-color="${"#F5F2FD"}" stop-opacity="${"0.096144"}"></stop></linearGradient></defs></svg></div></section>
	</div>



<div class="${"bg-white"}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:py-24 "}"><div class="${"flex flex-wrap"}"><div class="${"w-full"}"><div class="${"mb-6 lg:mb-12 max-w-[520px]"}"><span class="${"font-normal text-tiny block text-rose-600"}">Need further assistance? </span>
					<h2 class="${"font-extrabold text-2xl sm:text-4xl text-gray-900 sm:mb-4 mb-1 "}">Request Customer Support
					</h2>
					<p class="${"sm:text-base text-tiny text-body-color"}">Fill in the form below and we will get back to you shortly.
					</p></div></div></div>
		<div class="${"relative bg-white shadow-xl"}"><h2 class="${"sr-only"}">Request Customer Support</h2>

			<div class="${"grid grid-cols-1 lg:grid-cols-3"}">
				<div class="${"relative overflow-hidden py-10 px-6 bg-pblue-700 sm:px-10 xl:p-12"}"><div class="${"absolute inset-0 pointer-events-none sm:hidden"}" aria-hidden="${"true"}"><svg class="${"absolute inset-0 w-full h-full"}" width="${"343"}" height="${"388"}" viewBox="${"0 0 343 388"}" fill="${"none"}" preserveAspectRatio="${"xMidYMid slice"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"}" fill="${"url(#linear1)"}" fill-opacity="${".1"}"></path><defs><linearGradient id="${"linear1"}" x1="${"254.553"}" y1="${"107.554"}" x2="${"961.66"}" y2="${"814.66"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#fff"}"></stop><stop offset="${"1"}" stop-color="${"#fff"}" stop-opacity="${"0"}"></stop></linearGradient></defs></svg></div>
					<div class="${"hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"}" aria-hidden="${"true"}"><svg class="${"absolute inset-0 w-full h-full"}" width="${"359"}" height="${"339"}" viewBox="${"0 0 359 339"}" fill="${"none"}" preserveAspectRatio="${"xMidYMid slice"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"}" fill="${"url(#linear2)"}" fill-opacity="${".1"}"></path><defs><linearGradient id="${"linear2"}" x1="${"192.553"}" y1="${"28.553"}" x2="${"899.66"}" y2="${"735.66"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#fff"}"></stop><stop offset="${"1"}" stop-color="${"#fff"}" stop-opacity="${"0"}"></stop></linearGradient></defs></svg></div>
					<div class="${"hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"}" aria-hidden="${"true"}"><svg class="${"absolute inset-0 w-full h-full"}" width="${"160"}" height="${"678"}" viewBox="${"0 0 160 678"}" fill="${"none"}" preserveAspectRatio="${"xMidYMid slice"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"}" fill="${"url(#linear3)"}" fill-opacity="${".1"}"></path><defs><linearGradient id="${"linear3"}" x1="${"192.553"}" y1="${"325.553"}" x2="${"899.66"}" y2="${"1032.66"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#fff"}"></stop><stop offset="${"1"}" stop-color="${"#fff"}" stop-opacity="${"0"}"></stop></linearGradient></defs></svg></div>
					<h3 class="${"text-2xl font-bold text-white"}">We&#39;re here to help!</h3>
					<p class="${"mt-6 text-base text-white max-w-3xl"}">Can&#39;t find what you&#39;re looking for? Send us a message, we will get back to you soon.
					</p>
					
					<div class="${"relative mt-8"}"><div class="${"absolute inset-0 flex items-center"}" aria-hidden="${"true"}"><div class="${"w-full border-t border-gray-300"}"></div></div>
						<div class="${"relative flex justify-center"}"><span class="${"px-3 bg-pblue-700 text-lg font-medium text-white"}">OR </span></div></div>
					<p class="${"mt-6 text-base text-white max-w-3xl"}">You can reach out to us by calling us or sending us an email
					</p>

					<dl class="${"mt-8 space-y-6"}"><dt><span class="${"sr-only"}">Phone number</span></dt><dd class="${"flex text-base text-white items-center"}">
							<svg class="${"flex-shrink-0 w-5 h-5 text-gray-200"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}"></path></svg>
							<span class="${"ml-3"}">+1 (555) 123-4567</span>
						</dd><dt><span class="${"sr-only"}">Email</span></dt><dd class="${"flex text-base text-gray-200 items-center"}">
							<svg class="${"flex-shrink-0 w-5 h-5 text-gray-200"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}"></path></svg>
							<span class="${"ml-3"}">support@workcation.com</span></dd></dl></div>

				
				<div class="${"py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"}"><form action="${"#"}" method="${"POST"}" class="${"mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"}"><div><label for="${"first-name"}" class="${"block text-sm font-medium text-gray-900"}">First name</label>
							<div class="${"mt-1"}"><input type="${"text"}" name="${"first-name"}" id="${"first-name"}" autocomplete="${"given-name"}" class="${"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"}"></div></div>
						<div><label for="${"last-name"}" class="${"block text-sm font-medium text-gray-900"}">Last name</label>
							<div class="${"mt-1"}"><input type="${"text"}" name="${"last-name"}" id="${"last-name"}" autocomplete="${"family-name"}" class="${"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"}"></div></div>
						<div><label for="${"email"}" class="${"block text-sm font-medium text-gray-900"}">Email</label>
							<div class="${"mt-1"}"><input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" class="${"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"}"></div></div>
						<div><div class="${"flex justify-between"}"><label for="${"phone"}" class="${"block text-sm font-medium text-gray-900"}">Phone</label>
								<span id="${"phone-optional"}" class="${"text-sm text-gray-500"}">Optional</span></div>
							<div class="${"mt-1"}"><input type="${"text"}" name="${"phone"}" id="${"phone"}" autocomplete="${"tel"}" class="${"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"}" aria-describedby="${"phone-optional"}"></div></div>
						<div class="${"sm:col-span-2"}"><label for="${"subject"}" class="${"block text-sm font-medium text-gray-900"}">Subject</label>
							<div class="${"mt-1"}"><input type="${"text"}" name="${"subject"}" id="${"subject"}" class="${"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"}"></div></div>
						<div class="${"sm:col-span-2"}"><div class="${"flex justify-between"}"><label for="${"message"}" class="${"block text-sm font-medium text-gray-900"}">Message</label>
								<span id="${"message-max"}" class="${"text-sm text-gray-500"}">Max. 500 characters</span></div>
							<div class="${"mt-1"}"><textarea id="${"message"}" name="${"message"}" rows="${"4"}" class="${"py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border border-gray-300 rounded-md"}" aria-describedby="${"message-max"}"></textarea></div></div>
						<div class="${"sm:col-span-2 sm:flex sm:justify-end"}"><button type="${"submit"}" class="${"mt-2 w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-tiny font-medium text-white bg-pblue-700 hover:bg-pblue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500 sm:w-auto"}">Submit</button></div></form></div></div></div></div></div>



<div class="${"relative bg-gray-50"}"><div class="${"absolute top-0 right-0 left-0 h-96 "}"></div>
	<div class="${"relative space-y-12 container xl:max-w-7xl mx-auto px-4 py-16"}"><div class="${"flex flex-wrap"}"><div class="${"w-full"}"><div class="${"max-w-[520px]"}"><span class="${"font-normal text-tiny block text-rose-600"}">Media Support </span>
					<h2 class="${"font-extrabold text-2xl sm:text-4xl text-gray-900 mb-4 "}">Video Guides
					</h2>
					<p class="${"sm:text-base text-tiny text-body-color"}">A range of helpful video guides to get you started with TripSupport.
					</p></div></div></div>
		

		
		<div class="${"rounded-lg bg-white shadow-lg "}"><div class="${"grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 p-2 sm:p-5 md:p-6 rounded-lg ring-1 ring-black ring-opacity-5 lg:gap-y-16"}"><div class="${"relative"}"><iframe class="${"w-full h-[246px] rounded-lg"}" src="${"https://www.youtube.com/embed/tGGq0oaUcwU"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe>
					<div class="${"flex items-center mt-4 justify-between"}"><p class="${"text-center text-gray-500 text-tiny font-semibold"}">Trip Support Book Now Pay Later Plan
						</p>
						<p class="${"text-center text-rose-600 text-tiny font-semibold"}">2:02</p></div></div>

				<div class="${"relative"}"><iframe class="${"w-full h-[246px] rounded-lg"}" src="${"https://www.youtube.com/embed/AOzxPVXVy0g"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe>
					<div class="${"flex items-center mt-4 justify-between"}"><p class="${"text-center text-gray-500 text-tiny font-semibold"}">Trip Support Book Now Pay Later Plan
						</p>
						<p class="${"text-center text-rose-600 text-tiny font-semibold"}">1:11</p></div></div>

				<div class="${"relative"}"><iframe class="${"w-full h-[246px] rounded-lg"}" src="${"https://www.youtube.com/embed/yo0Gag7HyG8"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe>
					<div class="${"flex items-center mt-4 justify-between"}"><p class="${"text-center text-gray-500 text-tiny font-semibold"}">Trip Support Book Now Pay Later Plan
						</p>
						<p class="${"text-center text-rose-600 text-tiny font-semibold"}">1:04</p></div></div>
				<div class="${"relative"}"><iframe class="${"w-full h-[246px] rounded-lg"}" src="${"https://www.youtube.com/embed/mCVxqwa2bdE"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe>
					<div class="${"flex items-center mt-4 justify-between"}"><p class="${"text-center text-gray-500 text-tiny font-semibold"}">Trip Support Book Now Pay Later Plan
						</p>
						<p class="${"text-center text-rose-600 text-tiny font-semibold"}">2:25</p></div></div>

				<div class="${"relative"}"><iframe class="${"w-full h-[246px] rounded-lg"}" src="${"https://www.youtube.com/embed/yZlLN5fq_-I"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe>
					<div class="${"flex items-center mt-4 justify-between"}"><p class="${"text-center text-gray-500 text-tiny font-semibold"}">Trip Support Book Now Pay Later Plan
						</p>
						<p class="${"text-center text-rose-600 text-tiny font-semibold"}">2:32</p></div></div>

				<div class="${"relative"}"><iframe class="${"w-full h-[246px] rounded-lg"}" src="${"https://www.youtube.com/embed/c0MSR7-gpRc"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen></iframe>
					<div class="${"flex items-center mt-4 justify-between"}"><p class="${"text-center text-gray-500 text-tiny font-semibold"}">Trip Support Book Now Pay Later Plan
						</p>
						<p class="${"text-center text-rose-600 text-tiny font-semibold"}">2:47</p></div></div></div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  css: () => css9,
  entry: () => entry9,
  js: () => js9,
  module: () => customer_support_svelte_exports
});
var entry9, js9, css9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_customer_support_svelte();
    entry9 = "pages/customer-support.svelte-4828e2da.js";
    js9 = ["pages/customer-support.svelte-4828e2da.js", "chunks/vendor-3e73c3b8.js"];
    css9 = [];
  }
});

// .svelte-kit/output/server/entries/pages/porter-vacations.svelte.js
var porter_vacations_svelte_exports = {};
__export(porter_vacations_svelte_exports, {
  default: () => Porter_vacations
});
var Porter_vacations;
var init_porter_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/porter-vacations.svelte.js"() {
    init_index_77482e32();
    Porter_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  css: () => css10,
  entry: () => entry10,
  js: () => js10,
  module: () => porter_vacations_svelte_exports
});
var entry10, js10, css10;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    init_porter_vacations_svelte();
    entry10 = "pages/porter-vacations.svelte-35645d8c.js";
    js10 = ["pages/porter-vacations.svelte-35645d8c.js", "chunks/vendor-3e73c3b8.js"];
    css10 = [];
  }
});

// .svelte-kit/output/server/entries/pages/spring-vacations.svelte.js
var spring_vacations_svelte_exports = {};
__export(spring_vacations_svelte_exports, {
  default: () => Spring_vacations
});
var Spring_vacations;
var init_spring_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/spring-vacations.svelte.js"() {
    init_index_77482e32();
    Spring_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/10.js
var __exports11 = {};
__export(__exports11, {
  css: () => css11,
  entry: () => entry11,
  js: () => js11,
  module: () => spring_vacations_svelte_exports
});
var entry11, js11, css11;
var init__11 = __esm({
  ".svelte-kit/output/server/nodes/10.js"() {
    init_spring_vacations_svelte();
    entry11 = "pages/spring-vacations.svelte-b17d4176.js";
    js11 = ["pages/spring-vacations.svelte-b17d4176.js", "chunks/vendor-3e73c3b8.js"];
    css11 = [];
  }
});

// .svelte-kit/output/server/entries/pages/summer-vacations.svelte.js
var summer_vacations_svelte_exports = {};
__export(summer_vacations_svelte_exports, {
  default: () => Summer_vacations
});
var Summer_vacations;
var init_summer_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/summer-vacations.svelte.js"() {
    init_index_77482e32();
    Summer_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports12 = {};
__export(__exports12, {
  css: () => css12,
  entry: () => entry12,
  js: () => js12,
  module: () => summer_vacations_svelte_exports
});
var entry12, js12, css12;
var init__12 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    init_summer_vacations_svelte();
    entry12 = "pages/summer-vacations.svelte-9d961fbc.js";
    js12 = ["pages/summer-vacations.svelte-9d961fbc.js", "chunks/vendor-3e73c3b8.js"];
    css12 = [];
  }
});

// .svelte-kit/output/server/entries/pages/terms-conditions.svelte.js
var terms_conditions_svelte_exports = {};
__export(terms_conditions_svelte_exports, {
  default: () => Terms_conditions
});
var css13, isActive, Terms_conditions;
var init_terms_conditions_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/terms-conditions.svelte.js"() {
    init_index_77482e32();
    css13 = {
      code: "ol.svelte-1907t1f.svelte-1907t1f{counter-reset:item}ol.svelte-1907t1f>li.svelte-1907t1f{display:block;margin-bottom:2rem}ol.svelte-1907t1f>li.svelte-1907t1f:before{content:counters(item, '.') '. ';counter-increment:item;padding-right:8px}p.svelte-1907t1f.svelte-1907t1f{line-height:1.775;font-weight:400;padding:6px 0}p.svelte-1907t1f.svelte-1907t1f:first-child{margin-top:12px}",
      map: null
    };
    isActive = 1;
    Terms_conditions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const tocs = [
        {
          id: 1,
          is_active: false,
          link: "#definitions",
          title: "Definitions"
        },
        {
          id: 2,
          is_active: false,
          link: "#ctta",
          title: "Changes to this Agreement"
        },
        {
          id: 3,
          is_active: false,
          link: "#rfuc",
          title: "Rules for User Conduct"
        },
        {
          id: 4,
          is_active: false,
          link: "#toaaattw",
          title: "Termination of Accounts and Access to the Websites"
        },
        {
          id: 5,
          is_active: false,
          link: "#tsip",
          title: "Trip Support\u2019s Intellectual Property"
        },
        {
          id: 6,
          is_active: false,
          link: "#uc",
          title: "User Content"
        },
        {
          id: 7,
          is_active: false,
          link: "#privacy",
          title: "Privacy"
        },
        {
          id: 8,
          is_active: false,
          link: "#tpl",
          title: "Third-Party Links"
        },
        {
          id: 9,
          is_active: false,
          link: "#tps",
          title: "Third-Party Suppliers"
        },
        {
          id: 10,
          is_active: false,
          link: "#tr",
          title: "Travel Requirements"
        },
        {
          id: 11,
          is_active: false,
          link: "#naad",
          title: "Network Access and Devices"
        },
        {
          id: 12,
          is_active: false,
          link: "#promotions",
          title: "Promotions"
        },
        {
          id: 13,
          is_active: false,
          link: "#parp",
          title: "Payment and Refund Policy"
        },
        {
          id: 14,
          is_active: false,
          link: "#cs",
          title: "Customer Support"
        },
        {
          id: 15,
          is_active: false,
          link: "#ur",
          title: "User Relationships"
        },
        {
          id: 16,
          is_active: false,
          link: "#dorcaw",
          title: "Disclaimers of Representations, Conditions and Warranties"
        },
        {
          id: 17,
          is_active: false,
          link: "#lol",
          title: "Limitation of Liability"
        },
        {
          id: 18,
          is_active: false,
          link: "#indemnification",
          title: "Indemnification"
        },
        {
          id: 19,
          is_active: false,
          link: "#survival",
          title: "Survival"
        },
        {
          id: 20,
          is_active: false,
          link: "#ea",
          title: "Entire Agreement"
        },
        {
          id: 21,
          is_active: false,
          link: "#serverability",
          title: "Severability"
        },
        {
          id: 22,
          is_active: false,
          link: "#assignment",
          title: "Assignment"
        },
        {
          id: 23,
          is_active: false,
          link: "#aaw",
          title: "Amendments and Waivers"
        },
        {
          id: 24,
          is_active: false,
          link: "#fm",
          title: "Force Majeure"
        },
        {
          id: 25,
          is_active: false,
          link: "#gl",
          title: "Governing Law"
        },
        {
          id: 26,
          is_active: false,
          link: "#ci",
          title: "Contact Information"
        }
      ];
      $$result.css.add(css13);
      return `<div class="${"bg-gradient-to-r from-slate-900 to-fuchsia-900 "}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:justify-between"}"><div class="${"max-w-3xl"}"><h1 class="${"text-sm font-semibold tracking-wide uppercase"}"><span class="${"bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent"}">Trip Support</span></h1>
			<h2 class="${"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"}">Terms &amp; Conditions
			</h2>
			<h3 class="${"text-white"}">Last updated: <span class="${"font-semibold"}">November 21, 2021</span></h3></div></div></div>

<div class="${"py-10"}"><div class="${"max-w-3xl mx-auto px-4 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"}"><div class="${"lg:col-span-9 "}"><article class="${"max-w-4xl text-sz sm:text-base"}"><p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Please read these Terms of Use (this <span class="${"font-bold"}">&quot;Agreement&quot;</span>) carefully
					as it governs the terms and conditions under which Users (<span class="${"font-bold"}">&quot;you&quot;</span>
					or <span class="${"font-bold"}">&quot;your&quot;</span>) may access, view and use the Trip Support
					websites, <a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">support@tripsupport.ca</a>
					and <a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">support@tripsupport.com</a>
					(collectively, the
					<span class="${"font-bold"}">&quot;Websites&quot;</span>).
				</p>

				<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The Websites are owned and operated by Trip Support Inc. (<span class="${"font-bold"}">&quot;Trip Support&quot;</span>, <span class="${"font-bold"}">&quot;us&quot;</span>, <span class="${"font-bold"}">&quot;we&quot;</span>, or
					<span class="${"font-bold"}">&quot;our&quot;</span>). We operate the Websites and provide them for use
					subject to compliance with this Agreement.
				</p>
				<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">This Agreement includes our Privacy Policy, which is incorporated herein. Please note that
					your use of the Websites constitutes your agreement to follow and be bound by the terms of
					this Agreement and the Privacy Policy. If you object to anything in this Agreement or the
					Privacy Policy, do not use the Websites.
				</p>

				<ol class="${"list-decimal py-10 svelte-1907t1f"}"><li id="${"definitions"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Definitions
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold"}">&quot;Account(s)&quot;</span> means accounts belonging to and created by
							Users for the purpose of making purchases and storing information relating to their purchases
							via the Websites.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold"}">\u201CTrip Support Content\u201D</span> means any data, information, content,
							records, files, text, images, video, audio, other multimedia, software or other materials
							that Trip Support makes available to Users through the Websites.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold"}">\u201CUser(s)\u201D</span> means all individuals or entities that use, view
							or access the Websites.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold"}">\u201CUser Content\u201D</span> means any data, information, content, records,
							files, text, images, video, audio or other multimedia, software or other information or
							material that Users load or transmit through the Websites including, but not limited to,
							reviews of products.
						</p></li>
					<li id="${"ctta"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Changes to this Agreement
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">This Agreement, including the Privacy Policy, are subject to change and may be updated
							by Trip Support, at its sole discretion, from time to time. We will notify you of any
							changes to this Agreement by posting the new agreement on the Websites, through your
							Account, and/or by any other method of notice we see fit, including by email.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Changes to this Agreement will be effective immediately upon posting the amended
							agreement to the Websites and/or your Account. Accordingly, please review this
							Agreement periodically for any changes. If you do not accept the amendments, you are
							required to stop using the Websites and your Account. Any use of the Websites and/or
							Account after posting the amended agreement on the Websites will constitute acceptance
							of said agreement.
						</p></li>
					<li id="${"rfuc"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Rules for User Conduct

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">As a condition of your use of the Websites, you agree that:
						</p>
						<ul class="${"list-disc sm:ml-4"}"><li class="${"text-tiny font-normal p-1.5"}">By using, viewing, or accessing the Websites, you represent and warrant that you
								have reached the age of majority in your country of residence;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">By purchasing a product, you represent and warrant that you are a citizen or
								resident of Canada or the United States;
							</li>

							<li class="${"text-tiny font-normal p-1.5"}">Accounts may only be created, accessed, and used by a single, individual User. You
								are responsible for providing accurate, current and complete information in
								connection with your Account. You must not share Account credentials with others,
								and you may not assign or otherwise transfer your Account to any other person or
								entity. You must notify us immediately upon becoming aware of any breach of security
								or unauthorized use of your Account;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You shall be solely responsible for all activity associated with your Account
								credentials;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will in no way copy or otherwise reproduce Trip Support Content.
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You shall not, in connection with any purchase made on or through the Websites,
								provide the payment information of any individual without that individual\u2019s express
								authorization;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You shall not, in connection with any purchase made on or through the Websites,
								provide any payment information that has been fraudulently obtained;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not use the Websites for any purpose that is unlawful under any applicable
								laws or is otherwise prohibited by this Agreement;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not distribute viruses, harmful code, phishing scams, or any other harmful
								content or technologies, or otherwise take any actions that do or are intended to
								harm Trip Support, the Websites, Users, Accounts, third parties, or their interests\u2019
								or property;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not solicit, harvest, access or otherwise collect information regarding the
								Websites, Users, Accounts, third parties, or their interests, property, or data not
								intended for you;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not interfere or attempt to interfere with the proper functioning of the
								Websites, such as by making any automated or improper use of the Websites, or take
								any action that we deem to impose or to potentially impose an unreasonable or
								disproportionately large load on the Website\u2019s servers or network infrastructure;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not bypass any measures we take to restrict access to the Websites,
								Accounts and Trip Support Content, or use any software, technology, or device to
								scrape, spider, or crawl the Websites, Accounts and Trip Support Content, or harvest
								or manipulate data related to same;
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not circumvent or manipulate our fee structure or payment process, or
								otherwise evade fees owed to Trip Support; and
							</li>
							<li class="${"text-tiny font-normal p-1.5"}">You will not probe, scan or test the vulnerability of our Websites, or breach or
								attempt to breach security or authentication measures related to the Websites and/or
								Accounts.
							</li></ul></li>
					<li id="${"toaaattw"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Termination of Accounts and Access to the Websites
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support shall be entitled to terminate your ability to use, access and view the
							Websites, your Account and Trip Support Content. To the extent that Users\u2019 conduct, as
							judged by us in our sole discretion, does not comply with this Agreement, we may
							immediately terminate your access to all or part of the Websites, disable your
							Account, and/or seek other remedies.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support may, in its sole discretion, modify, change, suspend or terminate,
							temporarily or permanently, the Websites and/or Accounts or any part of the
							aforementioned at any time, for any reason, without any notice or liability to you or
							any other person.
						</p></li>
					<li id="${"tsip"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Trip Support\u2019s Intellectual Property

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The Websites and all intellectual property rights in and to the Websites including,
							without limitation, intellectual property rights in Trip Support Content, are owned by
							us and/or our licensors. We and our licensors, as applicable, reserve all our
							intellectual property rights, which include without limitation all copyright,
							trademark, domain names, design rights, database rights, patent, trade secrets and all
							other intellectual property rights of any kind, whether registered or unregistered
							anywhere in the world.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Subject to your compliance with this Agreement, Trip Support grants you a limited,
							revocable, non-exclusive, non-transferable, non-sublicensable licence, to access, view
							and use the Websites. Nothing in this Agreement grants you any rights in the Websites
							or Trip Support Content, other than as necessary to enable you to access, view and use
							the Websites in compliance with this Agreement. You agree not to adjust, circumvent or
							delete any intellectual property notices contained within the Websites and Trip
							Support Content. You are expressly forbidden from using the Websites and the Trip
							Support Content in any way that is not expressly and explicitly permitted under the
							terms of this Agreement. The limited, revocable, non-exclusive, non-transferable,
							non-sublicensable licence provided remains in effect until it is terminated by you or
							by Trip Support. YOUR LICENSE IS AUTOMATICALLY REVOKED UPON BREACH OF THE AGREEMENT.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support\u2019 trademarks and the related words and logos are our trademarks or trade
							names. Nothing in this Agreement or within the Websites should be construed as
							granting any license or right for you to use any such marks or names in any way. We
							expressly reserve all our trademark rights.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The Websites and Trip Support Content, including, but not limited to, any data, text,
							images, photographs, graphics, audio, and the arrangement of the foregoing, including
							the look and feel of the Websites and Trip Support Content, are protected by
							copyright. Trip Support either owns the copyright in and to the Websites and Trip
							Support Content or has acquired the appropriate licenses, assignments or permissions
							to use them. Trip Support hereby expressly reserves all copyright in and to the
							Websites and the Trip Support Content.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Users are welcome to copy, reproduce and distribute Trip Support Content, such as
							itineraries and travel products, for their own personal and informational. You shall
							not otherwise use, copy, adapt, modify, prepare derivative works based upon,
							distribute, license, sell, transfer, publicly display, publicly perform, transmit,
							broadcast, download or otherwise exploit the Websites and Trip Support Content, except
							as expressly permitted in the Agreement. No licenses or rights are granted to you by
							implication or otherwise, except for the licenses and rights expressly granted in this
							Agreement.
						</p></li>
					<li id="${"uc"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">User Content

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Users retain any and all rights in and to their User Content submitted to us, whether
							through the Websites, your Account, or otherwise.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">From time to time, however, we may also request your permission to use your User
							Content for various advertising and marketing purposes. We will not use your User
							Content unless expressly permitted by you.
						</p></li>
					<li id="${"privacy"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Privacy

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support will only use the information you provide in accordance with our Privacy
							Policy. For more information, see our full Privacy Policy, the terms of which are
							incorporated herein.
						</p></li>
					<li id="${"tpl"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Third-Party Links

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The Websites may contain hyperlinks or references to third party products, materials
							or websites (collectively, <span class="${"font-bold"}">\u201CThird-Party Links\u201D</span>). Any
							such embedment, hyperlink or reference is provided for your convenience only. The
							display of or reference to any Third Party Links the Websites on the Website does not
							constitute an endorsement of such third party\u2019s website or products. We have no
							control over third party websites and accept no responsibility or liability for any
							content, material or information contained in them. Your use of Third-Party Links may
							be governed by the terms and conditions and privacy policies of Third-Party Links. We
							strongly advise you to read the terms and conditions and privacy policies of any
							Third-Party Links.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">For example, we employ third-party companies to process payment and complete purchases
							made on the Websites. All data and information shared for the purpose of completing a
							purchase is shared directly with the third-party and is subject to the privacy policy
							and by the terms and conditions of that third-party.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><b>Further, please note that some Third-Party Links may be affiliated and any
								purchases made through said Third-Party Links will result in a percentage of that
								sale going to Trip Support. Alternatively, you may access this website independently
								or through unaffiliated links, and a royalty will not be paid to Trip Support.
							</b></p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support expressly disclaims any liability, damage or loss, directly or
							indirectly, alleged or derived from the use, access and/or viewing of Third-Party
							Links. Further, Users hereby agree to hold Trip Support harmless from any liability
							that may result from the use of the third-party websites linked to or referenced
							within the Website.
						</p></li>
					<li id="${"tps"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Third-Party Suppliers

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The products offered for sale on the Websites are those of third-party suppliers,
							including but not limited to hotels, cruise lines, and vacation resorts (collectively,
							the \u201CSuppliers\u201D). Trip Support advertises and makes available for purchase these
							products in its capacity as a travel agency. Trip Support does not own, operate or
							manage any of the Suppliers and consequently will not be liable for any of the
							Suppliers\u2019 acts and/or omissions.
						</p></li>
					<li id="${"tr"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Travel Requirements

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Users purchasing products on the Websites are responsible for informing themselves of
							any travel requirements or restrictions affecting their destination, mode of transport
							or product generally. Trip Support does not warrant a purchaser\u2019s eligibility to
							travel to any destination, participate in any excursion, etc. Completing a purchase on
							the Websites is not and should not be treated as confirmation of the User\u2019s
							eligibility and/or capacity to take advantage of the purchased product.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support will not offer refunds to Users who failed to make the necessary
							inquiries into travel requirements and restrictions prior to purchase and are, as a
							result, unable to take advantage of their purchased product.
						</p></li>
					<li id="${"naad"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Network Access and Devices

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">You are responsible for obtaining the data network access necessary to use the
							Websites and/or your Account. Your mobile network\u2019s data rates may apply if you access
							or use the Websites and/or Account from a wireless-enabled device. We do not guarantee
							that the Websites and/or Account, or any portion thereof, will function on all
							hardware or devices. In addition, the Websites and/or Account may be subject to
							malfunctions and delays inherent in the use of the Internet and electronic
							communications for which we are not responsible.
						</p></li>
					<li id="${"promotions"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Promotions

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">From time-to-time, Trip Support may provide promotions, including but not limited to
							promotional codes redeemable for discounts on products. All promotions are governed by
							this Agreement and any such terms and conditions that are made known at the time the
							promotion is made available to Users. By participating in a promotion through the
							Websites, you confirm your agreement to and acceptance of this Agreement and the terms
							and conditions of the promotion.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">All email addresses and phone numbers provided on the website, social media channels,
							Trip Support\u2019s Marketing ads and promos will be used for marketing and promotional
							purposes.
						</p></li>
					<li id="${"parp"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Payment and Refund Policy

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">All prices displayed on the Websites are advertised in. Prices are subject to change.
							The Websites will be updated to reflect any such changes.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Payment can be made in full via credit card, VISA Debit or Debit Mastercard,
							e-transfer to the address provided at the time of purchase, cash delivered to the Trip
							Support office, or wire transfer (in which case additional fees may apply).
							Additionally, U.S. customers may choose to pay by Zelle\u2122.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Alternatively, select purchases may be paid for in installments according to an
							installment plan determined at the time of purchase. To be eligible for this \u201CBook
							Now, Pay Later\u201D payment structure, the departure date associated with the product
							being purchased must be at least twenty-two (22) calendar days from the purchase date.
							Installments can be paid via VISA Debit, Debit Mastercard, e-transfer to the address
							provided at the time of purchase, cash delivered to the Trip Support office, or wire
							transfer (in which case additional fees may apply). U.S. Customers may additionally
							pay instalments via the Automated Clearing House network, Venmo\u2122 or Zelle\u2122.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Users are responsible for the accuracy of their billing information. In the event that
							we are unable to verify the billing information provided, your purchase may not be
							processed. No compensation will be available in the event of a price increase and/or
							missed installment payment as a result of incomplete or inaccurate billing information
							provided by the User.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">By completing your purchase, you authorize Trip Support to process the reservation of
							your purchased product, with the relevant third-party supplier, on your behalf.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">All applicable taxes are charged and collected at the time of purchase.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">In the event of a price update in the period between a User\u2019s browsing of the Websites
							and the completion of a purchase, the price displayed on the purchase page will
							prevail. Partial refunds as compensation for the reduction of the price of a product
							following a purchase are not available.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Upon receipt of payment, you will receive an email with confirmation of your purchase
							and details of your payment for your records. All purchases are subject to
							availability at the time the purchase is completed. An e-mail confirmation confirms
							that the product has been successfully reserved for you. Purchasers are responsible
							for reviewing the information contained within the e-mail for accuracy and immediately
							contacting us in the event of an error.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Additional fees, including but not limited to baggage fees and seat selection fees, if
							not expressly included in the purchase price, may apply and may be paid to the
							supplier at a later date. You are encouraged to carefully review a product\u2019s
							inclusions before completing your purchase.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">By completing a purchase, you agree to the terms and conditions of the tour
							company/operator, airline, cruise line, car or hotel or other supplier providing the
							product you are purchasing. These terms and conditions are made available during the
							purchase process.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Further, cancellation and refund availability is governed by each product\u2019s terms and
							conditions, as displayed to the purchaser at the time of purchase. Any refund
							restriction applies equally to purchasers who chose at the time of purchase to pay in
							installments. In the event that a product\u2019s terms and conditions preclude a refund,
							these purchasers will be bound to make any and all remaining instalment . Changes to
							reservations are also governed by the product\u2019s terms and conditions. Change fees may
							apply and may be owed to one or both of Trip Support and the Supplier.
						</p></li>
					<li id="${"cs"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Customer Support

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Customer support is available by contacting Trip Support via e-mail at
							<a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">support@tripsupport.com</a> or calling.
						</p></li>
					<li id="${"ur"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">User Relationships

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Nothing in this Agreement shall in any way be construed as forming a joint venture,
							partnership, agency, or employment relationship between Trip Support and you.
						</p></li>
					<li id="${"dorcaw"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Disclaimers of Representations, Conditions and Warranties

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">THE WEBSITES AND TRIP SUPPORT CONTENT ARE PROVIDED STRICTLY ON AN \u201CAS IS\u201D AND \u201CAS
							AVAILABLE\u201D BASIS WITHOUT REPRESENTATION, WARRANTY, GUARANTEE OR CONDITION OF ANY KIND,
							WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE. TRIP SUPPORT EXPRESSLY EXCLUDES ALL
							OTHER TERMS, CONDITIONS, WARRANTIES OR OTHER STIPULATIONS CONCERNING THE WEBSITES AND
							TRIP SUPPORT CONTENT, WHETHER EXPRESS OR IMPLIED BY COMMON LAW OR UNDER STATUTE ARE
							HEREBY EXCLUDED TO THE FULLEST EXTENT PERMITTED BY LAW.
						</p>
						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">WITHOUT LIMITING THE FOREGOING, TRIP SUPPORT EXPLICITLY DISCLAIMS ANY REPRESENTATIONS,
							WARRANTIES OR GUARANTEES OF: (I) QUALITY, MERCHANTABILITY, OR FITNESS OF THE WEBSITES
							AND TRIP SUPPORT CONTENT FOR A PARTICULAR PURPOSE; (II) NON-INFRINGEMENT OF THE
							WEBSITES AND TRIP SUPPORT CONTENT; OR (III) CORRECTNESS, ADEQUACY, ACCURACY,
							RELIABILITY, COMPLETENESS OR CURRENCY OF THE WEBSITES AND TRIP SUPPORT CONTENT. TRIP
							SUPPORT MAKES NO REPRESENTATION, WARRANTY OR GUARANTEE THAT THE WEBSITES AND TRIP
							SUPPORT CONTENT WILL BE AVAILABLE ON A TIMELY, UNINTERRUPTED, SECURE, OR ERROR-FREE
							BASIS, THAT ANY DEFECTS OR ERRORS WITH THE WEBSITES AND TRIP SUPPORT CONTENT WILL BE
							CORRECTED, OR THAT THE SERVER(S) THAT MAKE THE WEBSITES AND TRIP SUPPORT CONTENT
							AVAILABLE ARE FREE FROM VIRUSES, MALWARE OR OTHER SIMILAR HARMFUL SOFTWARE CODE.
						</p></li>
					<li id="${"lol"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Limitation of Liability

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">IN NO EVENT WILL TRIP SUPPORT AND/OR ITS OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES,
							SUBSIDIARIES, AFFILIATES, SUCCESSORS, ASSIGNEES, AGENTS, REPRESENTATIVES, LICENSORS,
							INDEPENDENT CONTRACTORS, OR CORPORATE PARTNERS BE LIABLE FOR DAMAGES WHATSOEVER,
							INCLUDING WITHOUT LIMITATION, MONETARY LOSSES, LOST REVENUE OR PROFITS, BODILY INJURY,
							EMOTIONAL DISTRESS, REPUTATION, AND/OR ANY OTHER DAMAGES, WHETHER DIRECT, INDIRECT,
							GENERAL, SPECIAL, COMPENSATORY, AND/OR CONSEQUENTIAL, ARISING OUT OF OR RELATING TO
							THE USE OF, ACCESS TO OR RELIANCE ON THE WEBSITES AND TRIP SUPPORT CONTENT.
						</p></li>
					<li id="${"indemnification"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Indemnification

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">You agree to indemnify, defend, release and hold harmless Trip Support, its officers,
							directors, employees, agents, affiliates, licensors and suppliers from and against all
							losses, liabilities, expenses, damages and costs, including reasonable legal fees,
							arising out of or in any way connected with: (a) any violation of this Agreement; (b)
							User Content submitted by you to us, whether through the Websites, your Account, or
							otherwise, that violates any intellectual property, proprietary, contract, or other
							right of any third party; or (c) access to or use of the Websites and/or Trip Support
							Content by you or any other person accessing the Websites and/or Trip Support Content
							using your Account. You further agree that you will fully cooperate in the defense of
							such claims.
						</p></li>
					<li id="${"survival"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Survival

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The following Sections, together with any other provision of this Agreement which
							expressly or by its nature survives termination or expiration, or which contemplates
							performance or observance subsequent to termination or expiration of this Agreement,
							will survive expiration or termination of this Agreement for any reason, such as:
							intellectual property and license provisions, warranties, disclaimers, indemnity and
							limitations of liability.
						</p></li>
					<li id="${"ea"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Entire Agreement

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">This Agreement as well as Trip Support\u2019s Privacy Policy shall constitute the entire
							agreement of the parties in relation to the use of the Websites and Trip Support
							Content, and this Agreement shall supersede and replace any and all prior oral or
							written understandings or agreements between Trip Support and you.
						</p></li>
					<li id="${"severability"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Severability

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If any term or condition of this Agreement should be determined to be illegal, invalid
							or otherwise unenforceable, then to the extent such term or condition is illegal,
							invalid or unenforceable, it shall be severed and deleted from this Agreement and the
							remaining Agreement shall survive, remain in full force and effect and continue to be
							binding and enforceable.
						</p></li>
					<li id="${"assignment"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Assignment

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">You may not assign or transfer this Agreement, by operation of law or otherwise,
							without Trip Support\u2019 prior written consent. Any attempt by you to assign or transfer
							this Agreement, without such consent, will be null and of no effect. Trip Support may
							assign or transfer this Agreement, at its sole discretion, without restriction.
							Subject to the foregoing, this Agreement will bind and inure to the benefit of the
							parties, their respective heirs, administrators, executors, legal personal
							representatives, successors and permitted assigns.
						</p></li>
					<li id="${"aaw"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Amendments and Waivers

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">No amendment or waiver of any provision of this Agreement shall be binding on either
							party unless consented to in writing by such party. No waiver of any provision of this
							Agreement shall constitute a waiver of any other provision, nor shall any waiver
							constitute a continuing waiver unless otherwise provided.
						</p></li>
					<li id="${"fm"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Force Majeure

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support shall not be liable for any breach of this Agreement by it to the extent
							that such breach arises from any act of God, war, national emergency, act of
							terrorism, riot, civil commotion, fire, explosion, flood, storm, epidemic, power
							outage, fuel shortage or any other similar cause beyond the reasonable control of Trip
							Support.
						</p></li>
					<li id="${"gl"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Governing Law

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">This Agreement is governed by and interpreted and enforced in accordance with the laws
							of the Province of Ontario and the federal laws of Canada applicable therein. By
							agreeing to this Agreement, you hereby irrevocably consent to the exclusive
							jurisdiction of the Courts of the Province of Ontario. If any provision of the
							Agreement is held to be invalid or unenforceable by any court of competent
							jurisdiction, such provision will, as to such jurisdiction, be ineffective solely to
							the extent of such determination of invalidity or unenforceability without affecting
							the validity or enforceability thereof in any other manner or jurisdiction and without
							affecting the remaining provisions of the terms, which shall continue to be in full
							force and effect.
						</p></li>
					<li id="${"ci"}" class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Contact Information

						<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If you have questions or concerns about this Agreement or our Privacy Policy, you may
							contact us at <a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">info@tripsupport.com</a>.
						</p></li></ol></article></div>
		<aside class="${"hidden col-span-3 lg:block"}"><div class="${"sticky top-4 space-y-4"}"><section aria-labelledby="${"who-to-follow-heading"}">
					<nav class="${"space-y-1"}" aria-label="${"Sidebar"}">
						${each(tocs, (toc) => {
        return `<a sveltekit:prefetch${add_attribute("href", toc.link, 0)} class="${"flex items-center px-3 py-1.5 text-sm font-medium rounded-md " + escape(isActive === toc.id ? "bg-gray-100 text-gray-900 " : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}"${add_attribute("aria-current", toc.link, 0)}><span class="${"truncate"}">${escape(toc.title)}</span>
							</a>`;
      })}</nav></section></div></aside></div></div>

`;
    });
  }
});

// .svelte-kit/output/server/nodes/12.js
var __exports13 = {};
__export(__exports13, {
  css: () => css14,
  entry: () => entry13,
  js: () => js13,
  module: () => terms_conditions_svelte_exports
});
var entry13, js13, css14;
var init__13 = __esm({
  ".svelte-kit/output/server/nodes/12.js"() {
    init_terms_conditions_svelte();
    entry13 = "pages/terms-conditions.svelte-1167ed39.js";
    js13 = ["pages/terms-conditions.svelte-1167ed39.js", "chunks/vendor-3e73c3b8.js"];
    css14 = ["assets/pages/pay-later-terms.svelte-967b3a2e.css"];
  }
});

// .svelte-kit/output/server/entries/pages/winter-vacations.svelte.js
var winter_vacations_svelte_exports = {};
__export(winter_vacations_svelte_exports, {
  default: () => Winter_vacations
});
var Winter_vacations;
var init_winter_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/winter-vacations.svelte.js"() {
    init_index_77482e32();
    Winter_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/13.js
var __exports14 = {};
__export(__exports14, {
  css: () => css15,
  entry: () => entry14,
  js: () => js14,
  module: () => winter_vacations_svelte_exports
});
var entry14, js14, css15;
var init__14 = __esm({
  ".svelte-kit/output/server/nodes/13.js"() {
    init_winter_vacations_svelte();
    entry14 = "pages/winter-vacations.svelte-1d95d292.js";
    js14 = ["pages/winter-vacations.svelte-1d95d292.js", "chunks/vendor-3e73c3b8.js"];
    css15 = [];
  }
});

// .svelte-kit/output/server/entries/pages/pay-later-terms.svelte.js
var pay_later_terms_svelte_exports = {};
__export(pay_later_terms_svelte_exports, {
  default: () => Pay_later_terms
});
var css16, Pay_later_terms;
var init_pay_later_terms_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/pay-later-terms.svelte.js"() {
    init_index_77482e32();
    css16 = {
      code: "ol.svelte-1907t1f.svelte-1907t1f{counter-reset:item}ol.svelte-1907t1f>li.svelte-1907t1f{display:block;margin-bottom:2rem}ol.svelte-1907t1f>li.svelte-1907t1f:before{content:counters(item, '.') '. ';counter-increment:item;padding-right:8px}p.svelte-1907t1f.svelte-1907t1f{line-height:1.775;font-weight:400;padding:6px 0}p.svelte-1907t1f.svelte-1907t1f:first-child{margin-top:12px}",
      map: null
    };
    Pay_later_terms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css16);
      return `
<div class="${"bg-gradient-to-r from-slate-900 to-purple-900 "}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:justify-between"}"><div class="${"max-w-3xl"}"><h1 class="${"text-sm font-semibold tracking-wide uppercase"}"><span class="${"bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent"}">Trip Support</span></h1>
			<h2 class="${"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"}">Book Now, Pay Later Terms
			</h2>
			<h3 class="${"text-white"}">Last updated: <span class="${"font-semibold"}">November 23, 2021</span></h3></div></div></div>


<div class="${"bg-white"}"><div class="${"space-y-16 container xl:max-w-7xl mx-auto px-4 pt-12 lg:px-8 "}">
		<article class="${"max-w-4xl text-sz sm:text-base"}"><p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support offers flexible payment plans via installment payments so you can book your
				travel plans more comfortably; however, all purchases are final and non-refundable.
			</p>

			<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">By selecting the Trip Support Book Now Pay Later service (the <span class="${"font-bold"}">\u201CService\u201D</span>), you expressly agree to be bound by these terms of use (these
				<span class="${"font-bold"}">\u201CTerms\u201D</span>).
			</p>

			<ol class="${"list-decimal py-10 svelte-1907t1f"}"><li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Consent and Promise to Pay
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The travel financing agreement (the <span class="${"font-bold"}">\u201CAgreement\u201D</span>) is
						between the borrower, referred to as \u201Cyou\u201D and \u201Cyour\u201D throughout these Terms and Trip
						Support Inc., referred to as \u201CTrip Support,\u201D \u201Cus\u201D, \u201Cwe\u201D, or \u201Cour.\u201D
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Before completing any booking through our Service, you promise to repay us in connection
						with the funds disbursed on your behalf, in accordance with these Terms and your
						Agreement, and any other supplements to your Agreement as required by law.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If you do not agree to these Terms, you must not use the Service. Furthermore, if you
						require any additional details you agree to contact us prior to completing any booking
						using the Service.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Financing Terms
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">You agree to carefully review the following key financing terms relating to your
						Agreement with Trip Support prior to completing any booking using our Service. You also
						agree to retain a copy of the following financing terms and this Agreement for your own
						future reference.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">You are entitled to pay the full outstanding balance under your Agreement with Trip
						Support at any time without any prepayment charge or penalty.
					</p>
					<ol class="${"list-decimal ml-4 sm:ml-8 mt-4 svelte-1907t1f"}"><li class="${"svelte-1907t1f"}">Initial Disclosure Statement
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The below Initial Disclosure Statement is incorporated by reference to this
								Agreement with Trip Support. We are required by law to supplement this disclosure
								statement if changes to the below statement are made (the <span class="${"font-bold"}">\u201CFinal Payment Schedule\u201D</span>). The Final Payment Schedule shall be delivered to you within 30 days after
								amendments are made and will supersede the below or any prices shown on the website
								at the time of booking.
							</p>

							<div class="${"mt-8 flex flex-col pb-8"}"><div class="${"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"}"><div class="${"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"}"><div class="${"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"}"><table class="${"min-w-full divide-y divide-gray-300"}"><thead class="${"bg-gray-50"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">a</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Annual Percentage Rate (APR)</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Your Selected Interest but cannot be more than 60% per annum</th></tr></thead>

												<thead class="${"white"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">b</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Interest rate payable on overdue payment
														</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Your Selected Interest but cannot be more than 60% per annum
														</th></tr></thead>
												<thead class="${"bg-gray-50"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">c</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Term in weeks
														</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">2-5
														</th></tr></thead>
												<thead class="${"bg-white"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">d</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Total outstanding principal balance
														</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Depends on final booking price.
														</th></tr></thead>
												<thead class="${"bg-gray-50"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">e</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Cost of borrowing
														</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Interest payment as described above.
														</th></tr></thead>
												<thead class="${"bg-white"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">f</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Total number of payments to be made by borrower (including down
															payment)
														</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Depends on payment plan (bi-weekly/monthly option) and final booking
															price.
														</th></tr></thead>
												<thead class="${"bg-gray-50"}"><tr><th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}">g</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">Default charges
														</th>
														<th scope="${"col"}" class="${"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}">$0; except as expressly provided in Section 3 and Section 4 below.
														</th></tr></thead></table></div></div></div></div>

							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The dates and payment options listed prior to finalizing any booking using the
								Service are based on reasonable estimates gathered at the time of your purchase.
								This includes all total amounts at the time of completing your travel booking. Your
								actual payment dates and options will be finalized on the Final Payment Schedule
								after being confirmed with the airline or hotel that you are booking with.
							</p></li></ol></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Default and Deferral on Payment Plans
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If you fail to make any payment when due as required by the Service and these Terms, you
						will be in default of your Agreement with Trip Support. A default will automatically
						terminate the Service and may result in the cancellation of your travel booking.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">By accepting this Agreement and purchasing travel plans using the Service, you give us
						the right to send your outstanding account for collection and to pursue all legal means
						possible. You also expressly agree to reimburse Trip Support for all cost including but
						not limited to legal costs incurred associated with collecting any outstanding payment.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Upon the purchase of any travel booking using the Service, you expressly agree that you
						will not apply for any chargebacks or stop payments from your card issuer or banking
						institution at any time throughout the duration of your Agreement with Trip Support and
						indefinitely thereafter until such time that the total amount owing is paid off.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Interest and Fees
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support will apply interest of 60% on any overdue account payment continuing for
						more than 7 days. Trip Support will also deactivate your account in the event of default
						spanning over the 7-day period. To avoid termination of our Service and the possibility
						of trip cancellations, we require you to immediately pay the outstanding amount and the
						interest accrued after the date of default and a $25.00 reactivation fee (<span class="${"font-bold"}">\u201CReactivation Fee\u201D</span>) to continue using our Service.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If you do not wish to continue using our Service but want to avoid cancellation of your
						travel booking in the event of default, you must pay the entire outstanding amount
						including interest within 7 days of a missed payment.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If you agree with these Terms and intend to be legally bound by them, please click on
						the \u201CI accept\u201D button below. If you do not agree with these Terms, click on the \u201CI
						decline\u201D button below. You may only proceed to complete your booking using the Service
						if you accept these Terms.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Voluntary and Involuntary Refund
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">In case of voluntary cancellation of a fully non-refundable product, all instalments of
						the Book Now Pay Later service must be completed as scheduled, given the product is
						acquired and paid in full to the supplier by Trip Support Inc. at the time of purchase.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">The first instalment and any incurred late fee (if any) of the Book Now Pay Later
						service are fully non-refundable in either cases of voluntary or involuntary
						cancelations. This includes ad hoc schedule changes or cancellations by suppliers.
					</p></li></ol></article>
		</div></div>

`;
    });
  }
});

// .svelte-kit/output/server/nodes/14.js
var __exports15 = {};
__export(__exports15, {
  css: () => css17,
  entry: () => entry15,
  js: () => js15,
  module: () => pay_later_terms_svelte_exports
});
var entry15, js15, css17;
var init__15 = __esm({
  ".svelte-kit/output/server/nodes/14.js"() {
    init_pay_later_terms_svelte();
    entry15 = "pages/pay-later-terms.svelte-5bcc16f8.js";
    js15 = ["pages/pay-later-terms.svelte-5bcc16f8.js", "chunks/vendor-3e73c3b8.js"];
    css17 = ["assets/pages/pay-later-terms.svelte-967b3a2e.css"];
  }
});

// .svelte-kit/output/server/entries/pages/baggage-policy.svelte.js
var baggage_policy_svelte_exports = {};
__export(baggage_policy_svelte_exports, {
  default: () => Baggage_policy
});
var Baggage_policy;
var init_baggage_policy_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/baggage-policy.svelte.js"() {
    init_index_77482e32();
    init_Subscribe_bb3f7014();
    Baggage_policy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-gradient-to-r from-slate-900 to-pink-900 -mt-1 "}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:justify-between"}"><div class="${"max-w-3xl"}"><h1 class="${"text-sm font-semibold tracking-wide uppercase"}"><span class="${"bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent"}">Trip Support</span></h1>
			<h2 class="${"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"}">Baggage Policy
			</h2></div></div></div>


<div class="${"bg-white"}"><div class="${"container xl:max-w-7xl mx-auto px-4 py-8 md:py-20 lg:px-8 space-y-8 "}">

		<div class="${"flex gap-4 items-baseline"}"><div class="${"relative z-0 mb-4 md:mb-8 lg:mb-12 w-full"}"><input type="${"email"}" name="${"floating_email"}" class="${"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer"}" placeholder="${" "}" required="${""}">
				<label for="${"floating_email"}" class="${"absolute text-tiny text-gray-500 font-medium duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"}">Search by airline</label></div>
			</div>
		<div class="${"pb-12"}"><ul role="${"list"}" class="${"grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 "}"><li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>
				<li class="${"col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"}"><div class="${"w-full flex items-center justify-between p-6 space-x-6"}"><img class="${"w-16 h-16 rounded-full flex-shrink-0"}" src="${"/icons/baggage/air-canada-icon.svg"}" alt="${""}">
						<div class="${"flex-1 truncate"}"><div class="${"flex items-center space-x-3"}"><h3 class="${"text-gray-900 text-lg font-bold truncate"}">Air Canada</h3></div>
							<p class="${"mt-1 text-gray-500 text-sm truncate"}">Anywhere to Anywhere</p></div></div>
					<div><div class="${"-mt-px flex divide-x divide-gray-200 "}"><div class="${"w-0 flex-1 flex"}"><a href="${"mailto:janecooper@example.com"}" class="${"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"}"><span class="${"ml-3"}">Baggage Policy</span></a></div>
							<div class="${"-ml-px w-0 flex-1 flex"}"><a href="${"tel:+1-888-247-2262"}" class="${"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"}"><span class="${"ml-3"}">1 (888) 247-2262</span></a></div></div></div></li>

				</ul></div>
		${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/15.js
var __exports16 = {};
__export(__exports16, {
  css: () => css18,
  entry: () => entry16,
  js: () => js16,
  module: () => baggage_policy_svelte_exports
});
var entry16, js16, css18;
var init__16 = __esm({
  ".svelte-kit/output/server/nodes/15.js"() {
    init_baggage_policy_svelte();
    entry16 = "pages/baggage-policy.svelte-83a1017d.js";
    js16 = ["pages/baggage-policy.svelte-83a1017d.js", "chunks/vendor-3e73c3b8.js", "chunks/Subscribe-39a11f67.js"];
    css18 = [];
  }
});

// .svelte-kit/output/server/entries/pages/fall-vacations.svelte.js
var fall_vacations_svelte_exports = {};
__export(fall_vacations_svelte_exports, {
  default: () => Fall_vacations
});
var Fall_vacations;
var init_fall_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/fall-vacations.svelte.js"() {
    init_index_77482e32();
    Fall_vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/16.js
var __exports17 = {};
__export(__exports17, {
  css: () => css19,
  entry: () => entry17,
  js: () => js17,
  module: () => fall_vacations_svelte_exports
});
var entry17, js17, css19;
var init__17 = __esm({
  ".svelte-kit/output/server/nodes/16.js"() {
    init_fall_vacations_svelte();
    entry17 = "pages/fall-vacations.svelte-671ab229.js";
    js17 = ["pages/fall-vacations.svelte-671ab229.js", "chunks/vendor-3e73c3b8.js"];
    css19 = [];
  }
});

// .svelte-kit/output/server/entries/pages/privacy-policy.svelte.js
var privacy_policy_svelte_exports = {};
__export(privacy_policy_svelte_exports, {
  default: () => Privacy_policy
});
var css20, Privacy_policy;
var init_privacy_policy_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/privacy-policy.svelte.js"() {
    init_index_77482e32();
    css20 = {
      code: "ol.svelte-1907t1f.svelte-1907t1f{counter-reset:item}ol.svelte-1907t1f>li.svelte-1907t1f{display:block;margin-bottom:2rem}ol.svelte-1907t1f>li.svelte-1907t1f:before{content:counters(item, '.') '. ';counter-increment:item;padding-right:8px}p.svelte-1907t1f.svelte-1907t1f{line-height:1.775;font-weight:400;padding:6px 0}p.svelte-1907t1f.svelte-1907t1f:first-child{margin-top:12px}",
      map: null
    };
    Privacy_policy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css20);
      return `<div class="${"bg-gradient-to-r from-slate-900 to-fuchsia-900"}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:justify-between"}"><div class="${"max-w-3xl"}"><h1 class="${"text-sm font-semibold tracking-wide uppercase"}"><span class="${"bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent"}">Trip Support</span></h1>
			<h2 class="${"text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"}">Privacy Policy
			</h2>
			<h3 class="${"text-white"}">Last updated: <span class="${"font-semibold"}">November 16, 2021</span></h3></div></div></div>


<div class="${"bg-white"}"><div class="${"space-y-16 container xl:max-w-7xl mx-auto px-4 pt-12 lg:px-8 "}">
		<article class="${"max-w-4xl text-sz sm:text-base"}"><p class="${"pt-12 svelte-1907t1f"}">Trip Support Inc. (<span class="${"font-bold"}">\u201CTrip Support\u201D</span>,
				<span class="${"font-bold"}">&quot;us&quot;</span>, <span class="${"font-bold"}">&quot;we&quot;</span>, or
				<span class="${"font-bold"}">&quot;our&quot;</span>) owns and operates the Trip Support websites,
				<a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">www.tripsupport.ca</a> and
				<a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">www.tripsupport.com</a> (collectively,
				the \u201CWebsites\u201D).
			</p>
			<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support respects the privacy of its Users (\u201Cyou\u201D or \u201Cyour\u201D) and has developed this
				Privacy Policy to demonstrate its commitment to protecting your privacy. This Privacy Policy
				describes the information we collect, how that information may be used, with whom it may be
				shared, and how it is protected.
			</p>
			<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">This Privacy Policy is incorporated by reference in the Terms of Use (the \u201CAgreement\u201D).
				Unless otherwise defined in this Privacy Policy, capitalized terms used in this Privacy
				Policy have the same meanings as in the Agreement.
			</p>
			<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Please note that your use of the Websites and/or Account(s) constitutes your agreement to
				follow and be bound by the terms of the Agreement and the Privacy Policy. If you object to
				anything in the Agreement or the Privacy Policy, do not use the Websites and/or Account(s).
			</p>

			<ol class="${"list-decimal py-10 svelte-1907t1f"}"><li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Consent
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">By using, viewing or accessing the Websites or your Account, you expressly consent to
						the collection, use and disclosure of information in accordance with this Privacy
						Policy.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Further, whenever you provide information to Trip Support or contact Trip Support
						through other means, you consent to the collection, use and disclosure of that
						information in accordance with the provisions of this Privacy Policy.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Changes to the Privacy Policy
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">This Privacy Policy is subject to change and may be updated by Trip Support, at its sole
						discretion, from time to time. We will notify you of any changes to this Agreement by
						posting the new agreement on the Websites, through your Account, and/or by any other
						method of notice we see fit, including by email.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Accordingly, please review this Privacy Policy periodically for any changes. Changes to
						this Privacy Policy will be effective immediately upon posting the amended agreement to
						the Websites and/or your Account. If you do not accept the amendments, you are required
						to stop using the Websites and your Account. Any use of the Websites and/or Account
						after posting the amended agreement on the Websites will constitute acceptance of said
						agreement.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Should we make any significant changes to the way we collect, use, share, and protect
						your Personal Information, we will let you know by posting notices on our Websites,
						through your Account, and/or by sending you an email explaining the change.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Information Collection and Use
					<ol class="${"list-decimal ml-4 sm:ml-8 mt-4 svelte-1907t1f"}"><p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We collect different types of data, described below, to provide and improve our
							Websites and Trip Support Content.
						</p>
						<li class="${"svelte-1907t1f"}">Personal Information
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">While using the Websites and/or your Account, we may ask you to provide us with
								certain personally identifiable information (<span class="${"font-bold"}">\u201CPersonal Information\u201D</span>). Personally identifiable information is information that can be used on its own,
								or with other information to identify, contact or locate an individual. It does not
								include non-personal information like business information or generic information
								common to many individuals.
							</p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support collects Personal Information only if you voluntarily choose to share
								such information with Trip Support. For example, in the course of opening an Account
								or making a Purchase. When you do so, you authorize us to collect, access, manage
								and retain information that may include, but is not limited to:
							</p>
							<ul class="${"list-disc sm:ml-4"}"><li class="${"text-tiny font-normal p-1.5"}">Your first and last name</li>
								<li class="${"text-tiny font-normal p-1.5"}">Your mailing address</li>
								<li class="${"text-tiny font-normal p-1.5"}">Your e-mail address</li>
								<li class="${"text-tiny font-normal p-1.5"}">Your date of birth</li></ul></li>
						<li class="${"svelte-1907t1f"}">Other Data
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We also collect, access, manage and retain data, other than Personal Information.
								These other types of data, described below, do not permit direct association with
								any specific individual.
							</p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold underline"}">Usage Data</span></p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We may collect and retain information related to your use of and access to the
								Websites and/or your Account <span class="${"font-bold"}">Usage Data</span>. For example,
								the following types of data may be collected, but are not limited to:
							</p>
							<ul class="${"list-disc sm:ml-4"}"><li class="${"text-tiny font-normal p-1.5"}">frequency of visits to the Websites and/or your Account;
								</li>
								<li class="${"text-tiny font-normal p-1.5"}">frequency of interaction with different Trip Support Content; and
								</li>
								<li class="${"text-tiny font-normal p-1.5"}">frequency of your use of various features of the Websites and/or your Account.
								</li></ul>

							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold underline"}">Location Data</span></p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We collect, use and retain information Internet Protocol (IP) information to ensure
								mailing and billing addresses are accurate and to protect against fraudulent payment
								activity.
							</p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}"><span class="${"font-bold underline"}">Cookies </span></p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Cookies are small text files sent by us to your computer, and from your computer or
								mobile device to us each time you visit the Websites and/or your Account. When
								accessing the Websites through an Internet browser, you can manage your cookie
								settings to accept or reject cookies, or simply notify you each time a cookie is set
								by a website you visit. Please note, if you do not accept cookies, you may lose
								certain functionality of the Websites and/or your Account.
							</p>
							<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We collect anonymous information from Users of our Websites and/or Accounts through
								the use of cookies. We do not use cookies to collect Personal Information. Cookie
								information is, for example, aggregated and used to improve the effectiveness of our
								Websites and/or your Account.
							</p></li></ol></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Use of Data
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support may collect, access, manage and retain data and Personal Information for
						purposes, such as to:
					</p>
					<ul class="${"list-disc sm:ml-4"}"><li class="${"text-tiny font-normal p-1.5"}">provide and maintain our Websites and/or your Account;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">notify you about changes to our Websites and/or your Account;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">allow you to participate in interactive features of our Websites and/or your Account,
							whenm you chose to do so;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">administer promotions, when you provide your consent to be entered into such programs;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">process purchases made on the Websites;</li>
						<li class="${"text-tiny font-normal p-1.5"}">identify fraudulent activity on the Websites;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">provide customer support and respond to your inquiries;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">perform analyses or gather valuable information so that we can improve our Websites
							and/or
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">monitor the usage of our Websites and/or your Account;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">detect, prevent and address technical issues; and
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">maintain data security and user privacy.</li></ul></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Disclosure of Data
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We reserve the right to use and disclose Personal Information to:
					</p>
					<ul class="${"list-disc sm:ml-4"}"><li class="${"text-tiny font-normal p-1.5"}">comply with applicable laws and regulations;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">comply with governmental requests;</li>
						<li class="${"text-tiny font-normal p-1.5"}">protect against legal liability;</li>
						<li class="${"text-tiny font-normal p-1.5"}">prevent or investigate possible wrongdoing in connection with use of the Websites,
							your Account, or Trip Support Content;
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">protect the personal safety of Users and/or the public; and
						</li>
						<li class="${"text-tiny font-normal p-1.5"}">protect the rights and property of Trip Support and its Users.
						</li></ul>

					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If Trip Support is legally compelled to disclose your Personal Information, it will only
						disclose the minimum amount necessary to meet our legal obligation.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Security of Data
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">You are responsible for keeping your Account login credentials confidential.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support utilizes standard security protocols and commonplace security mechanisms to
						secure your information from accidental loss and from unauthorized access, use,
						alteration or disclosure.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We periodically review our processes and systems to verify compliance with industry best
						practices and to ensure the highest level of security for all our digital platforms.
						However, the Internet is an open system and we cannot guarantee that unauthorized third
						parties will not be able to defeat those measures or use your Personal Information for
						improper purposes.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Data Transfer
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Personal Information and data are stored on Canadian servers. We will take all steps
						reasonably necessary to ensure that your Personal Information is treated securely and in
						accordance with this Privacy Policy and Canadian law.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">In some cases, your Personal Information and data that we collect and manage may be
						transferred to, maintained on and processed by computers located outside of your state,
						province, country or other governmental jurisdiction where the data protection laws may
						differ than those from your jurisdiction. Your consent to this Privacy Policy represents
						your agreement to that transfer.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Business Affiliates
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Trip Support reserves the right to transfer, sell or distribute all information
						collected through the Websites and/or your Account to an affiliate, subsidiary, or third
						party in the event of any reorganization, merger, sale, joint venture, assignment,
						transfer or other disposition of all or part of our business, assets or stock.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">We will use our best efforts to ensure that the new entity follows this Privacy Policy
						with respect to your Personal Information and to the extent required by applicable law.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Updating and Deleting your Data
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">Account information can be updated through your Account profile or by submitting a
						request in writing to <a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">support@tripsupport.com</a>.
					</p>
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">To deactivate your Account and request that associated data be deleted, including
						Personal Information, please contact us at
						<a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">support@tripsupport.com</a>.
					</p></li>
				<li class="${"font-bold text-lg md:text-xl svelte-1907t1f"}">Contact Us
					<p class="${"pt-6 sm:pt-12 text-tiny sm:text-[17px] svelte-1907t1f"}">If you have questions or concerns regarding your Personal Information and this Privacy
						Policy, or to update, correct or delete your Personal Information, please contact us at
						<a href="${"#"}" class="${"text-rose-600 hover:text-rose-500"}">support@tripsupport.com</a>.
					</p></li></ol></article>
		</div></div>

`;
    });
  }
});

// .svelte-kit/output/server/nodes/17.js
var __exports18 = {};
__export(__exports18, {
  css: () => css21,
  entry: () => entry18,
  js: () => js18,
  module: () => privacy_policy_svelte_exports
});
var entry18, js18, css21;
var init__18 = __esm({
  ".svelte-kit/output/server/nodes/17.js"() {
    init_privacy_policy_svelte();
    entry18 = "pages/privacy-policy.svelte-af933c8d.js";
    js18 = ["pages/privacy-policy.svelte-af933c8d.js", "chunks/vendor-3e73c3b8.js"];
    css21 = ["assets/pages/pay-later-terms.svelte-967b3a2e.css"];
  }
});

// .svelte-kit/output/server/chunks/MoreDestinations-dc042907.js
var MoreDestinations;
var init_MoreDestinations_dc042907 = __esm({
  ".svelte-kit/output/server/chunks/MoreDestinations-dc042907.js"() {
    init_index_77482e32();
    MoreDestinations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-gray-800"}"><div class="${"container xl:max-w-7xl mx-auto px-4 py-16"}"><section class="${"relative py-4"}"><div class="${"text-left max-w-4xl"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-white sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">More Destinations to Explore</span></h1></div>
				<p class="${"text-md text-white sm:text-md md:text-md lg:mx-0 my-4"}">Trip Support is the right way to reach your travel dreams.
				</p></div></section>

		<div class="${"grid grid-cols-1 md:grid-cols-5 gap-4 text-white"}"><a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>

			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a>
			<a href="${"#"}" class="${"h-10 flex px-4 py-2 items-center bg-gray-300 bg-opacity-25 rounded-lg hover:bg-rose-600"}"><div class="${"text-tiny"}">All Inclusive Hotels in Negril</div></a></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/chunks/SpecialOfferCards-94a6f239.js
var Stars, SpecialOfferCards;
var init_SpecialOfferCards_94a6f239 = __esm({
  ".svelte-kit/output/server/chunks/SpecialOfferCards-94a6f239.js"() {
    init_index_77482e32();
    Stars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"flex justify-start"}"><svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>`;
    });
    SpecialOfferCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"mt-2 mb-4 lg:mt-6 lg:mb-16 px-4 max-w-lg mx-auto grid gap-x-6 lg:grid-cols-4 lg:max-w-none"}">
	<div class="${"rounded-lg shadow-lg overflow-hidden mt-6"}"><div class="${"flex-shrink-0"}">
			
			<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/acapulco.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
		<div class="${"flex px-6 pb-4 flex-col"}"><div class="${"flex-col"}"><div>${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div>
				<div class="${"mt-3"}"><div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
						<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
						<span>Junior Suite</span></div></div></div>

			<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
						</p>
						<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
			<div class="${"flex-col justify-between mt-2 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
					</p>
					<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
				<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
					<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees</p></div>
				<div class="${"text-left py-3"}"><p class="${"capitalize text-xz font-semibold text-rose-600"}">Toronto to Cayo Coco, Cuba</p></div></div></div></div>
	
	<div class="${"rounded-lg shadow-lg overflow-hidden mt-6"}"><div class="${"flex-shrink-0"}">
			
			<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/acapulco.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
		<div class="${"flex px-6 pb-4 flex-col"}"><div class="${"flex-col"}"><div>${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div>
				<div class="${"mt-3"}"><div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
						<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
						<span>Junior Suite</span></div></div></div>

			<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
						</p>
						<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
			<div class="${"flex-col justify-between mt-2 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
					</p>
					<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
				<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
					<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees</p></div>
				<div class="${"text-left py-3"}"><p class="${"capitalize text-xz font-semibold text-rose-600"}">Toronto to Cayo Coco, Cuba</p></div></div></div></div>
	
	<div class="${"rounded-lg shadow-lg overflow-hidden mt-6"}"><div class="${"flex-shrink-0"}">
			
			<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/acapulco.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
		<div class="${"flex px-6 pb-4 flex-col"}"><div class="${"flex-col"}"><div>${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div>
				<div class="${"mt-3"}"><div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
						<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
						<span>Junior Suite</span></div></div></div>

			<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
						</p>
						<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
			<div class="${"flex-col justify-between mt-2 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
					</p>
					<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
				<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
					<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees</p></div>
				<div class="${"text-left py-3"}"><p class="${"capitalize text-xz font-semibold text-rose-600"}">Toronto to Cayo Coco, Cuba</p></div></div></div></div>
	
	<div class="${"rounded-lg shadow-lg overflow-hidden mt-6"}"><div class="${"flex-shrink-0"}">
			
			<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/acapulco.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
		<div class="${"flex px-6 pb-4 flex-col"}"><div class="${"flex-col"}"><div>${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div>
				<div class="${"mt-3"}"><div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
						<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
						<span>Junior Suite</span></div></div></div>

			<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
						</p>
						<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
			<div class="${"flex-col justify-between mt-2 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
					</p>
					<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
				<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
					<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees</p></div>
				<div class="${"text-left py-3"}"><p class="${"capitalize text-xz font-semibold text-rose-600"}">Toronto to Cayo Coco, Cuba</p></div></div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/vacation-deals.svelte.js
var vacation_deals_svelte_exports = {};
__export(vacation_deals_svelte_exports, {
  default: () => Vacation_deals
});
var VacDealsAcc, Vacation_deals;
var init_vacation_deals_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/vacation-deals.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_MoreDestinations_dc042907();
    init_SpecialOfferCards_94a6f239();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    VacDealsAcc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"accordion my-12"}" id="${"accordionExample5"}"><div class="${"accordion-item bg-white border border-gray-200"}"><h2 class="${"accordion-header mb-0"}" id="${"acc1"}"><button class="${"accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#collapseOne5"}" aria-expanded="${"true"}" aria-controls="${"collapseOne5"}"><h1 class="${"tracking-tight font-extrabold text-gray-900 text-xl"}"><span class="${"block xl:inline"}">Cancun, Mexico</span>
					</h1></button></h2>
		<div id="${"collapseOne5"}" class="${"accordion-collapse collapse show"}" aria-labelledby="${"acc1"}"><div class="${"accordion-body py-4 px-5 prose max-w-4xl"}"><p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">Make it from us, everyone has to visit Cancun, Mexico, at least once in their life.
					Located on the world-famous Mayan Riviera beach, <b>Club Med Cancun</b> is a luxury, environmentally
					friendly resort. It\u2019s a great stay for families and travelers of all types. The hotel offers
					childcare services and a children\u2019s playground for parents\u2019 convenience.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">All rooms are air conditioned, offer free wifi, a flat screen tv, and a safe to store your
					belongings. Rooms with private balconies and private beaches can be requested.
					Interconnected rooms are also available for bigger groups booking. A fitness center and
					business center are accessible to guests.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The resort has an extensive list of outdoor activities for guests to enjoy including
					tennis, beach volleyball, and golf. Water sports are a must in Cancun. Guest favourites
					include water skiing, windsurfing, catamaraning, snorkeling, and more. The onsite infinity
					pool is the perfect place to take an Instagram-worthy photo.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">All-inclusive bookings include breakfast, lunch, and dinner. Snacks and alcoholic drinks
					are also available. The newly renovated resort features three different restaurants and a
					fine dining Mexican experience. Book this vacation for a Mexican vacation full of culture,
					good food, and relaxing beach days.
				</p></div></div></div>
	<div class="${"accordion-item bg-white border border-gray-200"}"><h2 class="${"accordion-header mb-0"}" id="${"acc2"}"><button class="${"accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#lasVegas"}" aria-expanded="${"false"}" aria-controls="${"lasVegas"}"><h1 class="${"tracking-tight font-extrabold text-gray-900 text-xl"}"><span class="${"block xl:inline"}">Las Vegas, Nevada </span>
					</h1></button></h2>
		<div id="${"lasVegas"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"acc2"}"><div class="${"accordion-body py-4 px-5 prose max-w-4xl"}"><p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">Las Vegas is another must visit, for obvious (fun) reasons. There\u2019s a misconception the
					destination can\u2019t be fun for the whole family. It\u2019s quite the opposite. The Stratosphere
					Casino Hotel and Tower, The Linq Hotel and Experience, and the Ballys Las Vegas Hotel and
					Casino are all hotels for great value and luxury standards.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Stratosphere Casino Hotel and Tower is one of the most stunning hotels in the area,
					mainly because of the looming tower above. You\u2019ll immediately recognize it on the Las
					Vegas Strip. This 24-story building also has 24/7 seven check in and out to make your stay
					as seamless as possible. All rooms are air-conditioned, and a variety of rooms are
					available for booking. There\u2019s an outdoor pool, hot tub, and plenty of sports for guests
					to play. A breakfast buffet and set dinner menu for lunch and dinner are served. The hotel
					features seven different restaurants.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Linq Hotel and Experience is an Asian-themed hotel located on the Las Vegas Strip.
					This resort sets itself apart with friendly staff there to help book popular outings in
					the city. All rooms include air conditioning, a safe for valuables, a refrigerator, and
					more convenient amenities. An outdoor pool, hot tub, and outdoor sports are available for
					guests on days they aren\u2019t out exploring. Wellness services are also offered. The hotel
					features nine restaurants and a breakfast buffet.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Ballys Las Vegas Hotel and Casino is a highly recommended hotel on the Las Vegas
					Strip. It features all the bright lights and over-the-top decor you\u2019d expect from the
					city. The 24/7 check in and out, free wifi, and wheelchair-accessible make your stay
					seamless for any guests. Outdoor sports, leisure activities, a large pool, and a hot tub
					are all available on the property. Breakfast, lunch, and dinner are available either a la
					carte or a set menu.
				</p></div></div></div>
	<div class="${"accordion-item bg-white border border-gray-200"}"><h2 class="${"accordion-header mb-0"}" id="${"acc3"}"><button class="${"accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#honoluluHawaii"}" aria-expanded="${"false"}" aria-controls="${"honoluluHawaii"}"><h1 class="${"tracking-tight font-extrabold text-gray-900 text-xl"}"><span class="${"block xl:inline"}">Honolulu, Hawaii </span>
					</h1></button></h2>
		<div id="${"honoluluHawaii"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"acc3"}"><div class="${"accordion-body py-4 px-5 prose max-w-4xl"}"><p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">Honolulu is just one of the beautiful islands to visit in Hawaii. In the springtime, the
					exotic flowers and greenery are in full bloom. Enjoy the ocean and beautiful nature at
					once. The Luana Waikiki Hotel and Suites and Aston Waikiki Beach Hotel are both highly
					rated stays on the island.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Luana Waikiki Hotel is just a 10-minute walk from Waikiki Beach and the International
					Market, two of the island\u2019s biggest attractions. Each room is air-conditioned, and an
					oceanfront room can be requested. A fully equipped kitchen including a refrigerator and
					tea and coffee station is also provided in each room. Plenty of delicious local
					restaurants are located in the area and a cafe is on the hotel property.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Aston Waikiki Beach Hotel is in walking distance to the Honolulu Zoo, Waikiki
					Aquarium, and Kapiolani Park. The hotel offers free shuttle service from the airport and
					24/7 check in and out. Ocean views are available at request. An outdoor pool and poolside
					snack bar are great for guests looking to relax without leaving the hotel. You can feel
					the ocean breeze from anywhere on the island. Breakfast, lunch, and dinner are served at
					one of the three hotel\u2019s restaurants.
				</p></div></div></div>
	<div class="${"accordion-item bg-white border border-gray-200"}"><h2 class="${"accordion-header mb-0"}" id="${"acc4"}"><button class="${"accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#OrlandoFlorida"}" aria-expanded="${"false"}" aria-controls="${"OrlandoFlorida"}"><h1 class="${"tracking-tight font-extrabold text-gray-900 text-xl"}"><span class="${"block xl:inline"}">Orlando, Florida </span>
					</h1></button></h2>
		<div id="${"OrlandoFlorida"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"acc4"}"><div class="${"accordion-body py-4 px-5 prose max-w-4xl"}"><p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">Honolulu is just one of the beautiful islands to visit in Hawaii. In the springtime, the
					exotic flowers and greenery are in full bloom. Enjoy the ocean and beautiful nature at
					once. The Luana Waikiki Hotel and Suites and Aston Waikiki Beach Hotel are both highly
					rated stays on the island.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Luana Waikiki Hotel is just a 10-minute walk from Waikiki Beach and the International
					Market, two of the island\u2019s biggest attractions. Each room is air-conditioned, and an
					oceanfront room can be requested. A fully equipped kitchen including a refrigerator and
					tea and coffee station is also provided in each room. Plenty of delicious local
					restaurants are located in the area and a cafe is on the hotel property.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Aston Waikiki Beach Hotel is in walking distance to the Honolulu Zoo, Waikiki
					Aquarium, and Kapiolani Park. The hotel offers free shuttle service from the airport and
					24/7 check in and out. Ocean views are available at request. An outdoor pool and poolside
					snack bar are great for guests looking to relax without leaving the hotel. You can feel
					the ocean breeze from anywhere on the island. Breakfast, lunch, and dinner are served at
					one of the three hotel\u2019s restaurants.
				</p></div></div></div>
	<div class="${"accordion-item bg-white border border-gray-200"}"><h2 class="${"accordion-header mb-0"}" id="${"acc4"}"><button class="${"accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#turksCaicos"}" aria-expanded="${"false"}" aria-controls="${"turksCaicos"}"><h1 class="${"tracking-tight font-extrabold text-gray-900 text-xl"}"><span class="${"block xl:inline"}">Turks and Caicos, Caribbean </span>
					</h1></button></h2>
		<div id="${"turksCaicos"}" class="${"accordion-collapse collapse"}" aria-labelledby="${"acc4"}"><div class="${"accordion-body py-4 px-5 prose max-w-4xl"}"><p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">The Turks and Caicos is a beautiful, breathtaking destination for your springtime
					vacation. Club Med Turkoise is an all-inclusive resort located on the island of
					Providenciales. The hotel is adult-oriented and provides a tropical escape for singles and
					couples. It features Caribbean-inspired decor and plenty of unique water activities
					including diving, boating, and more. Free breakfast is provided, and delectable
					restaurants are nearby.
				</p></div></div></div></div>`;
    });
    Vacation_deals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-gray-900 -mt-1"}"><div class="${"sm:hidden relative h-32 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div>
	<div class="${"md:hidden relative mx-auto max-w-md px-4 pt-6 pb-10 "}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-2xl font-bold"}">Spring Vacation Packages</p></div></div>

	<div class="${"hidden md:block relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:pb-44 lg:pt-24"}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-3xl font-extrabold sm:text-4xl"}">Spring Vacation Packages</p>
			<p class="${"mt-3 text-base text-gray-300"}">We&#39;re focused on making your dream vacation. Find the right vacation and book with
				confidence.
			</p></div></div>
	<div class="${"hidden sm:block relative h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div></div>

${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

<div class="${"relative bg-white"}"><div class="${"relative max-w-7xl mx-auto mt-4 mb-12 lg:mb-16 lg:mt-8"}">
		<section class="${"relative"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">Special offers from resorts and hotels across the Americas</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0"}">Plan your vacation at one of our beautiful resorts across the United States, Canada,
					Caribbean and Latin America
				</p></div></section>
		${validate_component(SpecialOfferCards, "SpecialOfferCards").$$render($$result, {}, {}, {})}
		<section class="${"relative px-4"}"><div class="${"text-left prose max-w-4xl sm:px-0 px-4 mt-12"}"><p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0"}">Spring is the perfect time to visit some of the most popular destinations around the
					world. Nice weather, less crowded tourist areas, and more affordable vacations await you
					in the months of March, April, and May. The temperatures are rising from the cold winters
					and the flowers are blooming in joy. Take a spring vacation to avoid the heavy travel
					times during the summer. We\u2019ve done the research and listed some fun and budget-friendly
					vacation packages below.
				</p></div></section>
		<section>${validate_component(VacDealsAcc, "VacDealsAcc").$$render($$result, {}, {}, {})}</section>
		
		<section class="${"relative px-4"}"><div class="${"text-left prose max-w-4xl sm:px-0 px-4 mt-12"}"><h1 class="${"text-lg tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-2xl"}"><span class="${"block xl:inline"}">Book Now Pay Later</span>
					</h1>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0 mt-0"}">Book your Spring vacation without the stress on your wallet. Trip Support\u2019s Book Now Pay
					Later helps you save money and plan ahead. Plan for the whole family to have a wonderful
					time. If you have children in school, spring break is a great time to take time off. Trip
					Support never checks a customer\u2019s credit score. With a small installment upfront, you can
					begin making monthly payments to pay off your vacation before you even board the plane.
				</p>
				<p class="${"text-md text-gray-600 sm:text-md md:text-md lg:mx-0 mt-0"}">April showers bring May vacations! Enjoy!
				</p></div></section></div></div>

${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}
${validate_component(MoreDestinations, "MoreDestinations").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/18.js
var __exports19 = {};
__export(__exports19, {
  css: () => css22,
  entry: () => entry19,
  js: () => js19,
  module: () => vacation_deals_svelte_exports
});
var entry19, js19, css22;
var init__19 = __esm({
  ".svelte-kit/output/server/nodes/18.js"() {
    init_vacation_deals_svelte();
    entry19 = "pages/vacation-deals.svelte-68818aa9.js";
    js19 = ["pages/vacation-deals.svelte-68818aa9.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/MoreDestinations-ad8d826c.js", "chunks/SpecialOfferCards-3f780cda.js", "chunks/Subscribe-39a11f67.js"];
    css22 = [];
  }
});

// .svelte-kit/output/server/entries/pages/destinations.svelte.js
var destinations_svelte_exports = {};
__export(destinations_svelte_exports, {
  default: () => Destinations
});
var Destinations;
var init_destinations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/destinations.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_SpecialOfferCards_94a6f239();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    Destinations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-gray-900 -mt-1"}"><div class="${"sm:hidden relative h-32 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div>
	<div class="${"md:hidden relative mx-auto max-w-md px-4 pt-6 pb-10 "}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-2xl font-bold"}">Westjet Vacations</p></div></div>

	<div class="${"hidden md:block relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:pb-44 lg:pt-24"}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-3xl font-extrabold sm:text-4xl"}">Wetjet Vacations</p>
			<p class="${"mt-3 text-base text-gray-300"}">We&#39;re focused on making your dream vacation. Find the right vacation and book with
				confidence.
			</p></div></div>
	<div class="${"hidden sm:block relative h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div></div>

${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

<div class="${"relative bg-white"}"><div class="${"relative max-w-7xl mx-auto mt-4 mb-12 lg:mb-16 lg:mt-8"}">
		<section class="${"relative"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">Special offers from resorts and hotels across the Americas</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0"}">Plan your vacation at one of our beautiful resorts across the United States, Canada,
					Caribbean and Latin America
				</p></div></section>
		${validate_component(SpecialOfferCards, "SpecialOfferCards").$$render($$result, {}, {}, {})}</div></div>
${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/19.js
var __exports20 = {};
__export(__exports20, {
  css: () => css23,
  entry: () => entry20,
  js: () => js20,
  module: () => destinations_svelte_exports
});
var entry20, js20, css23;
var init__20 = __esm({
  ".svelte-kit/output/server/nodes/19.js"() {
    init_destinations_svelte();
    entry20 = "pages/destinations.svelte-ae7be409.js";
    js20 = ["pages/destinations.svelte-ae7be409.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/SpecialOfferCards-3f780cda.js", "chunks/Subscribe-39a11f67.js"];
    css23 = [];
  }
});

// .svelte-kit/output/server/entries/pages/flight-deals.svelte.js
var flight_deals_svelte_exports = {};
__export(flight_deals_svelte_exports, {
  default: () => Flight_deals
});
var FlightDealsFaq, Flight_deals;
var init_flight_deals_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/flight-deals.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_Subscribe_bb3f7014();
    init_MoreDestinations_dc042907();
    init_OutClick_6647c5ef();
    init_HotelsIcon_f7770270();
    init_index_02f50c33();
    FlightDealsFaq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let q3;
      q3 = false;
      return `<div class="${"mx-auto max-w-7xl bg-white"}">
	<section class="${"relative z-20 overflow-hidden "}">
		<div class="${"container"}"><div class="${"flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"mb-6 lg:mb-10 max-w-[520px]"}"><span class="${"font-normal text-tiny block text-rose-600"}">FAQs </span>
						<h2 class="${"font-extrabold text-2xl sm:text-4xl text-gray-900 mb-4 "}">Frequently Asked Questions
						</h2></div></div></div>
			<div class="${"flex flex-wrap -mx-4"}"><div class="${"w-full lg:w-1/2 px-4"}">

					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"text-left"}"><h4 class="${"text-base text-left font-semibold text-black"}">Which airlines have a flexible cancellation policy for flights from Edmonton?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">What airport do you fly from for flights from Edmonton?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">What are the cheapest airlines flying from Edmonton to anywhere?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${q3 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"}" clip-rule="${"evenodd"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${q3 ? `<div class="${"faq-content"}"><p class="${"text-tiny text-gray-700 leading-relaxed py-3"}">Some of the airports you fly from for flights from Edmonton International
										Airport in Alberta include Hamilton, Abbotsford, Vancouver, Calgary, Toronto,
										Kelowna, Prince George, Montreal, Watson Lake and Yellow Knife.
									</p></div>` : ``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">What is the shortest direct flight from Edmonton?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div></div>
				<div class="${"w-full lg:w-1/2 px-4"}">
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Where are the cheapest places to fly to from Edmonton?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Which airlines fly from Edmonton?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Can I book my flight from Edmonton and pay later?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div></div></div></div></section>
	</div>`;
    });
    Flight_deals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-gray-900 -mt-1"}"><div class="${"sm:hidden relative h-32 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div>
	<div class="${"md:hidden relative mx-auto max-w-md px-4 pt-6 pb-10 "}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-2xl font-bold"}">Cheap Flights to Edmonton</p></div></div>

	<div class="${"hidden md:block relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:pb-44 lg:pt-24"}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-3xl font-extrabold sm:text-4xl"}">Cheap Flights to Edmonton</p>
			<p class="${"mt-3 text-base text-gray-300"}">We&#39;re focused on making your dream vacation. Find the right vacation and book with
				confidence.
			</p></div></div>
	<div class="${"hidden sm:block relative h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div></div>

${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

<div class="${"relative bg-white"}"><div class="${"relative max-w-7xl mx-auto mt-4 mb-12 lg:mb-16 "}">
		<section class="${"overflow-hidden text-gray-700"}"><div class="${"container px-4 py-2 mx-auto "}"><div class="${"sm:flex sm:items-baseline sm:justify-between mt-4 mb-12"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">JW Marriott Edmonton ICE District</span>
						</h1></div>
				<div class="${"flex flex-wrap -m-1 md:-m-2"}"><div class="${"flex flex-wrap w-1/2"}"><div class="${"w-full p-1 md:p-2"}"><img alt="${"gallery"}" class="${"block object-cover object-center w-full h-full rounded-lg"}" src="${"/images/flight-deals/jw-mariott.jpg"}"></div></div>

					<div class="${"flex flex-wrap w-1/2"}"><div class="${"w-full p-1 md:p-2"}"><iframe src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.675890311836!2d-113.49788598359835!3d53.54570108002136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0233956f98715%3A0x8e4a13536ee9f84a!2sJW%20Marriott%20Edmonton%20ICE%20District!5e0!3m2!1sen!2sca!4v1648494251541!5m2!1sen!2sca"}" class="${"rounded-lg w-full h-80"}" style="${"border:0;"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div>
						<div class="${"w-1/2 p-1 md:p-2"}"><div class="${"h-28 bg-white rounded-lg border"}"><div class="${"flex px-4 py-2 items-center space-x-4"}"><p class="${"text-tiny font-semibold"}">Weather:</p>
									<p class="${"text-tiny font-semibold"}">0\xB0</p></div>
								<div class="${"flex items-center justify-center"}"><div class="${"inline-flex items-center space-x-6 text-lg font-semibold"}">
										<svg version="${"1.1"}" id="${"Layer_1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 512.002 512.002"}" style="${"enable-background:new 0 0 512.002 512.002;"}" xml:space="${"preserve"}" class="${"hi-solid hi-cube inline-block w-12 h-12"}"><path style="${"fill:#9FDEF7;"}" d="${"M158.264,187.777h36.964c13.807-25.333,37.407-44.54,65.73-52.526\n	c-5.698-13.835-19.305-23.575-35.191-23.575c-3.97,0-7.797,0.612-11.393,1.738c0.019-0.578,0.044-1.155,0.044-1.738\n	c0-28.259-22.913-51.171-51.174-51.171c-24.373,0-44.749,17.038-49.903,39.85c-3.061-1.02-6.328-1.579-9.729-1.579\n	c-10.469,0-19.71,5.242-25.253,13.241c-3.092-0.797-6.34-1.23-9.682-1.23c-21.26,0-38.492,17.234-38.492,38.494\n	c0,21.256,17.233,38.494,38.492,38.494h61.542"}"></path><path style="${"fill:#BEEAFC;"}" d="${"M369.578,165.557c-19.779-21.155-47.935-34.379-79.179-34.379\n	c-51.609,0-94.762,36.087-105.678,84.396c-6.477-2.16-13.396-3.349-20.6-3.349c-22.172,0-41.739,11.102-53.475,28.044\n	c-6.551-1.692-13.42-2.601-20.501-2.601c-45.02,0-81.515,36.495-81.515,81.515c0,45.018,36.495,81.517,81.515,81.517h89.875\n	c0.19-27.709,22.699-50.111,50.446-50.111c5.262,0,10.338,0.807,15.107,2.302c-0.024-0.764-0.058-1.528-0.058-2.302\n	c0-37.48,30.383-67.863,67.861-67.863c32.316,0,59.341,22.598,66.176,52.848c4.055-1.354,8.387-2.097,12.897-2.097\n	c13.884,0,26.138,6.951,33.486,17.563c4.102-1.061,8.404-1.631,12.838-1.631c18.583,0,34.841,9.932,43.769,24.773\n	c12.943-14.295,20.83-33.254,20.83-54.055c0-44.503-36.074-80.574-80.574-80.574c-8.403,0-16.505,1.288-24.12,3.675\n	c0.039-1.221,0.092-2.444,0.092-3.675c0-18.197-4.485-35.347-12.411-50.405"}"></path><path style="${"fill:#E4F2F9;"}" d="${"M381.527,451.496H230.468c-27.863,0-50.451-22.588-50.451-50.45c0-27.87,22.589-50.456,50.451-50.456\n	c5.262,0,10.338,0.807,15.107,2.302c-0.024-0.764-0.058-1.528-0.058-2.302c0-37.48,30.383-67.863,67.861-67.863\n	c32.316,0,59.341,22.598,66.176,52.848c4.055-1.354,8.387-2.097,12.897-2.097c13.884,0,26.138,6.951,33.486,17.563\n	c4.102-1.061,8.404-1.631,12.838-1.631c28.192,0,51.046,22.853,51.046,51.043s-22.854,51.044-51.046,51.044h-29.212"}"></path><path style="${"fill:#D7EDF9;"}" d="${"M284.275,336.599c0-18.212,3.865-35.519,10.809-51.157c-28.589,7.989-49.567,34.21-49.567,65.348\n	c0,0.773,0.033,1.538,0.058,2.302c-4.769-1.495-9.845-2.302-15.107-2.302c-27.863,0-50.451,22.586-50.451,50.456\n	c0,27.863,22.589,50.45,50.451,50.45h128.207C314.812,431.934,284.275,387.833,284.275,336.599z"}"></path><path style="${"fill:#AEE4FF;"}" d="${"M95.06,240.178c-1.626-0.098-3.263-0.152-4.913-0.152c-45.02,0-81.515,36.495-81.515,81.515\n	c0,45.018,36.495,81.517,81.515,81.517h89.875c0.06-8.695,2.318-16.866,6.246-23.987C141.83,344.873,109.088,296.238,95.06,240.178z\n	"}"></path><path style="${"fill:#83D4ED;"}" d="${"M87.495,178.611c0-26.44,4.066-51.927,11.593-75.881c-8.119,1.499-15.119,6.191-19.647,12.727\n	c-3.092-0.797-6.34-1.23-9.682-1.23c-21.26,0-38.492,17.234-38.492,38.494c0,21.256,17.232,38.494,38.492,38.494h18.047\n	C87.603,187.038,87.495,182.837,87.495,178.611z"}"></path><path style="${"fill:#231F20;"}" d="${"M512.002,320.127c0-49.185-40.017-89.202-89.202-89.202c-5.264,0-10.49,0.458-15.627,1.368\n	c-1.027-16.465-5.531-32.634-13.177-47.163c-2.219-4.217-7.436-5.838-11.654-3.617c-4.217,2.22-5.836,7.438-3.617,11.654\n	c7.47,14.191,11.417,30.232,11.417,46.388c0,0.88-0.031,1.757-0.061,2.629l-0.026,0.77c-0.09,2.793,1.181,5.456,3.405,7.146\n	c2.226,1.689,5.128,2.199,7.799,1.362c6.945-2.176,14.192-3.28,21.54-3.28c39.671,0,71.946,32.275,71.946,71.946\n	c0,14.321-4.239,28.168-12.088,39.92c-0.303-0.327-0.622-0.636-0.933-0.957c-0.339-0.352-0.674-0.704-1.02-1.047\n	c-0.235-0.231-0.476-0.454-0.714-0.681c-0.541-0.518-1.089-1.028-1.649-1.526c-0.091-0.081-0.183-0.159-0.275-0.238\n	c-10.506-9.213-24.253-14.817-39.291-14.817c-3.14,0-6.271,0.247-9.361,0.734c-9.311-10.528-22.746-16.667-36.963-16.667\n	c-2.309,0-4.606,0.161-6.881,0.481c-4.678-13.326-13.048-25.267-24.12-34.229c-13.544-10.964-30.616-17.003-48.071-17.003\n	c-39.395,0-71.93,29.937-76.049,68.258c-2.269-0.262-4.56-0.395-6.861-0.395c-0.969,0-1.931,0.027-2.887,0.073\n	c-0.367,0.017-0.729,0.052-1.094,0.076c-0.58,0.039-1.161,0.077-1.736,0.133c-0.464,0.045-0.923,0.105-1.384,0.161\n	c-0.462,0.056-0.923,0.11-1.382,0.176c-0.527,0.077-1.05,0.166-1.574,0.256c-0.372,0.065-0.745,0.128-1.115,0.2\n	c-0.586,0.112-1.168,0.237-1.747,0.367c-0.284,0.064-0.567,0.128-0.849,0.196c-0.651,0.156-1.297,0.323-1.94,0.5\n	c-0.179,0.05-0.357,0.101-0.535,0.152c-0.732,0.21-1.459,0.43-2.18,0.668c-0.04,0.013-0.08,0.027-0.12,0.041\n	c-20.77,6.885-36.473,24.993-39.857,47.113H90.146c-40.19,0-72.887-32.698-72.887-72.889c0-40.19,32.697-72.887,72.887-72.887\n	c6.194,0,12.365,0.783,18.343,2.327c3.498,0.899,7.193-0.469,9.251-3.441c10.552-15.234,27.891-24.329,46.382-24.329\n	c6.076,0,12.088,0.977,17.869,2.906c2.312,0.773,4.844,0.53,6.967-0.669c2.124-1.196,3.641-3.237,4.179-5.614\n	c1.972-8.725,5.029-16.944,9.002-24.539c0.243-0.326,0.467-0.668,0.664-1.031c12.808-23.498,34.857-41.121,60.496-48.349\n	c0.305-0.086,0.603-0.19,0.894-0.307c8.369-2.244,17.155-3.443,26.204-3.443c27.918,0,53.799,11.238,72.876,31.644\n	c3.254,3.48,8.713,3.665,12.196,0.41c3.482-3.255,3.664-8.715,0.41-12.196c-22.052-23.586-53.209-37.114-85.482-37.114\n	c-8.404,0-16.749,0.919-24.886,2.695c-8.401-13.683-23.304-22.196-39.745-22.196c-1.111,0-2.22,0.039-3.323,0.116\n	c-4.144-28.959-29.112-51.288-59.199-51.288c-25.271,0-47.186,15.441-55.881,38.449c-1.244-0.118-2.495-0.178-3.751-0.178\n	c-10.942,0-21.302,4.561-28.685,12.427c-2.072-0.276-4.16-0.415-6.25-0.415c-25.983,0-47.12,21.139-47.12,47.122\n	s21.138,47.122,47.12,47.122h61.542c4.765,0,8.628-3.863,8.628-8.628c0-4.765-3.863-8.628-8.628-8.628H68.681\n	c-16.467,0-29.863-13.398-29.863-29.866c0-16.469,13.398-29.866,29.863-29.866c2.536,0,5.067,0.321,7.527,0.957\n	c3.499,0.901,7.189-0.472,9.246-3.442c4.133-5.965,10.922-9.527,18.16-9.527c2.385,0,4.74,0.382,7,1.136\n	c2.312,0.773,4.845,0.527,6.966-0.669c2.125-1.197,3.642-3.238,4.179-5.615c4.405-19.502,21.464-33.123,41.486-33.123\n	c23.46,0,42.546,19.085,42.546,42.543c0,0.366-0.015,0.728-0.027,1.09l-0.013,0.366c-0.092,2.793,1.177,5.46,3.402,7.151\n	c2.225,1.691,5.132,2.2,7.8,1.366c2.847-0.892,5.813-1.344,8.814-1.344c8.74,0,16.794,3.816,22.279,10.187\n	c-0.3,0.118-0.593,0.25-0.892,0.37c-0.547,0.218-1.087,0.451-1.631,0.676c-0.849,0.355-1.699,0.709-2.539,1.083\n	c-1.004,0.444-1.996,0.914-2.988,1.386c-0.342,0.164-0.686,0.322-1.027,0.49c-7.837,3.831-15.268,8.525-22.101,14.056\n	c-9.251,7.489-17.259,16.344-23.798,26.153c-0.283,0.422-0.554,0.851-0.83,1.278c-0.527,0.813-1.049,1.63-1.556,2.457\n	c-0.147,0.238-0.304,0.469-0.449,0.709h-31.974c-4.765,0-8.628,3.863-8.628,8.628s3.863,8.628,8.628,8.628h23.407\n	c-1.129,2.834-2.155,5.711-3.058,8.63c-4.764-0.958-9.612-1.44-14.492-1.44c-22.176,0-43.078,10.009-57.012,27.041\n	c-5.582-1.061-11.264-1.598-16.963-1.598C40.438,229.039,0,269.478,0,319.183c0,49.706,40.438,90.146,90.144,90.146h81.833\n	c4.041,28.667,28.722,50.797,58.488,50.797h151.06c4.765,0,8.628-3.863,8.628-8.628c0-4.765-3.863-8.628-8.628-8.628H230.468\n	c-23.062,0-41.823-18.762-41.823-41.822c0-0.201,0.012-0.398,0.015-0.598c0.009-0.601,0.024-1.199,0.057-1.795\n	c0.004-0.074,0.012-0.148,0.017-0.222c0.04-0.642,0.09-1.28,0.159-1.913c0-0.004,0.001-0.008,0.001-0.012\n	c2.279-20.916,20.106-37.29,41.573-37.29c4.275,0,8.489,0.642,12.526,1.907c2.668,0.837,5.573,0.328,7.798-1.362\n	c2.225-1.69,3.494-4.352,3.406-7.145l-0.018-0.521c-0.017-0.499-0.036-1.001-0.036-1.506c0-32.662,26.572-59.235,59.233-59.235\n	c27.429,0,51.721,19.396,57.76,46.122c0.538,2.378,2.056,4.418,4.18,5.615c2.127,1.197,4.657,1.44,6.968,0.668\n	c3.286-1.098,6.706-1.653,10.165-1.653c10.523,0,20.389,5.177,26.393,13.846c2.058,2.975,5.752,4.348,9.256,3.442\n	c3.474-0.9,7.065-1.356,10.675-1.356c0.841,0,1.675,0.032,2.507,0.08c0.311,0.018,0.619,0.046,0.929,0.071\n	c0.496,0.039,0.99,0.087,1.483,0.143c0.404,0.047,0.809,0.096,1.21,0.154c0.328,0.047,0.654,0.105,0.98,0.159\n	c10.927,1.852,20.448,7.886,26.839,16.406c0.026,0.035,0.052,0.069,0.078,0.104c5.269,7.068,8.392,15.824,8.392,25.298\n	c0,23.388-19.029,42.415-42.418,42.415h-29.21c-4.765,0-8.628,3.863-8.628,8.628s3.863,8.628,8.628,8.628h29.211\n	c32.905,0,59.674-26.768,59.674-59.672c0-8.986-2.009-17.509-5.582-25.161C505.234,359.604,512.002,340.249,512.002,320.127z"}"></path></svg>

										<span>Overcast Clouds</span></div></div></div></div>
						<div class="${"w-1/2 p-1 md:p-2"}"><div class="${"h-28 flex bg-white rounded-lg border items-center justify-center space-x-4 "}"><div class="${"flex text-base font-semibold space-x-4 items-center"}">
									<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"hi-solid hi-cube inline-block w-10 h-10"}" version="${"1.1"}" viewBox="${"0 0 512 512"}"><g id="${"surface1"}"><path d="${"M 437.019531 74.980469 C 388.667969 26.628906 324.378906 0 256 0 C 187.621094 0 123.332031 26.628906 74.980469 74.980469 C 26.628906 123.332031 0 187.621094 0 256 C 0 324.378906 26.628906 388.667969 74.980469 437.019531 C 123.332031 485.371094 187.621094 512 256 512 C 324.378906 512 388.667969 485.371094 437.019531 437.019531 C 485.371094 388.667969 512 324.378906 512 256 C 512 187.621094 485.371094 123.332031 437.019531 74.980469 Z M 256 458 C 144.617188 458 54 367.382812 54 256 C 54 144.617188 144.617188 54 256 54 C 367.382812 54 458 144.617188 458 256 C 458 367.382812 367.382812 458 256 458 Z M 256 458 "}" style="${"stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"}"></path><path d="${"M 256 84 C 161.160156 84 84 161.160156 84 256 C 84 350.839844 161.160156 428 256 428 C 350.839844 428 428 350.839844 428 256 C 428 161.160156 350.839844 84 256 84 Z M 320.53125 317.371094 C 316.886719 324.226562 311.976562 329.777344 305.796875 334.007812 C 299.613281 338.242188 292.503906 341.335938 284.460938 343.277344 C 280.058594 344.34375 275.539062 345.105469 270.90625 345.589844 L 270.90625 380.550781 L 240.90625 380.550781 L 240.90625 344.929688 C 233.574219 343.921875 226.289062 342.328125 219.058594 340.101562 C 205.847656 336.039062 193.992188 330.285156 183.496094 322.832031 L 198.992188 292.605469 C 200.515625 294.128906 203.265625 296.121094 207.246094 298.574219 C 211.222656 301.03125 215.921875 303.488281 221.34375 305.941406 C 226.761719 308.398438 232.773438 310.472656 239.378906 312.164062 C 245.980469 313.859375 252.75 314.703125 259.695312 314.703125 C 279 314.703125 288.652344 308.523438 288.652344 296.160156 C 288.652344 292.265625 287.546875 288.964844 285.351562 286.253906 C 283.148438 283.546875 280.015625 281.175781 275.953125 279.144531 C 271.890625 277.109375 266.976562 275.25 261.222656 273.554688 C 255.460938 271.863281 249.027344 270 241.917969 267.96875 C 233.28125 265.597656 225.789062 263.015625 219.4375 260.21875 C 213.089844 257.425781 207.792969 254.125 203.5625 250.3125 C 199.328125 246.503906 196.152344 242.101562 194.039062 237.105469 C 191.921875 232.113281 190.863281 226.144531 190.863281 219.199219 C 190.863281 210.054688 192.554688 201.925781 195.945312 194.816406 C 199.328125 187.703125 204.027344 181.777344 210.039062 177.035156 C 216.050781 172.296875 223.035156 168.695312 230.996094 166.238281 C 234.203125 165.253906 237.507812 164.472656 240.90625 163.882812 L 240.90625 131.191406 L 270.90625 131.191406 L 270.90625 163.453125 C 278.21875 164.398438 285.152344 166.085938 291.699219 168.523438 C 302.367188 172.507812 311.679688 177.203125 319.640625 182.621094 L 304.148438 211.070312 C 302.960938 209.886719 300.800781 208.277344 297.667969 206.242188 C 294.535156 204.210938 290.722656 202.222656 286.238281 200.273438 C 281.75 198.328125 276.882812 196.679688 271.636719 195.320312 C 266.382812 193.96875 261.050781 193.289062 255.632812 193.289062 C 245.980469 193.289062 238.78125 195.066406 234.042969 198.625 C 229.300781 202.179688 226.929688 207.175781 226.929688 213.609375 C 226.929688 217.335938 227.820312 220.429688 229.597656 222.882812 C 231.375 225.339844 233.953125 227.496094 237.34375 229.359375 C 240.730469 231.222656 245.003906 232.914062 250.171875 234.4375 C 255.335938 235.960938 261.304688 237.574219 268.078125 239.265625 C 276.882812 241.636719 284.882812 244.175781 292.082031 246.882812 C 299.277344 249.59375 305.371094 252.980469 310.367188 257.042969 C 315.359375 261.109375 319.214844 265.976562 321.925781 271.648438 C 324.632812 277.324219 325.988281 284.308594 325.988281 292.601562 C 325.992188 302.257812 324.167969 310.511719 320.53125 317.371094 Z M 320.53125 317.371094 "}" style="${"stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"}"></path></g></svg>

									<span>Currency</span></div>
								<p class="${"font-bold text-lg"}">CAD</p></div></div></div></div></div></section>
		<section class="${"relative my-12 lg:my-16"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">About Edmonton</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">Edmonton is North America\u2019s most northernmost city. Despite being the administrative
					capital of the Alberta Province, it is second to Calgary in size. But that doesn\u2019t mean it
					is a small city by any means. For the longest time, it has been the hub of northern and
					central Alberta\u2019s oil and gas industry. Its oil sand reserves are only second to those of
					Saudi Arabia, which explains why most of the region\u2019s economic activity involves
					petroleum, tourism, and agriculture. There is also a blossoming technology sector that
					cashes in on Canada\u2019s premier reduction and research credentials. All of that aside, it is
					the friendly nature of the people of Edmonton that makes it a must-visit place.
				</p></div></section>
		<section class="${"relative mb-6"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">History </span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">Edmonton is a town built by immigrants. The earliest groups of people came from as far as
					eastern Europe, with the most notable being the Chinese railway builders. The historical
					factors that attracted people to Edmonton in the past\u2014employment and business
					opportunities, are the same reasons people move here today. From a small town, it has
					grown to a multicultural society of over a million people.
				</p>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">Before the arrival of the Europeans in the 19th century, archaeological evidence suggests
					that Edmonton was a settlement for different aboriginal tribes. After the European
					settlement, the main catchment activity was fur trading with two companies, the Hudson\u2019s
					Bay Company and the North West Company, carrying the bulk of the trade. Shortly after the
					Canadian government bought it out, infrastructure like railways made it an agricultural
					distribution hub, but it\u2019s what happened in the 20th century that defines the city today.
					Having initially served as a military staging ground during the wars, it was the discovery
					of petroleum in Leduc that would change the city\u2019s fortunes.
				</p></div></section>
		<section class="${"overflow-hidden text-gray-700 my-12"}"><div class="${"container px-5 py-2 mx-auto "}"><div class="${"flex flex-wrap -m-1 md:-m-2"}"><div class="${"flex-wrap w-1/2"}"><div class="${"w-full h-[220px] p-1 md:p-2"}"><img alt="${"gallery"}" class="${"block object-cover object-center w-full h-full rounded-lg"}" src="${"/images/flight-deals/jw-2.jpg"}"></div>
						<div class="${"w-full p-1 md:p-2 h-[400px]"}"><img alt="${"gallery"}" class="${"block object-cover object-center w-full h-full rounded-lg"}" src="${"/images/flight-deals/jw-1.jpg"}"></div></div>
					<div class="${"flex-wrap w-1/2"}"><div class="${"w-full p-1 md:p-2 h-[400px]"}"><img alt="${"gallery"}" class="${"block object-cover object-center w-full h-full rounded-lg"}" src="${"/images/flight-deals/jw-4.jpg"}"></div>
						<div class="${"w-full h-[220px] p-1 md:p-2"}"><img alt="${"gallery"}" class="${"block object-cover object-center w-full h-full rounded-lg"}" src="${"/images/flight-deals/jw-3.jpg"}"></div></div></div></div></section>
		<section class="${"relative my-12 lg:my-16"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">General Weather</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">Edmonton enjoys a humid continental climate. The seasonal temperatures tend to be extreme,
					but it\u2019s unlike what you will experience in the neighboring cities of Winnipeg or Regina.
					In summers expect the highs to sometimes exceed 86 \xB0F (30 \xB0C), and in winters, the mercury
					can sometimes drop beyond -4 \xB0F (-20 \xB0C). These seasonal extremes notwithstanding, you
					will have plenty of sun in Edmonton, with sun hours reaching approximately seventeen and a
					quarter-hour in the summer solstice. Winters here last from November to March, while
					summers stretch from the last weeks of June to late august. The other seasons are
					relatively short and variable.
				</p></div></section>
		<section class="${"relative my-12 lg:my-16"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">Best Time to Visit</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">Despite the high summer sun, the humidity is not unbearable. This is the best time to
					visit as you can take advantage of the long bright days to explore every nook of the city.
					It is also peak tourism season, and you are likely to meet great people to share your
					experiences.
				</p></div></section>
		<section class="${"relative my-12 lg:my-16"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">Things to Do </span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">In Edmonton, the first place people visit is the massive West Edmonton Mall for recreation
					shopping and business. But if the mall is not your thing, you will love the experience of
					Edmonton scenery from the many parks in the city. The most popular one is the Fort
					Edmonton park, but you could go to Elk Island National Park for kayaking, hiking, skating,
					cycling, and to see substantial American Bison. As a city of festivals, Sir Winston
					Churchill Square is where you catch most of them.
				</p>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">If your visit coincides with K-days, Sourdough Raft Races, the Edmonton International
					Fringe Festival, and many others feel free to join in, you won\u2019t be disappointed. For the
					arts and culture lovers, The Art Gallery of Alberta is a great start, but you could find
					more like the TELUS World of Science or Alberta Aviation Museum. You can also find
					theatres in the Old Strathcona district or other performing arts around the city. Lastly,
					(definitely not least) your taste buds will thank you if you grab local delicacies from
					the many food trucks, pop-up joints, and fine dining establishments all over the city.
				</p></div></section>
		<section class="${"relative my-12 lg:my-16"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">Airport Information</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0 prose max-w-4xl"}">Edmonton International Airport (EIA) is the major transport hub in Edmonton. Despite there
					being several places to land smaller planes and even bush planes, the International port
					connects you to major cities across the world. Several major and budget airlines operate
					from it, and you can find flights to pretty much most of Canada from here.
				</p></div></section></div></div>

${validate_component(FlightDealsFaq, "FlightDealsFaq").$$render($$result, {}, {}, {})}

${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}

${validate_component(MoreDestinations, "MoreDestinations").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/20.js
var __exports21 = {};
__export(__exports21, {
  css: () => css24,
  entry: () => entry21,
  js: () => js21,
  module: () => flight_deals_svelte_exports
});
var entry21, js21, css24;
var init__21 = __esm({
  ".svelte-kit/output/server/nodes/20.js"() {
    init_flight_deals_svelte();
    entry21 = "pages/flight-deals.svelte-1d71e1d3.js";
    js21 = ["pages/flight-deals.svelte-1d71e1d3.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/Subscribe-39a11f67.js", "chunks/MoreDestinations-ad8d826c.js"];
    css24 = [];
  }
});

// .svelte-kit/output/server/entries/pages/flight-hotel.svelte.js
var flight_hotel_svelte_exports = {};
__export(flight_hotel_svelte_exports, {
  default: () => Flight_hotel
});
var Flight_hotel;
var init_flight_hotel_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/flight-hotel.svelte.js"() {
    init_index_77482e32();
    Flight_hotel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/21.js
var __exports22 = {};
__export(__exports22, {
  css: () => css25,
  entry: () => entry22,
  js: () => js22,
  module: () => flight_hotel_svelte_exports
});
var entry22, js22, css25;
var init__22 = __esm({
  ".svelte-kit/output/server/nodes/21.js"() {
    init_flight_hotel_svelte();
    entry22 = "pages/flight-hotel.svelte-c38fefaf.js";
    js22 = ["pages/flight-hotel.svelte-c38fefaf.js", "chunks/vendor-3e73c3b8.js"];
    css25 = [];
  }
});

// .svelte-kit/output/server/entries/pages/group-travel.svelte.js
var group_travel_svelte_exports = {};
__export(group_travel_svelte_exports, {
  default: () => Group_travel
});
var Group_travel;
var init_group_travel_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/group-travel.svelte.js"() {
    init_index_77482e32();
    Group_travel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/22.js
var __exports23 = {};
__export(__exports23, {
  css: () => css26,
  entry: () => entry23,
  js: () => js23,
  module: () => group_travel_svelte_exports
});
var entry23, js23, css26;
var init__23 = __esm({
  ".svelte-kit/output/server/nodes/22.js"() {
    init_group_travel_svelte();
    entry23 = "pages/group-travel.svelte-5deeba99.js";
    js23 = ["pages/group-travel.svelte-5deeba99.js", "chunks/vendor-3e73c3b8.js"];
    css26 = [];
  }
});

// .svelte-kit/output/server/entries/pages/travel-deals.svelte.js
var travel_deals_svelte_exports = {};
__export(travel_deals_svelte_exports, {
  default: () => Travel_deals
});
var Travel_deals;
var init_travel_deals_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/travel-deals.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_SpecialOfferCards_94a6f239();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    Travel_deals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-gray-900 -mt-1"}"><div class="${"sm:hidden relative h-32 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div>
	<div class="${"md:hidden relative mx-auto max-w-md px-4 pt-6 pb-10 "}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-2xl font-bold"}">Spring Vacation Packages</p></div></div>

	<div class="${"hidden md:block relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:pb-44 lg:pt-24"}"><div class="${"md:mr-auto md:w-1/2 md:pr-10"}"><p class="${"mt-2 text-white text-3xl font-extrabold sm:text-4xl"}">All Inclusive Adult only Resorts
			</p>
			<p class="${"mt-3 text-base text-gray-300"}">We&#39;re focused on making your dream vacation. Find the right vacation and book with
				confidence.
			</p></div></div>
	<div class="${"hidden sm:block relative h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"}"><img class="${"w-full h-full object-cover"}" src="${"/images/vacation-deals/spring-break.jpg"}" alt="${"vacation deals"}">
		<div aria-hidden="${"true"}" class="${"absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"}"></div></div></div>

${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

<div class="${"relative bg-white"}"><div class="${"relative max-w-7xl mx-auto mt-4 mb-12 lg:mb-16 lg:mt-8"}">
		<section class="${"relative"}"><div class="${"text-left px-4"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl"}"><span class="${"block xl:inline"}">Special offers from resorts and hotels across the Americas</span>
						</h1></div>
				<p class="${"mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0"}">Plan your vacation at one of our beautiful resorts across the United States, Canada,
					Caribbean and Latin America
				</p></div></section>
		${validate_component(SpecialOfferCards, "SpecialOfferCards").$$render($$result, {}, {}, {})}</div></div>
${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/23.js
var __exports24 = {};
__export(__exports24, {
  css: () => css27,
  entry: () => entry24,
  js: () => js24,
  module: () => travel_deals_svelte_exports
});
var entry24, js24, css27;
var init__24 = __esm({
  ".svelte-kit/output/server/nodes/23.js"() {
    init_travel_deals_svelte();
    entry24 = "pages/travel-deals.svelte-83905f1e.js";
    js24 = ["pages/travel-deals.svelte-83905f1e.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/SpecialOfferCards-3f780cda.js", "chunks/Subscribe-39a11f67.js"];
    css27 = [];
  }
});

// .svelte-kit/output/server/entries/pages/contact-us.svelte.js
var contact_us_svelte_exports = {};
__export(contact_us_svelte_exports, {
  default: () => Contact_us
});
var Contact_us;
var init_contact_us_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/contact-us.svelte.js"() {
    init_index_77482e32();
    Contact_us = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"mx-auto max-w-7xl p-4"}"><section class="${"bg-white py-12 md:py-20 overflow-hidden relative z-10"}"><div class="${"container"}"><div class="${"max-w-prose"}"><span class="${"font-normal text-tiny block text-rose-600"}">How can we help? </span>
				<div><h1 class="${"text-3xl md:text-4xl font-extrabold mb-4"}"><span class="${"font-light"}">Contact </span>Trip Support
					</h1></div>

				<p class="${"text-base text-body-color leading-relaxed mb-9"}">Reach out for any questions on our company info, our office, news, pricing, or our Book
					Now Pay Later policies
				</p></div>
			<div class="${"flex flex-wrap lg:justify-between -mx-4 "}"><div class="${"w-full lg:w-1/2 xl:w-6/12 px-4"}"><div class="${"w-full"}"><div class="${"relative mb-16 mt-4 w-full"}"><div class="${"flex flex-col rounded shadow-md bg-white overflow-hidden"}"><div class="${"bg-cover mb-8"}" style="${"background-image: url('/images/contact/location7191.jpg');"}"><div class="${"h-48 bg-opacity-25 flex items-end justify-center"}"><div class="${"rounded-full bg-white -mb-12 p-2"}"><img src="${"/images/contact/ts-icon.png"}" alt="${"User Avatar"}" class="${"inline-block w-20 h-20 rounded-full"}"></div></div></div>

								<div class="${"p-5 lg:px-4 lg:pt-6 lg:pb-12 grow w-full text-center"}"><h3 class="${"text-lg font-semibold mb-1"}">7191 Yonge St</h3>
									<p class="${"text-gray-500 text-sm"}">Suite #1101 Thornhill ON L3T 0C4</p>
									<div class="${"mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-4"}"><div class="${"py-2"}"><dt class="${"sr-only"}">Phone number</dt>
											<h4 class="${"font-extrabold text-dark text-sm uppercase mb-1"}">Phone Number</h4>
											<dd class="${"flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-pblue-900"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}"></path></svg>
												<a href="${"tel:+1-416-444-3750"}"><span class="${"ml-1 text-pblue-900 text-tiny"}">+1 (416) 444-3750 </span></a></dd></div>

										<div class="${"py-2"}"><dt class="${"sr-only"}">Toll Free Number</dt>
											<h4 class="${"font-extrabold text-dark text-sm uppercase mb-1"}">Toll Free Number
											</h4>
											<dd class="${"flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-pblue-900"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"}"></path><path d="${"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}"></path></svg>
												<a href="${"tel:+1-855-606-0606"}"><span class="${"ml-1 text-pblue-900 text-tiny"}">+1 (855) 606-0606 </span></a></dd></div>
										<div class="${"py-2"}"><dt class="${"sr-only"}">Email address</dt>
											<h4 class="${"font-extrabold text-dark text-sm uppercase mb-1"}">Email Address</h4>
											<dd class="${"flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 text-pblue-900"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"}" clip-rule="${"evenodd"}"></path></svg>
												<a href="${"mailto:info@tripsupport.ca"}" target="${"_blank"}"><span class="${"ml-1 text-pblue-900 text-tiny"}">info@tripsupport.ca </span></a></dd></div></div></div></div></div></div>
					
					<div class="${"w-full"}"><div class="${"relative mb-8 w-full"}"><div class="${"flex flex-col rounded shadow bg-white overflow-hidden"}"><div class="${"bg-cover mb-8"}" style="${"background-image: url('/images/contact/office4667.jpg');"}"><div class="${"h-48 bg-opacity-25 flex items-end justify-center"}"><div class="${"rounded-full bg-white -mb-12 p-2"}"><img src="${"/images/contact/ts-icon.png"}" alt="${"User Avatar"}" class="${"inline-block w-20 h-20 rounded-full"}"></div></div></div>

								<div class="${"p-5 lg:px-4 lg:pt-6 lg:pb-12 grow w-full text-center"}"><h3 class="${"text-lg font-semibold mb-1"}">4667 MacArthur Blvd</h3>
									<p class="${"text-gray-500 text-sm"}">Suite #340 Newport Beach CA 92660</p>
									<div class="${"mt-6 grid grid-cols-1 md:grid-cols-3 "}"><div class="${"py-2"}"><dt class="${"sr-only"}">Phone number</dt>
											<h4 class="${"font-extrabold text-dark text-sm uppercase mb-1"}">Phone Number</h4>
											<dd class="${"flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-pblue-900"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}"></path></svg>
												<a href="${"tel:+1-949-490-5665"}"><span class="${"ml-1 text-pblue-900 text-tiny"}">+1 (949) 490-5665 </span></a></dd></div>

										<div class="${"py-2"}"><dt class="${"sr-only"}">Toll Free Number</dt>
											<h4 class="${"font-extrabold text-dark text-sm uppercase mb-1"}">Toll Free Number
											</h4>
											<dd class="${"flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4 text-pblue-900"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"}"></path><path d="${"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}"></path></svg>
												<a href="${"tel:+1-833-606-0606"}"><span class="${"ml-1 text-pblue-900 text-tiny"}">+1(833) 606-0606</span></a></dd></div>
										<div class="${"py-2"}"><dt class="${"sr-only"}">Email address</dt>
											<h4 class="${"font-extrabold text-dark text-sm uppercase mb-1"}">Email Address</h4>
											<dd class="${"flex justify-center items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 text-pblue-900"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"}" clip-rule="${"evenodd"}"></path></svg>
												<a href="${"mailto:info@tripsupport.com"}" target="${"_blank"}"><span class="${"ml-1 text-pblue-900 text-tiny"}">info@tripsupport.com </span></a></dd></div></div></div></div></div></div></div>
				<div class="${"w-full lg:w-1/2 xl:w-5/12 px-4"}"><div class="${"bg-white relative rounded-lg p-4 sm:p-8 md:p-12 shadow-lg"}"><form><div class="${"mb-6"}"><input type="${"text"}" placeholder="${"Your Name"}" class="${"w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-pblue-300 "}"></div>
							<div class="${"mb-6"}"><input type="${"email"}" placeholder="${"Your Email"}" class="${"w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-pblue-300 "}"></div>
							<div class="${"mb-6"}"><input type="${"text"}" placeholder="${"Your Phone"}" class="${"w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-pblue-300 "}"></div>
							<div class="${"mb-6"}"><textarea rows="${"6"}" placeholder="${"Your Message"}" class="${"w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-pblue-300 "}"></textarea></div>
							<div><button type="${"submit"}" class="${"w-full text-white bg-pblue-900 rounded focus:border-pblue-300 p-3 transition hover:bg-opacity-90 "}">Send Message
								</button></div></form>
						<div><span class="${"absolute -top-10 right-0 z-[-1]"}"><svg width="${"100"}" height="${"100"}" viewBox="${"0 0 100 100"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"}" fill="${"#3056D3"}"></path></svg></span>

							<span class="${"absolute -left-7 -bottom-7 z-[-1]"}"><svg width="${"107"}" height="${"134"}" viewBox="${"0 0 107 134"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"104.999"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 104.999 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 104.999 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 104.999 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 104.999 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 104.999 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 104.999 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 104.999 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 104.999 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 104.999 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"104.999"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 104.999 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"90.3333"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 90.3333 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"75.6654"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 75.6654 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"31.9993"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 31.9993 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"60.9993"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 60.9993 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"17.3333"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 17.3333 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"132"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 132)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"117.333"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 117.333)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"102.667"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 102.667)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"88"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 88)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"73.3333"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 73.3333)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"45"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 45)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"16"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 16)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"59"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 59)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"30.6666"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 30.6666)"}" fill="${"#e11d48"}"></circle><circle cx="${"46.3333"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 46.3333 1.66665)"}" fill="${"#e11d48"}"></circle><circle cx="${"2.66536"}" cy="${"1.66665"}" r="${"1.66667"}" transform="${"rotate(180 2.66536 1.66665)"}" fill="${"#e11d48"}"></circle></svg></span></div></div>
					<div class="${"flex justify-center mt-12"}"><a href="${"/customer-support"}"><div class="${"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-50 shadow-lg items-center py-2 px-8"}"><img class="${"h-12 w-12 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"}" src="${"/images/contact/help.svg"}" alt="${""}">
								<div class="${"p-6 flex flex-col justify-start"}"><h5 class="${"text-gray-900 text-lg font-bold mb-2 tracking-tight"}">Customer Support
									</h5>
									<p class="${"text-gray-700 text-base mb-4"}">Need any help for your trip? Please visit our customer support page.
									</p>
									<p class="${"text-gray-600 text-xs"}">Last updated 3 mins ago</p></div></div></a></div>
					<div class="${"flex justify-center mt-6"}"><a href="${"/customer-support"}"><div class="${"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-50 shadow-lg items-center py-2 px-8"}"><img class="${"h-12 w-12 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"}" src="${"/images/contact/help.svg"}" alt="${""}">
								<div class="${"p-6 flex flex-col justify-start"}"><h5 class="${"text-gray-900 text-lg font-bold mb-2 tracking-tight"}">Customer Support
									</h5>
									<p class="${"text-gray-700 text-base mb-4"}">Need any help for your trip? Please visit our customer support page.
									</p>
									<p class="${"text-gray-600 text-xs"}">Last updated 3 mins ago</p></div></div></a></div></div></div></div></section></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/24.js
var __exports25 = {};
__export(__exports25, {
  css: () => css28,
  entry: () => entry25,
  js: () => js25,
  module: () => contact_us_svelte_exports
});
var entry25, js25, css28;
var init__25 = __esm({
  ".svelte-kit/output/server/nodes/24.js"() {
    init_contact_us_svelte();
    entry25 = "pages/contact-us.svelte-01496c49.js";
    js25 = ["pages/contact-us.svelte-01496c49.js", "chunks/vendor-3e73c3b8.js"];
    css28 = [];
  }
});

// .svelte-kit/output/server/entries/pages/blog-post.svelte.js
var blog_post_svelte_exports = {};
__export(blog_post_svelte_exports, {
  default: () => Blog_post
});
var FlightCTA, HotelCTA, VacationCTA, Blog_post;
var init_blog_post_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/blog-post.svelte.js"() {
    init_index_77482e32();
    init_HotelsIcon_f7770270();
    FlightCTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"relative"}"><div class="${"hidden sm:flex absolute rounded-3xl top-0 right-0 w-20 h-20 bg-emerald-200 bg-opacity-50 -mt-3 -mr-10 transform -rotate-6"}"></div>
	<div class="${"absolute rounded-3xl bottom-0 left-0 w-20 h-20 bg-blue-200 bg-opacity-50 -mb-3 -ml-10 transform rotate-6"}"></div>

	<div class="${"bg-white shadow overflow-hidden sm:rounded-md relative"}"><a href="${"#"}" class="${"block hover:bg-gray-50 no-underline"}"><div class="${"flex items-center px-4 sm:px-6"}"><div class="${"min-w-0 flex-1 flex items-center"}"><div class="${"min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4 place-items-center"}"><div class="${"flex"}"><div><p class="${"flex items-center font-bold text-sm text-pblue-900 truncate"}">${validate_component(FlightsIcon, "FlightsIcon").$$render($$result, {}, {}, {})}
									Get the best flight deals at Trip Support, Book Now, Pay Later!
								</p></div></div></div></div>
				<div>
					<svg class="${"h-5 w-5 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg></div></div></a></div></div>`;
    });
    HotelCTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"relative"}"><div class="${"hidden sm:flex absolute rounded-3xl top-0 right-0 w-20 h-20 bg-emerald-200 bg-opacity-50 -mt-3 -mr-10 transform -rotate-6"}"></div>
	<div class="${"absolute rounded-3xl bottom-0 left-0 w-20 h-20 bg-rose-200 bg-opacity-50 -mb-3 -ml-10 transform rotate-6"}"></div>

	<div class="${"bg-white shadow overflow-hidden rounded-md relative"}"><a href="${"#"}" class="${"block hover:bg-gray-50 no-underline"}"><div class="${"flex items-center px-4 sm:px-6"}"><div class="${"min-w-0 flex-1 flex items-center"}"><div class="${"min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4 place-items-center"}"><div class="${"flex"}"><div><p class="${"flex items-center font-bold text-sm text-pblue-900"}">${validate_component(HotelsIcon, "HotelsIcon").$$render($$result, {}, {}, {})}
									<span class="${"line-clamp-1 sm:line-clamp-none"}">Booking a hotel in Mississauga Ontario with Trip Support and save!</span></p></div></div></div></div>
				<div>
					<svg class="${"h-5 w-5 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg></div></div></a></div></div>`;
    });
    VacationCTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"relative"}"><div class="${"hidden sm:flex absolute rounded-3xl top-0 right-0 w-20 h-20 bg-emerald-200 bg-opacity-50 -mt-3 -mr-10 transform -rotate-6"}"></div>
	<div class="${"absolute rounded-3xl bottom-0 left-0 w-20 h-20 bg-yellow-200 bg-opacity-50 -mb-3 -ml-10 transform rotate-6"}"></div>

	<div class="${"bg-white shadow overflow-hidden sm:rounded-md relative"}"><a href="${"#"}" class="${"block hover:bg-gray-50 no-underline"}"><div class="${"flex items-center px-4 sm:px-6"}"><div class="${"min-w-0 flex-1 flex items-center"}"><div class="${"min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4 place-items-center"}"><div class="${"flex"}"><div><p class="${"flex items-center font-bold text-sm text-pblue-900 truncate"}">${validate_component(VacationsIcon, "VacationsIcon").$$render($$result, {}, {}, {})}
									Planning a Vacation has never been easier, plan it with us.
								</p></div></div></div></div>
				<div>
					<svg class="${"h-5 w-5 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"}" clip-rule="${"evenodd"}"></path></svg></div></div></a></div></div>`;
    });
    Blog_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white"}"><div class="${"space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8"}">
		<nav class="${"flex"}" aria-label="${"Breadcrumb"}"><ol role="${"list"}" class="${"flex items-center space-x-4"}"><li><div><a href="${"/"}" class="${"text-gray-400 hover:text-gray-500"}">
							<svg class="${"flex-shrink-0 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}"></path></svg>
							<span class="${"sr-only"}">Home</span></a></div></li>

				<li><div class="${"flex items-center"}"><svg class="${"flex-shrink-0 h-5 w-5 text-gray-300"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"}"></path></svg>
						<a href="${"/blog"}" class="${"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"}">Blog</a></div></li>

				<li><div class="${"flex items-center"}"><svg class="${"flex-shrink-0 h-5 w-5 text-gray-300"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}"><path d="${"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"}"></path></svg>
						<a href="${"#"}" class="${"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"}" aria-current="${"page"}">8 Unique Winter Getaways Near Toronto</a></div></li></ol></nav>

		<div class="${"prose prose-slate prose-lg mx-auto"}">
			<div class="${"text-left"}"><div class="${"text-sm uppercase font-bold tracking-wider mb-1 text-rose-600"}">Canada</div>
				<div class="${"text-3xl md:text-4xl font-extrabold"}">8 Unique Winter Getaways Near Toronto</div>
				<div class="${"text-base md:text-md md:leading-relaxed font-medium text-gray-600 lg:w-2/3"}"><a href="${"javascript:void(0)"}" class="${"text-pblue-700 hover:text-pblue-400"}">Shefali</a> on
					<span class="${"font-semibold"}">March 15, 2021</span> \xB7 8 min read
				</div></div>
			</div>

		
		<article class="${"prose prose-slate prose-lg mx-auto"}">
			<div class="${"object-cover w-full"}"><img src="${"images/blog-post/blog-post-1.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>Sometimes it\u2019s nice to escape the city of Toronto to explore some of the nearby areas. In
				your backyard, there are many fabulous places to visit without having to catch a long flight
				or take a week off work. So for a mini getaway to keep you going between more extended
				vacations, here are some destinations to note. We hope this list of eight unique winter
				getaways near Toronto inspires you to take a break.
			</p>
			
			<h3>1. Mississauga</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/mississauga.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>Not far from Toronto, Mississauga is a vibrant city on Lake Ontario. The lakefront is one of
				the most scenic parts of the city, with a red and white lighthouse as the prettiest
				landmark. There are also shops and restaurants along a boardwalk so you can explore at a
				leisurely pace, even sitting on benches outside if it\u2019s warm enough.
			</p>
			<p>The only indoor ski and snowboard training centers are in Mississauga. Beginners can learn
				and get a sample of the sports before committing to buying a lot of gear or hitting the real
				slopes. It\u2019s also great for medium-level or advanced skiers and snowboarders who want to
				ride the snow but don\u2019t have time to get to the ski fields.
			</p>
			${validate_component(HotelCTA, "HotelCTA").$$render($$result, {}, {}, {})}
			<p>A waterfront trail is a nice place for a stroll, and it\u2019s usually quite apart from the
				resident ducks, geese, and seagulls hanging around.
			</p>
			<p>Mississauga Celebration Square has an ice skating rink in winter. You can skate around in
				the urban setting then head indoors for some retail therapy or hot food and drink. Being the
				6th biggest city in Canada, Mississauga has plenty of shopping and dining, from bargains to
				luxury to cheap eats to fine dining. There are also plenty of art galleries, museums and
				tourist attractions to discover. When it comes to winter getaways near Toronto, Mississauga
				is a winner.
			</p>
			
			<h3>2. Niagara Falls</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/niagara-falls.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>The city of Niagara Falls is a favourite place for visitors who have seen Toronto and want
				to explore the greater area. The falls, linked with America by the Rainbow Bridge, is the
				main attraction for many visitors. Seeing the massive waterfalls is an awe-inspiring sight,
				and there are many viewing points to see the stunning wonder of nature.
			</p>
			<p>Riding the glass tower to the Skylon Tower that looks over the falls is one of the best
				places to see the waterfalls. You can also ride the gondola, book a helicopter tour to see
				the falls from the air, or go zip lining over the water if you are a thrill-seeker.
			</p>
			<p>Beyond the falls you can find casinos, historic sites, spas, theme parks, shopping, dining,
				golf courses, nightlife, wineries, theatre and many more entertaining places to visit. Or
				you might like to relax in your luxury hotel with room service and movies. Whatever you
				desire, it can be found in this modern city, well set up for hospitality and tourism. If you
				are on a budget, there are many free things to do in Niagara Falls, including hiking Niagara
				Glen and visiting the Niagara Falls Botanical Gardens. This is one of our top picks for
				winter getaways near Toronto.
			</p>
			
			${validate_component(FlightCTA, "FlightCTA").$$render($$result, {}, {}, {})}

			
			<h3>3. Barrie</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/barrie.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>Let\u2019s go to Barrie, a lovely city on the shores of Kempenfelt Bay with beautiful winter
				landscapes. It\u2019s a winter wonderland all season long with plenty of outdoor activities for
				the whole family. Snowboarding, ice skating, skiing and winter hiking can be enjoyed in the
				most scenic surroundings and when it\u2019s time to get warm, there is lots of dining, shopping,
				entertainment and tourist attractions to see.
			</p>
			<p>Buy a winter fun pass for great deals, promotions and discounts on winter experiences in
				Barrie. It is free and easy to use on your phone. Sneak some spa time, relax in a cafe or
				roam some art galleries to keep warm between outdoor excursions. Don\u2019t miss the 420-foot
				suspension bridge at the Scenic Caves Nature Adventures Nordic Centre. With amazing views of
				Georgian Bay and beyond, the long bridge hangs 82 feet above the ground, so it looks like it
				is floating on the forest top. It\u2019s a bit challenging if you are scared of heights, but
				worth it for the epic views.
			</p>
			<p>Take in the lights with a night ice skate session at the rink at City Hall in downtown
				Barrie. After some fun laps on the ice, you can go shopping and enjoy a meal. If you are
				there on a Saturday morning, you can catch the Barrie Farmer\u2019s Market to try some of the
				local\u2019s freshest produce.
			</p>
			<p>Many events are happening in winter, with the highlight being the Hello Winter Festival in
				February and March. The city lights up and buzzes with entertainment with a winter theme,
				drawing crowds from near and far.
			</p>

			
			<h3>4. Hamilton</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/hamilton.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>The port city of Hamilton is an interesting winter getaway, including some interesting
				attractions for history buffs.
			</p>
			<p>Learn about Canada\u2019s military history when you visit the HMCS Haida, a naval warship on
				Hamilton\u2019s lakefront and the Canadian Warplane Heritage Museum, which has an impressive
				collection of old planes and paraphernalia. The Dundurn National Historic Site in a regal
				castle overlooking the bay and the Art Gallery of Hamilton compliment the history trail that
				can fill a few days.
			</p>
			<p>For a more modern look at the city the street art that adorns the walls of building around
				the city are eye-catching and thought-provoking. Grab your camera and take a walking tour to
				see the vibrant murals. Keep walking into nature and see frozen waterfalls or rent some gear
				to go snowshoeing at Christie Lake or Dundas Valley.
			</p>
			<p>The city has several ice skating rinks as well as attractive walking trails to explore.
				There is a zip lining adventure park open during winter and the experience is dramatically
				different from swinging through the treetops in summer.
			</p>
			<p>The city often hosts events, and Winterfest is the biggest annual one to catch with shows,
				music, performances, and installations.
			</p>
			<p>The food scene is alive and well in Hamilton, with cozy cafes, restaurants and bars with
				heated patios to welcome patrons in from the cold. To sample artisan cider head to West
				Avenue Cider at Somerset Orchards.
			</p>
			<p>The countryside setting is a charming place to have lunch and their food is as outstanding
				as their beverages. Dine outside in front of your private fire pit or stay cozy indoors,
				then stock up on cheese, baked goods and other treats at the bakery on your way out. For
				winter getaways near Toronto, Hamilton is calling.
			</p>

			
			<h3>5. London</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/london.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			${validate_component(VacationCTA, "VacationCTA").$$render($$result, {}, {}, {})}
			<p>In London, Ontario, you might run into out-of-town visitors from Toronto or other parts of
				Canada, overseas tourists or locals enjoying their backyard. There are heaps to see and do
				in the winter months, so for a unique winter getaway, you can\u2019t go wrong.
			</p>
			<p>There is a charming ice skating venue called Storybook Gardens. The 250-meter skate trail
				circles a play village with lots of appearances from storybook characters along the way.
				Victoria Park and Convent Garden Market are also wonderful for ice skating, with coffee and
				hot chocolate for sale on the sidelines. If you are more into skiing, tubing or
				snowboarding, Boler Mountain is the place to be.
			</p>
			<p>If you want to play inside, there are exciting options like rock climbing, axe throwing and
				escape rooms. Of course, as you would expect from a city setting, there are shopping
				entertainment and dining options to suit every budget. If you are vegan, London has a lively
				foodie scene catering for vegans and all kinds of healthy eats. Plant Matter Kitchen and
				Plant Matter Cafe serve up delicious offerings and The Tea Lounge is hot with tea lovers.
			</p>

			
			<h3>6. Whitby</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/whitby.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>Welcome to Whitby, a town with warm hospitality and charming character. You should know
				there are two downtown areas so be careful not to miss one. Downtown Whitby and Downtown
				Brooklin are both vibrant areas for dining, shopping and soaking in the arty atmosphere.
				Downtown Whitby has historical buildings and boutique stores, while Downtown Brooklin has
				spas and the Whitby Courthouse Theatre.
			</p>
			<p>The prettiest ice skating rinks are outdoors at Peel Park and Brooklin Memorial Park.
				Breathing in the fresh, crisp air while twirling on the ice is such an iconic wintertime
				activity, along with winter walks and hikes.
			</p>
			<p>The accommodation in Whitby is appealing, with many top-notch hotels, suites and lodges to
				call home for a short or long stay. Nothing beats a hotel with a hot tub or jacuzzi in
				winter and if you are looking for luxury, we recommend booking a few nights at the Residence
				Inn by Marriott Whitby.
			</p>
			<p>From there, it\u2019s not far to the Thermea Spa Village, where you can soak in therapeutic hot
				water and blissfully unwind and relax. With an underground floatation pool, rituals and
				treatments, and healthy food and drink options, you could easily pamper your soul for a
				whole day there. It\u2019s one of the many reasons people visit Whitby several times a year.
			</p>

			
			<h3>7. Kawartha Lakes</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/kawartha-lakes.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>The City of Kawartha Lakes is a place for nature lovers and adventurers. The great outdoors
				includes hiking trails, rivers and, of course, the lakes. You can get there in less than 2
				hours from Toronto, so why not plan a trip there soon? Snowshoeing, ice skating,
				snowmobiling, cross-country skiing and winter walks are some of the wintery activities that
				await you at Kawartha Lakes.
			</p>
			<p>Maple syrup is a major industry in the area, so there are plenty of farm tours and other
				sweet activities to sample and you will see it for sale all over the place. For sure, it
				will be on your pancakes served at the quaint bed and breakfast you stay at or the charming
				country cottage you book right on the lake.
			</p>
			<p>There are plenty of options with 250 lakes in the area if waking up with lake views sounds
				exciting. You can even stay on a houseboat which is a unique experience and rocking good
				time.
			</p>
			
			<h3>8. Brampton</h3>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/brampton.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>We call it beautiful Brampton and in winter, it\u2019s a wonderland. Walk around Gage Park, then
				visit the nearby Historic Bovaird House before going ice skating at indoor or outdoor rinks,
				including Gage Park and Gore Meadows. Brampton has many scenic places for winter hiking like
				Clairville and Heart Lake conservation areas and the Etobicoke Creek Trail.
			</p>
			<p>Go Canadian goose spotting during a walk around Professors Lake or sledding down Major Oaks
				Park hills for more fun outdoors.
			</p>
			<p>When it\u2019s time to warm up indoors, you have the Peel Art Gallery, Museum and Archives to
				explore and they are inside a gorgeous mix of 19th-century and modern buildings. Downtown
				you might catch a show at the Rose Theatre, a popular performing arts venue that always has
				something exciting going on, including big-screen movies and live events. When it\u2019s time for
				dinner, you are spoiled for choice with so many excellent restaurants all over the city.
			</p>
			<p>The Winter Lights Festival, usually in November, is always a great event if you are in town.
				Book your accommodation early for this one because it draws crowds from near and far. If you
				miss that, the whole downtown is decorated with lights for most of the winter. It\u2019s free and
				makes a lovely evening walk.
			</p>
			<p>In Canada, every season is quite dramatically different from the next. So anywhere you visit
				in winter will offer a different experience in the summer. That means if you have fun
				somewhere, you can start planning your next trip to see and do other things but maybe return
				to some of your favourite shops and restaurants.
			</p>
			
			<div class="${"bg-blue-50 border-l-4 border-pblue-400 p-3"}"><div class="${"flex"}"><div class="${"ml-3"}"><p class="${"prose text-pblue-800"}">Visit the Trip Support website or call our travel experts on <a href="${"#"}" class="${"font-medium underline text-pblue-700 hover:text-pblue-400"}">#1-855-606-0606
							</a> for more information on winter getaways near Toronto. They are always ready to help
							our clients plan their next epic vacation.
						</p></div></div></div>
			<div class="${"object-cover w-full"}">
				<img src="${"images/blog-post/blog-post-1.jpg"}" alt="${"Featured Image of blog post"}" class="${"rounded w-full object-cover aspect-[5/2]"}"></div>
			<p>The face of travel is changing rapidly. We are proudly leading the industry with an
				innovative and flexible Book Now, Pay Later option. You can buy the air ticket and vacation
				packages by putting down a small deposit to secure the services and pay the balance in
				installments. Flexibility and savings are just some of the benefits of flying with Trip
				Support.
			</p>

			
			<div class="${"bg-rose-50 border-l-4 border-rose-400 p-3"}"><div class="${"flex"}"><div class="${"ml-3"}"><p class="${"prose text-rose-700"}">We don&#39;t check credit scores so this payment <a href="${"#"}" class="${"font-medium underline text-rose-700 hover:text-rose-400"}">Book Now, Pay Later
							</a> method is available to everyone. You can book now and pay later in installments. There
							is no credit check with this fantastic pay later option.
						</p></div></div></div></article>
		</div></div>






<div class="${"bg-white overflow-hidden"}"><div class="${"container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32"}"><div class="${"flex flex-col md:flex-row md:items-center space-y-16 md:space-y-0 md:space-x-28"}">
			<div class="${"relative"}"><div class="${"absolute pattern-dots-lg text-gray-200 top-0 left-0 w-32 h-48 md:h-72 transform -translate-y-12 -translate-x-16 -rotate-3"}"></div>
				<div class="${"absolute pattern-dots-lg text-gray-200 bottom-0 right-0 w-32 h-48 md:h-72 transform translate-y-12 translate-x-16 rotate-3"}"></div>
				<div class="${"absolute rounded-3xl top-0 right-0 w-32 h-32 bg-rose-200 bg-opacity-50 -mt-10 -mr-10 transform -rotate-6"}"></div>
				<div class="${"absolute rounded-3xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-6"}"></div>
				
				<img src="${"images/blog-post/blog-post-1.jpg"}" alt="${"Hero Image"}" class="${"relative rounded-lg mx-auto shadow-lg w-full object-cover aspect-[5/2]"}"></div>
			

			<div class="${"space-y-10 w-full"}">
				<div><div class="${"text-sm font-semibold mb-1 text-pblue-700"}">Trip Support Flights, Hotels &amp; Vacation Deals
					</div>
					<h2 class="${"text-3xl md:text-4xl font-extrabold mb-4"}">Book with us and save</h2>
					<h3 class="${"text-lg md:text-xl md:leading-relaxed font-medium text-gray-600"}">Secure your flight ticket, hotel reservation, or your vacation trip with a small
						deposit. No Credit Check Needed.
					</h3></div>
				

				
				<div class="${"flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2"}"><a href="${"javascript:void(0)"}" class="${"inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded-full border-rose-600 bg-rose-600 text-white hover:text-white hover:bg-rose-700 hover:border-rose-700 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-600 active:border-rose-600"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"opacity-50 hi-solid hi-check inline-block w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"}" clip-rule="${"evenodd"}"></path></svg>
						<span>Book Now, Pay Later</span></a></div>
				</div></div></div></div>
`;
    });
  }
});

// .svelte-kit/output/server/nodes/25.js
var __exports26 = {};
__export(__exports26, {
  css: () => css29,
  entry: () => entry26,
  js: () => js26,
  module: () => blog_post_svelte_exports
});
var entry26, js26, css29;
var init__26 = __esm({
  ".svelte-kit/output/server/nodes/25.js"() {
    init_blog_post_svelte();
    entry26 = "pages/blog-post.svelte-efcd7c43.js";
    js26 = ["pages/blog-post.svelte-efcd7c43.js", "chunks/vendor-3e73c3b8.js", "chunks/HotelsIcon-bab37d2d.js"];
    css29 = [];
  }
});

// .svelte-kit/output/server/entries/pages/vacations.svelte.js
var vacations_svelte_exports = {};
__export(vacations_svelte_exports, {
  default: () => Vacations
});
var VacationsHero, StarRating, Cancun, MexicoSubTabs, Vacations;
var init_vacations_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/vacations.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_Subscribe_bb3f7014();
    init_BlogPosts_1de0bacf();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    VacationsHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"mx-auto max-w-7xl"}"><div class="${"grid grid-cols-1 md:grid-cols-12 h-[200px] md:h-[350px] lg:h-[400px]"}"><div class="${"col-span-1 sm:col-span-6 z-[1]"}"><div class="${"lg:pt-12 pb-4 sm:pb-2 px-4 sm:px-8"}"><h1 class="${"bg-gradient-to-r from-pblue-900 to-pred-900 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-4xl mt-4 tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xxl capitalize"}">Vacation packages
				</h1>
				<p class="${"prose text-sm sm:text-lg md:max-w-sm font-semibold text-slate-700"}">All-inclusive and affordable vacations
				</p></div></div>

		<div class="${"hidden sm:flex col-span-6"}"><div class="${"relative pb-8 bg-white sm:pb-16 md:pb-20"}"><svg class="${"block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"}" fill="${"currentColor"}" viewBox="${"0 0 100 100"}" preserveAspectRatio="${"none"}" aria-hidden="${"true"}"><polygon points="${"50,0 100,0 50,100 0,100"}"></polygon></svg></div>
			<div class="${"-mt-40 lg:-mt-10"}"><img class="${"max-w-7xl object-cover sm:h-72 md:h-1/2 lg:block lg:w-full lg:h-full"}" src="${"images/home/flights-section.jpg"}" alt="${""}"></div></div></div>
	</div>`;
    });
    StarRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"flex"}"><span class="${"inline-flex items-center px-2.5 py-0.5 rounded-full -ml-2.5 text-xs font-medium bg-yellow-300 text-black"}">5 star vacation
	</span></div>
<div class="${"flex justify-end"}"><svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg>

	<svg class="${"h-5 w-5 flex-shrink-0 text-yellow-300"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path d="${"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}"></path></svg></div>`;
    });
    Cancun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"relative bg-white"}"><div class="${"relative max-w-7xl mx-auto"}"><div class="${"mt-10 max-w-lg mx-auto grid gap-y-8 gap-x-7 lg:grid-cols-3 lg:max-w-none"}">
			<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}">
					
					<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/cancun.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
				<div class="${"flex p-6 flex-col"}"><div class="${"grid grid-cols-2 "}">${validate_component(StarRating, "StarRating").$$render($$result, {}, {}, {})}
						<div class="${"mt-3"}"><p class="${"text-sm font-medium text-gray-900"}"></p>
							<div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
								<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
								<span>Junior Suite</span></div></div></div>

					<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
								</p>
								<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
					<div class="${"flex justify-between flex-row-reverse mt-4 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
							</p>
							<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
						<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
							<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees
							</p></div></div></div></div>
			
			
			<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}">
					
					<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/mexico/vac7.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
				<div class="${"flex p-6 flex-col"}"><div class="${"grid grid-cols-2 "}">${validate_component(StarRating, "StarRating").$$render($$result, {}, {}, {})}
						<div class="${"mt-3"}"><p class="${"text-sm font-medium text-gray-900"}"></p>
							<div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
								<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
								<span>Junior Suite</span></div></div></div>

					<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
								</p>
								<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
					<div class="${"flex justify-between flex-row-reverse mt-4 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
							</p>
							<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
						<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
							<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees
							</p></div></div></div></div>
			
			
			<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}">
					
					<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/mexico/vac12.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
				<div class="${"flex p-6 flex-col"}"><div class="${"grid grid-cols-2 "}">${validate_component(StarRating, "StarRating").$$render($$result, {}, {}, {})}
						<div class="${"mt-3"}"><p class="${"text-sm font-medium text-gray-900"}"></p>
							<div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
								<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
								<span>Junior Suite</span></div></div></div>

					<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
								</p>
								<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
					<div class="${"flex justify-between flex-row-reverse mt-4 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
							</p>
							<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
						<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
							<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees
							</p></div></div></div></div>
			

			
			<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}">
					
					<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/mexico/vac18.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
				<div class="${"flex p-6 flex-col"}"><div class="${"grid grid-cols-2 "}">${validate_component(StarRating, "StarRating").$$render($$result, {}, {}, {})}
						<div class="${"mt-3"}"><p class="${"text-sm font-medium text-gray-900"}"></p>
							<div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
								<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
								<span>Junior Suite</span></div></div></div>

					<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
								</p>
								<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
					<div class="${"flex justify-between flex-row-reverse mt-4 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
							</p>
							<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
						<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
							<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees
							</p></div></div></div></div>
			
			
			<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}">
					
					<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/mexico/vac2.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
				<div class="${"flex p-6 flex-col"}"><div class="${"grid grid-cols-2 "}">${validate_component(StarRating, "StarRating").$$render($$result, {}, {}, {})}
						<div class="${"mt-3"}"><p class="${"text-sm font-medium text-gray-900"}"></p>
							<div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
								<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
								<span>Junior Suite</span></div></div></div>

					<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
								</p>
								<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
					<div class="${"flex justify-between flex-row-reverse mt-4 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
							</p>
							<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
						<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
							<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees
							</p></div></div></div></div>
			
			
			<div class="${"flex flex-col rounded-lg shadow-lg overflow-hidden"}"><div class="${"flex-shrink-0"}">
					
					<div class="${"overflow-hidden relative h-32 rounded-t-lg sm:h-64 xl:h-80 2xl:h-48"}"><img src="${"images/vacations/mexico/vac22.jpg"}" class="${"block absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"}" alt="${"..."}"></div></div>
				<div class="${"flex p-6 flex-col"}"><div class="${"grid grid-cols-2 "}">${validate_component(StarRating, "StarRating").$$render($$result, {}, {}, {})}
						<div class="${"mt-3"}"><p class="${"text-sm font-medium text-gray-900"}"></p>
							<div class="${"flex space-x-2 text-xs text-slate-800"}"><span class="${"font-semibold"}">All Inclusive </span>
								<span class="${"h-4 my-auto w-px bg-gray-200"}" aria-hidden="${"true"}"></span>
								<span>Junior Suite</span></div></div></div>

					<div class="${"flex flex-col"}"><div><a href="${"#"}" class="${"block mt-4 capitalize prose"}"><p class="${"text-xl font-bold text-slate-900 m-0 truncate leading-tight"}">Grand Sunset Princess All Suites &amp; Spa
								</p>
								<p class="${"text-tiny font-medium m-0"}">Cancun, Mexico</p></a></div></div>
					<div class="${"flex justify-between flex-row-reverse mt-4 items-center"}"><div class="${"text-right"}"><p class="${"text-xl text-slate-900 font-bold mb-0"}"><span class="${"font-normal text-tiny"}">CA </span>$1846.70
							</p>
							<p class="${"text-xx font-light -mt-1"}">per guest</p></div>
						<div class="${"text-left pt-2"}"><p class="${"capitalize text-xz font-semibold text-slate-900"}">April 6, 2022 (7 days)</p>
							<p class="${"capitalize text-xs font-light text-slate-900"}">price includes taxes and fees
							</p></div></div></div></div>
			
			${``}</div>
		<div class="${"flex justify-center mt-10 w-full"}"><button type="${"button"}" class="${"text-center items-center w-48 px-3.5 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"}">View more
			</button></div></div></div>`;
    });
    MexicoSubTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4"}"><button type="${"button"}" class="${"my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Acapulco
		<span class="${"hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block " + escape("text-white bg-pblue-800 ")}">6</span></button>

	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("text-white bg-pblue-800 border-white shadow-none")}">Cancun
		<span class="${"hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block " + escape("text-slate-900 bg-white border-pblue-500 shadow-none")}">12</span></button>

	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Los Cabos
		<span class="${"hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block " + escape("text-white bg-pblue-800")}">9</span></button>
	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Puerto Vallarta
		<span class="${"hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block " + escape("text-white bg-pblue-800")}">5</span></button>
	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Riviera Maya
		<span class="${"hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block " + escape("text-white bg-pblue-800")}">18</span></button></div>
${``}
${`${validate_component(Cancun, "Cancun").$$render($$result, {}, {}, {})}`}
${``}
${``}
${``}`;
    });
    Vacations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(VacationsHero, "VacationsHero").$$render($$result, {}, {}, {})}

${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

<div class="${"mx-auto max-w-7xl p-6"}">
	<section id="${"popular_vacations"}" class="${"relative mb-6"}"><div class="${"text-left"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Popular Vacations</span>
					</h1></div>
			<div class="${"max-w-5xl"}"><p class="${"mt-2 text-base text-gray-700 sm:mt-3 md:mt-3 md:text-md lg:mx-0"}">Special offers from resorts and hotels across North America, South America, the Caribbean,
					Europe, Africa, the Middle East, and Asia.
				</p></div></div></section>
	<section class="${"relative"}" aria-labelledby="${"contact-heading"}"><div class="${"flex flex-col rounded-xl bg-white w-full "}"><nav class="${"overflow-x-scroll lg:overflow-hidden flex items-center sm:justify-start border-b border-gray-200 space-x-8 sm:space-x-12"}"><button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-pblue-800 border-b-2 border-pblue-800 font-bold")}"><img src="${"icons/countries/mexico.svg"}" alt="${"mexico flag"}" class="${"w-5 mr-2"}">
					Mexico
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/cuba.svg"}" alt="${"cuba flag"}" class="${"w-5 mr-2"}">
					Cuba
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex whitespace-nowrap items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/dominican-republic.svg"}" alt="${"dominican-republic flag"}" class="${"w-5 mr-2"}">
					Dominican Rep
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/jamaica.svg"}" alt="${"jamaica flag"}" class="${"w-5 mr-2"}">
					Jamaica
				</button>

				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/usa.svg"}" alt="${"usa flag"}" class="${"w-5 mr-2"}">
					Florida
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/hawaii.svg"}" alt="${"mexico flag"}" class="${"w-5 mr-2"}">
					Hawaii
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/sun.svg"}" alt="${"mexico flag"}" class="${"w-5 mr-2"}">
					Caribbean
				</button></nav>

			

			
			<div class="${"py-1 mb-2 lg:pb-4 "}">${`${validate_component(MexicoSubTabs, "MexicoSubTabs").$$render($$result, {}, {}, {})}`}
				${``}
				${``}
				${``}
				${``}
				${``}
				${``}
				</div>
			</div></section></div>

<section class="${"relative my-3"}">${validate_component(BlogPosts, "BlogPosts").$$render($$result, {}, {}, {})}</section>
<section class="${"relative my-3"}">${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/26.js
var __exports27 = {};
__export(__exports27, {
  css: () => css30,
  entry: () => entry27,
  js: () => js27,
  module: () => vacations_svelte_exports
});
var entry27, js27, css30;
var init__27 = __esm({
  ".svelte-kit/output/server/nodes/26.js"() {
    init_vacations_svelte();
    entry27 = "pages/vacations.svelte-225e85f3.js";
    js27 = ["pages/vacations.svelte-225e85f3.js", "chunks/vendor-3e73c3b8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/Subscribe-39a11f67.js", "chunks/BlogPosts-8d357881.js"];
    css30 = [];
  }
});

// .svelte-kit/output/server/entries/pages/about-us.svelte.js
var about_us_svelte_exports = {};
__export(about_us_svelte_exports, {
  default: () => About_us
});
var AboutSvg, About_us;
var init_about_us_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/about-us.svelte.js"() {
    init_index_77482e32();
    AboutSvg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg width="${"134"}" height="${"106"}" viewBox="${"0 0 134 106"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"1.66667"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 31 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3334"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 60.3334 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 103 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"104"}" r="${"1.66667"}" transform="${"rotate(-90 132 104)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"89.3333"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 89.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"89.3333"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 89.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"89.3333"}" r="${"1.66667"}" transform="${"rotate(-90 31 89.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"89.3333"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 89.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"89.3338"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 89.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"89.3338"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 89.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"89.3338"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 89.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"89.3338"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 89.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"89.3338"}" r="${"1.66667"}" transform="${"rotate(-90 103 89.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"89.3338"}" r="${"1.66667"}" transform="${"rotate(-90 132 89.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"74.6673"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 74.6673)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"31.0003"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 31.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"31.0003"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 31.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 31 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"31.0003"}" r="${"1.66667"}" transform="${"rotate(-90 31 31.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"31.0003"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 31.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"30.9998"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 30.9998)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"30.9998"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 30.9998)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"30.9998"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 30.9998)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"30.9998"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 30.9998)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 103 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"30.9998"}" r="${"1.66667"}" transform="${"rotate(-90 103 30.9998)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"74.6668"}" r="${"1.66667"}" transform="${"rotate(-90 132 74.6668)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"30.9998"}" r="${"1.66667"}" transform="${"rotate(-90 132 30.9998)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 31 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 31 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 103 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 103 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"60.0003"}" r="${"1.66667"}" transform="${"rotate(-90 132 60.0003)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"16.3333"}" r="${"1.66667"}" transform="${"rotate(-90 132 16.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"45.3333"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 45.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"1.66667"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 1.66667 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"45.3333"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 45.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"16.3333"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 16.3333 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"45.3333"}" r="${"1.66667"}" transform="${"rotate(-90 31 45.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"31"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 31 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"45.3333"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 45.3333)"}" fill="${"#3056D3"}"></circle><circle cx="${"45.6667"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 45.6667 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"45.3338"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 45.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"60.3333"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 60.3333 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"45.3338"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 45.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"88.6667"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 88.6667 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"45.3338"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 45.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"117.667"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 117.667 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"45.3338"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 45.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"74.6667"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 74.6667 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"45.3338"}" r="${"1.66667"}" transform="${"rotate(-90 103 45.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"103"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 103 1.66683)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"45.3338"}" r="${"1.66667"}" transform="${"rotate(-90 132 45.3338)"}" fill="${"#3056D3"}"></circle><circle cx="${"132"}" cy="${"1.66683"}" r="${"1.66667"}" transform="${"rotate(-90 132 1.66683)"}" fill="${"#3056D3"}"></circle></svg>`;
    });
    About_us = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"mx-auto max-w-7xl p-4"}">
	<section class="${"pt-10 lg:pt-20 pb-6 lg:pb-16 overflow-hidden"}"><div class="${"container"}"><div class="${"flex flex-wrap justify-between items-center"}"><div class="${"w-full lg:w-7/12 xl:w-7/12 px-4"}"><div class="${"lg:mt-0 prose"}"><h2 class="${"text-sm font-semibold tracking-wide uppercase"}"><span class="${"bg-gradient-to-r from-slate-900 to-rose-600 bg-clip-text text-transparent"}">Trip Support</span></h2>
						<h2 class="${"text-3xl md:text-4xl font-extrabold mb-4 mt-0"}">About Us</h2>
						<p class="${"text-base font-semibold text-gray-700"}">We\u2019re a North American travel company established in Canada and the USA, that
							specializes in flight, tours, and vacation packages.
						</p>
						<p class="${"text-base text-gray-700"}">Here at Trip Support, we believe that travel should be affordable for all.
						</p>
						<p class="${"text-base text-gray-700"}">By establishing positive and lasting relationships with clients, utilizing
							state-of-the-art technology, and providing service beyond reproach, we make that
							belief a reality.
						</p></div></div>
				<div class="${"w-full lg:w-5/12 px-4"}"><div class="${"flex items-center -mx-3 sm:-mx-4"}"><div class="${"w-full xl:w-1/2 px-3 sm:px-4"}"><div class="${"py-3 sm:py-4"}"><img src="${"/images/about/flight.jpg"}" alt="${""}" class="${"rounded-2xl w-full"}"></div>
							<div class="${"py-3 sm:py-4"}"><img src="${"/images/about/hotel.jpg"}" alt="${""}" class="${"rounded-2xl w-full"}"></div></div>
						<div class="${"w-full xl:w-1/2 px-3 sm:px-4"}"><div class="${"my-4 relative z-10"}"><img src="${"/images/about/vacation.jpg"}" alt="${""}" class="${"rounded-2xl w-full"}">
								<span class="${"absolute -right-7 -bottom-7 z-[-1]"}">${validate_component(AboutSvg, "AboutSvg").$$render($$result, {}, {}, {})}</span></div></div></div></div></div></div></section>
	</div>


<div class="${"bg-white overflow-hidden"}"><div class="${"container xl:max-w-7xl mx-auto px-4 py-12 lg:px-8 "}"><div class="${"flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20"}"><div class="${"lg:w-1/3 flex-none relative"}"><div class="${"pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"}"></div>
				<div class="${"pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"}"></div>
				
				<img src="${"/images/about/office.jpg"}" alt="${"Preview Feature Image"}" class="${"relative rounded-lg shadow-xl mx-auto"}"></div>
			<div class="${"lg:w-2/3 md:py-12 space-y-10"}">
				<div class="${"prose"}"><h2 class="${"text-3xl md:text-4xl font-extrabold mb-4 mt-0"}">Our Mission</h2>
					<p class="${"text-gray-700"}">Our mission at Trip Support is to provide its clients with the best convenient and
						economical solutions for their travel and vacation requirements.
					</p>
					<p class="${"text-gray-700"}">Trip Support uses up-to-date technology and financing tools that provide clients with
						the best possible travel solutions. We offer high-quality, personalized, and tailor-made
						services and packages at the best possible prices. Trip Support prides itself on its
						outstanding client care, best available rates, deals, and easy payment methods. With
						these tools and skills, we establish positive and lasting relationships with clients. We
						are committed to providing our guests with the best possible travel and vacations
						experiences.
					</p>
					<p class="${"text-gray-700"}">Trip Support offers a unique travel financing service program that makes payments easy
						for everyone. We use a \u201CBook Now, Pay Later\u201D approach, where payments can be made in
						easy installments. Uniquely, we offer this approach without the need for credit checks
						and extra boring, time-consuming documentation. <span class="${"font-bold"}">We believe that people should be able to travel regardless of their credit score.
						</span></p></div>
				</div></div></div></div>


<div class="${"bg-white overflow-hidden"}"><div class="${"container xl:max-w-7xl mx-auto px-4 py-12 lg:px-8 "}"><div class="${"flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20"}"><div class="${"lg:w-9/12 md:py-12 space-y-10"}">
				<div class="${"prose"}"><h2 class="${"text-3xl md:text-4xl font-extrabold mb-4 mt-0"}">Our Brand</h2>
					<p class="${"text-gray-700"}">Trip Support is an incorporation (INC) that was established in 2014 in Toronto, Canada.
						In 2019, we expanded our service to American travelers by establishing a branch in
						Newport Beach, California.
					</p>
					<p class="${"text-gray-700"}">Trip Support is one of the fastest-growing travel agencies in North America. At the core
						of our brand, we believe in making travel simple and easy for all our clients. Today,
						our multinational business structure is a testament to its CEO\u2019s long-standing vision of
						making \u201Ctravel affordable for all.\u201D
					</p>
					<p class="${"text-gray-700"}">Trip Support offers a unique travel financing service program that makes payments easy
						for everyone. We use a \u201CBook Now, Pay Later\u201D approach, where payments can be made in
						easy installments. Uniquely, we offer this approach without the need for credit checks
						and extra boring, time-consuming documentation. <span class="${"font-bold"}">We believe that people should be able to travel regardless of their credit score.
						</span></p></div>
				</div>
			<div class="${"lg:w-1/3 flex-none relative"}"><div class="${"pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"}"></div>
				<div class="${"pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"}"></div>
				
				<img src="${"logo.svg"}" alt="${"Preview Feature Image"}" class="${"relative mx-auto"}"></div></div></div></div>


<div class="${"relative bg-gray-900"}"><div class="${"h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full"}"><div class="${"h-full w-full xl:grid xl:grid-cols-2"}"><div class="${"h-full xl:relative xl:col-start-2"}"><img class="${"h-full w-full object-cover object-center opacity-40 xl:absolute xl:inset-0"}" src="${"/images/about/tripsupport-team.jpg"}" alt="${"People working on laptops"}">
				<div aria-hidden="${"true"}" class="${"absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-92 xl:bg-gradient-to-r"}"></div></div></div></div>
	<div class="${"max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-3 xl:grid-flow-col-dense xl:gap-x-8"}"><div class="${"relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 col-span-2 xl:pb-24 prose max-w-prose"}"><h3 class="${"mt-3 text-3xl leading-normal tracking-wide font-bold text-white"}">Our Entity</h3>
			<p class="${"border-gray-50 text-slate-100 font-light"}">We have grown substantially since our opening in 2014. Thanks to our state-of-the-art
				services, we went from about $165,000 in revenue in 2014 to about $22.5M CAD in 2019, which
				shows an average growth rate of over 2000%.
			</p>
			<p class="${"border-gray-50 text-slate-100 font-light"}">One of our early insights was to formulate a novel travel financing service. We started our
				\u201CBook Now, Pay Later\u201D service in 2015, which made us extremely competitive in the travel
				sector. We offer this service without the need for credit checks, which allows our customers
				to travel even if they have poor credit scores. We have also continued to develop our
				expertise in all aspects of travel by focusing on specific fields such as corporate
				services, leisure, special &amp; tailor-made packages, and luxury travel services to ensure
				rapid and substantial growth.
			</p>
			<p class="${"border-gray-50 text-slate-100 font-light"}">Trip Support has become a well-known entity in Canada. We have expanded our business to
				include not only corporate businesses but also immigrant communities. Our services to
				European and Asian visitors have provided us with an international presence.
			</p>
			<p class="${"border-gray-50 text-slate-100 font-light"}">In addition to our base services, we have added an airline ticketing facility and individual
				customized travel planning. These were done with a personalized service approach,
				consistently a key element in Trip Support&#39;s delivery of travel arrangements. Trip Support
				is also focused on adding new products and services such as &quot;Things to Do,&quot; which will give
				our customers an option to book day tours, entry tickets, and much more.
			</p>
			<p class="${"border-gray-50 text-slate-100 font-light"}">At Trip Support, we believe that you should be able to go on the vacation of your dreams, no
				matter who you are.
			</p></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/27.js
var __exports28 = {};
__export(__exports28, {
  css: () => css31,
  entry: () => entry28,
  js: () => js28,
  module: () => about_us_svelte_exports
});
var entry28, js28, css31;
var init__28 = __esm({
  ".svelte-kit/output/server/nodes/27.js"() {
    init_about_us_svelte();
    entry28 = "pages/about-us.svelte-05a6032b.js";
    js28 = ["pages/about-us.svelte-05a6032b.js", "chunks/vendor-3e73c3b8.js"];
    css31 = [];
  }
});

// .svelte-kit/output/server/entries/pages/explore.svelte.js
var explore_svelte_exports = {};
__export(explore_svelte_exports, {
  default: () => Explore
});
var Explore;
var init_explore_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/explore.svelte.js"() {
    init_index_77482e32();
    Explore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return ``;
    });
  }
});

// .svelte-kit/output/server/nodes/28.js
var __exports29 = {};
__export(__exports29, {
  css: () => css32,
  entry: () => entry29,
  js: () => js29,
  module: () => explore_svelte_exports
});
var entry29, js29, css32;
var init__29 = __esm({
  ".svelte-kit/output/server/nodes/28.js"() {
    init_explore_svelte();
    entry29 = "pages/explore.svelte-c3b0f66b.js";
    js29 = ["pages/explore.svelte-c3b0f66b.js", "chunks/vendor-3e73c3b8.js"];
    css32 = [];
  }
});

// .svelte-kit/output/server/entries/pages/flights.svelte.js
var flights_svelte_exports = {};
__export(flights_svelte_exports, {
  default: () => Flights
});
var LottieFlights, FlightHero, FlightDeals, Flights;
var init_flights_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/flights.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_BlogPosts_1de0bacf();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    LottieFlights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${``}`;
    });
    FlightHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `


<div class="${"mx-auto max-w-7xl"}"><div class="${"grid grid-cols-1 md:grid-cols-12 h-[200px] md:h-[350px] lg:h-[400px]"}"><div class="${"col-span-1 sm:col-span-6"}"><div class="${"lg:pt-12 pb-2 px-4 sm:px-8 z-10 "}"><h1 class="${"bg-gradient-to-r from-pblue-900 to-pred-900 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-4xl mt-4 tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xxl capitalize"}">Amazing Flight Deals
				</h1>
				<p class="${"hidden md:flex prose text-sm sm:text-lg max-w-sm font-semibold text-slate-700"}">Fly anywhere in the world stress-free
				</p></div></div>

		<div class="${"hidden md:flex sm:col-span-6"}"><div class="${"justify-self-end "}">${validate_component(LottieFlights, "LottieFlights").$$render($$result, {}, {}, {})}</div></div>

		<div class="${"md:hidden absolute top-32 col-span-1"}">${validate_component(LottieFlights, "LottieFlights").$$render($$result, {}, {}, {})}</div></div></div>`;
    });
    FlightDeals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-white overflow-hidden"}"><div class="${"max-w-7xl mx-auto"}"><div id="${"popular_flights"}" class="${"relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-12 xl:pb-12"}"><div class="${"mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 "}"><div class="${"text-left"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Popular Flight Deals</span>
							</h1></div>
					<div class="${"max-w-5xl"}"><p class="${"mt-2 text-base text-gray-700 sm:mt-3 md:mt-3 md:text-md lg:mx-0"}">Trip Support is here to connect you to the rest of the world at a rate you can afford.
							We offer tons of flights packages and other flight deals that are tailored to your
							wants and needs as a traveller. All you need to do is pick a flight that works for
							you, and we\u2019ll do the rest.
						</p></div>

					<div class="${"mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-y-10 "}"><div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/alberta.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Alberta
									</a></h3>
								<p>$249</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div>

						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/california.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										California
									</a></h3>
								<p>$540</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/montreal.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Montreal
									</a></h3>
								<p>$199</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">One-way</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/newyork.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										New York
									</a></h3>
								<p>$129</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">One-way</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/singapore.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Singapore
									</a></h3>
								<p>$789</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/vancouver.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Vancouver
									</a></h3>
								<p>$349</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/vancouver.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Vancouver
									</a></h3>
								<p>$349</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div>
						<div class="${"relative group"}"><div class="${"aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2 rounded-lg overflow-hidden bg-gray-100"}"><img src="${"images/home/vancouver.jpg"}" alt="${"Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."}" class="${"object-center object-cover"}">
								<div class="${"flex items-end opacity-0 p-4 group-hover:opacity-100"}" aria-hidden="${"true"}"><div class="${"w-full bg-white backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"}">View Deal
									</div></div></div>
							<div class="${"mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8"}"><h3><a href="${"javascript:void(0)"}"><span aria-hidden="${"true"}" class="${"absolute inset-0"}"></span>
										Vancouver
									</a></h3>
								<p>$349</p></div>
							<p class="${"mt-1 text-sm text-gray-500"}">Round trip</p></div></div></div></div></div></div></div>`;
    });
    Flights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(FlightHero, "FlightHero").$$render($$result, {}, {}, {})}
${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}
${validate_component(FlightDeals, "FlightDeals").$$render($$result, {}, {}, {})}
${validate_component(BlogPosts, "BlogPosts").$$render($$result, {}, {}, {})}
${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/29.js
var __exports30 = {};
__export(__exports30, {
  css: () => css33,
  entry: () => entry30,
  js: () => js30,
  module: () => flights_svelte_exports
});
var entry30, js30, css33;
var init__30 = __esm({
  ".svelte-kit/output/server/nodes/29.js"() {
    init_flights_svelte();
    entry30 = "pages/flights.svelte-0de183f5.js";
    js30 = ["pages/flights.svelte-0de183f5.js", "chunks/vendor-3e73c3b8.js", "chunks/preload-helper-e4860ae8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/BlogPosts-8d357881.js", "chunks/Subscribe-39a11f67.js"];
    css33 = [];
  }
});

// .svelte-kit/output/server/entries/pages/hotels.svelte.js
var hotels_svelte_exports = {};
__export(hotels_svelte_exports, {
  default: () => Hotels
});
var LottieHotels, HotelsHero, Toronto, CanadaSubTabs, Hotels;
var init_hotels_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/hotels.svelte.js"() {
    init_index_77482e32();
    init_BookingWidget_9bbd6ea9();
    init_BlogPosts_1de0bacf();
    init_Subscribe_bb3f7014();
    init_HotelsIcon_f7770270();
    init_OutClick_6647c5ef();
    init_index_02f50c33();
    LottieHotels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${``}


`;
    });
    HotelsHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"mx-auto max-w-7xl"}"><div class="${"grid grid-cols-1 md:grid-cols-12 h-[200px] md:h-[350px] lg:h-[400px]"}"><div class="${"col-span-1 sm:col-span-6"}"><div class="${"lg:pt-12 pb-6 sm:pb-2 px-4 sm:px-8"}"><h1 class="${"bg-gradient-to-r from-pblue-900 to-pred-900 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-4xl mt-4 tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xxl capitalize"}"><span class="${"flex"}">Longing for a Getaway?</span></h1>
				<p class="${"prose text-sm sm:text-lg md:max-w-sm font-semibold text-slate-700"}">We will find the hotel that best suits you
				</p></div></div>

		
		<div class="${"hidden md:flex col-span-6"}"><div class="${"xl:-mt-[192px] lg:-mt-[120px] md:-mt-[30px] mr-[44px]"}">${validate_component(LottieHotels, "LottieHotels").$$render($$result, {}, {}, {})}</div></div>
		</div></div>`;
    });
    Toronto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 lg:gap-x-6 lg:gap-y-4"}">
	<div class="${"flex flex-col rounded-lg shadow-sm bg-white overflow-hidden sm:row-span-3"}">
		<div class="${"aspect-w-2 aspect-h-1"}"><img src="${"images/hotels/toronto-downtown.jpg"}" alt="${"Downtown Toronto"}"></div>
		

		
		<div class="${"p-4 w-full mb-4"}"><p class="${"font-semibold text-tiny mb-1 text-rose-600"}">Toronto ON</p>
			<h3 class="${"font-bold text-pblue-900 text-xl mb-2"}">Luxury Hotels in Downtown Toronto</h3>
			<p class="${"prose"}">Inventore molestiae aliquam hic, adipisci blanditiis provident iusto rerum. Asperiores
				deserunt quae qui repellat assumenda.
			</p></div>
		

		
		<div class="${"py-4 px-5 lg:px-6 w-full flex items-center bg-gray-50"}"><div class="${"grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"}"><div class="${"col-span-1 flex justify-center md:col-span-2 lg:col-span-1"}"><img class="${"h-12"}" src="${"logos/radisson.svg"}" alt="${"Tuple"}"></div>
				<div class="${"col-span-1 flex justify-center md:col-span-2 lg:col-span-1"}"><img class="${"h-12"}" src="${"logos/hilton.svg"}" alt="${"Mirage"}"></div>
				<div class="${"col-span-1 flex justify-center md:col-span-2 lg:col-span-1"}"><img class="${"h-12"}" src="${"logos/ritz-carlton.svg"}" alt="${"StaticKit"}"></div>
				<div class="${"col-span-1 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"logos/shangri-la.svg"}" alt="${"Transistor"}"></div>
				<div class="${"col-span-2 flex justify-center md:col-span-3 lg:col-span-1"}"><img class="${"h-12"}" src="${"logos/westin.svg"}" alt="${"Workcation"}"></div></div></div>

		</div>
	
	
	<div class="${"flex flex-col rounded-lg shadow-sm border bg-white overflow-hidden sm:flex-row sm:row-span-1"}"><div class="${"h-60 sm:h-auto sm:w-[40%] bg-cover bg-center"}" style="${"background-image: url('images/hotels/blue-mountain.jpg');"}"></div>
		<div class="${"p-4 grow w-full sm:w-[60%]"}"><p class="${"font-semibold text-xz mb-1 text-rose-600"}">Collingwood, ON</p>
			<h3 class="${"font-bold text-pblue-900 text-lg mb-2"}">Blue Mountain Ski Resort</h3>
			<p class="${"text-slate-700 text-sz "}">Inventore molestiae aliquam hic, adipisci blanditiis provident iusto rerum. Asperiores
			</p>
			
			<div class="${"truncate"}"><span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Ski Resort
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Family Friendly
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Outdoors
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Equipment Rental
				</span></div></div></div>

	
	<div class="${"flex flex-col rounded-lg shadow-sm border bg-white overflow-hidden sm:flex-row sm:row-span-1"}"><div class="${"h-60 sm:h-auto sm:w-[40%] bg-cover bg-center"}" style="${"background-image: url('images/hotels/niagara-falls.jpg');"}"></div>
		<div class="${"p-4 grow w-full sm:w-[60%]"}"><p class="${"font-semibold text-xz mb-1 text-rose-600"}">Niagara Falls, ON</p>
			<h3 class="${"font-bold text-pblue-900 text-lg mb-2"}">Niagara Falls Hotels</h3>
			<p class="${"text-slate-700 text-sz"}">Inventore molestiae aliquam hic, adipisci blanditiis provident iusto rerum. Asperiores
			</p>
			
			<div class="${"truncate"}"><span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Tourism
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Niagara Falls
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Family Friendly
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Attractions
				</span></div></div></div>
	
	<div class="${"flex flex-col rounded-lg shadow-sm border bg-white overflow-hidden sm:flex-row sm:row-span-1"}"><div class="${"h-60 sm:h-auto sm:w-[40%] bg-cover bg-center"}" style="${"background-image: url('images/hotels/muskoka.jpg');"}"></div>
		<div class="${"p-4 grow w-full sm:w-[60%]"}"><p class="${"font-semibold text-xz mb-1 text-rose-600"}">Minett, ON</p>
			<h3 class="${"font-bold text-pblue-900 text-lg mb-2"}">JW Marriott The Rosseau</h3>
			<p class="${"text-slate-700 text-sz"}">Let luxury surround you at JW Marriott The Rosseau Muskoka Resort &amp; Spa.
			</p>
			
			<div class="${"truncate"}"><span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Luxury Hotel
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Hotel
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Family &amp; Pet Friendly
				</span>
				<span class="${"mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Family &amp; Pet Friendly
				</span></div></div></div></div>`;
    });
    CanadaSubTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4"}"><button type="${"button"}" class="${"my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("text-white bg-pblue-800 border-white shadow-none")}">Toronto
	</button>

	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Montreal
	</button>

	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Vancouver
	</button>
	<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Banff
	</button></div>
${`${validate_component(Toronto, "Toronto").$$render($$result, {}, {}, {})}`}
${``}
${``}
${``}`;
    });
    Hotels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(HotelsHero, "HotelsHero").$$render($$result, {}, {}, {})}
${validate_component(BookingWidget, "BookingWidget").$$render($$result, {}, {}, {})}

<div class="${"mx-auto max-w-7xl p-6"}">
	<section class="${"relative mb-6"}"><div class="${"text-left"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Trending Hotel Destinations</span>
					</h1></div>
			<p class="${"mt-2 text-md text-gray-500 sm:mt-3 sm:text-md sm:max-w-prose md:mt-3 md:text-md lg:mx-0"}">Explore destinations currently popular with travelers across Canada.
			</p></div></section>
	<section class="${"relative"}" aria-labelledby="${"contact-heading"}"><div class="${"flex flex-col rounded-xl bg-white w-full "}"><nav class="${"overflow-x-scroll lg:overflow-hidden flex items-center sm:justify-between border-b border-gray-200 space-x-8"}"><button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-pblue-800 border-b-2 border-pblue-800 font-bold")}"><img src="${"icons/countries/canada.svg"}" alt="${"mexico flag"}" class="${"w-5 mr-2"}">
					Canada
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex whitespace-nowrap items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/usa.svg"}" alt="${"usa flag"}" class="${"w-5 mr-2"}">
					United States
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex whitespace-nowrap items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/france.svg"}" alt="${"france flag"}" class="${"w-5 mr-2"}">
					France
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/spain.svg"}" alt="${"spain flag"}" class="${"w-5 mr-2"}">
					Spain
				</button>

				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/china.svg"}" alt="${"china flag"}" class="${"w-5 mr-2"}">
					China
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/italy.svg"}" alt="${"italy flag"}" class="${"w-5 mr-2"}">
					Italy
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/turkey.svg"}" alt="${"turkey flag"}" class="${"w-5 mr-2"}">
					Turkey
				</button>
				<button type="${"button"}" class="${"text-tiny px-2 md:px-6 flex items-center py-3 capitalize " + escape("text-gray-700 hover:text-pblue-800 font-semibold")}"><img src="${"icons/countries/germany.svg"}" alt="${"germany flag"}" class="${"w-5 mr-2"}">
					Germany
				</button></nav>

			

			
			<div class="${"py-1 mb-2 lg:pb-4 "}">${`${validate_component(CanadaSubTabs, "CanadaSubTabs").$$render($$result, {}, {}, {})}`}
				${``}
				${``}
				${``}
				${``}
				${``}
				${``}
				${``}
				</div>
			</div></section></div>

<section class="${"relative my-3"}">${validate_component(BlogPosts, "BlogPosts").$$render($$result, {}, {}, {})}</section>
<section class="${"relative my-3"}">${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/30.js
var __exports31 = {};
__export(__exports31, {
  css: () => css34,
  entry: () => entry31,
  js: () => js31,
  module: () => hotels_svelte_exports
});
var entry31, js31, css34;
var init__31 = __esm({
  ".svelte-kit/output/server/nodes/30.js"() {
    init_hotels_svelte();
    entry31 = "pages/hotels.svelte-08d3ab88.js";
    js31 = ["pages/hotels.svelte-08d3ab88.js", "chunks/vendor-3e73c3b8.js", "chunks/preload-helper-e4860ae8.js", "chunks/BookingWidget-a2aa15f8.js", "chunks/HotelsIcon-bab37d2d.js", "chunks/BlogPosts-8d357881.js", "chunks/Subscribe-39a11f67.js"];
    css34 = [];
  }
});

// .svelte-kit/output/server/entries/pages/blog.svelte.js
var blog_svelte_exports = {};
__export(blog_svelte_exports, {
  default: () => Blog
});
var BlogHeader, BlogTop, BlogCanada, PopularPostsCanada, BlogPosts2, Blog;
var init_blog_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/blog.svelte.js"() {
    init_index_77482e32();
    init_Subscribe_bb3f7014();
    BlogHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative pb-28 lg:pb-20 bg-gray-800"}"><div class="${"absolute inset-0"}"><img class="${"w-full h-full object-cover"}" src="${"images/blog/travel-guide.jpg"}" alt="${""}">
		<div class="${"absolute inset-0 bg-gray-800 opacity-75 mix-blend-multiply"}" aria-hidden="${"true"}"></div></div>
	<div class="${"relative max-w-7xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:px-8 text-center"}"><h1 class="${"text-2xl text-center font-extrabold text-white md:text-4xl lg:text-5xl"}">Your Travel Guide to the World
		</h1>
		<p class="${"my-4 sm:my-6 text-tiny sm:text-xl text-gray-300"}">Discover holiday ideas, guides, and stories unique to your next getaway
		</p>

		
		<div class="${"max-w-xs mx-auto w-full lg:max-w-md"}"><label for="${"search"}" class="${"sr-only"}">Search</label>
			<div class="${"relative text-white focus-within:text-gray-600"}"><div class="${"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"}">
					<svg class="${"h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></div>
				<input id="${"search"}" class="${"block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"}" placeholder="${"Search"}" type="${"search"}" name="${"search"}"></div></div></div></div>`;
    });
    BlogTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<section class="${"-mt-32 max-w-7xl mx-auto relative z-10 pb-12 sm:pb-20 px-4 lg:px-0"}" aria-labelledby="${"contact-heading"}"><h2 class="${"sr-only"}" id="${"contact-heading"}">Contact us</h2>
	<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 lg:gap-8 sm:px-4"}">
		<div class="${"flex flex-col bg-white rounded-2xl shadow-xl"}"><div class="${"flex-shrink-0"}"><img class="${"rounded-t-lg h-48 w-full object-cover"}" src="${"images/blog/places-canada.jpg"}" alt="${""}"></div>
			<div class="${"flex-1 bg-white px-6 pt-6 pb-4 flex flex-col justify-between"}"><div class="${"flex-1"}"><p class="${"text-sm font-medium text-pink-600"}">Canada</p>

					<a href="${"/blog-post"}" class="${"block mt-2"}"><p class="${"text-lg lg:text-lg font-semibold text-pblue-900 line-clamp-1 capitalize"}">The top 15 places to see in Canada and the things you can do
						</p>
						<p class="${"mt-3 prose text-tiny text-slate-700 line-clamp-2"}">Looking for travelling to Mexico tips? Mexico is a colourful, vibrant country full of
							history, culture, nature and some Looking for travelling to Mexico tips? Mexico is a
							colourful, vibrant country full of history, culture, nature and some
						</p></a></div>

				<div class="${"mt-2 block overflow-hidden line-clamp-1"}"><span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Ski Resort
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Family Friendly
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Outdoors
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Equipment Rental
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Equipment Rental
					</span></div>
				<div class="${"mt-6 flex items-center"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p></div></div>

			<div class="${"p-3 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"}"><a href="${"#"}" class="${"text-sz font-bold text-slate-700 hover:text-slate-900"}">Explore Canada <span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></a></div></div>
		
		<div class="${"flex flex-col bg-white rounded-2xl shadow-xl"}"><div class="${"flex-shrink-0"}"><img class="${"rounded-t-lg h-48 w-full object-cover"}" src="${"images/blog/spring-break.jpg"}" alt="${""}"></div>
			<div class="${"flex-1 bg-white px-6 pt-6 pb-4 flex flex-col justify-between"}"><div class="${"flex-1"}"><p class="${"text-sm font-medium text-pink-600"}">Spring Break</p>
					<a href="${"/blog-post"}" class="${"block mt-2"}"><p class="${"text-lg lg:text-lg font-semibold text-pblue-900 line-clamp-1 capitalize"}">Top Spring Break Destinations
						</p>
						<p class="${"mt-3 prose text-tiny text-slate-700 line-clamp-2"}">Looking for travelling to Mexico tips? Mexico is a colourful, vibrant country full of
							history, culture, nature and some Looking for travelling to Mexico tips? Mexico is a
							colourful, vibrant country full of history, culture, nature and some
						</p></a></div>
				<div class="${"truncate mt-6 flex gap-2"}"><span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Sunwing
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Cancun
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Cayo Coco
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Roundtrip
					</span></div>
				<div class="${"mt-6 flex items-center"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p></div></div>

			<div class="${"p-3 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"}"><a href="${"#"}" class="${"text-sz font-bold text-slate-700 hover:text-slate-900"}">Plan your spring break<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></a></div></div>

		
		<div class="${"flex flex-col bg-white rounded-2xl shadow-xl"}"><div class="${"flex-shrink-0"}"><img class="${"rounded-t-lg h-48 w-full object-cover"}" src="${"images/blog/philippines.jpg"}" alt="${""}"></div>
			<div class="${"flex-1 bg-white px-6 pt-6 pb-4 flex flex-col justify-between"}"><div class="${"flex-1"}"><p class="${"text-sm font-medium text-pink-600"}">Asia \u2022 Indonesia \u2022 Bali</p>
					<a href="${"/blog-post"}" class="${"block mt-2"}"><p class="${"text-lg lg:text-lg font-semibold text-pblue-900 line-clamp-1 capitalize"}">Why Bali is the next asia hot spot for tourists?
						</p>
						<p class="${"mt-3 prose text-tiny text-slate-700 line-clamp-2"}">Looking for travelling to Mexico tips? Mexico is a colourful, vibrant country full of
							history, culture, nature and some Looking for travelling to Mexico tips? Mexico is a
							colourful, vibrant country full of history, culture, nature and some
						</p></a></div>
				<div class="${"truncate mt-6 flex gap-2"}"><span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Bali
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Honeymoon
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">All Inclusive
					</span>
					<span class="${"items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"}">Roundtrip
					</span></div>
				<div class="${"mt-6 flex items-center"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p></div></div>

			<div class="${"p-3 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"}"><a href="${"#"}" class="${"text-sz font-bold text-slate-700 hover:text-slate-900"}">Book your trip to Bali<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></a></div></div></div></section>`;
    });
    BlogCanada = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `

<div class="${"space-y-4 container xl:max-w-7xl mx-auto px-4 py-8 lg:py-8"}">
	<div class="${"space-y-4 sm:space-y-10"}">
		<div class="${"flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm border"}"><div class="${"lg:w-[36%]"}"><a href="${"/blog-post"}" class="${"block relative group rounded-none lg:rounded-none overflow-hidden"}">

					<div class="${"hidden md:flex"}"><img src="${"images/blog/blog-canada-1.jpg"}" alt="${"Featured Image of blog post"}"></div>
					<div class="${"flex md:hidden"}">
						<img src="${"images/blog/blog-canada-1.jpg"}" alt="${"Featured Image of blog post"}" class="${"w-full object-cover aspect-[5/2]"}"></div>
					<div class="${"flex items-center justify-center absolute inset-0 bg-pblue-700 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div></a></div>
			<div class="${"w-full lg:w-[64%] p-6 lg:py-6 lg:px-8"}"><h4 class="${"font-bold text-lg sm:text-xl mb-2 line-clamp-1"}"><a href="${"/blog-post"}" class="${"text-gray-800 hover:text-gray-600"}">8 Winter Getaways In Alberta
					</a></h4>

				<p class="${"text-tiny line-clamp-2 prose text-slate-700"}">When it\u2019s time to beat the winter blues, a vacation can be just what you need. The
					beautiful province of Alberta is the perfect place to swap everyday life for some time in
					a snowy winter wonderland. If you like snuggling up in a cozy cabin or exploring the great
					outdoors, Alberta has the snowy spot for you.
				</p>
				<div class="${"mt-6 flex items-center justify-between"}">

					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p>
					<div class="${"place-self-end"}"><a href="${"/blog-post"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 rounded-full md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div></div></div></div>

		
		<div class="${"flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm border"}"><div class="${"lg:w-[36%]"}"><a href="${"/blog-post"}" class="${"block relative group rounded-none lg:rounded-none overflow-hidden"}">
					<div class="${"hidden md:flex"}"><img src="${"images/blog/blog-canada-2.jpg"}" alt="${"Featured Image of blog post"}"></div>
					<div class="${"flex md:hidden"}">
						<img src="${"images/blog/blog-canada-2.jpg"}" alt="${"Featured Image of blog post"}" class="${"w-full object-cover aspect-[5/2]"}"></div>
					<div class="${"flex items-center justify-center absolute inset-0 bg-pblue-700 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div></a></div>
			<div class="${"w-full lg:w-[64%] p-6 lg:py-6 lg:px-8"}"><h4 class="${"font-bold text-lg sm:text-xl mb-2 line-clamp-1"}"><a href="${"/blog-post"}" class="${"text-gray-800 hover:text-gray-600"}">10 Downtown Honolulu Restaurants
					</a></h4>

				<p class="${"text-tiny line-clamp-2 prose text-slate-700"}">Say aloha to some delicious dining experiences when you arrive in sunny Honolulu. From
					fine dining to cheap eats, international to traditional Hawaiian dishes, you can find a
					huge array of options for brunch, lunch and dinner in the downtown area of Hawaii. If only
					there was time to try all of the downtown Honolulu restaurants. Your meals will be sweet
					and savoury memories of your Hawaiian vacation with flavours that are sure to please.
				</p>
				<div class="${"mt-6 flex items-center justify-between"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p>
					<div class="${"place-self-end"}"><a href="${"/blog-post"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 rounded-full md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div></div></div></div>

		
		<div class="${"flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm border"}"><div class="${"lg:w-[36%]"}"><a href="${"/blog-post"}" class="${"block relative group rounded-none lg:rounded-none overflow-hidden"}">
					<div class="${"hidden md:flex"}"><img src="${"images/blog/blog-canada-3.jpg"}" alt="${"Featured Image of blog post"}"></div>
					<div class="${"flex md:hidden"}">
						<img src="${"images/blog/blog-canada-3.jpg"}" alt="${"Featured Image of blog post"}" class="${"w-full object-cover aspect-[5/2]"}"></div>
					<div class="${"flex items-center justify-center absolute inset-0 bg-pblue-700 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div></a></div>
			<div class="${"w-full lg:w-[64%] p-6 lg:py-6 lg:px-8"}"><h4 class="${"font-bold text-lg sm:text-xl mb-2 line-clamp-1"}"><a href="${"/blog-post"}" class="${"text-gray-800 hover:text-gray-600"}">8 Unique Winter Getaways Near Toronto
					</a></h4>

				<p class="${"text-tiny line-clamp-2 prose text-slate-700"}">Sometimes it\u2019s nice to escape the city of Toronto to explore some of the nearby areas. In
					your backyard, there are many fabulous places to visit without having to catch a long
					flight or take a week off work. So for a mini getaway to keep you going between more
					extended vacations, here are some destinations to note. We hope this list of eight unique
					winter getaways near Toronto inspires you to take a break.
				</p>
				<div class="${"mt-6 flex items-center justify-between"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p>
					<div class="${"place-self-end"}"><a href="${"/blog-post"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 rounded-full md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div></div></div></div>

		
		<div class="${"flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm border"}"><div class="${"lg:w-[36%]"}"><a href="${"/blog-post"}" class="${"block relative group rounded-none lg:rounded-none overflow-hidden"}">
					<div class="${"hidden md:flex"}"><img src="${"images/blog/blog-canada-4.jpg"}" alt="${"Featured Image of blog post"}"></div>
					<div class="${"flex md:hidden"}">
						<img src="${"images/blog/blog-canada-4.jpg"}" alt="${"Featured Image of blog post"}" class="${"w-full object-cover aspect-[5/2]"}"></div>
					<div class="${"flex items-center justify-center absolute inset-0 bg-pblue-700 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div></a></div>
			<div class="${"w-full lg:w-[64%] p-6 lg:py-6 lg:px-8"}"><h4 class="${"font-bold text-lg sm:text-xl mb-2 line-clamp-1"}"><a href="${"/blog-post"}" class="${"text-gray-800 hover:text-gray-600"}">Top 14 Free Things To Do in Toronto
					</a></h4>

				<p class="${"text-tiny line-clamp-2 prose text-slate-700"}">As one of the top tourist destinations in Canada, Toronto is a fairly expensive city.
					Whether you\u2019re a local or are planning a family vacation in Ontario\u2019s capital, it can be
					daunting to figure out how to have fun without breaking the bank. Luckily, our team at
					Trip Support has got you covered.
				</p>
				<div class="${"mt-6 flex items-center justify-between"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p>
					<div class="${"place-self-end"}"><a href="${"/blog-post"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 rounded-full md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div></div></div></div></div>
	</div>`;
    });
    PopularPostsCanada = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"bg-white"}"><div class="${"space-y-12 container xl:max-w-7xl mx-auto py-16 lg:py-12"}">

		
		<div class="${"flex flex-col rounded-lg shadow"}"><a href="${"javascript:void(0)"}" class="${"block relative group rounded-t-lg rounded-b-none overflow-hidden"}"><div class="${"flex items-center justify-center absolute inset-0 bg-rose-600 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div>
				
				<div class="${"aspect-w-2 aspect-h-1"}"><img src="${"images/blog/blog-bg.jpg"}" alt="${"Featured Image of blog post"}" class="${"object-cover"}"></div></a>
			<div class="${"p-4"}"><h4 class="${"font-bold text-tb grow"}"><a href="${"javascript:void(0)"}" class="${"text-slate-800 hover:text-rose-600 line-clamp-2"}">The 10 best hiking trails in the world you should put in your bucket list</a></h4>
				<div class="${"mt-6 flex items-center justify-between"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p></div></div>

			<a href="${"#"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div>
		

		
		<div class="${"flex flex-col rounded-lg shadow"}"><a href="${"javascript:void(0)"}" class="${"block relative group rounded-t-lg rounded-b-none overflow-hidden"}"><div class="${"flex items-center justify-center absolute inset-0 bg-rose-600 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div>
				<div class="${"aspect-w-2 aspect-h-1"}">
					<img src="${"images/blog/philippines.jpg"}" alt="${"Featured Image of blog post"}"></div></a>
			<div class="${"p-4"}"><h4 class="${"font-bold text-tb grow"}"><a href="${"javascript:void(0)"}" class="${"text-slate-800 hover:text-rose-600 line-clamp-2"}">The 10 best hiking trails in the world you should put in your bucket list</a></h4>
				<div class="${"mt-6 flex items-center justify-between"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p></div></div>

			<a href="${"#"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div>
		

		
		<div class="${"flex flex-col rounded-lg shadow"}"><a href="${"javascript:void(0)"}" class="${"block relative group rounded-t-lg rounded-b-none overflow-hidden"}"><div class="${"flex items-center justify-center absolute inset-0 bg-rose-600 bg-opacity-60 opacity-0 transition ease-out duration-150 group-hover:opacity-100"}"><svg fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></div>
				<div class="${"aspect-w-2 aspect-h-1"}">
					<img src="${"images/blog/spring-break.jpg"}" alt="${"Featured Image of blog post"}"></div></a>
			<div class="${"p-4"}"><h4 class="${"font-bold text-tb grow"}"><a href="${"javascript:void(0)"}" class="${"text-slate-800 hover:text-rose-600 line-clamp-2"}">The 10 best hiking trails in the world you should put in your bucket list</a></h4>
				<div class="${"mt-6 flex items-center justify-between"}">
					<p class="${"text-gray-900 text-xz"}"><span class="${"font-semibold"}">Shefali</span> on
						<span class="${"font-semibold"}">March 3, 2021</span></p></div></div>

			<a href="${"#"}" class="${"text-sm font-medium text-slate-700 hover:text-slate-900"}"><div class="${"p-2 bg-gray-100 md:px-8"}">Read more<span aria-hidden="${"true"}" class="${"ml-1"}">\u2192</span></div></a></div>
		</div></div>
`;
    });
    BlogPosts2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `
<div class="${"relative bg-white overflow-hidden"}"><div class="${"max-w-7xl mx-auto"}"><div class="${"grid grid-cols-12"}"><div class="${"col-span-12 lg:col-span-9"}"><section class="${"relative mb-6 px-4"}"><div class="${"text-left"}"><div class="${"sm:flex sm:items-baseline sm:justify-between"}"><h1 class="${"text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"}"><span class="${"block xl:inline"}">Latest Blog Posts</span>
								</h1></div>
						<p class="${"my-2 text-md text-gray-500 sm:text-md sm:max-w-prose md:text-md lg:mx-0"}">Browse blog posts by category
						</p></div></section>
				<div class="${"flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4 px-4 py-2 whitespace-nowrap overflow-x-scroll overflow-hidden"}"><button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("text-white bg-pblue-800 border-white shadow-none")}">Canada
					</button>

					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">USA
					</button>

					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Mexico
					</button>
					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Caribbean
					</button>
					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Asia
					</button>
					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Air Travel
					</button>
					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">Europe
					</button>
					<button type="${"button"}" class="${"inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 " + escape("bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white")}">South America
					</button></div>
				${`${validate_component(BlogCanada, "BlogCanada").$$render($$result, {}, {}, {})}`}
				${``}
				${``}
				${``}
				${``}
				${``}
				${``}
				${``}</div>
			<div class="${"col-span-12 md:col-span-3"}"><section class="${"relative mt-3 px-6"}"><div class="${"sm:flex"}"><h1 class="${"text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl"}"><span class="${"block xl:inline"}">Popular Posts</span></h1></div>
					<p class="${"my-2 text-md text-gray-500 sm:text-md sm:max-w-prose md:text-md lg:mx-0"}">A listo of our most popular blog posts
					</p>
					${validate_component(PopularPostsCanada, "PopularPostsCanada").$$render($$result, {}, {}, {})}</section></div></div></div></div>`;
    });
    Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"bg-white"}">${validate_component(BlogHeader, "BlogHeader").$$render($$result, {}, {}, {})}
	
	${validate_component(BlogTop, "BlogTop").$$render($$result, {}, {}, {})}
	
	${validate_component(BlogPosts2, "BlogPosts").$$render($$result, {}, {}, {})}
	${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/31.js
var __exports32 = {};
__export(__exports32, {
  css: () => css35,
  entry: () => entry32,
  js: () => js32,
  module: () => blog_svelte_exports
});
var entry32, js32, css35;
var init__32 = __esm({
  ".svelte-kit/output/server/nodes/31.js"() {
    init_blog_svelte();
    entry32 = "pages/blog.svelte-ec65c44f.js";
    js32 = ["pages/blog.svelte-ec65c44f.js", "chunks/vendor-3e73c3b8.js", "chunks/Subscribe-39a11f67.js"];
    css35 = [];
  }
});

// .svelte-kit/output/server/entries/pages/faqs.svelte.js
var faqs_svelte_exports = {};
__export(faqs_svelte_exports, {
  default: () => Faqs
});
var Faqs;
var init_faqs_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/faqs.svelte.js"() {
    init_index_77482e32();
    init_OutClick_6647c5ef();
    Faqs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let q3;
      q3 = false;
      return `<div class="${"mx-auto max-w-7xl bg-white"}">
	<section class="${"pb-6 pt-12 sm:pt-24 sm:pb-12 relative z-20 overflow-hidden "}">
		<div class="${"container"}"><div class="${"flex flex-wrap"}"><div class="${"w-full px-4"}"><div class="${"mb-6 lg:mb-10 max-w-[520px]"}"><span class="${"font-normal text-tiny block text-rose-600"}">FAQs </span>
						<h2 class="${"font-extrabold text-2xl sm:text-4xl text-gray-900 mb-4 "}">Frequently Asked Questions
						</h2>
						<p class="${"sm:text-base text-tiny text-body-color"}">See below for specific answers to frequently asked questions.
						</p></div></div></div>
			<div class="${"flex flex-wrap -mx-4"}"><div class="${"w-full lg:w-1/2 px-4"}">

					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"text-left"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I get a copy of my itinerary or booking details?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I get a copy of my itinerary or booking details?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Why was my booking canceled?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${q3 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"}" clip-rule="${"evenodd"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${q3 ? `<div class="${"faq-content"}"><p class="${"text-tiny text-gray-700 leading-relaxed py-3"}">Unfortunately, there can be several reasons for a cancellation. You will find a
										detailed message regarding the status of your itinerary at your <b>\u2018My Booking Page\u2019</b> . A cancellation email was also sent to you verifying the status of your booking.
									</p></div>` : ``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Why was my booking canceled?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How do I check-in?</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How do I get my boarding pass?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Where can I find my e-ticket number?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">What is Basic Economy?</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Do I need a visa for my trip?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div></div>
				<div class="${"w-full lg:w-1/2 px-4"}">
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I request a wheelchair?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I select a meal?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">I missed my flight, what should I do?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">What is Trip Support\u2019s cancellation policy?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How do I know my booking is confirmed?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Can I print my e-ticket?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>

					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Why should I book with Trip Support?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">How can I contact Trip Support customer support?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div>
					
					<div class="${"w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8"}"><button class="${"faq-btn flex w-full justify-between items-center"}"><div class="${"w-full"}"><h4 class="${"text-base text-left font-semibold text-black"}">Where is Trip Support located?
								</h4></div>
							<div class="${"w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>`}</div></button>
						${validate_component(OutClick, "OutClick").$$render($$result, {}, {}, {
        default: () => {
          return `${``}`;
        }
      })}</div></div></div>
			<div class="${"flex justify-end px-4"}"><a sveltekit:prefetch href="${"/faqs"}" class="${"text-tiny font-medium text-pblue-600 hover:text-pblue-500"}">View all FAQs</a></div></div>
		<div class="${"absolute bottom-0 right-0 z-[-1]"}"><svg width="${"1440"}" height="${"886"}" viewBox="${"0 0 1440 886"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path opacity="${"0.5"}" d="${"M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"}" fill="${"url(#paint0_linear)"}"></path><defs><linearGradient id="${"paint0_linear"}" x1="${"1308.65"}" y1="${"1142.58"}" x2="${"602.827"}" y2="${"-418.681"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#3056D3"}" stop-opacity="${"0.36"}"></stop><stop offset="${"1"}" stop-color="${"#F5F2FD"}" stop-opacity="${"0"}"></stop><stop offset="${"1"}" stop-color="${"#F5F2FD"}" stop-opacity="${"0.096144"}"></stop></linearGradient></defs></svg></div></section>
	</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/32.js
var __exports33 = {};
__export(__exports33, {
  css: () => css36,
  entry: () => entry33,
  js: () => js33,
  module: () => faqs_svelte_exports
});
var entry33, js33, css36;
var init__33 = __esm({
  ".svelte-kit/output/server/nodes/32.js"() {
    init_faqs_svelte();
    entry33 = "pages/faqs.svelte-e67f795b.js";
    js33 = ["pages/faqs.svelte-e67f795b.js", "chunks/vendor-3e73c3b8.js"];
    css36 = [];
  }
});

// .svelte-kit/vercel-tmp/entry.js
__export(exports, {
  default: () => entry_default
});

// .svelte-kit/vercel-tmp/shims.js
init_install_fetch();
__fetch_polyfill();

// node_modules/@sveltejs/kit/dist/node.js
var import_stream = __toModule(require("stream"));
function get_raw_body(req) {
  return new Promise((fulfil, reject) => {
    const h2 = req.headers;
    if (!h2["content-type"]) {
      return fulfil(null);
    }
    req.on("error", reject);
    const length = Number(h2["content-length"]);
    if (isNaN(length) && h2["transfer-encoding"] == null) {
      return fulfil(null);
    }
    let data = new Uint8Array(length || 0);
    if (length > 0) {
      let offset = 0;
      req.on("data", (chunk) => {
        const new_len = offset + Buffer.byteLength(chunk);
        if (new_len > length) {
          return reject({
            status: 413,
            reason: 'Exceeded "Content-Length" limit'
          });
        }
        data.set(chunk, offset);
        offset = new_len;
      });
    } else {
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        new_data.set(data, 0);
        new_data.set(chunk, data.length);
        data = new_data;
      });
    }
    req.on("end", () => {
      fulfil(data);
    });
  });
}
async function getRequest(base2, req) {
  let headers = req.headers;
  if (req.httpVersionMajor === 2) {
    headers = Object.assign({}, headers);
    delete headers[":method"];
    delete headers[":path"];
    delete headers[":authority"];
    delete headers[":scheme"];
  }
  return new Request(base2 + req.url, {
    method: req.method,
    headers,
    body: await get_raw_body(req)
  });
}
async function setResponse(res, response) {
  const headers = Object.fromEntries(response.headers);
  if (response.headers.has("set-cookie")) {
    headers["set-cookie"] = response.headers.raw()["set-cookie"];
  }
  res.writeHead(response.status, headers);
  if (response.body instanceof import_stream.Readable) {
    response.body.pipe(res);
  } else {
    if (response.body) {
      res.write(await response.arrayBuffer());
    }
    res.end();
  }
}

// .svelte-kit/output/server/app.js
init_index_77482e32();
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _use_hashes;
var _dev;
var _script_needs_csp;
var _style_needs_csp;
var _directives;
var _script_src;
var _style_src;
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
function to_headers(object) {
  const headers = new Headers();
  if (object) {
    for (const key2 in object) {
      const value = object[key2];
      if (!value)
        continue;
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          headers.append(key2, value2);
        });
      } else {
        headers.set(key2, value);
      }
    }
  }
  return headers;
}
function hash(value) {
  let hash2 = 5381;
  let i2 = value.length;
  if (typeof value === "string") {
    while (i2)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
  } else {
    while (i2)
      hash2 = hash2 * 33 ^ value[--i2];
  }
  return (hash2 >>> 0).toString(36);
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key2 in obj) {
    clone2[key2.toLowerCase()] = obj[key2];
  }
  return clone2;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
function is_pojo(body) {
  if (typeof body !== "object")
    return false;
  if (body) {
    if (body instanceof Uint8Array)
      return false;
    if (body._readableState && body._writableState && body._events)
      return false;
    if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream)
      return false;
  }
  return true;
}
function error(body) {
  return new Response(body, {
    status: 500
  });
}
function is_string(s22) {
  return typeof s22 === "string" || s22 instanceof String;
}
var text_types = /* @__PURE__ */ new Set([
  "application/xml",
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data"
]);
function is_text(content_type) {
  if (!content_type)
    return true;
  const type = content_type.split(";")[0].toLowerCase();
  return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
}
async function render_endpoint(event, mod) {
  const handler = mod[event.request.method.toLowerCase().replace("delete", "del")];
  if (!handler) {
    return;
  }
  const response = await handler(event);
  const preface = `Invalid response from route ${event.url.pathname}`;
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  if (response.fallthrough) {
    return;
  }
  const { status = 200, body = {} } = response;
  const headers = response.headers instanceof Headers ? new Headers(response.headers) : to_headers(response.headers);
  const type = headers.get("content-type");
  if (!is_text(type) && !(body instanceof Uint8Array || is_string(body))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
    headers.set("content-type", "application/json; charset=utf-8");
    normalized_body = JSON.stringify(body);
  } else {
    normalized_body = body;
  }
  if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
    const cache_control = headers.get("cache-control");
    if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
      headers.set("etag", `"${hash(normalized_body)}"`);
    }
  }
  return new Response(normalized_body, {
    status,
    headers
  });
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped2 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry34) {
    return entry34[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry34, i2) {
    names.set(entry34[0], getName(i2));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i2) {
          return i2 in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i2) {
            statements_1.push(name + "[" + i2 + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a4) {
            var k = _a4[0], v = _a4[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped2[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i2 = 0; i2 < str.length; i2 += 1) {
    var char = str.charAt(i2);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped2) {
      result += escaped2[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i2];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop3() {
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop3) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop3) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop3;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
var escape_json_in_html_dict = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var escape_json_value_in_html_dict = {
  '"': '\\"',
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape_json_in_html(str) {
  return str.replace(/[&><\u2028\u2029]/g, (match) => escape_json_in_html_dict[match]);
}
function escape_json_value_in_html(str) {
  return escape2(str, escape_json_value_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
}
function escape2(str, dict, unicode_encoder) {
  let result = "";
  for (let i2 = 0; i2 < str.length; i2 += 1) {
    const char = str.charAt(i2);
    const code = char.charCodeAt(0);
    if (char in dict) {
      result += dict[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i2];
      } else {
        result += unicode_encoder(code);
      }
    } else {
      result += char;
    }
  }
  return result;
}
var escape_html_attr_dict = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function escape_html_attr(str) {
  return '"' + escape2(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
}
var s2 = JSON.stringify;
function create_prerendering_url_proxy(url) {
  return new Proxy(url, {
    get: (target, prop, receiver) => {
      if (prop === "search" || prop === "searchParams") {
        throw new Error(`Cannot access url.${prop} on a page with prerendering enabled`);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array = encode(data);
  for (let i2 = 0; i2 < array.length; i2 += 16) {
    const w = array.subarray(i2, i2 + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w[i22];
      } else {
        a = w[i22 + 1 & 15];
        b = w[i22 + 14 & 15];
        tmp = w[i22 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i22 & 15] + w[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  let prime = 2;
  for (let i2 = 0; i2 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i2 < 8) {
        init[i2] = frac(prime ** (1 / 2));
      }
      key[i2] = frac(prime ** (1 / 3));
      i2++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i2 = 0; i2 < bytes.length; i2 += 4) {
    const a = bytes[i2 + 0];
    const b = bytes[i2 + 1];
    const c = bytes[i2 + 2];
    const d = bytes[i2 + 3];
    bytes[i2 + 0] = d;
    bytes[i2 + 1] = c;
    bytes[i2 + 2] = b;
    bytes[i2 + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i2;
  for (i2 = 2; i2 < l; i2 += 3) {
    result += chars[bytes[i2 - 2] >> 2];
    result += chars[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars[(bytes[i2 - 1] & 15) << 2 | bytes[i2] >> 6];
    result += chars[bytes[i2] & 63];
  }
  if (i2 === l + 1) {
    result += chars[bytes[i2 - 2] >> 2];
    result += chars[(bytes[i2 - 2] & 3) << 4];
    result += "==";
  }
  if (i2 === l) {
    result += chars[bytes[i2 - 2] >> 2];
    result += chars[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars[(bytes[i2 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var csp_ready;
var generate_nonce;
var generate_hash;
if (typeof crypto !== "undefined") {
  const array = new Uint8Array(16);
  generate_nonce = () => {
    crypto.getRandomValues(array);
    return base64(array);
  };
  generate_hash = sha256;
} else {
  const name = "crypto";
  csp_ready = import(name).then((crypto2) => {
    generate_nonce = () => {
      return crypto2.randomBytes(16).toString("base64");
    };
    generate_hash = (input) => {
      return crypto2.createHash("sha256").update(input, "utf-8").digest().toString("base64");
    };
  });
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var Csp = class {
  constructor({ mode, directives }, { dev, prerender, needs_nonce }) {
    __privateAdd2(this, _use_hashes, void 0);
    __privateAdd2(this, _dev, void 0);
    __privateAdd2(this, _script_needs_csp, void 0);
    __privateAdd2(this, _style_needs_csp, void 0);
    __privateAdd2(this, _directives, void 0);
    __privateAdd2(this, _script_src, void 0);
    __privateAdd2(this, _style_src, void 0);
    __privateSet2(this, _use_hashes, mode === "hash" || mode === "auto" && prerender);
    __privateSet2(this, _directives, dev ? __spreadValues({}, directives) : directives);
    __privateSet2(this, _dev, dev);
    const d = __privateGet2(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet2(this, _script_src, []);
    __privateSet2(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet2(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet2(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet2(this, _script_needs_csp) && !__privateGet2(this, _use_hashes);
    this.style_needs_nonce = __privateGet2(this, _style_needs_csp) && !__privateGet2(this, _use_hashes);
    if (this.script_needs_nonce || this.style_needs_nonce || needs_nonce) {
      this.nonce = generate_nonce();
    }
  }
  add_script(content) {
    if (__privateGet2(this, _script_needs_csp)) {
      if (__privateGet2(this, _use_hashes)) {
        __privateGet2(this, _script_src).push(`sha256-${generate_hash(content)}`);
      } else if (__privateGet2(this, _script_src).length === 0) {
        __privateGet2(this, _script_src).push(`nonce-${this.nonce}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet2(this, _style_needs_csp)) {
      if (__privateGet2(this, _use_hashes)) {
        __privateGet2(this, _style_src).push(`sha256-${generate_hash(content)}`);
      } else if (__privateGet2(this, _style_src).length === 0) {
        __privateGet2(this, _style_src).push(`nonce-${this.nonce}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = __spreadValues({}, __privateGet2(this, _directives));
    if (__privateGet2(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet2(this, _style_src)
      ];
    }
    if (__privateGet2(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet2(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
_use_hashes = new WeakMap();
_dev = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
var updated = __spreadProps(__spreadValues({}, readable(false)), {
  check: () => false
});
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2,
  url,
  params,
  ssr,
  stuff
}) {
  if (state.prerender) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %svelte.nonce%");
    }
  }
  const stylesheets = new Set(options.manifest._.entry.css);
  const modulepreloads = new Set(options.manifest._.entry.js);
  const styles = /* @__PURE__ */ new Map();
  const serialized_data = [];
  let shadow_props;
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options.get_stack(error2);
  }
  if (ssr) {
    branch.forEach(({ node, props: props2, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url2) => stylesheets.add(url2));
      if (node.js)
        node.js.forEach((url2) => modulepreloads.add(url2));
      if (node.styles)
        Object.entries(node.styles).forEach(([k, v]) => styles.set(k, v));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (props2)
        shadow_props = props2;
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session,
        updated
      },
      page: {
        url: state.prerender ? create_prerendering_url_proxy(url) : url,
        params,
        status,
        error: error2,
        stuff
      },
      components: branch.map(({ node }) => node.module.default)
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    for (let i2 = 0; i2 < branch.length; i2 += 1) {
      props[`props_${i2}`] = await branch[i2].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const inlined_style = Array.from(styles.values()).join("\n");
  await csp_ready;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerender,
    needs_nonce: options.template_contains_nonce
  });
  const target = hash(body);
  const init_app = `
		import { start } from ${s2(options.prefix + options.manifest._.entry.file)};
		start({
			target: document.querySelector('[data-hydrate="${target}"]').parentNode,
			paths: ${s2(options.paths)},
			session: ${try_serialize($session, (error3) => {
    throw new Error(`Failed to serialize session data: ${error3.message}`);
  })},
			route: ${!!page_config.router},
			spa: ${!ssr},
			trailing_slash: ${s2(options.trailing_slash)},
			hydrate: ${ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${serialize_error(error2)},
				nodes: [
					${(branch || []).map(({ node }) => `import(${s2(options.prefix + node.entry)})`).join(",\n						")}
				],
				url: new URL(${s2(url.href)}),
				params: ${devalue(params)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('${options.service_worker}');
		}
	`;
  if (options.amp) {
    head += `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>

		<style amp-custom>${inlined_style}
${rendered.css.code}</style>`;
    if (options.service_worker) {
      head += '<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>';
      body += `<amp-install-serviceworker src="${options.service_worker}" layout="nodisplay"></amp-install-serviceworker>`;
    }
  } else {
    if (inlined_style) {
      const attributes = [];
      if (options.dev)
        attributes.push(" data-svelte");
      if (csp.style_needs_nonce)
        attributes.push(` nonce="${csp.nonce}"`);
      csp.add_style(inlined_style);
      head += `
	<style${attributes.join("")}>${inlined_style}</style>`;
    }
    head += Array.from(stylesheets).map((dep) => {
      const attributes = [
        'rel="stylesheet"',
        `href="${options.prefix + dep}"`
      ];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      }
      return `
	<link ${attributes.join(" ")}>`;
    }).join("");
    if (page_config.router || page_config.hydrate) {
      head += Array.from(modulepreloads).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
      const attributes = ['type="module"', `data-hydrate="${target}"`];
      csp.add_script(init_app);
      if (csp.script_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
      body += serialized_data.map(({ url: url2, body: body2, json }) => {
        let attributes2 = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url2)}`;
        if (body2)
          attributes2 += ` data-body="${hash(body2)}"`;
        return `<script ${attributes2}>${json}<\/script>`;
      }).join("\n	");
      if (shadow_props) {
        body += `<script type="application/json" data-type="svelte-props">${escape_json_in_html(s2(shadow_props))}<\/script>`;
      }
    }
    if (options.service_worker) {
      csp.add_script(init_service_worker);
      head += `
				<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
    }
  }
  if (state.prerender) {
    const http_equiv = [];
    const csp_headers = csp.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (maxage) {
      http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${maxage}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const segments = url.pathname.slice(options.paths.base.length).split("/").slice(2);
  const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
  const html = options.template({ head, body, assets: assets2, nonce: csp.nonce });
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (maxage) {
    headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${maxage}`);
  }
  if (!options.floc) {
    headers.set("permissions-policy", "interest-cohort=()");
  }
  if (!state.prerender) {
    const csp_header = csp.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize(__spreadProps(__spreadValues({}, error2), { name, message, stack }));
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i2 = 0; i2 < pathparts.length; i2 += 1) {
    const part = pathparts[i2];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && /\/[^./]+$/.test(path)) {
    return path + "/";
  }
  return path;
}
async function load_node({
  event,
  options,
  state,
  route,
  url,
  params,
  node,
  $session,
  stuff,
  is_error,
  is_leaf,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let set_cookie_headers = [];
  let loaded;
  const shadow = is_leaf ? await load_shadow_data(route, event, !!state.prerender) : {};
  if (shadow.fallthrough)
    return;
  if (shadow.cookies) {
    set_cookie_headers.push(...shadow.cookies);
  }
  if (shadow.error) {
    loaded = {
      status: shadow.status,
      error: shadow.error
    };
  } else if (shadow.redirect) {
    loaded = {
      status: shadow.status,
      redirect: shadow.redirect
    };
  } else if (module2.load) {
    const load_input = {
      url: state.prerender ? create_prerendering_url_proxy(url) : url,
      params,
      props: shadow.body || {},
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === "string") {
          requested = resource;
        } else {
          requested = resource.url;
          opts = __spreadValues({
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity
          }, opts);
        }
        opts.headers = new Headers(opts.headers);
        for (const [key2, value] of event.request.headers) {
          if (key2 !== "authorization" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
            opts.headers.set(key2, value);
          }
        }
        opts.headers.set("referer", event.url.href);
        const resolved = resolve(event.url.pathname, requested.split("?")[0]);
        let response;
        let dependency;
        const prefix = options.paths.assets || options.paths.base;
        const filename = decodeURIComponent(resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest._.mime[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(`${url.origin}/${file}`, opts);
          }
        } else if (is_root_relative(resolved)) {
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            const cookie = event.request.headers.get("cookie");
            const authorization = event.request.headers.get("authorization");
            if (cookie) {
              opts.headers.set("cookie", cookie);
            }
            if (authorization && !opts.headers.has("authorization")) {
              opts.headers.set("authorization", authorization);
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          response = await respond(new Request(new URL(requested, event.url).href, opts), options, {
            fetched: requested,
            initiator: route
          });
          if (state.prerender) {
            dependency = { response, body: null };
            state.prerender.dependencies.set(resolved, dependency);
          }
        } else {
          if (resolved.startsWith("//")) {
            requested = event.url.protocol + requested;
          }
          if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
            uses_credentials = true;
            const cookie = event.request.headers.get("cookie");
            if (cookie)
              opts.headers.set("cookie", cookie);
          }
          const external_request = new Request(requested, opts);
          response = await options.hooks.externalFetch.call(null, external_request);
        }
        const proxy = new Proxy(response, {
          get(response2, key2, _receiver) {
            async function text() {
              const body = await response2.text();
              const headers = {};
              for (const [key3, value] of response2.headers) {
                if (key3 === "set-cookie") {
                  set_cookie_headers = set_cookie_headers.concat(value);
                } else if (key3 !== "etag") {
                  headers[key3] = value;
                }
              }
              if (!opts.body || typeof opts.body === "string") {
                fetched.push({
                  url: requested,
                  body: opts.body,
                  json: `{"status":${response2.status},"statusText":${s2(response2.statusText)},"headers":${s2(headers)},"body":"${escape_json_value_in_html(body)}"}`
                });
              }
              if (dependency) {
                dependency.body = body;
              }
              return body;
            }
            if (key2 === "arrayBuffer") {
              return async () => {
                const buffer = await response2.arrayBuffer();
                if (dependency) {
                  dependency.body = new Uint8Array(buffer);
                }
                return buffer;
              };
            }
            if (key2 === "text") {
              return text;
            }
            if (key2 === "json") {
              return async () => {
                return JSON.parse(await text());
              };
            }
            return Reflect.get(response2, key2, response2);
          }
        });
        return proxy;
      },
      stuff: __spreadValues({}, stuff)
    };
    if (options.dev) {
      Object.defineProperty(load_input, "page", {
        get: () => {
          throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
        }
      });
    }
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
    if (!loaded) {
      throw new Error(`load function must return a value${options.dev ? ` (${node.entry})` : ""}`);
    }
  } else if (shadow.body) {
    loaded = {
      props: shadow.body
    };
  } else {
    loaded = {};
  }
  if (loaded.fallthrough && !is_error) {
    return;
  }
  if (shadow.body && state.prerender) {
    const pathname = `${event.url.pathname}/__data.json`;
    const dependency = {
      response: new Response(void 0),
      body: JSON.stringify(shadow.body)
    };
    state.prerender.dependencies.set(pathname, dependency);
  }
  return {
    node,
    props: shadow.body,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
async function load_shadow_data(route, event, prerender) {
  if (!route.shadow)
    return {};
  try {
    const mod = await route.shadow();
    if (prerender && (mod.post || mod.put || mod.del || mod.patch)) {
      throw new Error("Cannot prerender pages that have shadow endpoints with mutative methods");
    }
    const method = event.request.method.toLowerCase().replace("delete", "del");
    const handler = mod[method];
    if (!handler) {
      return {
        status: 405,
        error: new Error(`${method} method not allowed`)
      };
    }
    const data = {
      status: 200,
      cookies: [],
      body: {}
    };
    if (method !== "get") {
      const result = await handler(event);
      if (result.fallthrough)
        return result;
      const { status, headers, body } = validate_shadow_output(result);
      data.status = status;
      add_cookies(data.cookies, headers);
      if (status >= 300 && status < 400) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = body;
    }
    if (mod.get) {
      const result = await mod.get.call(null, event);
      if (result.fallthrough)
        return result;
      const { status, headers, body } = validate_shadow_output(result);
      add_cookies(data.cookies, headers);
      data.status = status;
      if (status >= 400) {
        data.error = new Error("Failed to load data");
        return data;
      }
      if (status >= 300) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = __spreadValues(__spreadValues({}, body), data.body);
    }
    return data;
  } catch (e2) {
    return {
      status: 500,
      error: coalesce_to_error(e2)
    };
  }
}
function add_cookies(target, headers) {
  const cookies = headers["set-cookie"];
  if (cookies) {
    if (Array.isArray(cookies)) {
      target.push(...cookies);
    } else {
      target.push(cookies);
    }
  }
}
function validate_shadow_output(result) {
  const { status = 200, body = {} } = result;
  let headers = result.headers || {};
  if (headers instanceof Headers) {
    if (headers.has("set-cookie")) {
      throw new Error("Shadow endpoint request handler cannot use Headers interface with Set-Cookie headers");
    }
  } else {
    headers = lowercase_keys(headers);
  }
  if (!is_pojo(body)) {
    throw new Error("Body returned from shadow endpoint request handler must be a plain object");
  }
  return { status, headers, body };
}
async function respond_with_error({ event, options, state, $session, status, error: error2, ssr }) {
  try {
    const default_layout = await options.manifest._.nodes[0]();
    const default_error = await options.manifest._.nodes[1]();
    const params = {};
    const layout_loaded = await load_node({
      event,
      options,
      state,
      route: null,
      url: event.url,
      params,
      node: default_layout,
      $session,
      stuff: {},
      is_error: false,
      is_leaf: false
    });
    const error_loaded = await load_node({
      event,
      options,
      state,
      route: null,
      url: event.url,
      params,
      node: default_error,
      $session,
      stuff: layout_loaded ? layout_loaded.stuff : {},
      is_error: true,
      is_leaf: false,
      status,
      error: error2
    });
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      stuff: error_loaded.stuff,
      status,
      error: error2,
      branch: [layout_loaded, error_loaded],
      url: event.url,
      params,
      ssr
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
async function respond$1(opts) {
  const { event, options, state, $session, route, ssr } = opts;
  let nodes;
  if (!ssr) {
    return await render_response(__spreadProps(__spreadValues({}, opts), {
      branch: [],
      page_config: {
        hydrate: true,
        router: true
      },
      status: 200,
      url: event.url,
      stuff: {}
    }));
  }
  try {
    nodes = await Promise.all(route.a.map((n) => options.manifest._.nodes[n] && options.manifest._.nodes[n]()));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return await respond_with_error({
      event,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      ssr
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return new Response(void 0, {
      status: 204
    });
  }
  let branch = [];
  let status = 200;
  let error2;
  let set_cookie_headers = [];
  let stuff = {};
  ssr:
    if (ssr) {
      for (let i2 = 0; i2 < nodes.length; i2 += 1) {
        const node = nodes[i2];
        let loaded;
        if (node) {
          try {
            loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
              url: event.url,
              node,
              stuff,
              is_error: false,
              is_leaf: i2 === nodes.length - 1
            }));
            if (!loaded)
              return;
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies(new Response(void 0, {
                status: loaded.loaded.status,
                headers: {
                  location: loaded.loaded.redirect
                }
              }), set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e2 = coalesce_to_error(err);
            options.handle_error(e2, event);
            status = 500;
            error2 = e2;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i2--) {
              if (route.b[i2]) {
                const error_node = await options.manifest._.nodes[route.b[i2]]();
                let node_loaded;
                let j = i2;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node(__spreadProps(__spreadValues({}, opts), {
                    url: event.url,
                    node: error_node,
                    stuff: node_loaded.stuff,
                    is_error: true,
                    is_leaf: false,
                    status,
                    error: error2
                  }));
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  stuff = __spreadValues(__spreadValues({}, node_loaded.stuff), error_loaded.stuff);
                  break ssr;
                } catch (err) {
                  const e2 = coalesce_to_error(err);
                  options.handle_error(e2, event);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              event,
              options,
              state,
              $session,
              status,
              error: error2,
              ssr
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = __spreadValues(__spreadValues({}, stuff), loaded.loaded.stuff);
        }
      }
    }
  try {
    return with_cookies(await render_response(__spreadProps(__spreadValues({}, opts), {
      stuff,
      url: event.url,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    })), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return with_cookies(await respond_with_error(__spreadProps(__spreadValues({}, opts), {
      status: 500,
      error: error3
    })), set_cookie_headers);
  }
}
function get_page_config(leaf, options) {
  if ("ssr" in leaf) {
    throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle");
  }
  return {
    router: "router" in leaf ? !!leaf.router : options.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    set_cookie_headers.forEach((value) => {
      response.headers.append("set-cookie", value);
    });
  }
  return response;
}
async function render_page(event, route, options, state, ssr) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (route.shadow) {
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (type === "application/json") {
      return render_endpoint(event, await route.shadow());
    }
  }
  const $session = await options.hooks.getSession(event);
  const response = await respond$1({
    event,
    options,
    state,
    $session,
    route,
    params: event.params,
    ssr
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return new Response(`Bad request in load function: failed to fetch ${state.fetched}`, {
      status: 500
    });
  }
}
function negotiate(accept, types2) {
  const parts = accept.split(",").map((str, i2) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      return { type, subtype, q: +q, i: i2 };
    }
    throw new Error(`Invalid Accept header: ${accept}`);
  }).sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types2) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex((part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*"));
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
var DATA_SUFFIX = "/__data.json";
async function respond(request, options, state = {}) {
  var _a4;
  const url = new URL(request.url);
  const normalized = normalize_path(url.pathname, options.trailing_slash);
  if (normalized !== url.pathname) {
    return new Response(void 0, {
      status: 301,
      headers: {
        location: normalized + (url.search === "?" ? "" : url.search)
      }
    });
  }
  const { parameter, allowed } = options.method_override;
  const method_override = (_a4 = url.searchParams.get(parameter)) == null ? void 0 : _a4.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  const event = {
    request,
    url,
    params: {},
    locals: {},
    platform: state.platform
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error("To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details);
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let ssr = true;
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        if (opts && "ssr" in opts)
          ssr = opts.ssr;
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            url: event2.url,
            params: event2.params,
            options,
            state,
            $session: await options.hooks.getSession(event2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            branch: [],
            ssr: false
          });
        }
        let decoded = decodeURI(event2.url.pathname);
        if (options.paths.base) {
          if (!decoded.startsWith(options.paths.base)) {
            return new Response(void 0, { status: 404 });
          }
          decoded = decoded.slice(options.paths.base.length) || "/";
        }
        const is_data_request = decoded.endsWith(DATA_SUFFIX);
        if (is_data_request)
          decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
        for (const route of options.manifest._.routes) {
          const match = route.pattern.exec(decoded);
          if (!match)
            continue;
          event2.params = route.params ? decode_params(route.params(match)) : {};
          let response2;
          if (is_data_request && route.type === "page" && route.shadow) {
            response2 = await render_endpoint(event2, await route.shadow());
            if (response2 && response2.status >= 300 && response2.status < 400 && request.headers.get("x-sveltekit-noredirect") === "true") {
              const location = response2.headers.get("location");
              if (location) {
                const headers = new Headers(response2.headers);
                headers.set("x-sveltekit-location", location);
                response2 = new Response(void 0, {
                  status: 204,
                  headers
                });
              }
            }
          } else {
            response2 = route.type === "endpoint" ? await render_endpoint(event2, await route.load()) : await render_page(event2, route, options, state, ssr);
          }
          if (response2) {
            if (response2.status === 200 && response2.headers.has("etag")) {
              let if_none_match_value = request.headers.get("if-none-match");
              if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                if_none_match_value = if_none_match_value.substring(2);
              }
              const etag = response2.headers.get("etag");
              if (if_none_match_value === etag) {
                const headers = new Headers({ etag });
                for (const key2 of [
                  "cache-control",
                  "content-location",
                  "date",
                  "expires",
                  "vary"
                ]) {
                  const value = response2.headers.get(key2);
                  if (value)
                    headers.set(key2, value);
                }
                return new Response(void 0, {
                  status: 304,
                  headers
                });
              }
            }
            return response2;
          }
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(event2);
          return await respond_with_error({
            event: event2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            ssr
          });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    options.handle_error(error2, event);
    try {
      const $session = await options.hooks.getSession(event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        ssr
      });
    } catch (e22) {
      const error3 = coalesce_to_error(e22);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var user_hooks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en" class="h-full">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="description" content="" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n\n		<!-- Tailwind elements css -->\n		<link rel="stylesheet"\n					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />\n		<link rel="stylesheet"\n					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />\n		<link rel="stylesheet"\n					href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />\n		\n		<!-- disable auto zooming in input groups -->\n		<meta name="viewport"\n					content="width=device-width, initial-scale=1, maximum-scale=1">\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + '</div>\n		<script src="https://unpkg.com/flowbite@1.3.4/dist/datepicker.js"><\/script>\n		<script src="https://unpkg.com/flowbite@latest/dist/flowbite.js"><\/script>\n		<script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"><\/script>\n	</body>\n</html>\n';
var read = null;
set_paths({ "base": "", "assets": "" });
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
var App = class {
  constructor(manifest2) {
    const hooks = get_hooks(user_hooks);
    this.options = {
      amp: false,
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      floc: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/_app/",
      prerender: true,
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  render(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to app.render must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/vercel-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: new Set(["favicon.png", "footer/footer-1.png", "footer/footer-2.png", "footer/footer-3.png", "footer/footer-4.png", "footer/footer-5.png", "footer/footer-6.png", "footer/footer-7.png", "footer/footer-8.png", "footer/footer-9.png", "icons/airport/airliner-1.svg", "icons/airport/airliner.svg", "icons/airport/airport-truck.svg", "icons/airport/automated-teller-machine.svg", "icons/airport/bus-service.svg", "icons/airport/cab.svg", "icons/airport/cup-of-hot-coffee.svg", "icons/airport/customs-control.svg", "icons/airport/departures-sign.svg", "icons/airport/digital-camera.svg", "icons/airport/direction-signs.svg", "icons/airport/escalators-down.svg", "icons/airport/escalators-up.svg", "icons/airport/flight-ticket.svg", "icons/airport/gate-sign.svg", "icons/airport/glass-of-wine.svg", "icons/airport/globe.svg", "icons/airport/helicopter.svg", "icons/airport/id-card.svg", "icons/airport/information-sign.svg", "icons/airport/international-departures.svg", "icons/airport/international-location.svg", "icons/airport/international-passport.svg", "icons/airport/lift-up.svg", "icons/airport/location-pointer.svg", "icons/airport/luggage-cart.svg", "icons/airport/luggage-checking.svg", "icons/airport/luggage-trolley.svg", "icons/airport/mailbox.svg", "icons/airport/male-and-female-toilet.svg", "icons/airport/medical-signal.svg", "icons/airport/money-exchange.svg", "icons/airport/mother-and-son.svg", "icons/airport/no-mobile-phones-allowed.svg", "icons/airport/no-photography.svg", "icons/airport/no-smoking.svg", "icons/airport/parking-sign.svg", "icons/airport/phone-booth.svg", "icons/airport/plane-landing.svg", "icons/airport/planes-circling.svg", "icons/airport/restaurant.svg", "icons/airport/satellite-dish.svg", "icons/airport/security-camera.svg", "icons/airport/security-check.svg", "icons/airport/smoking-area.svg", "icons/airport/suitcase-1.svg", "icons/airport/suitcase.svg", "icons/airport/takeoff-the-plane.svg", "icons/airport/wall-clock.svg", "icons/airport/wifi-signal.svg", "icons/baggage/air-canada-icon.svg", "icons/countries/canada.svg", "icons/countries/china.svg", "icons/countries/cuba.svg", "icons/countries/dominican-republic.svg", "icons/countries/france.svg", "icons/countries/germany.svg", "icons/countries/hawaii.svg", "icons/countries/italy.svg", "icons/countries/jamaica.svg", "icons/countries/mexico.svg", "icons/countries/spain.svg", "icons/countries/sun.svg", "icons/countries/turkey.svg", "icons/countries/usa.svg", "icons/email.svg", "icons/facebook.svg", "icons/instagram.svg", "icons/phone.svg", "icons/pinterest.svg", "icons/two-arrows.svg", "icons/youtube.svg", "images/about/flight.jpg", "images/about/hotel.jpg", "images/about/office.jpg", "images/about/tripsupport-team.jpg", "images/about/vacation.jpg", "images/blog/blog-bg.jpg", "images/blog/blog-canada-1.jpg", "images/blog/blog-canada-2.jpg", "images/blog/blog-canada-3.jpg", "images/blog/blog-canada-4.jpg", "images/blog/philippines.jpg", "images/blog/places-canada.jpg", "images/blog/shefali.jpg", "images/blog/spring-break.jpg", "images/blog/travel-guide.jpg", "images/blog-post/barrie.jpg", "images/blog-post/blog-post-1.jpg", "images/blog-post/brampton.jpg", "images/blog-post/hamilton.jpg", "images/blog-post/kawartha-lakes.jpg", "images/blog-post/london.jpg", "images/blog-post/mississauga.jpg", "images/blog-post/niagara-falls.jpg", "images/blog-post/whitby.jpg", "images/booknow-paylater/cuba-varadero.jpg", "images/booknow-paylater/dominican-republic.jpg", "images/booknow-paylater/mexico-cancun.jpg", "images/contact/help.svg", "images/contact/location7191.jpg", "images/contact/office4667.jpg", "images/contact/transaction.svg", "images/contact/ts-icon.png", "images/flight-deals/jw-1.jpg", "images/flight-deals/jw-2.jpg", "images/flight-deals/jw-3.jpg", "images/flight-deals/jw-4.jpg", "images/flight-deals/jw-mariott.jpg", "images/header-bg-image.jpg", "images/hero/flights-hero-bg.jpg", "images/hero/flights-hero2.jpg", "images/hero/hero-1.jpg", "images/hero/hero-2.jpg", "images/hero/hero-3.jpg", "images/hero/hero-4.jpg", "images/hero/hero-5.jpg", "images/hero/hero-6.jpg", "images/hero/hero-bg.jpg", "images/hero/hotair-bg.jpg", "images/home/alberta.jpg", "images/home/beach-party.jpg", "images/home/california.jpg", "images/home/deals-1.jpg", "images/home/deals-2.jpg", "images/home/deals-3.jpg", "images/home/deals-4.jpg", "images/home/deals-5.jpg", "images/home/deals-6.jpg", "images/home/deals-7.jpg", "images/home/deals-8.jpg", "images/home/destination-dubai.jpg", "images/home/destination-europe.jpg", "images/home/destination-sun.jpg", "images/home/flights-section.jpg", "images/home/home-hero.jpg", "images/home/mexico.jpg", "images/home/montreal.jpg", "images/home/newyork.jpg", "images/home/singapore.jpg", "images/home/spring-break.jpg", "images/home/spring-break2.jpg", "images/home/subscribe.jpg", "images/home/vancouver.jpg", "images/hotels/blue-mountain.jpg", "images/hotels/hotel-1.jpg", "images/hotels/hotel-10.jpg", "images/hotels/hotel-11.jpg", "images/hotels/hotel-12.jpg", "images/hotels/hotel-13.jpg", "images/hotels/hotel-14.jpg", "images/hotels/hotel-15.jpg", "images/hotels/hotel-17.jpg", "images/hotels/hotel-2.jpg", "images/hotels/hotel-3.jpg", "images/hotels/hotel-4.jpg", "images/hotels/hotel-5.jpg", "images/hotels/hotel-6.jpg", "images/hotels/hotel-7.jpg", "images/hotels/hotel-8.jpg", "images/hotels/hotel-9.jpg", "images/hotels/muskoka.jpg", "images/hotels/niagara-falls.jpg", "images/hotels/toronto-1.jpg", "images/hotels/toronto-2.jpg", "images/hotels/toronto-downtown.jpg", "images/vacation-deals/spring-break.jpg", "images/vacations/acapulco.jpg", "images/vacations/cancun.jpg", "images/vacations/loscabos.jpg", "images/vacations/mexico/vac1.jpg", "images/vacations/mexico/vac10.jpg", "images/vacations/mexico/vac11.jpg", "images/vacations/mexico/vac12.jpg", "images/vacations/mexico/vac13.jpg", "images/vacations/mexico/vac14.jpg", "images/vacations/mexico/vac15.jpg", "images/vacations/mexico/vac16.jpg", "images/vacations/mexico/vac17.jpg", "images/vacations/mexico/vac18.jpg", "images/vacations/mexico/vac19.jpg", "images/vacations/mexico/vac2.jpg", "images/vacations/mexico/vac20.jpg", "images/vacations/mexico/vac21.jpg", "images/vacations/mexico/vac22.jpg", "images/vacations/mexico/vac3.jpg", "images/vacations/mexico/vac4.jpg", "images/vacations/mexico/vac5.jpg", "images/vacations/mexico/vac6.jpg", "images/vacations/mexico/vac7.jpg", "images/vacations/mexico/vac8.jpg", "images/vacations/mexico/vac9.jpg", "images/vacations/morocco.jpg", "images/vacations/puertovallarta.jpg", "images/vacations/rivieramaya.jpg", "images/vacations/vacation-bg.jpg", "logo.svg", "logos/fairmont.svg", "logos/hilton.svg", "logos/radisson.svg", "logos/ritz-carlton.svg", "logos/shangri-la.svg", "logos/westin.svg", "lottie/54972-world-map-tallinn.json", "lottie/97942-desinsafe-buildings.json"]),
  _: {
    mime: { ".png": "image/png", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".json": "application/json" },
    entry: { "file": "start-8626e5c3.js", "js": ["start-8626e5c3.js", "chunks/vendor-3e73c3b8.js", "chunks/preload-helper-e4860ae8.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8)),
      () => Promise.resolve().then(() => (init__9(), __exports9)),
      () => Promise.resolve().then(() => (init__10(), __exports10)),
      () => Promise.resolve().then(() => (init__11(), __exports11)),
      () => Promise.resolve().then(() => (init__12(), __exports12)),
      () => Promise.resolve().then(() => (init__13(), __exports13)),
      () => Promise.resolve().then(() => (init__14(), __exports14)),
      () => Promise.resolve().then(() => (init__15(), __exports15)),
      () => Promise.resolve().then(() => (init__16(), __exports16)),
      () => Promise.resolve().then(() => (init__17(), __exports17)),
      () => Promise.resolve().then(() => (init__18(), __exports18)),
      () => Promise.resolve().then(() => (init__19(), __exports19)),
      () => Promise.resolve().then(() => (init__20(), __exports20)),
      () => Promise.resolve().then(() => (init__21(), __exports21)),
      () => Promise.resolve().then(() => (init__22(), __exports22)),
      () => Promise.resolve().then(() => (init__23(), __exports23)),
      () => Promise.resolve().then(() => (init__24(), __exports24)),
      () => Promise.resolve().then(() => (init__25(), __exports25)),
      () => Promise.resolve().then(() => (init__26(), __exports26)),
      () => Promise.resolve().then(() => (init__27(), __exports27)),
      () => Promise.resolve().then(() => (init__28(), __exports28)),
      () => Promise.resolve().then(() => (init__29(), __exports29)),
      () => Promise.resolve().then(() => (init__30(), __exports30)),
      () => Promise.resolve().then(() => (init__31(), __exports31)),
      () => Promise.resolve().then(() => (init__32(), __exports32)),
      () => Promise.resolve().then(() => (init__33(), __exports33))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/signature-vacations\/?$/,
        params: null,
        path: "/signature-vacations",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/book-now-pay-later\/?$/,
        params: null,
        path: "/book-now-pay-later",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/sunquest-vacations\/?$/,
        params: null,
        path: "/sunquest-vacations",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/sunwing-vacations\/?$/,
        params: null,
        path: "/sunwing-vacations",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/westjet-vacations\/?$/,
        params: null,
        path: "/westjet-vacations",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/customer-support\/?$/,
        params: null,
        path: "/customer-support",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/porter-vacations\/?$/,
        params: null,
        path: "/porter-vacations",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/spring-vacations\/?$/,
        params: null,
        path: "/spring-vacations",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/summer-vacations\/?$/,
        params: null,
        path: "/summer-vacations",
        shadow: null,
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/terms-conditions\/?$/,
        params: null,
        path: "/terms-conditions",
        shadow: null,
        a: [0, 12],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/winter-vacations\/?$/,
        params: null,
        path: "/winter-vacations",
        shadow: null,
        a: [0, 13],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/pay-later-terms\/?$/,
        params: null,
        path: "/pay-later-terms",
        shadow: null,
        a: [0, 14],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/baggage-policy\/?$/,
        params: null,
        path: "/baggage-policy",
        shadow: null,
        a: [0, 15],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/fall-vacations\/?$/,
        params: null,
        path: "/fall-vacations",
        shadow: null,
        a: [0, 16],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/privacy-policy\/?$/,
        params: null,
        path: "/privacy-policy",
        shadow: null,
        a: [0, 17],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/vacation-deals\/?$/,
        params: null,
        path: "/vacation-deals",
        shadow: null,
        a: [0, 18],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/destinations\/?$/,
        params: null,
        path: "/destinations",
        shadow: null,
        a: [0, 19],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/flight-deals\/?$/,
        params: null,
        path: "/flight-deals",
        shadow: null,
        a: [0, 20],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/flight-hotel\/?$/,
        params: null,
        path: "/flight-hotel",
        shadow: null,
        a: [0, 21],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/group-travel\/?$/,
        params: null,
        path: "/group-travel",
        shadow: null,
        a: [0, 22],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/travel-deals\/?$/,
        params: null,
        path: "/travel-deals",
        shadow: null,
        a: [0, 23],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/contact-us\/?$/,
        params: null,
        path: "/contact-us",
        shadow: null,
        a: [0, 24],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog-post\/?$/,
        params: null,
        path: "/blog-post",
        shadow: null,
        a: [0, 25],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/vacations\/?$/,
        params: null,
        path: "/vacations",
        shadow: null,
        a: [0, 26],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/about-us\/?$/,
        params: null,
        path: "/about-us",
        shadow: null,
        a: [0, 27],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/explore\/?$/,
        params: null,
        path: "/explore",
        shadow: null,
        a: [0, 28],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/flights\/?$/,
        params: null,
        path: "/flights",
        shadow: null,
        a: [0, 29],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/hotels\/?$/,
        params: null,
        path: "/hotels",
        shadow: null,
        a: [0, 30],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/blog\/?$/,
        params: null,
        path: "/blog",
        shadow: null,
        a: [0, 31],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/faqs\/?$/,
        params: null,
        path: "/faqs",
        shadow: null,
        a: [0, 32],
        b: [1]
      }
    ]
  }
};

// .svelte-kit/vercel-tmp/entry.js
var app = new App(manifest);
var entry_default = async (req, res) => {
  let request;
  try {
    request = await getRequest(`https://${req.headers.host}`, req);
  } catch (err) {
    res.statusCode = err.status || 400;
    return res.end(err.reason || "Invalid request body");
  }
  setResponse(res, await app.render(request));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*! fetch-blob. MIT License. Jimmy W??rting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy W??rting <https://jimmy.warting.se/opensource> */
