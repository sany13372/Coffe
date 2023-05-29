    /*!
    * sweetalert2 v11.6.15
    * Released under the MIT License.
    */
    !function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Sweetalert2 = t()
}(this, (function () {
    "use strict";
    var e = {awaitingPromise: new WeakMap, promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap};
    const t = e => {
    const t = {};
    for (const o in e) t[e[o]] = "swal2-" + e[o];
    return t
},
    o = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
    n = t(["success", "warning", "info", "question", "error"]), s = "SweetAlert2:",
    a = e => e.charAt(0).toUpperCase() + e.slice(1), i = e => {
    console.warn(`${s} ${"object" == typeof e ? e.join(" ") : e}`)
}, r = e => {
    console.error(`${s} ${e}`)
}, l = [], c = (e, t) => {
    var o;
    o = `"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`, l.includes(o) || (l.push(o), i(o))
}, d = e => "function" == typeof e ? e() : e, u = e => e && "function" == typeof e.toPromise,
    p = e => u(e) ? e.toPromise() : Promise.resolve(e), m = e => e && Promise.resolve(e) === e,
    w = () => document.body.querySelector(`.${o.container}`), g = e => {
    const t = w();
    return t ? t.querySelector(e) : null
}, h = e => g(`.${e}`), f = () => h(o.popup), b = () => h(o.icon), y = () => h(o.title),
    v = () => h(o["html-container"]), x = () => h(o.image), k = () => h(o["progress-steps"]),
    C = () => h(o["validation-message"]), A = () => g(`.${o.actions} .${o.confirm}`),
    B = () => g(`.${o.actions} .${o.deny}`), P = () => g(`.${o.loader}`),
    $ = () => g(`.${o.actions} .${o.cancel}`), E = () => h(o.actions), T = () => h(o.footer),
    S = () => h(o["timer-progress-bar"]), L = () => h(o.close), j = () => {
    const e = Array.from(f().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e, t) => {
    const o = parseInt(e.getAttribute("tabindex")), n = parseInt(t.getAttribute("tabindex"));
    return o > n ? 1 : o < n ? -1 : 0
})),
    t = Array.from(f().querySelectorAll('\n    a[href],\n    area[href],\n    input:not([disabled]),\n    select:not([disabled]),\n    textarea:not([disabled]),\n    button:not([disabled]),\n    iframe,\n    object,\n    embed,\n    [tabindex="0"],\n    [contenteditable],\n    audio[controls],\n    video[controls],\n    summary\n  ')).filter((e => "-1" !== e.getAttribute("tabindex")));
    return (e => {
    const t = [];
    for (let o = 0; o < e.length; o++) -1 === t.indexOf(e[o]) && t.push(e[o]);
    return t
})(e.concat(t)).filter((e => X(e)))
},
    O = () => q(document.body, o.shown) && !q(document.body, o["toast-shown"]) && !q(document.body, o["no-backdrop"]),
    M = () => f() && q(f(), o.toast), z = {previousBodyPadding: null}, H = (e, t) => {
    if (e.textContent = "", t) {
    const o = (new DOMParser).parseFromString(t, "text/html");
    Array.from(o.querySelector("head").childNodes).forEach((t => {
    e.appendChild(t)
})), Array.from(o.querySelector("body").childNodes).forEach((t => {
    t instanceof HTMLVideoElement || t instanceof HTMLAudioElement ? e.appendChild(t.cloneNode(!0)) : e.appendChild(t)
}))
}
}, q = (e, t) => {
    if (!t) return !1;
    const o = t.split(/\s+/);
    for (let t = 0; t < o.length; t++) if (!e.classList.contains(o[t])) return !1;
    return !0
}, I = (e, t, s) => {
    if (((e, t) => {
    Array.from(e.classList).forEach((s => {
    Object.values(o).includes(s) || Object.values(n).includes(s) || Object.values(t.showClass).includes(s) || e.classList.remove(s)
}))
})(e, t), t.customClass && t.customClass[s]) {
    if ("string" != typeof t.customClass[s] && !t.customClass[s].forEach) return void i(`Invalid type of customClass.${s}! Expected string or iterable object, got "${typeof t.customClass[s]}"`);
    F(e, t.customClass[s])
}
}, D = (e, t) => {
    if (!t) return null;
    switch (t) {
    case"select":
    case"textarea":
    case"file":
    return e.querySelector(`.${o.popup} > .${o[t]}`);
    case"checkbox":
    return e.querySelector(`.${o.popup} > .${o.checkbox} input`);
    case"radio":
    return e.querySelector(`.${o.popup} > .${o.radio} input:checked`) || e.querySelector(`.${o.popup} > .${o.radio} input:first-child`);
    case"range":
    return e.querySelector(`.${o.popup} > .${o.range} input`);
    default:
    return e.querySelector(`.${o.popup} > .${o.input}`)
}
}, V = e => {
    if (e.focus(), "file" !== e.type) {
    const t = e.value;
    e.value = "", e.value = t
}
}, N = (e, t, o) => {
    e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach((t => {
    Array.isArray(e) ? e.forEach((e => {
    o ? e.classList.add(t) : e.classList.remove(t)
})) : o ? e.classList.add(t) : e.classList.remove(t)
})))
}, F = (e, t) => {
    N(e, t, !0)
}, R = (e, t) => {
    N(e, t, !1)
}, U = (e, t) => {
    const o = Array.from(e.children);
    for (let e = 0; e < o.length; e++) {
    const n = o[e];
    if (n instanceof HTMLElement && q(n, t)) return n
}
}, _ = (e, t, o) => {
    o === `${parseInt(o)}` && (o = parseInt(o)), o || 0 === parseInt(o) ? e.style[t] = "number" == typeof o ? `${o}px` : o : e.style.removeProperty(t)
}, W = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
    e.style.display = t
}, Y = e => {
    e.style.display = "none"
}, Z = (e, t, o, n) => {
    const s = e.querySelector(t);
    s && (s.style[o] = n)
}, K = function (e, t) {
    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "flex";
    t ? W(e, o) : Y(e)
}, X = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    J = e => !!(e.scrollHeight > e.clientHeight), G = e => {
    const t = window.getComputedStyle(e), o = parseFloat(t.getPropertyValue("animation-duration") || "0"),
    n = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return o > 0 || n > 0
}, Q = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const o = S();
    X(o) && (t && (o.style.transition = "none", o.style.width = "100%"), setTimeout((() => {
    o.style.transition = `width ${e / 1e3}s linear`, o.style.width = "0%"
}), 10))
}, ee = {}, te = e => new Promise((t => {
    if (!e) return t();
    const o = window.scrollX, n = window.scrollY;
    ee.restoreFocusTimeout = setTimeout((() => {
    ee.previousActiveElement instanceof HTMLElement ? (ee.previousActiveElement.focus(), ee.previousActiveElement = null) : document.body && document.body.focus(), t()
}), 100), window.scrollTo(o, n)
})), oe = () => "undefined" == typeof window || "undefined" == typeof document,
    ne = `\n  <div aria-labelledby="${o.title}" aria-describedby="${o["html-container"]}" class="${o.popup}" tabindex="-1">\n    <button type="button" class="${o.close}"></button>\n    <ul class="${o["progress-steps"]}"></ul>\n    <div class="${o.icon}"></div>\n    <img class="${o.image}" />\n    <h2 class="${o.title}" id="${o.title}"></h2>\n    <div class="${o["html-container"]}" id="${o["html-container"]}"></div>\n    <input class="${o.input}" />\n    <input type="file" class="${o.file}" />\n    <div class="${o.range}">\n      <input type="range" />\n      <output></output>\n    </div>\n    <select class="${o.select}"></select>\n    <div class="${o.radio}"></div>\n    <label for="${o.checkbox}" class="${o.checkbox}">\n      <input type="checkbox" />\n      <span class="${o.label}"></span>\n    </label>\n    <textarea class="${o.textarea}"></textarea>\n    <div class="${o["validation-message"]}" id="${o["validation-message"]}"></div>\n    <div class="${o.actions}">\n      <div class="${o.loader}"></div>\n      <button type="button" class="${o.confirm}"></button>\n      <button type="button" class="${o.deny}"></button>\n      <button type="button" class="${o.cancel}"></button>\n    </div>\n    <div class="${o.footer}"></div>\n    <div class="${o["timer-progress-bar-container"]}">\n      <div class="${o["timer-progress-bar"]}"></div>\n    </div>\n  </div>\n  `.replace(/(^|\n)\s*/g, ""),
    se = () => {
    ee.currentInstance.resetValidationMessage()
}, ae = e => {
    const t = (() => {
    const e = w();
    return !!e && (e.remove(), R([document.documentElement, document.body], [o["no-backdrop"], o["toast-shown"], o["has-column"]]), !0)
})();
    if (oe()) return void r("SweetAlert2 requires document to initialize");
    const n = document.createElement("div");
    n.className = o.container, t && F(n, o["no-transition"]), H(n, ne);
    const s = "string" == typeof (a = e.target) ? document.querySelector(a) : a;
    var a;
    s.appendChild(n), (e => {
    const t = f();
    t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true")
})(e), (e => {
    "rtl" === window.getComputedStyle(e).direction && F(w(), o.rtl)
})(s), (() => {
    const e = f(), t = U(e, o.input), n = U(e, o.file), s = e.querySelector(`.${o.range} input`),
    a = e.querySelector(`.${o.range} output`), i = U(e, o.select),
    r = e.querySelector(`.${o.checkbox} input`), l = U(e, o.textarea);
    t.oninput = se, n.onchange = se, i.onchange = se, r.onchange = se, l.oninput = se, s.oninput = () => {
    se(), a.value = s.value
}, s.onchange = () => {
    se(), a.value = s.value
}
})()
}, ie = (e, t) => {
    e instanceof HTMLElement ? t.appendChild(e) : "object" == typeof e ? re(e, t) : e && H(t, e)
}, re = (e, t) => {
    e.jquery ? le(t, e) : H(t, e.toString())
}, le = (e, t) => {
    if (e.textContent = "", 0 in t) for (let o = 0; o in t; o++) e.appendChild(t[o].cloneNode(!0)); else e.appendChild(t.cloneNode(!0))
}, ce = (() => {
    if (oe()) return !1;
    const e = document.createElement("div"),
    t = {WebkitAnimation: "webkitAnimationEnd", animation: "animationend"};
    for (const o in t) if (Object.prototype.hasOwnProperty.call(t, o) && void 0 !== e.style[o]) return t[o];
    return !1
})(), de = (e, t) => {
    const n = E(), s = P();
    t.showConfirmButton || t.showDenyButton || t.showCancelButton ? W(n) : Y(n), I(n, t, "actions"), function (e, t, n) {
    const s = A(), a = B(), i = $();
    ue(s, "confirm", n), ue(a, "deny", n), ue(i, "cancel", n), function (e, t, n, s) {
    if (!s.buttonsStyling) return void R([e, t, n], o.styled);
    F([e, t, n], o.styled), s.confirmButtonColor && (e.style.backgroundColor = s.confirmButtonColor, F(e, o["default-outline"]));
    s.denyButtonColor && (t.style.backgroundColor = s.denyButtonColor, F(t, o["default-outline"]));
    s.cancelButtonColor && (n.style.backgroundColor = s.cancelButtonColor, F(n, o["default-outline"]))
}(s, a, i, n), n.reverseButtons && (n.toast ? (e.insertBefore(i, s), e.insertBefore(a, s)) : (e.insertBefore(i, t), e.insertBefore(a, t), e.insertBefore(s, t)))
}(n, s, t), H(s, t.loaderHtml), I(s, t, "loader")
};

    function ue(e, t, n) {
    K(e, n[`show${a(t)}Button`], "inline-block"), H(e, n[`${t}ButtonText`]), e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`]), e.className = o[t], I(e, n, `${t}Button`), F(e, n[`${t}ButtonClass`])
}

    const pe = (e, t) => {
    const n = w();
    n && (!function (e, t) {
    "string" == typeof t ? e.style.background = t : t || F([document.documentElement, document.body], o["no-backdrop"])
}(n, t.backdrop), function (e, t) {
    t in o ? F(e, o[t]) : (i('The "position" parameter is not valid, defaulting to "center"'), F(e, o.center))
}(n, t.position), function (e, t) {
    if (t && "string" == typeof t) {
    const n = `grow-${t}`;
    n in o && F(e, o[n])
}
}(n, t.grow), I(n, t, "container"))
};
    const me = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], we = e => {
    if (!xe[e.input]) return void r(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);
    const t = ye(e.input), o = xe[e.input](t, e);
    W(t), setTimeout((() => {
    V(o)
}))
}, ge = (e, t) => {
    const o = D(f(), e);
    if (o) {
    (e => {
    for (let t = 0; t < e.attributes.length; t++) {
    const o = e.attributes[t].name;
    ["type", "value", "style"].includes(o) || e.removeAttribute(o)
}
})(o);
    for (const e in t) o.setAttribute(e, t[e])
}
}, he = e => {
    const t = ye(e.input);
    "object" == typeof e.customClass && F(t, e.customClass.input)
}, fe = (e, t) => {
    e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
}, be = (e, t, n) => {
    if (n.inputLabel) {
    e.id = o.input;
    const s = document.createElement("label"), a = o["input-label"];
    s.setAttribute("for", e.id), s.className = a, "object" == typeof n.customClass && F(s, n.customClass.inputLabel), s.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", s)
}
}, ye = e => U(f(), o[e] || o.input), ve = (e, t) => {
    ["string", "number"].includes(typeof t) ? e.value = `${t}` : m(t) || i(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)
}, xe = {};
    xe.text = xe.email = xe.password = xe.number = xe.tel = xe.url = (e, t) => (ve(e, t.inputValue), be(e, e, t), fe(e, t), e.type = t.input, e), xe.file = (e, t) => (be(e, e, t), fe(e, t), e), xe.range = (e, t) => {
    const o = e.querySelector("input"), n = e.querySelector("output");
    return ve(o, t.inputValue), o.type = t.input, ve(n, t.inputValue), be(o, e, t), e
}, xe.select = (e, t) => {
    if (e.textContent = "", t.inputPlaceholder) {
    const o = document.createElement("option");
    H(o, t.inputPlaceholder), o.value = "", o.disabled = !0, o.selected = !0, e.appendChild(o)
}
    return be(e, e, t), e
}, xe.radio = e => (e.textContent = "", e), xe.checkbox = (e, t) => {
    const n = D(f(), "checkbox");
    n.value = "1", n.id = o.checkbox, n.checked = Boolean(t.inputValue);
    const s = e.querySelector("span");
    return H(s, t.inputPlaceholder), n
}, xe.textarea = (e, t) => {
    ve(e, t.inputValue), fe(e, t), be(e, e, t);
    return setTimeout((() => {
    if ("MutationObserver" in window) {
    const t = parseInt(window.getComputedStyle(f()).width);
    new MutationObserver((() => {
    const o = e.offsetWidth + (n = e, parseInt(window.getComputedStyle(n).marginLeft) + parseInt(window.getComputedStyle(n).marginRight));
    var n;
    f().style.width = o > t ? `${o}px` : null
})).observe(e, {attributes: !0, attributeFilter: ["style"]})
}
})), e
};
    const ke = (t, n) => {
    const s = v();
    I(s, n, "htmlContainer"), n.html ? (ie(n.html, s), W(s, "block")) : n.text ? (s.textContent = n.text, W(s, "block")) : Y(s), ((t, n) => {
    const s = f(), a = e.innerParams.get(t), i = !a || n.input !== a.input;
    me.forEach((e => {
    const t = U(s, o[e]);
    ge(e, n.inputAttributes), t.className = o[e], i && Y(t)
})), n.input && (i && we(n), he(n))
})(t, n)
}, Ce = (e, t) => {
    for (const o in n) t.icon !== o && R(e, n[o]);
    F(e, n[t.icon]), Pe(e, t), Ae(), I(e, t, "icon")
}, Ae = () => {
    const e = f(), t = window.getComputedStyle(e).getPropertyValue("background-color"),
    o = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
    for (let e = 0; e < o.length; e++) o[e].style.backgroundColor = t
}, Be = (e, t) => {
    let o, n = e.innerHTML;
    if (t.iconHtml) o = $e(t.iconHtml); else if ("success" === t.icon) o = '\n    <div class="swal2-success-circular-line-left"></div>\n    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n    <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n    <div class="swal2-success-circular-line-right"></div>\n  ', n = n.replace(/ style=".*?"/g, ""); else if ("error" === t.icon) o = '\n    <span class="swal2-x-mark">\n      <span class="swal2-x-mark-line-left"></span>\n      <span class="swal2-x-mark-line-right"></span>\n    </span>\n  '; else {
    o = $e({question: "?", warning: "!", info: "i"}[t.icon])
}
    n.trim() !== o.trim() && H(e, o)
}, Pe = (e, t) => {
    if (t.iconColor) {
    e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
    for (const o of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) Z(e, o, "backgroundColor", t.iconColor);
    Z(e, ".swal2-success-ring", "borderColor", t.iconColor)
}
}, $e = e => `<div class="${o["icon-content"]}">${e}</div>`, Ee = (e, t) => {
    e.className = `${o.popup} ${X(e) ? t.showClass.popup : ""}`, t.toast ? (F([document.documentElement, document.body], o["toast-shown"]), F(e, o.toast)) : F(e, o.modal), I(e, t, "popup"), "string" == typeof t.customClass && F(e, t.customClass), t.icon && F(e, o[`icon-${t.icon}`])
}, Te = e => {
    const t = document.createElement("li");
    return F(t, o["progress-step"]), H(t, e), t
}, Se = e => {
    const t = document.createElement("li");
    return F(t, o["progress-step-line"]), e.progressStepsDistance && _(t, "width", e.progressStepsDistance), t
}, Le = (t, s) => {
    ((e, t) => {
    const o = w(), n = f();
    t.toast ? (_(o, "width", t.width), n.style.width = "100%", n.insertBefore(P(), b())) : _(n, "width", t.width), _(n, "padding", t.padding), t.color && (n.style.color = t.color), t.background && (n.style.background = t.background), Y(C()), Ee(n, t)
})(0, s), pe(0, s), ((e, t) => {
    const n = k();
    t.progressSteps && 0 !== t.progressSteps.length ? (W(n), n.textContent = "", t.currentProgressStep >= t.progressSteps.length && i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(((e, s) => {
    const a = Te(e);
    if (n.appendChild(a), s === t.currentProgressStep && F(a, o["active-progress-step"]), s !== t.progressSteps.length - 1) {
    const e = Se(t);
    n.appendChild(e)
}
}))) : Y(n)
})(0, s), ((t, o) => {
    const s = e.innerParams.get(t), a = b();
    if (s && o.icon === s.icon) return Be(a, o), void Ce(a, o);
    if (o.icon || o.iconHtml) {
    if (o.icon && -1 === Object.keys(n).indexOf(o.icon)) return r(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${o.icon}"`), void Y(a);
    W(a), Be(a, o), Ce(a, o), F(a, o.showClass.icon)
} else Y(a)
})(t, s), ((e, t) => {
    const n = x();
    t.imageUrl ? (W(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), _(n, "width", t.imageWidth), _(n, "height", t.imageHeight), n.className = o.image, I(n, t, "image")) : Y(n)
})(0, s), ((e, t) => {
    const o = y();
    K(o, t.title || t.titleText, "block"), t.title && ie(t.title, o), t.titleText && (o.innerText = t.titleText), I(o, t, "title")
})(0, s), ((e, t) => {
    const o = L();
    H(o, t.closeButtonHtml), I(o, t, "closeButton"), K(o, t.showCloseButton), o.setAttribute("aria-label", t.closeButtonAriaLabel)
})(0, s), ke(t, s), de(0, s), ((e, t) => {
    const o = T();
    K(o, t.footer), t.footer && ie(t.footer, o), I(o, t, "footer")
})(0, s), "function" == typeof s.didRender && s.didRender(f())
};

    function je() {
    const t = e.innerParams.get(this);
    if (!t) return;
    const n = e.domCache.get(this);
    Y(n.loader), M() ? t.icon && W(b()) : Oe(n), R([n.popup, n.actions], o.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.denyButton.disabled = !1, n.cancelButton.disabled = !1
}

    const Oe = e => {
    const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
    t.length ? W(t[0], "inline-block") : X(A()) || X(B()) || X($()) || Y(e.actions)
};
    const Me = () => A() && A().click(),
    ze = Object.freeze({cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer"}),
    He = e => {
    e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {capture: e.keydownListenerCapture}), e.keydownHandlerAdded = !1)
}, qe = (e, t, o) => {
    const n = j();
    if (n.length) return (t += o) === n.length ? t = 0 : -1 === t && (t = n.length - 1), void n[t].focus();
    f().focus()
}, Ie = ["ArrowRight", "ArrowDown"], De = ["ArrowLeft", "ArrowUp"], Ve = (t, o, n) => {
    const s = e.innerParams.get(t);
    s && (o.isComposing || 229 === o.keyCode || (s.stopKeydownPropagation && o.stopPropagation(), "Enter" === o.key ? Ne(t, o, s) : "Tab" === o.key ? Fe(o, s) : [...Ie, ...De].includes(o.key) ? Re(o.key) : "Escape" === o.key && Ue(o, s, n)))
}, Ne = (e, t, o) => {
    if (d(o.allowEnterKey) && t.target && e.getInput() && t.target instanceof HTMLElement && t.target.outerHTML === e.getInput().outerHTML) {
    if (["textarea", "file"].includes(o.input)) return;
    Me(), t.preventDefault()
}
}, Fe = (e, t) => {
    const o = e.target, n = j();
    let s = -1;
    for (let e = 0; e < n.length; e++) if (o === n[e]) {
    s = e;
    break
}
    e.shiftKey ? qe(0, s, -1) : qe(0, s, 1), e.stopPropagation(), e.preventDefault()
}, Re = e => {
    const t = A(), o = B(), n = $();
    if (document.activeElement instanceof HTMLElement && ![t, o, n].includes(document.activeElement)) return;
    const s = Ie.includes(e) ? "nextElementSibling" : "previousElementSibling";
    let a = document.activeElement;
    for (let e = 0; e < E().children.length; e++) {
    if (a = a[s], !a) return;
    if (a instanceof HTMLButtonElement && X(a)) break
}
    a instanceof HTMLButtonElement && a.focus()
}, Ue = (e, t, o) => {
    d(t.allowEscapeKey) && (e.preventDefault(), o(ze.esc))
};
    var _e = {swalPromiseResolve: new WeakMap, swalPromiseReject: new WeakMap};
    const We = () => {
    Array.from(document.body.children).forEach((e => {
    e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
}))
}, Ye = () => {
    const e = navigator.userAgent, t = !!e.match(/iPad/i) || !!e.match(/iPhone/i), o = !!e.match(/WebKit/i);
    if (t && o && !e.match(/CriOS/i)) {
    const e = 44;
    f().scrollHeight > window.innerHeight - e && (w().style.paddingBottom = `${e}px`)
}
}, Ze = () => {
    const e = w();
    let t;
    e.ontouchstart = e => {
    t = Ke(e)
}, e.ontouchmove = e => {
    t && (e.preventDefault(), e.stopPropagation())
}
}, Ke = e => {
    const t = e.target, o = w();
    return !Xe(e) && !Je(e) && (t === o || !J(o) && t instanceof HTMLElement && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && (!J(v()) || !v().contains(t)))
}, Xe = e => e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
    Je = e => e.touches && e.touches.length > 1, Ge = () => {
    null === z.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (z.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${z.previousBodyPadding + (() => {
    const e = document.createElement("div");
    e.className = o["scrollbar-measure"], document.body.appendChild(e);
    const t = e.getBoundingClientRect().width - e.clientWidth;
    return document.body.removeChild(e), t
})()}px`)
};

    function Qe(e, t, n, s) {
    M() ? it(e, s) : (te(n).then((() => it(e, s))), He(ee));
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), O() && (null !== z.previousBodyPadding && (document.body.style.paddingRight = `${z.previousBodyPadding}px`, z.previousBodyPadding = null), (() => {
    if (q(document.body, o.iosfix)) {
    const e = parseInt(document.body.style.top, 10);
    R(document.body, o.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e
}
})(), We()), R([document.documentElement, document.body], [o.shown, o["height-auto"], o["no-backdrop"], o["toast-shown"]])
}

    function et(e) {
    e = nt(e);
    const t = _e.swalPromiseResolve.get(this), o = tt(this);
    this.isAwaitingPromise() ? e.isDismissed || (ot(this), t(e)) : o && t(e)
}

    const tt = t => {
    const o = f();
    if (!o) return !1;
    const n = e.innerParams.get(t);
    if (!n || q(o, n.hideClass.popup)) return !1;
    R(o, n.showClass.popup), F(o, n.hideClass.popup);
    const s = w();
    return R(s, n.showClass.backdrop), F(s, n.hideClass.backdrop), st(t, o, n), !0
};
    const ot = t => {
    t.isAwaitingPromise() && (e.awaitingPromise.delete(t), e.innerParams.get(t) || t._destroy())
}, nt = e => void 0 === e ? {isConfirmed: !1, isDenied: !1, isDismissed: !0} : Object.assign({
    isConfirmed: !1,
    isDenied: !1,
    isDismissed: !1
}, e), st = (e, t, o) => {
    const n = w(), s = ce && G(t);
    "function" == typeof o.willClose && o.willClose(t), s ? at(e, t, n, o.returnFocus, o.didClose) : Qe(e, n, o.returnFocus, o.didClose)
}, at = (e, t, o, n, s) => {
    ee.swalCloseEventFinishedCallback = Qe.bind(null, e, o, n, s), t.addEventListener(ce, (function (e) {
    e.target === t && (ee.swalCloseEventFinishedCallback(), delete ee.swalCloseEventFinishedCallback)
}))
}, it = (e, t) => {
    setTimeout((() => {
    "function" == typeof t && t.bind(e.params)(), e._destroy()
}))
};

    function rt(t, o, n) {
    const s = e.domCache.get(t);
    o.forEach((e => {
    s[e].disabled = n
}))
}

    function lt(e, t) {
    if (e) if ("radio" === e.type) {
    const o = e.parentNode.parentNode.querySelectorAll("input");
    for (let e = 0; e < o.length; e++) o[e].disabled = t
} else e.disabled = t
}

    const ct = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    showClass: {popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show"},
    hideClass: {popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide"},
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0
},
    dt = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
    ut = {},
    pt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
    mt = e => Object.prototype.hasOwnProperty.call(ct, e), wt = e => -1 !== dt.indexOf(e), gt = e => ut[e],
    ht = e => {
    mt(e) || i(`Unknown parameter "${e}"`)
}, ft = e => {
    pt.includes(e) && i(`The parameter "${e}" is incompatible with toasts`)
}, bt = e => {
    gt(e) && c(e, gt(e))
};
    const yt = e => {
    const t = {};
    return Object.keys(e).forEach((o => {
    wt(o) ? t[o] = e[o] : i(`Invalid parameter to update: ${o}`)
})), t
};
    const vt = e => {
    xt(e), delete e.params, delete ee.keydownHandler, delete ee.keydownTarget, delete ee.currentInstance
}, xt = t => {
    t.isAwaitingPromise() ? (kt(e, t), e.awaitingPromise.set(t, !0)) : (kt(_e, t), kt(e, t))
}, kt = (e, t) => {
    for (const o in e) e[o].delete(t)
};
    var Ct = Object.freeze({
    __proto__: null, hideLoading: je, disableLoading: je, getInput: function (t) {
    const o = e.innerParams.get(t || this), n = e.domCache.get(t || this);
    return n ? D(n.popup, o.input) : null
}, close: et, isAwaitingPromise: function () {
    return !!e.awaitingPromise.get(this)
}, rejectPromise: function (e) {
    const t = _e.swalPromiseReject.get(this);
    ot(this), t && t(e)
}, handleAwaitingPromise: ot, closePopup: et, closeModal: et, closeToast: et, enableButtons: function () {
    rt(this, ["confirmButton", "denyButton", "cancelButton"], !1)
}, disableButtons: function () {
    rt(this, ["confirmButton", "denyButton", "cancelButton"], !0)
}, enableInput: function () {
    lt(this.getInput(), !1)
}, disableInput: function () {
    lt(this.getInput(), !0)
}, showValidationMessage: function (t) {
    const n = e.domCache.get(this), s = e.innerParams.get(this);
    H(n.validationMessage, t), n.validationMessage.className = o["validation-message"], s.customClass && s.customClass.validationMessage && F(n.validationMessage, s.customClass.validationMessage), W(n.validationMessage);
    const a = this.getInput();
    a && (a.setAttribute("aria-invalid", !0), a.setAttribute("aria-describedby", o["validation-message"]), V(a), F(a, o.inputerror))
}, resetValidationMessage: function () {
    const t = e.domCache.get(this);
    t.validationMessage && Y(t.validationMessage);
    const n = this.getInput();
    n && (n.removeAttribute("aria-invalid"), n.removeAttribute("aria-describedby"), R(n, o.inputerror))
}, update: function (t) {
    const o = f(), n = e.innerParams.get(this);
    if (!o || q(o, n.hideClass.popup)) return void i("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    const s = yt(t), a = Object.assign({}, n, s);
    Le(this, a), e.innerParams.set(this, a), Object.defineProperties(this, {
    params: {
    value: Object.assign({}, this.params, t),
    writable: !1,
    enumerable: !0
}
})
}, _destroy: function () {
    const t = e.domCache.get(this), o = e.innerParams.get(this);
    o ? (t.popup && ee.swalCloseEventFinishedCallback && (ee.swalCloseEventFinishedCallback(), delete ee.swalCloseEventFinishedCallback), "function" == typeof o.didDestroy && o.didDestroy(), vt(this)) : xt(this)
}
});
    const At = e => {
    let t = f();
    t || new $o, t = f();
    const o = P();
    M() ? Y(b()) : Bt(t, e), W(o), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus()
}, Bt = (e, t) => {
    const n = E(), s = P();
    !t && X(A()) && (t = A()), W(n), t && (Y(t), s.setAttribute("data-button-to-replace", t.className)), s.parentNode.insertBefore(s, t), F([e, n], o.loading)
}, Pt = e => e.checked ? 1 : 0, $t = e => e.checked ? e.value : null,
    Et = e => e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null,
    Tt = (e, t) => {
    const o = f(), n = e => {
    Lt[t.input](o, jt(e), t)
};
    u(t.inputOptions) || m(t.inputOptions) ? (At(A()), p(t.inputOptions).then((t => {
    e.hideLoading(), n(t)
}))) : "object" == typeof t.inputOptions ? n(t.inputOptions) : r("Unexpected type of inputOptions! Expected object, Map or Promise, got " + typeof t.inputOptions)
}, St = (e, t) => {
    const o = e.getInput();
    Y(o), p(t.inputValue).then((n => {
    o.value = "number" === t.input ? `${parseFloat(n) || 0}` : `${n}`, W(o), o.focus(), e.hideLoading()
})).catch((t => {
    r(`Error in inputValue promise: ${t}`), o.value = "", W(o), o.focus(), e.hideLoading()
}))
}, Lt = {
    select: (e, t, n) => {
    const s = U(e, o.select), a = (e, t, o) => {
    const s = document.createElement("option");
    s.value = o, H(s, t), s.selected = Ot(o, n.inputValue), e.appendChild(s)
};
    t.forEach((e => {
    const t = e[0], o = e[1];
    if (Array.isArray(o)) {
    const e = document.createElement("optgroup");
    e.label = t, e.disabled = !1, s.appendChild(e), o.forEach((t => a(e, t[1], t[0])))
} else a(s, o, t)
})), s.focus()
}, radio: (e, t, n) => {
    const s = U(e, o.radio);
    t.forEach((e => {
    const t = e[0], a = e[1], i = document.createElement("input"), r = document.createElement("label");
    i.type = "radio", i.name = o.radio, i.value = t, Ot(t, n.inputValue) && (i.checked = !0);
    const l = document.createElement("span");
    H(l, a), l.className = o.label, r.appendChild(i), r.appendChild(l), s.appendChild(r)
}));
    const a = s.querySelectorAll("input");
    a.length && a[0].focus()
}
}, jt = e => {
    const t = [];
    return "undefined" != typeof Map && e instanceof Map ? e.forEach(((e, o) => {
    let n = e;
    "object" == typeof n && (n = jt(n)), t.push([o, n])
})) : Object.keys(e).forEach((o => {
    let n = e[o];
    "object" == typeof n && (n = jt(n)), t.push([o, n])
})), t
}, Ot = (e, t) => t && t.toString() === e.toString(), Mt = (t, o) => {
    const n = e.innerParams.get(t);
    if (!n.input) return void r(`The "input" parameter is needed to be set when using returnInputValueOn${a(o)}`);
    const s = ((e, t) => {
    const o = e.getInput();
    if (!o) return null;
    switch (t.input) {
    case"checkbox":
    return Pt(o);
    case"radio":
    return $t(o);
    case"file":
    return Et(o);
    default:
    return t.inputAutoTrim ? o.value.trim() : o.value
}
})(t, n);
    n.inputValidator ? zt(t, s, o) : t.getInput().checkValidity() ? "deny" === o ? Ht(t, s) : Dt(t, s) : (t.enableButtons(), t.showValidationMessage(n.validationMessage))
}, zt = (t, o, n) => {
    const s = e.innerParams.get(t);
    t.disableInput();
    Promise.resolve().then((() => p(s.inputValidator(o, s.validationMessage)))).then((e => {
    t.enableButtons(), t.enableInput(), e ? t.showValidationMessage(e) : "deny" === n ? Ht(t, o) : Dt(t, o)
}))
}, Ht = (t, o) => {
    const n = e.innerParams.get(t || void 0);
    if (n.showLoaderOnDeny && At(B()), n.preDeny) {
    e.awaitingPromise.set(t || void 0, !0);
    Promise.resolve().then((() => p(n.preDeny(o, n.validationMessage)))).then((e => {
    !1 === e ? (t.hideLoading(), ot(t)) : t.close({isDenied: !0, value: void 0 === e ? o : e})
})).catch((e => It(t || void 0, e)))
} else t.close({isDenied: !0, value: o})
}, qt = (e, t) => {
    e.close({isConfirmed: !0, value: t})
}, It = (e, t) => {
    e.rejectPromise(t)
}, Dt = (t, o) => {
    const n = e.innerParams.get(t || void 0);
    if (n.showLoaderOnConfirm && At(), n.preConfirm) {
    t.resetValidationMessage(), e.awaitingPromise.set(t || void 0, !0);
    Promise.resolve().then((() => p(n.preConfirm(o, n.validationMessage)))).then((e => {
    X(C()) || !1 === e ? (t.hideLoading(), ot(t)) : qt(t, void 0 === e ? o : e)
})).catch((e => It(t || void 0, e)))
} else qt(t, o)
}, Vt = (t, o, n) => {
    o.popup.onclick = () => {
    const o = e.innerParams.get(t);
    o && (Nt(o) || o.timer || o.input) || n(ze.close)
}
}, Nt = e => e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton;
    let Ft = !1;
    const Rt = e => {
    e.popup.onmousedown = () => {
    e.container.onmouseup = function (t) {
    e.container.onmouseup = void 0, t.target === e.container && (Ft = !0)
}
}
}, Ut = e => {
    e.container.onmousedown = () => {
    e.popup.onmouseup = function (t) {
    e.popup.onmouseup = void 0, (t.target === e.popup || e.popup.contains(t.target)) && (Ft = !0)
}
}
}, _t = (t, o, n) => {
    o.container.onclick = s => {
    const a = e.innerParams.get(t);
    Ft ? Ft = !1 : s.target === o.container && d(a.allowOutsideClick) && n(ze.backdrop)
}
}, Wt = e => e instanceof Element || (e => "object" == typeof e && e.jquery)(e);
    const Yt = () => {
    if (ee.timeout) return (() => {
    const e = S(), t = parseInt(window.getComputedStyle(e).width);
    e.style.removeProperty("transition"), e.style.width = "100%";
    const o = t / parseInt(window.getComputedStyle(e).width) * 100;
    e.style.removeProperty("transition"), e.style.width = `${o}%`
})(), ee.timeout.stop()
}, Zt = () => {
    if (ee.timeout) {
    const e = ee.timeout.start();
    return Q(e), e
}
};
    let Kt = !1;
    const Xt = {};
    const Jt = e => {
    for (let t = e.target; t && t !== document; t = t.parentNode) for (const e in Xt) {
    const o = t.getAttribute(e);
    if (o) return void Xt[e].fire({template: o})
}
};
    var Gt = Object.freeze({
    __proto__: null,
    isValidParameter: mt,
    isUpdatableParameter: wt,
    isDeprecatedParameter: gt,
    argsToParams: e => {
    const t = {};
    return "object" != typeof e[0] || Wt(e[0]) ? ["title", "html", "icon"].forEach(((o, n) => {
    const s = e[n];
    "string" == typeof s || Wt(s) ? t[o] = s : void 0 !== s && r(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof s}`)
})) : Object.assign(t, e[0]), t
},
    getContainer: w,
    getPopup: f,
    getTitle: y,
    getHtmlContainer: v,
    getImage: x,
    getIcon: b,
    getIconContent: () => h(o["icon-content"]),
    getInputLabel: () => h(o["input-label"]),
    getCloseButton: L,
    getActions: E,
    getConfirmButton: A,
    getDenyButton: B,
    getCancelButton: $,
    getLoader: P,
    getFooter: T,
    getTimerProgressBar: S,
    getFocusableElements: j,
    getValidationMessage: C,
    getProgressSteps: k,
    isLoading: () => f().hasAttribute("data-loading"),
    isVisible: () => X(f()),
    clickConfirm: Me,
    clickDeny: () => B() && B().click(),
    clickCancel: () => $() && $().click(),
    fire: function () {
    const e = this;
    for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
    return new e(...o)
},
    mixin: function (e) {
    return class extends (this) {
    _main(t, o) {
    return super._main(t, Object.assign({}, e, o))
}
}
},
    showLoading: At,
    enableLoading: At,
    getTimerLeft: () => ee.timeout && ee.timeout.getTimerLeft(),
    stopTimer: Yt,
    resumeTimer: Zt,
    toggleTimer: () => {
    const e = ee.timeout;
    return e && (e.running ? Yt() : Zt())
},
    increaseTimer: e => {
    if (ee.timeout) {
    const t = ee.timeout.increase(e);
    return Q(t, !0), t
}
},
    isTimerRunning: () => ee.timeout && ee.timeout.isRunning(),
    bindClickHandler: function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template";
    Xt[e] = this, Kt || (document.body.addEventListener("click", Jt), Kt = !0)
}
});

    class Qt {
    constructor(e, t) {
    this.callback = e, this.remaining = t, this.running = !1, this.start()
}

    start() {
    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
}

    stop() {
    return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining
}

    increase(e) {
    const t = this.running;
    return t && this.stop(), this.remaining += e, t && this.start(), this.remaining
}

    getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining
}

    isRunning() {
    return this.running
}
}

    const eo = ["swal-title", "swal-html", "swal-footer"], to = e => {
    const t = {};
    return Array.from(e.querySelectorAll("swal-param")).forEach((e => {
    co(e, ["name", "value"]);
    const o = e.getAttribute("name"), n = e.getAttribute("value");
    t[o] = "boolean" == typeof ct[o] ? "false" !== n : "object" == typeof ct[o] ? JSON.parse(n) : n
})), t
}, oo = e => {
    const t = {};
    return Array.from(e.querySelectorAll("swal-function-param")).forEach((e => {
    const o = e.getAttribute("name"), n = e.getAttribute("value");
    t[o] = new Function(`return ${n}`)()
})), t
}, no = e => {
    const t = {};
    return Array.from(e.querySelectorAll("swal-button")).forEach((e => {
    co(e, ["type", "color", "aria-label"]);
    const o = e.getAttribute("type");
    t[`${o}ButtonText`] = e.innerHTML, t[`show${a(o)}Button`] = !0, e.hasAttribute("color") && (t[`${o}ButtonColor`] = e.getAttribute("color")), e.hasAttribute("aria-label") && (t[`${o}ButtonAriaLabel`] = e.getAttribute("aria-label"))
})), t
}, so = e => {
    const t = {}, o = e.querySelector("swal-image");
    return o && (co(o, ["src", "width", "height", "alt"]), o.hasAttribute("src") && (t.imageUrl = o.getAttribute("src")), o.hasAttribute("width") && (t.imageWidth = o.getAttribute("width")), o.hasAttribute("height") && (t.imageHeight = o.getAttribute("height")), o.hasAttribute("alt") && (t.imageAlt = o.getAttribute("alt"))), t
}, ao = e => {
    const t = {}, o = e.querySelector("swal-icon");
    return o && (co(o, ["type", "color"]), o.hasAttribute("type") && (t.icon = o.getAttribute("type")), o.hasAttribute("color") && (t.iconColor = o.getAttribute("color")), t.iconHtml = o.innerHTML), t
}, io = e => {
    const t = {}, o = e.querySelector("swal-input");
    o && (co(o, ["type", "label", "placeholder", "value"]), t.input = o.getAttribute("type") || "text", o.hasAttribute("label") && (t.inputLabel = o.getAttribute("label")), o.hasAttribute("placeholder") && (t.inputPlaceholder = o.getAttribute("placeholder")), o.hasAttribute("value") && (t.inputValue = o.getAttribute("value")));
    const n = Array.from(e.querySelectorAll("swal-input-option"));
    return n.length && (t.inputOptions = {}, n.forEach((e => {
    co(e, ["value"]);
    const o = e.getAttribute("value"), n = e.innerHTML;
    t.inputOptions[o] = n
}))), t
}, ro = (e, t) => {
    const o = {};
    for (const n in t) {
    const s = t[n], a = e.querySelector(s);
    a && (co(a, []), o[s.replace(/^swal-/, "")] = a.innerHTML.trim())
}
    return o
}, lo = e => {
    const t = eo.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
    Array.from(e.children).forEach((e => {
    const o = e.tagName.toLowerCase();
    t.includes(o) || i(`Unrecognized element <${o}>`)
}))
}, co = (e, t) => {
    Array.from(e.attributes).forEach((o => {
    -1 === t.indexOf(o.name) && i([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`, "" + (t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element.")])
}))
}, uo = e => {
    const t = w(), n = f();
    "function" == typeof e.willOpen && e.willOpen(n);
    const s = window.getComputedStyle(document.body).overflowY;
    go(t, n, e), setTimeout((() => {
    mo(t, n)
}), 10), O() && (wo(t, e.scrollbarPadding, s), Array.from(document.body.children).forEach((e => {
    e === w() || e.contains(w()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
}))), M() || ee.previousActiveElement || (ee.previousActiveElement = document.activeElement), "function" == typeof e.didOpen && setTimeout((() => e.didOpen(n))), R(t, o["no-transition"])
}, po = e => {
    const t = f();
    if (e.target !== t) return;
    const o = w();
    t.removeEventListener(ce, po), o.style.overflowY = "auto"
}, mo = (e, t) => {
    ce && G(t) ? (e.style.overflowY = "hidden", t.addEventListener(ce, po)) : e.style.overflowY = "auto"
}, wo = (e, t, n) => {
    (() => {
    if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !q(document.body, o.iosfix)) {
    const e = document.body.scrollTop;
    document.body.style.top = -1 * e + "px", F(document.body, o.iosfix), Ze(), Ye()
}
})(), t && "hidden" !== n && Ge(), setTimeout((() => {
    e.scrollTop = 0
}))
}, go = (e, t, n) => {
    F(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), W(t, "grid"), setTimeout((() => {
    F(t, n.showClass.popup), t.style.removeProperty("opacity")
}), 10), F([document.documentElement, document.body], o.shown), n.heightAuto && n.backdrop && !n.toast && F([document.documentElement, document.body], o["height-auto"])
};
    var ho = {
    email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
    url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
};

    function fo(e) {
    !function (e) {
    e.inputValidator || Object.keys(ho).forEach((t => {
    e.input === t && (e.inputValidator = ho[t])
}))
}(e), e.showLoaderOnConfirm && !e.preConfirm && i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), function (e) {
    (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (i('Target parameter is not valid, defaulting to "body"'), e.target = "body")
}(e), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), ae(e)
}

    let bo;

    class yo {
    constructor() {
    if ("undefined" == typeof window) return;
    bo = this;
    for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
    const s = Object.freeze(this.constructor.argsToParams(o));
    Object.defineProperties(this, {params: {value: s, writable: !1, enumerable: !0, configurable: !0}});
    const a = bo._main(bo.params);
    e.promise.set(this, a)
}

    _main(t) {
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (e => {
    !1 === e.backdrop && e.allowOutsideClick && i('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    for (const t in e) ht(t), e.toast && ft(t), bt(t)
})(Object.assign({}, o, t)), ee.currentInstance && (ee.currentInstance._destroy(), O() && We()), ee.currentInstance = bo;
    const n = xo(t, o);
    fo(n), Object.freeze(n), ee.timeout && (ee.timeout.stop(), delete ee.timeout), clearTimeout(ee.restoreFocusTimeout);
    const s = ko(bo);
    return Le(bo, n), e.innerParams.set(bo, n), vo(bo, s, n)
}

    then(t) {
    return e.promise.get(this).then(t)
}

    finally(t) {
    return e.promise.get(this).finally(t)
}
}

    const vo = (t, o, n) => new Promise(((s, a) => {
    const i = e => {
    t.close({isDismissed: !0, dismiss: e})
};
    _e.swalPromiseResolve.set(t, s), _e.swalPromiseReject.set(t, a), o.confirmButton.onclick = () => {
    (t => {
    const o = e.innerParams.get(t);
    t.disableButtons(), o.input ? Mt(t, "confirm") : Dt(t, !0)
})(t)
}, o.denyButton.onclick = () => {
    (t => {
    const o = e.innerParams.get(t);
    t.disableButtons(), o.returnInputValueOnDeny ? Mt(t, "deny") : Ht(t, !1)
})(t)
}, o.cancelButton.onclick = () => {
    ((e, t) => {
    e.disableButtons(), t(ze.cancel)
})(t, i)
}, o.closeButton.onclick = () => {
    i(ze.close)
}, ((t, o, n) => {
    e.innerParams.get(t).toast ? Vt(t, o, n) : (Rt(o), Ut(o), _t(t, o, n))
})(t, o, i), ((e, t, o, n) => {
    He(t), o.toast || (t.keydownHandler = t => Ve(e, t, n), t.keydownTarget = o.keydownListenerCapture ? window : f(), t.keydownListenerCapture = o.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {capture: t.keydownListenerCapture}), t.keydownHandlerAdded = !0)
})(t, ee, n, i), ((e, t) => {
    "select" === t.input || "radio" === t.input ? Tt(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (u(t.inputValue) || m(t.inputValue)) && (At(A()), St(e, t))
})(t, n), uo(n), Co(ee, n, i), Ao(o, n), setTimeout((() => {
    o.container.scrollTop = 0
}))
})), xo = (e, t) => {
    const o = (e => {
    const t = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
    if (!t) return {};
    const o = t.content;
    return lo(o), Object.assign(to(o), oo(o), no(o), so(o), ao(o), io(o), ro(o, eo))
})(e), n = Object.assign({}, ct, t, o, e);
    return n.showClass = Object.assign({}, ct.showClass, n.showClass), n.hideClass = Object.assign({}, ct.hideClass, n.hideClass), n
}, ko = t => {
    const o = {
    popup: f(),
    container: w(),
    actions: E(),
    confirmButton: A(),
    denyButton: B(),
    cancelButton: $(),
    loader: P(),
    closeButton: L(),
    validationMessage: C(),
    progressSteps: k()
};
    return e.domCache.set(t, o), o
}, Co = (e, t, o) => {
    const n = S();
    Y(n), t.timer && (e.timeout = new Qt((() => {
    o("timer"), delete e.timeout
}), t.timer), t.timerProgressBar && (W(n), I(n, t, "timerProgressBar"), setTimeout((() => {
    e.timeout && e.timeout.running && Q(t.timer)
}))))
}, Ao = (e, t) => {
    t.toast || (d(t.allowEnterKey) ? Bo(e, t) || qe(0, -1, 1) : Po())
},
    Bo = (e, t) => t.focusDeny && X(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && X(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !X(e.confirmButton)) && (e.confirmButton.focus(), !0),
    Po = () => {
    document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
};
    Object.assign(yo.prototype, Ct), Object.assign(yo, Gt), Object.keys(Ct).forEach((e => {
    yo[e] = function () {
    if (bo) return bo[e](...arguments)
}
})), yo.DismissReason = ze, yo.version = "11.6.15";
    const $o = yo;
    return $o.default = $o, $o
})), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document && function (e, t) {
    var o = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = t); else try {
    o.innerHTML = t
} catch (e) {
    o.innerText = t
}
}(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes  swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes  swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes  swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes  swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes  swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes  swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes  swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes  swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes  swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes  swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes  swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes  swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes  swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes  swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media  print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');


var SLGodObject = window.SLGodObject || {
    helpers: {},
    data: {
    counters: {}
}
};

    SLGodObject.helpers.setYaCliendID = function () {
    //  ХЗ к какому событию можно приципиться, поэтому дёргаем раз в 1 секунду до победного
    var timerId = setInterval(function () {
    if (SLGodObject.data.counters.yaClienId) {
    clearInterval(timerId);
} else {
    for (var i in window) {
    if (/^yaCounter\d+/.test(i)) {
    try {
    SLGodObject.data.counters.yaClienId = window[i].getClientID();
    // console.log('yaid: ' + SLGodObject.data.counters.yaClienId);
} catch (e) {
}
}
}
}
}, 1000);
};
    SLGodObject.helpers.setGaCliendID = function () {
    //  ХЗ к какому событию можно приципиться, поэтому дёргаем раз в 1 секунду до победного
    var timerId = setInterval(function () {
    if (SLGodObject.data.counters.gaClienId) {
    clearInterval(timerId);
} else {
    try {
    SLGodObject.data.counters.gaClienId = ga.getAll()[0].get('clientId');
    // console.log('gaid: ' + SLGodObject.data.counters.gaClienId);
} catch (e) {
}
}
}, 1000);
};
    SLGodObject.helpers.getYaCliendID = function () {   //  Чисто для наглядности, но можно взять прямо из data
    return SLGodObject.data.counters.yaClienId || null;
};
    SLGodObject.helpers.getGaCliendID = function () {   //  Чисто для наглядности, но можно взять прямо из data
    return SLGodObject.data.counters.gaClienId || null;
};
    SLGodObject.helpers.setAllCliendID = function () {  //  Получаем id со всех счётчиков (может ещё что добавиться)
    SLGodObject.helpers.setYaCliendID();
    SLGodObject.helpers.setGaCliendID();
};

    SLGodObject.helpers.setAllCliendID();

    var city = {"id":"48","name":"\u0411\u0440\u044f\u043d\u0441\u043a","country":"rus","ct":true,"bt":true,"uc":false,"tv":true,"mfh":true,"uckp":false,"active":true,"comment":"{\u0022names\u0022:{\u0022alter1\u0022:null}}","alterName1":"\u0411\u0440\u044f\u043d\u0441\u043a","clean":false};
    var thread = {"id":34923,"part_id":24752,"hash":null,"idp":"4e8e799b-7dee-8336-aa92c13e4c427934","title":"\u041a\u043e\u0444\u0435\u043c\u0430\u0448\u0438\u043d\u044b_20.04.23(rem-land.ru)","type":2,"is_pm":0,"tool_type":1,"tool_id":1114,"created_at":"2023-04-20 14:05:30","updated_at":"2023-04-23 22:18:13","archived_at":null,"data":{"inn":"7718841073","tel":"+7-800-707-64-42","ogrn":"1117746220998","fp_id":null,"ga_id":null,"mg_id":null,"tt_id":null,"vp_id":null,"ym_id":"93301673","zd_id":null,"domain":"rem-land.ru","gtm_id":null,"city_id":["auto"],"subid_1":"\u041a\u043e\u0444\u0435\u043c\u0430\u0448\u0438\u043d\u044b 20.04.23","subid_2":"rem-land.ru","subid_3":null,"yuraddr":null,"yurname":null,"lkVersion":"sl","show_city":"yes","direction_id":2,"new_offer_id":68,"trafficSources":null,"use_lead_proxy":"yes","form_add_modals":"0","form_modal_delay":null,"form_modal_header":null,"form_modal_btn_text":null,"form_add_phonemodals":"0","form_modal_subheader":null,"form_modalphone_delay":null,"form_modalphone_header":null,"form_modalphone_btn_text":null,"form_modalphone_subheader":null}};
    var countryName = city.country || 'rus';

    $('[type="tel"]').not('.nomask').each(function () {
    var self = $(this);

    self.inputmask('remove');

    if (countryName === 'rus' || countryName === 'kaz') {
    self.removeAttr('pattern');
    self.inputmask({
    mask: "+7 (999) 999-99-99",
    onBeforePaste: function (pastedValue, opts) {
    var processedValue = pastedValue;
    var tel = processedValue.replace(/[^\d]/g, '');

    if (tel.length === 11 && (tel[0] === '8' || tel[0] === '7')) {
    processedValue = '+7' + tel.substring(1);
}

    return processedValue;
},
    "onincomplete": function () {
    self.addClass('incomplete');
    self.removeClass('complete');
},
    "oncomplete": function () {
    self.removeClass('incomplete');
    self.addClass('complete');
}
});
} else if (countryName === 'bel') {
    self.removeAttr('pattern');
    self.inputmask("+375 99-999-99-99", {
    "onincomplete": function () {
    self.addClass('incomplete');
    self.removeClass('complete');
},
    "oncomplete": function () {
    self.removeClass('incomplete');
    self.addClass('complete');
}
});
} else if (countryName === 'ua') {
    self.removeAttr('pattern');
    self.inputmask("+380 99-999-99-99", {
    "onincomplete": function () {
    self.addClass('incomplete');
    self.removeClass('complete');
},
    "oncomplete": function () {
    self.removeClass('incomplete');
    self.addClass('complete');
}
});
} else if (countryName === 'tur') {
    self.removeAttr('pattern');
    self.inputmask("0 (999) 999-99-99", {
    "onincomplete": function () {
    self.addClass('incomplete');
    self.removeClass('complete');
},
    "oncomplete": function () {
    self.removeClass('incomplete');
    self.addClass('complete');
}
});
} else if (countryName === 'az') {
    if (
    true
    // typeof thread !== 'undefined' &&
    // typeof thread.tool_id === 'number' &&
    // thread.tool_id === 1191 &&
    // typeof thread.id === 'number' &&
    // thread.id === 33490
    ) {
    self.prop('pattern', "\\+?((994\\s*\\(?\\d{2,3}\\)?\\s*\\d{3}-*\\s*\\d{2}-*\\s*\\d{2})|(0\\s*\\(?\\d{2,3}\\)?\\s*\\d{3}-*\\s*\\d{2}-*\\s*\\d{2})|(\\(?\\d{2,3}\\)?\\s*\\d{3}-*\\s*\\d{2}-*\\s*\\d{2}))");
    self.inputmask({
    "regex": "[\\d\\s\\(\\)\\-\\+]{9,25}",
    "onincomplete": function () {
    self.addClass('incomplete');
    self.removeClass('complete');
},
    "oncomplete": function () {
    self.removeClass('incomplete');
    self.addClass('complete');
}
});
} else {
    self.inputmask("+\\9\\94 99-999-99-99", {
    "onincomplete": function () {
    self.addClass('incomplete');
    self.removeClass('complete');
},
    "oncomplete": function () {
    self.removeClass('incomplete');
    self.addClass('complete');
}
});
}
}
});

    (function ($) {
    $(function () {

        if (window.location.hostname.endsWith('.ua')) {
            countryName = 'ua';
        }
        if (window.location.hostname.endsWith('.by')) {
            countryName = 'bel';
        }
        if (window.location.hostname.endsWith('.kz')) {
            countryName = 'kaz';
        }
        if (window.location.hostname.endsWith('.tr')) {
            countryName = 'tur';
        }

        window.convertPrices = function () {
            if (
                countryName == 'bel' ||
                countryName == 'ua' ||
                countryName == 'kaz' ||
                countryName == 'az'
            ) {
                if (countryName == 'bel') {
                    var currName = 'Бел.руб.';
                    var currDelim = 32;
                }

                if (countryName == 'ua') {
                    var currName = 'грн.';
                    var currDelim = 2.67;
                }

                if (countryName == 'kaz') {
                    var currName = 'тг';
                    var currDelim = 0.125;
                }

                if (countryName == 'az') {
                    var currName = 'AZN';
                    var currDelim = 35.74;
                }

                var regex = /(\d+)\s?((₽)|(ру?б?\.?)|(Ру?б?\.?))/gmi;

                var pretext = function (priceStr) {
                    if (priceStr.includes('от')) {
                        if (countryName == 'az') {
                            priceStr = priceStr.replace('от', '').trim();
                            priceStr = priceStr.replace(currName, currName + '-dən');
                        }
                    }

                    return priceStr;
                }

                var convert = function (m, m1, m2, offset, s) {
                    var price = Math.ceil(m1 / currDelim);

                    if (
                        countryName == 'kaz'
                        // ||
                        // countryName == 'az'
                    ) {
                        if (price >= 100) {
                            price = Math.round(price / 100) * 100;
                        } else {
                            price = Math.round(price / 10) * 10;
                        }
                    }

                    var res = price + ' ' + currName;

                    return res;
                }

                jQuery(":contains(Руб),:contains(руб),:contains(р.),:contains(₽)").not('script,style,link').each(function () {
                    var self = jQuery(this);

                    if (self.children().length !== 0) {
                        return;
                    }

                    var text = self.text();

                    if (regex.test(text)) {
                        // console.log(text);
                        text = text.replace(regex, convert);
                        // console.log(text);

                        text = pretext(text);

                        self.text(text);
                    }
                });
            }
        }

        // document.addEventListener("DOMContentLoaded", convertPrices);
        convertPrices();

        function insertParam(key, value) {
            key = encodeURI(key);
            value = encodeURI(value);
            var kvp = document.location.search.substr(1).split('&');
            var i = kvp.length;
            var x;
            while (i--) {
                x = kvp[i].split('=');

                if (x[0] == key) {
                    x[1] = value;
                    kvp[i] = x.join('=');
                    break;
                }
            }
            if (i < 0) {
                kvp[kvp.length] = [key, value].join('=');
            }
            document.location.search = kvp.join('&');
        }


        $('#city, .city-change').change(function (e) {
            if ($(this).parents('.not-city-select').length !== 0) {
                return;
            }
            e.preventDefault();
            insertParam('city_id', $(this).val());
        });

        $('.select__list li, .header-city a.dropdown-item, .nice-select li').click(function () {
            if ($(this).parents('.not-city-select').length !== 0) {
                return;
            }
            //e.preventDefault();
            insertParam('city_id', $(this).data('value'));
        });

    });
})(jQuery);

    function urlencodeFormData(fd) {
    if (typeof URLSearchParams === 'function') {
    var params = new URLSearchParams();
    for (var pair of fd.entries()) {
    typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
}
    return params.toString();
} else {
    var s = '';

    function encode(s) {
    return encodeURIComponent(s).replace(/%20/g, '+');
}

    for (var pair of fd.entries()) {
    if (typeof pair[1] == 'string') {
    s += (s ? '&' : '') + encode(pair[0]) + '=' + encode(pair[1]);
}
}
    return s;
}
}

    (function ($) {
    $(function () {
        //  находим справочные поля типа
        //  <input type="hidden" name="work" value="на сайте есть акция - Скидка до 15%">
        var saleInfoFields = $('input[name="work"]');

        saleInfoFields.each(function () {
            var self = $(this);
            var formEl = self.parents('form');
            var commentEl = formEl.find('textarea[name="work"]');

            //  если в форме есть textarea[name="work"] - переименовываем
            //  input[name="work"] в input[name="work2"]
            if (commentEl.length !== 0) {
                self.prop('name', 'work2');
            }
        });

        var forms = document.getElementsByClassName('sltop__form');

        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener('submit', function (ev) {
                ev.preventDefault();

                var hcaptchaField = $(this).find('[name="h-captcha-response"]');

                if (hcaptchaField.length !== 0 && hcaptchaField.val() === '') {
                    alert("Решите капчу.");

                    return;
                }

                var form = this;
                var oData = new FormData(form);
                var popupCloseEl = document.getElementsByClassName('sltop__form_close');
                var telEl = $(this).find('[name="phone"]');
                var modal = $(this).closest('.modal');

                if (form.classList.contains("loading")) {
                    return;
                }

                //  добавляем комментарий о скидке и тп
                if (oData.has('work2')) {
                    oData.set('work', oData.get('work') + "\n\n" + oData.get('work2'));
                }

                if (!telEl.inputmask("isComplete")) {
                    telEl.trigger('focus');
                    // console.log('Phone not isComplete!!!');

                    return;
                }

                if (countryName === 'tur') {
                    oData.set('phone', '+9' + oData.get('phone'));
                }

                if (
                    countryName === 'az' &&
                    typeof thread !== 'undefined' &&
                    typeof thread.tool_id === 'number' &&
                    thread.tool_id === 1191 &&
                    typeof thread.id === 'number' &&
                    thread.id === 33490
                ) {
                    var phoneNum = oData.get('phone');

                    phoneNum = phoneNum.replace(/[^\d]/g, '');

                    if (phoneNum.substring(0, 1) === '0') { //  если начинается с 0
                        //  убираем 0 и добавляем +994
                        phoneNum = '+994'.concat(phoneNum.substring(1, phoneNum.length));
                    } else {    //  если не с 0
                        if (phoneNum.substring(0, 3) === '994') {
                            phoneNum = '+'.concat(phoneNum);
                        } else {
                            //  добавляем +994
                            phoneNum = '+994'.concat(phoneNum);
                        }
                    }

                    oData.set('phone', phoneNum);

                    // for (var pair of oData.entries()) {
                    //     console.log(pair[0] + ', ' + pair[1]);
                    // }
                    // return;
                }

                if (typeof URLSearchParams === 'function') {
                    const utm = {
                        utm_source: 'utm1',
                        utm_medium: 'utm2',
                        utm_campaign: 'utm3',
                        utm_content: 'utm4',
                        utm_term: 'utm5'
                    };
                    const sub_id = {
                        sub_id1: 'sub_id1',
                        sub_id2: 'sub_id2',
                        sub_id3: 'sub_id3',
                        sub_id4: 'sub_id4',
                        sub_id5: 'sub_id5'
                    };
                    const urlParams = new URLSearchParams(window.location.search);

                    for (var prop in utm) {
                        if (urlParams.get(prop) !== null) {
                            oData.append(utm[prop], urlParams.get(prop));
                        }
                    }

                    for (var prop in sub_id) {
                        if (urlParams.get(prop) !== null) {
                            oData.set(sub_id[prop], urlParams.get(prop));
                        }
                    }
                }

                oData.append('hash', oData.get('view_id'));

                // if (parseInt(thread.type) < 0) {
                //     oData.append('directionTypeId', thread.type + 10000);
                // }

                var threadOfferId = 0;
                var threadDirectionId = 0;

                try {
                    threadDirectionId = parseInt(thread.data.direction_id || 0);
                } catch (err) {
                    console.log(err);
                }

                try {
                    threadOfferId = parseInt(thread.data.new_offer_id || 0);
                } catch (err) {
                    console.log(err);
                }

                oData.set('direction_id', threadDirectionId);
                oData.set('offer_id', threadOfferId);

                oData.set('lk', 'rf');

                //  Временное исключение для новых офферов
                var offersSpecial = {
                    // 10: 78, //  Телевизоры
                    // 11: 78, //  Телевизоры ЧМ
                    // 14: 79, //  Сантехника
                    // 18: 79, //  Сантехника ЧМ
                    // 16: 79, //  Муж на час
                    // 20: 79, //  Муж на час ЧМ
                    22: 56, //  Клининг
                    23: 56, //  Клининг ЧМ
                };
                var offerId = parseInt(oData.get('offer_id') || 0);

                if (offersSpecial[offerId] !== undefined) {
                    if (
                        offerId === 14 ||
                        offerId === 18 ||
                        offerId === 16 ||
                        offerId === 20
                    ) {
                        if (parseInt(oData.get('branch_id')) === 0) {
                            oData.set('branch_id', offersSpecial[offerId]);
                        }
                    } else {
                        oData.set('branch_id', offersSpecial[offerId]);
                    }
                }

                if (!oData.get('fullname')) {
                    oData.set('fullname', 'Без имени');
                }

                try {
                    var yaid = SLGodObject.helpers.getYaCliendID();
                    var gaid = SLGodObject.helpers.getGaCliendID();

                    if (yaid) {
                        oData.set('yaid', yaid);
                    }

                    if (gaid) {
                        oData.set('gaid', gaid);
                    }
                } catch (e) {
                }

                var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
                var xhr = new XHR();

                xhr.open("POST", form.action, true);
                xhr.onload = function (oEvent) {
                    var reponseCode = 0;

                    if (xhr.response.length > 0) {
                        try {
                            var result = JSON.parse(xhr.response);
                            console.info(result);

                            reponseCode = result.reponseCode;

                            if (!result.success) {
                                form.classList.remove("loading");
                                form.classList.add("fail");

                                if (typeof jQuery.fancybox === 'object') {
                                    jQuery.fancybox.close();
                                }

                                Array.from(popupCloseEl).forEach(el => el.click());

                                var msg = {};
                                var urlParams = new URLSearchParams(window.location.search);
                                var l = urlParams.get('l');

                                if (
                                    city.country === 'tur' &&   //  Турция
                                    thread.tool_id === 1193 &&  //  Нерусский ленд
                                    l !== 'ru'                  //  не выбран русский язык
                                ) {
                                    msg.title = 'Veri gönderilemedi.';
                                    msg.text = 'Lütfen tekrar deneyin veya telefonla bize ulaşın.';
                                } else {
                                    msg.title = 'Не удалось отправить данные.';
                                    msg.text = 'Пожалуйста, попробуйте ещё раз или свяжитесь с нами по телефону.';
                                }

                                Swal.fire({
                                    icon: 'error',
                                    title: msg.title,
                                    text: msg.text +
                                        " \n" + result.errorType + ' - ' + result.errorText,
                                    onOpen: () => {
                                        if (typeof hideKvizForm !== 'undefined') {
                                            hideKvizForm();
                                        }
                                    }
                                });

                                if (modal.hasClass('show')) {
                                    try {
                                        modal.modal('hide');
                                    } catch {
                                        if (typeof modalHide !== 'undefined') {
                                            modalHide();
                                        }
                                    }
                                } else if (typeof modalHide !== 'undefined') {
                                    modalHide();
                                }

                                return;
                            }
                        } catch {
                        }
                    }

                    if (xhr.status == 200 || xhr.status == 202) {
                        form.classList.remove("loading");
                        form.classList.add("success");
                        form.reset();

                        Array.from(popupCloseEl).forEach(el => el.click());

                        if (typeof jQuery.fancybox === 'object') {
                            jQuery.fancybox.close();
                        }

                        if (xhr.status == 200) {
                            var msg = {};
                            var urlParams = new URLSearchParams(window.location.search);
                            var l = urlParams.get('l');

                            if (
                                city.country === 'tur' &&   //  Турция
                                thread.tool_id === 1193 &&  //  Нерусский ленд
                                l !== 'ru'                  //  не выбран русский язык
                            ) {
                                msg.title = 'Başvuru gönderildi.';
                                msg.text = 'Bizimle iletişime geçtiğiniz için teşekkür ederiz, bir arama bekleyin.';
                            } else {
                                msg.title = 'Заявка отправлена.';
                                msg.text = 'Спасибо за обращение, ожидайте звонка.';
                            }

                            Swal.fire({
                                icon: 'success',
                                title: msg.title,
                                text: msg.text,
                                onOpen: () => {
                                    if (typeof hideKvizForm !== 'undefined') {
                                        hideKvizForm();
                                    }
                                    $('.sltop__form').trigger('reset');
                                }
                            });

                            if (modal.hasClass('show')) {
                                try {
                                    modal.modal('hide');
                                } catch {
                                    if (typeof modalHide !== 'undefined') {
                                        modalHide();
                                    }
                                }
                            } else if (typeof modalHide !== 'undefined') {
                                modalHide();
                            }
                        }

                        if (xhr.status == 202 || reponseCode == 202) {
                            var msg = {};
                            var urlParams = new URLSearchParams(window.location.search);
                            var l = urlParams.get('l');

                            if (
                                city.country === 'tur' &&   //  Турция
                                thread.tool_id === 1193 &&  //  Нерусский ленд
                                l !== 'ru'                  //  не выбран русский язык
                            ) {
                                msg.title = 'Başvuru gönderildi #202.';
                                msg.text = 'Bizimle iletişime geçtiğiniz için teşekkür ederiz, bir arama bekleyin.';
                            } else {
                                msg.title = 'Заявка отправлена #202.';
                                msg.text = 'Спасибо за обращение, ожидайте звонка.';
                            }

                            Swal.fire({
                                icon: 'success',
                                title: msg.title,
                                text: msg.text
                            });

                            if (modal.hasClass('show')) {
                                try {
                                    modal.modal('hide');
                                } catch {
                                    if (typeof modalHide !== 'undefined') {
                                        modalHide();
                                    }
                                }
                            } else if (typeof modalHide !== 'undefined') {
                                modalHide();
                            }
                        }

                        if (typeof fbq === 'function') {
                            fbq('track', 'CompleteRegistration');
                            console.log("fbq('track', 'CompleteRegistration')");
                        }

                        try {
                            fbq('track', 'Lead');
                            console.log("Success: fbq('track', 'Lead')");
                        } catch (err) {
                            console.error("Fail: fbq('track', 'Lead')");
                        }

                        try {
                            VK.Retargeting.Event('Lead');
                            console.log("Success: VK.Retargeting.Event('Lead')");
                        } catch (err) {
                            console.error("Fail: VK.Retargeting.Event('Lead')");
                        }

                        for (var i in window) {
                            if (/^yaCounter\d+/.test(i)) {
                                try {
                                    window[i].reachGoal('Lead');
                                    console.log("Success: yaCounter.reachGoal('Lead')");
                                } catch (err) {
                                    console.error("Fail: yaCounter.reachGoal('Lead')");
                                }
                            }
                        }

                        try {
                            gtag('event', 'Lead');
                            console.log("Success: gtag('event', 'Lead')");
                        } catch (err) {
                            console.error("Fail: gtag('event', 'Lead')");
                        }

                        try {
                            ga('send', 'event', null, 'Lead');
                            // ga('send', 'event', 'Lead', 'Lead', 'Lead');
                            console.log("Success: ga('send', 'event', null, 'Lead')");
                        } catch (err) {
                            console.error("Fail: ga('send', 'event', null, 'Lead')");
                        }
                    } else {
                        console.log("Error " + xhr.status);
                        console.log(xhr.responseText);

                        form.classList.remove("loading");
                        form.classList.add("fail");

                        if (typeof jQuery.fancybox === 'object') {
                            jQuery.fancybox.close();
                        }

                        Array.from(popupCloseEl).forEach(el => el.click());

                        var msg = {};
                        var urlParams = new URLSearchParams(window.location.search);
                        var l = urlParams.get('l');

                        if (
                            city.country === 'tur' &&   //  Турция
                            thread.tool_id === 1193 &&  //  Нерусский ленд
                            l !== 'ru'                  //  не выбран русский язык
                        ) {
                            msg.title = 'Veri gönderilemedi.';
                            msg.text = 'Lütfen tekrar deneyin veya telefonla bize ulaşın.';
                        } else {
                            msg.title = 'Не удалось отправить данные.';
                            msg.text = 'Пожалуйста, попробуйте ещё раз или свяжитесь с нами по телефону.';
                        }

                        Swal.fire({
                            icon: 'error',
                            title: msg.title,
                            text: msg.text,
                            onOpen: () => {
                                if (typeof hideKvizForm !== 'undefined') {
                                    hideKvizForm();
                                }
                            }
                        });

                        if (modal.hasClass('show')) {
                            try {
                                modal.modal('hide');
                            } catch {
                                if (typeof modalHide !== 'undefined') {
                                    modalHide();
                                }
                            }
                        } else if (typeof modalHide !== 'undefined') {
                            modalHide();
                        }
                    }

                    hcaptcha2.reset();
                };
                xhr.onerror = function () {
                    var msg = {};
                    var urlParams = new URLSearchParams(window.location.search);
                    var l = urlParams.get('l');

                    if (
                        city.country === 'tur' &&   //  Турция
                        thread.tool_id === 1193 &&  //  Нерусский ленд
                        l !== 'ru'                  //  не выбран русский язык
                    ) {
                        msg.title = 'Bağlantı hatası.';
                        msg.text = 'Lütfen tekrar deneyin veya telefonla bize ulaşın.';
                    } else {
                        msg.title = 'Ошибка соединения.';
                        msg.text = 'Пожалуйста, попробуйте ещё раз или свяжитесь с нами по телефону.';
                    }

                    Swal.fire({
                        icon: 'error',
                        title: msg.title,
                        text: msg.text
                    });
                    form.classList.remove("loading");
                    form.classList.add("fail");

                    hcaptcha2.reset();
                };

                form.classList.remove("success");
                form.classList.remove("fail");
                form.classList.add("loading");

                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(urlencodeFormData(oData));
            }, false);
        }

    });
})(jQuery);

    function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

    function getRandomArray(arr, n) {
    var len = arr.length;

    if (n > len) {
    n = len;
}

    var result = new Array(n),
    taken = new Array(len);

    while (n--) {
    var x = Math.floor(Math.random() * len);

    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
}

    return result;
}

    (function () {

    if (typeof ymaps !== 'undefined') {
    ymaps.ready(init);

    function renderMap(map, points) {
}

    function init() {
    var $city = window.detectedBranchData || {"id":"48","name":"\u0411\u0440\u044f\u043d\u0441\u043a","country":"rus","ct":true,"bt":true,"uc":false,"tv":true,"mfh":true,"uckp":false,"active":true,"comment":"{\u0022names\u0022:{\u0022alter1\u0022:null}}","alterName1":"\u0411\u0440\u044f\u043d\u0441\u043a","clean":false};
    var $thread = {"id":34923,"part_id":24752,"hash":null,"idp":"4e8e799b-7dee-8336-aa92c13e4c427934","title":"\u041a\u043e\u0444\u0435\u043c\u0430\u0448\u0438\u043d\u044b_20.04.23(rem-land.ru)","type":2,"is_pm":0,"tool_type":1,"tool_id":1114,"created_at":"2023-04-20 14:05:30","updated_at":"2023-04-23 22:18:13","archived_at":null,"data":{"inn":"7718841073","tel":"+7-800-707-64-42","ogrn":"1117746220998","fp_id":null,"ga_id":null,"mg_id":null,"tt_id":null,"vp_id":null,"ym_id":"93301673","zd_id":null,"domain":"rem-land.ru","gtm_id":null,"city_id":["auto"],"subid_1":"\u041a\u043e\u0444\u0435\u043c\u0430\u0448\u0438\u043d\u044b 20.04.23","subid_2":"rem-land.ru","subid_3":null,"yuraddr":null,"yurname":null,"lkVersion":"sl","show_city":"yes","direction_id":2,"new_offer_id":68,"trafficSources":null,"use_lead_proxy":"yes","form_add_modals":"0","form_modal_delay":null,"form_modal_header":null,"form_modal_btn_text":null,"form_add_phonemodals":"0","form_modal_subheader":null,"form_modalphone_delay":null,"form_modalphone_header":null,"form_modalphone_btn_text":null,"form_modalphone_subheader":null}};
    // console.log($city);
    // console.log($thread);

    if (parseInt($city.id) === 777) {
    ymaps.geolocation.get({
    // Выставляем опцию для определения положения по ip
    provider: 'yandex',
    // Карта автоматически отцентрируется по положению пользователя.
    mapStateAutoApply: true
}).then(function (result) {
    var mapElements = document.querySelectorAll('#yamap');

    if (mapElements.length > 1) {
    for (var iii = 0; iii < mapElements.length; iii++) {
    mapElements[iii].id = 'yamap'.concat(iii);
}
}

    var yaMaps = [];

    for (var iii = 0; iii < mapElements.length; iii++) {
    // var myMap = new ymaps.Map('yamap', {
    var myMap = new ymaps.Map(mapElements[iii].id, {
    center: result.geoObjects.get(0).geometry.getCoordinates(),
    zoom: 9
});
    yaMaps.push(myMap);

    myMap.geoObjects.add(result.geoObjects);

    // Масштабируем карту на область видимости геообъекта.
    myMap.setBounds(bounds, {
    // Проверяем наличие тайлов на данном масштабе.
    checkZoomRange: true
});
}
});
} else {
    // Поиск координат центра
    ymaps.geocode($city.name ? $city.name : 'Россия', {
    results: 1
}).then(function (res) {
    // Выбираем первый результат геокодирования.
    var firstGeoObject = res.geoObjects.get(0),
    // Координаты геообъекта.
    coords = firstGeoObject.geometry.getCoordinates(),
    // Область видимости геообъекта.
    bounds = firstGeoObject.properties.get('boundedBy');

    var mapElements = document.querySelectorAll('#yamap');

    if (mapElements.length > 1) {
    for (var iii = 0; iii < mapElements.length; iii++) {
    mapElements[iii].id = 'yamap'.concat(iii);
}
}

    var yaMaps = [];


    for (var iii = 0; iii < mapElements.length; iii++) {
    // var myMap = new ymaps.Map('yamap', {
    var myMap = new ymaps.Map(mapElements[iii].id, {
    center: coords,
    zoom: 7
});
    myMap.behaviors.disable('scrollZoom');
    var isMobile = {
    Android: function () {
    return navigator.userAgent.match(/Android/i);
},
    BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
},
    iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
    Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
},
    Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
},
    any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
}
    if (isMobile.any()) {
    myMap.behaviors.disable('drag');
}

    yaMaps.push(myMap);

    // Масштабируем карту на область видимости геообъекта.
    myMap.setBounds(bounds, {
    // Проверяем наличие тайлов на данном масштабе.
    checkZoomRange: true
});
}
    // if (parseInt($('body').data('ls_type')) === 5) {
    if (parseInt($thread.type) === 5) {
    var points = [firstGeoObject.geometry.getCoordinates()];
} else {
    var points = Cookies.getJSON($city.id + '-points');
}

    if (points === undefined) {
    $.ajax({
    dataType: "json",
    url: 'data.json',
    data: '',
    success: function (data) {
    var pointsAll = data[$city.name];
    var points = [];

    if (pointsAll !== undefined) {
    points = getRandomArray(pointsAll, 20);
} else {
    points = [];

    for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
    points = points.concat(getRandomArray(data[prop], 5));
}
}
}

    var points2 = [];

    points.forEach((item) => {
    item = [
    item[1] + item[1] / getRandom(50000, 100000),
    item[0] + item[0] / getRandom(50000, 100000)
    ];
    points2.push(item);

    var myPlacemark = new ymaps.Placemark(item, {});

    for (var iii = 0; iii < yaMaps.length; iii++) {
    yaMaps[iii].geoObjects.add(myPlacemark);
}
});

    Cookies.set($city.id + '-points', points2, {expires: 1 / 24});
}
});
} else {
    points.forEach((item) => {
    var myPlacemark = new ymaps.Placemark(item, {});

    for (var iii = 0; iii < yaMaps.length; iii++) {
    yaMaps[iii].geoObjects.add(myPlacemark);
}
});
}
});
}
}
}

})();

// var telLinks = document.querySelectorAll('[href^="tel:"]:not(.zphone)');
// var telClasses = 'zphone phone-marker'.split(' ');
var telClasses = 'zphone phone-marker'.split(' ');
var telLinks = document.querySelectorAll('[href^="tel:"]');

for (var i = 0; i < telLinks.length; i++) {
    for (var j = 0; j < telClasses.length; j++) {
        if (telClasses[j] !== '') {
            telLinks[i].classList.add(telClasses[j]);
        }
    }
}

var thread = {"id":34923,"part_id":24752,"hash":null,"idp":"4e8e799b-7dee-8336-aa92c13e4c427934","title":"\u041a\u043e\u0444\u0435\u043c\u0430\u0448\u0438\u043d\u044b_20.04.23(rem-land.ru)","type":2,"is_pm":0,"tool_type":1,"tool_id":1114,"created_at":"2023-04-20 14:05:30","updated_at":"2023-04-23 22:18:13","archived_at":null,"data":{"inn":"7718841073","tel":"+7-800-707-64-42","ogrn":"1117746220998","fp_id":null,"ga_id":null,"mg_id":null,"tt_id":null,"vp_id":null,"ym_id":"93301673","zd_id":null,"domain":"rem-land.ru","gtm_id":null,"city_id":["auto"],"subid_1":"\u041a\u043e\u0444\u0435\u043c\u0430\u0448\u0438\u043d\u044b 20.04.23","subid_2":"rem-land.ru","subid_3":null,"yuraddr":null,"yurname":null,"lkVersion":"sl","show_city":"yes","direction_id":2,"new_offer_id":68,"trafficSources":null,"use_lead_proxy":"yes","form_add_modals":"0","form_modal_delay":null,"form_modal_header":null,"form_modal_btn_text":null,"form_add_phonemodals":"0","form_modal_subheader":null,"form_modalphone_delay":null,"form_modalphone_header":null,"form_modalphone_btn_text":null,"form_modalphone_subheader":null}};


(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(window.thread.data.ym_id, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});

    window.hcaptcha2 = {
        reset: function () {
        }
    };