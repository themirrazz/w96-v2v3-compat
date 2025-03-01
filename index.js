//!wrt
w96.FSUtil.normalizeDriveLetter = function (k) {
    return k[0].toLowerCase() + k.slice(1);
};

w96.FSUtil.fixPath = function (e) {
    let t = e.replace(/(^\/)|(\/$)/gi,"");
    t = t.replace(/(\/){2,}/gi,"/");
    return t;
};

w96.FS.toURL = async function (url) {
    var blob = await w96.FS.toBlob(url);
    return URL.createObjectURL(blob);
};