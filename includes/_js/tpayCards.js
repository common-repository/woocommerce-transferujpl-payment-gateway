jQuery(function ($) {

    !function () {
        var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt, it, st, ot, ut, at, ft, lt = [].slice, ct = [].indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++) {
                    if (t in this && this[t] === e)return t
                }
                return -1
            };
        e = jQuery;
        e.formance = {};
        e.formance.fn = {};
        e.fn.formance = function () {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? lt.call(arguments, 1) : [];
            return e.formance.fn[n].apply(this, t)
        };
        tt = function (t) {
            var n, r;
            n = e(t.target);
            if (t.metaKey || t.ctrlKey) {
                return true
            }
            if (t.which === 32) {
                return false
            }
            if (t.which === 0) {
                return true
            }
            if (t.which < 33) {
                return true
            }
            r = String.fromCharCode(t.which);
            return !!/[\d\s]/.test(r)
        };
        K = function (t) {
            var n, r;
            n = e(t.target);
            if (t.metaKey || t.ctrlKey) {
                return true
            }
            if (t.which === 32) {
                return false
            }
            if (t.which === 0) {
                return true
            }
            if (t.which < 33) {
                return true
            }
            r = String.fromCharCode(t.which);
            return !!/[\d\sA-Za-z]/.test(r)
        };
        R = function (e) {
            var t;
            if (e.prop("selectionStart") != null && e.prop("selectionStart") !== e.prop("selectionEnd")) {
                return true
            }
            if (typeof document !== "undefined" && document !== null ? (t = document.selection) != null ? typeof t.createRange === "function" ? t.createRange().text : void 0 : void 0 : void 0) {
                return true
            }
            return false
        };
        e.formance.fn.restrictNumeric = function () {
            this.on("keypress", tt);
            return this
        };
        e.formance.fn.restrictAlphaNumeric = function () {
            this.on("keypress", K);
            return this
        };
        e.formance.fn.hasTextSelected = R;
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        i = /(\d{1,4})/g;
        r = [{
            type: "maestro",
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
            format: i,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        }, {
            type: "dinersclub",
            pattern: /^(36|38|30[0-5])/,
            format: i,
            length: [14],
            cvcLength: [3],
            luhn: true
        }, {
            type: "laser",
            pattern: /^(6706|6771|6709)/,
            format: i,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        }, {type: "jcb", pattern: /^35/, format: i, length: [16], cvcLength: [3], luhn: true}, {
            type: "unionpay",
            pattern: /^62/,
            format: i,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: false
        }, {
            type: "discover",
            pattern: /^(6011|65|64[4-9]|622)/,
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: true
        }, {type: "mastercard", pattern: /^5[1-5]/, format: i, length: [16], cvcLength: [3], luhn: true}, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: true
        }, {type: "visa", pattern: /^4/, format: i, length: [13, 14, 15, 16], cvcLength: [3], luhn: true}];
        t = function (e) {
            var t, n, i;
            e = (e + "").replace(/\D/g, "");
            for (n = 0, i = r.length; n < i; n++) {
                t = r[n];
                if (t.pattern.test(e)) {
                    return t
                }
            }
        };
        n = function (e) {
            var t, n, i;
            for (n = 0, i = r.length; n < i; n++) {
                t = r[n];
                if (t.type === e) {
                    return t
                }
            }
        };
        Q = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            i = n.val() + r;
            return i.length <= 4
        };
        e.formance.fn.format_credit_card_cvc = function () {
            this.formance("restrictNumeric");
            this.on("keypress", Q);
            return this
        };
        e.formance.fn.validate_credit_card_cvc = function () {
            var t, r, i, s;
            r = e(this).data("credit_card_type");
            t = e(this).val();
            t = e.trim(t);
            if (!/^\d+$/.test(t)) {
                return false
            }
            if (r) {
                return i = t.length, ct.call((s = n(r)) != null ? s.cvcLength : void 0, i) >= 0
            } else {
                return t.length >= 3 && t.length <= 4
            }
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        et = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 6) {
                return false
            }
        };
        b = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val() + r;
            if (/^\d$/.test(i) && i !== "0" && i !== "1") {
                t.preventDefault();
                return n.val("0" + i + " / ")
            } else if (/^\d\d$/.test(i)) {
                t.preventDefault();
                return n.val("" + i + " / ")
            }
        };
        S = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            if (/^\d\d$/.test(i)) {
                return n.val("" + i + " / ")
            }
        };
        N = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (r !== "/") {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            if (/^\d$/.test(i) && i !== "0") {
                return n.val("0" + i + " / ")
            }
        };
        a = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\/)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\/)*$/, ""))
            } else if (/\s\/\s?\d?$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\s\/\s?\d?$/, ""))
            }
        };
        e.formance.fn.format_credit_card_expiry = function () {
            this.formance("restrictNumeric");
            this.on("keypress", et);
            this.on("keypress", b);
            this.on("keypress", N);
            this.on("keypress", S);
            this.on("keydown", a);
            return this
        };
        z = function (e) {
            var t, n, r, i, s;
            r = e.replace(/\s/g, "");
            s = r.split("/", 2), t = s[0], i = s[1];
            if ((i != null ? i.length : void 0) === 2 && /^\d+$/.test(i)) {
                n = (new Date).getFullYear();
                n = n.toString().slice(0, 2);
                i = n + i
            }
            t = parseInt(t, 10);
            i = parseInt(i, 10);
            return {month: t, year: i}
        };
        e.formance.fn.val_credit_card_expiry = function () {
            var e;
            e = z(this.val());
            if (e.month == null || isNaN(e.month)) {
                return false
            }
            if (e.year == null || isNaN(e.year)) {
                return false
            }
            return new Date(e.year, e.month - 1)
        };
        e.formance.fn.validate_credit_card_expiry = function () {
            var t, n, r, i, s, o, u;
            r = z(this.val());
            i = r.month;
            o = r.year;
            if (typeof i === "object" && "month" in i) {
                u = i, i = u.month, o = u.year
            }
            if (!(i && o)) {
                return false
            }
            i = e.trim(i);
            o = e.trim(o);
            if (!/^\d+$/.test(i)) {
                return false
            }
            if (!/^\d+$/.test(o)) {
                return false
            }
            if (!(parseInt(i, 10) <= 12)) {
                return false
            }
            if (o.length === 2) {
                s = (new Date).getFullYear();
                s = s.toString().slice(0, 2);
                o = s + o
            }
            n = new Date(o, i);
            t = new Date;
            n.setMonth(n.getMonth() - 1);
            n.setMonth(n.getMonth() + 1, 1);
            return n > t
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        i = /(\d{1,4})/g;
        r = [{
            type: "maestro",
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
            format: i,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        }, {
            type: "dinersclub",
            pattern: /^(36|38|30[0-5])/,
            format: i,
            length: [14],
            cvcLength: [3],
            luhn: true
        }, {
            type: "laser",
            pattern: /^(6706|6771|6709)/,
            format: i,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        }, {type: "jcb", pattern: /^35/, format: i, length: [16], cvcLength: [3], luhn: true}, {
            type: "unionpay",
            pattern: /^62/,
            format: i,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: false
        }, {
            type: "discover",
            pattern: /^(6011|65|64[4-9]|622)/,
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: true
        }, {type: "mastercard", pattern: /^5[1-5]/, format: i, length: [16], cvcLength: [3], luhn: true}, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: true
        }, {type: "visa", pattern: /^4/, format: i, length: [13, 14, 15, 16], cvcLength: [3], luhn: true}];
        t = function (e) {
            var t, n, i;
            e = (e + "").replace(/\D/g, "");
            for (n = 0, i = r.length; n < i; n++) {
                t = r[n];
                if (t.pattern.test(e)) {
                    return t
                }
            }
        };
        n = function (e) {
            var t, n, i;
            for (n = 0, i = r.length; n < i; n++) {
                t = r[n];
                if (t.type === e) {
                    return t
                }
            }
        };
        U = function (e) {
            var t, n, r, i, s, o;
            r = true;
            i = 0;
            n = (e + "").split("").reverse();
            for (s = 0, o = n.length; s < o; s++) {
                t = n[s];
                t = parseInt(t, 10);
                if (r = !r) {
                    t *= 2
                }
                if (t > 9) {
                    t -= 9
                }
                i += t
            }
            return i % 10 === 0
        };
        G = function (n) {
            var r, i, s, o;
            r = e(n.currentTarget);
            s = String.fromCharCode(n.which);
            if (!/^\d+$/.test(s)) {
                return
            }
            if (R(r)) {
                return
            }
            o = (r.val() + s).replace(/\D/g, "");
            i = t(o);
            if (i) {
                return o.length <= i.length[i.length.length - 1]
            } else {
                return o.length <= 16
            }
        };
        $ = function (t) {
            var n = this;
            return setTimeout(function () {
                var n, r;
                n = e(t.currentTarget);
                r = n.val();
                r = e.formance.formatCardNumber(r);
                return n.val(r)
            })
        };
        m = function (n) {
            var r, i, s, o, u, a, f;
            s = String.fromCharCode(n.which);
            if (!/^\d+$/.test(s)) {
                return
            }
            r = e(n.currentTarget);
            f = r.val();
            i = t(f + s);
            o = (f.replace(/\D/g, "") + s).length;
            a = 16;
            if (i) {
                a = i.length[i.length.length - 1]
            }
            if (o >= a) {
                return
            }
            if (r.prop("selectionStart") != null && r.prop("selectionStart") !== f.length) {
                return
            }
            if (i && i.type === "amex") {
                u = /^(\d{4}|\d{4}\s\d{6})$/
            } else {
                u = /(?:^|\s)(\d{4})$/
            }
            if (u.test(f)) {
                n.preventDefault();
                return r.val(f + " " + s)
            } else if (u.test(f + s)) {
                n.preventDefault();
                return r.val(f + s + " ")
            }
        };
        s = function (t) {
            var n, r;
            n = e(t.currentTarget);
            r = n.val();
            if (t.meta) {
                return
            }
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d\s$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d\s$/, ""))
            } else if (/\s\d?$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\s\d?$/, ""))
            }
        };
        ft = function (t) {
            var n, i, s, o, u;
            n = e(t.currentTarget);
            u = n.val();
            o = e.formance.creditCardType(u) || "unknown";
            if (!n.hasClass(o)) {
                i = function () {
                    var e, t, n;
                    n = [];
                    for (e = 0, t = r.length; e < t; e++) {
                        s = r[e];
                        n.push(s.type)
                    }
                    return n
                }();
                n.removeClass("unknown");
                n.removeClass(i.join(" "));
                n.addClass(o);
                n.toggleClass("identified", o !== "unknown");
                return n.trigger("payment.cardType", o)
            }
        };
        e.formance.creditCardType = function (e) {
            var n;
            if (!e) {
                return null
            }
            return ((n = t(e)) != null ? n.type : void 0) || null
        };
        e.formance.formatCreditCardNumber = function (e) {
            var n, r, i, s;
            n = t(e);
            if (!n) {
                return e
            }
            i = n.length[n.length.length - 1];
            e = e.replace(/\D/g, "");
            e = e.slice(0, +i + 1 || 9e9);
            if (n.format.global) {
                return (s = e.match(n.format)) != null ? s.join(" ") : void 0
            } else {
                r = n.format.exec(e);
                if (r != null) {
                    r.shift()
                }
                return r != null ? r.join(" ") : void 0
            }
        };
        e.formance.fn.format_credit_card_number = function () {
            this.formance("restrictNumeric");
            this.on("keypress", G);
            this.on("keypress", m);
            this.on("keydown", s);
            this.on("keyup", ft);
            this.on("paste", $);
            return this
        };
        e.formance.fn.validate_credit_card_number = function () {
            var n, r, i;
            r = e(this).val();
            r = (r + "").replace(/\s+|-/g, "");
            if (!/^\d+$/.test(r)) {
                return false
            }
            n = t(r);
            if (!n) {
                return false
            }
            return (i = r.length, ct.call(n.length, i) >= 0) && (n.luhn === false || U(r))
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        Y = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 8) {
                return false
            }
        };
        g = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r;
            if (/^\d$/.test(s) && r !== "0" && r !== "1" && r !== "2" && r !== "3") {
                t.preventDefault();
                return n.val("0" + s + " / ")
            } else if (/^\d{2}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " / ")
            } else if (/^\d{2}\s\/\s\d$/.test(s) && r !== "0" && r !== "1") {
                t.preventDefault();
                return n.val("" + i + "0" + r + " / ")
            } else if (/^\d{2}\s\/\s\d{2}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " / ")
            }
        };
        w = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            if (/^\d{2}$/.test(i) || /^\d{2}\s\/\s\d{2}$/.test(i)) {
                return n.val("" + i + " / ")
            }
        };
        x = function (t) {
            var n, r, i, s, o, u, a, f, l;
            a = String.fromCharCode(t.which);
            if (a !== "/") {
                return
            }
            n = e(t.currentTarget);
            f = n.val();
            o = /^(\d)$/;
            u = /^(\d{2})\s\/\s(\d)$/;
            if (o.test(f) && f !== "0") {
                return n.val("0" + f + " / ")
            } else if (u.test(f)) {
                l = f.match(u), r = l[0], i = l[1], s = l[2];
                if (s !== "0") {
                    return n.val("" + i + " / 0" + s + " / ")
                }
            }
        };
        o = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\/)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\/)*$/, ""))
            } else if (/\s\/\s?\d?$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\s\/\s?\d?$/, ""))
            }
        };
        e.formance.fn.format_dd_mm_yyyy = function () {
            this.formance("restrictNumeric");
            this.on("keypress", Y);
            this.on("keypress", g);
            this.on("keypress", x);
            this.on("keypress", w);
            this.on("keydown", o);
            return this
        };
        W = function (e) {
            var t, n, r, i;
            i = e != null ? e.replace(/\s/g, "").split("/", 3) : [NaN, NaN, NaN], t = i[0], n = i[1], r = i[2];
            if (!(r != null && r.length === 4)) {
                r = NaN
            }
            t = parseInt(t, 10);
            n = parseInt(n, 10);
            r = parseInt(r, 10);
            return {day: t, month: n, year: r}
        };
        e.formance.fn.val_dd_mm_yyyy = function () {
            var e;
            e = W(this.val());
            if (e.day == null || isNaN(e.day)) {
                return false
            }
            if (e.month == null || isNaN(e.month)) {
                return false
            }
            if (e.year == null || isNaN(e.year)) {
                return false
            }
            return new Date(e.year, e.month - 1, e.day)
        };
        e.formance.fn.validate_dd_mm_yyyy = function () {
            var e, t;
            t = W(this.val());
            e = this.formance("val_dd_mm_yyyy");
            if (!(e != null && e instanceof Date)) {
                return false
            }
            if (e.getDate() !== t.day) {
                return false
            }
            if (e.getMonth() + 1 !== t.month) {
                return false
            }
            if (e.getFullYear() !== t.year) {
                return false
            }
            return true
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        e.formance.fn.format_email = function () {
            return this
        };
        e.formance.fn.validate_email = function () {
            var t, n, r, i;
            n = {
                simple: /^\S+@\S+$/,
                complex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA -Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
            t = e(this);
            r = t.val();
            if (r == null) {
                return false
            }
            i = t.data("formance_algorithm");
            if (i != null && i in n) {
                return n[i].test(r)
            }
            return n["simple"].test(r)
        };
        e = jQuery;
        e.formance.fn.format_number = function () {
            var t;
            t = e(this).data("formance_length");
            if (t != null) {
                e(this).attr("maxLength", t)
            }
            this.formance("restrictNumeric");
            return this
        };
        e.formance.fn.validate_number = function () {
            var t, n, r;
            t = e(this);
            r = t.val();
            n = t.data("formance_length");
            if (n != null && typeof n === "number" && r.length !== n) {
                return false
            }
            if (n != null && typeof n === "string" && n !== "") {
                if (isNaN(parseInt(n, 10))) {
                    return false
                }
                if (r.length !== parseInt(n, 10)) {
                    return false
                }
            }
            return /^\d+$/.test(r)
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        nt = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^[a-zA-Z\d]+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/[^a-zA-Z\d]/g, "");
            if (i.length > 15) {
                return false
            }
        };
        A = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^[a-zA-Z\d]+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r.toUpperCase();
            if (i === "") {
                t.preventDefault();
                if (/^[A-Za-z]$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^[A-Za-z]\d{0,3}$/.test(i)) {
                t.preventDefault();
                if (/^[A-Za-z]\d{4}$/.test(s)) {
                    s = "" + s + " - "
                }
                if (/^[A-Za-z]\d{0,4}[\s|\-]*$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^[A-Za-z]\d{4}[\s|\-]*\d{0,4}$/.test(i)) {
                t.preventDefault();
                if (/^[A-Za-z]\d{4}[\s|\-]*\d{5}$/.test(s)) {
                    s = "" + s + " - "
                }
                if (/^[A-Za-z]\d{4}[\s|\-]*\d{0,5}[\s|\-]*$/.test(s)) {
                    return n.val(s)
                }
            }
        };
        f = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\-)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\-)+$/, ""))
            }
        };
        _ = function (t) {
            var n = this;
            return setTimeout(function () {
                var n, r, i, s, o, u, a;
                n = e(t.currentTarget);
                u = n.val();
                a = u.match(/^([A-Za-z\d]{5})[\s|\-]*(\d{5})[\s|\-]*(\d{5})$/), i = a[0], r = a[1], o = a[2], s = a[3];
                return n.val("" + r + " - " + o + " - " + s)
            })
        };
        e.formance.fn.format_ontario_drivers_license_number = function () {
            this.formance("restrictAlphaNumeric");
            this.on("keypress", nt);
            this.on("keypress", A);
            this.on("keydown", f);
            this.on("paste", _);
            return this
        };
        e.formance.fn.validate_ontario_drivers_license_number = function () {
            var t, n;
            n = e(this).val();
            if (n == null) {
                return false
            }
            n = n.replace(/[\s|\-]/g, "");
            if (!/^[a-zA-Z\d]+$/.test()) {
                return false
            }
            t = /^[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/;
            return t.test(n)
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        rt = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 15) {
                return false
            }
        };
        O = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = n.val() + r;
            if (i === "") {
                t.preventDefault();
                s = /^7$/.test(s) ? "708158 " : "708158 " + s;
                return n.val(s)
            } else if (/^\d{5}$/.test(i)) {
                t.preventDefault();
                if (/^\d{6}$/.test(s)) {
                    s = "" + s + " "
                }
                if (/^\d{6}\s*$/.test(s)) {
                    return target.val(s)
                }
            }
        };
        l = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/708158\s+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/708158\s+$/, ""))
            }
        };
        D = function (t) {
            var n = this;
            return setTimeout(function () {
                var n, r, i, s, o, u;
                n = e(t.currentTarget);
                o = n.val();
                u = o.match(/^(\d{6})\s*(\d{9})$/), i = u[0], r = u[1], s = u[2];
                return n.val("" + r + " " + s)
            })
        };
        e.formance.fn.format_ontario_outdoors_card_number = function () {
            this.formance("restrictNumeric");
            this.on("keypress", rt);
            this.on("keypress", O);
            this.on("keydown", l);
            this.on("paste", D);
            return this
        };
        e.formance.fn.validate_ontario_outdoors_card_number = function () {
            var t, n;
            n = e(this).val();
            if (n == null) {
                return false
            }
            n = n.replace(/\s/g, "");
            if (!/^\d+$/.test(n)) {
                return false
            }
            t = /^708158\s*\d{9}$/;
            return t.test(n)
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        it = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^[a-zA-Z\d]+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/[^a-zA-Z\d]/g, "");
            if (i.length > 12) {
                return false
            }
        };
        M = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^[a-zA-Z\d]+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r.toUpperCase();
            if (/^\d{0,3}$/.test(i)) {
                t.preventDefault();
                if (/^\d{4}$/.test(s)) {
                    s = "" + s + " - "
                }
                if (/^\d{0,4}[\s|\-]*$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^\d{4}[\s|\-]*\d{0,2}$/.test(i)) {
                t.preventDefault();
                if (/^\d{4}[\s|\-]*\d{3}$/.test(s)) {
                    s = "" + s + " - "
                }
                if (/^\d{4}[\s|\-]*\d{0,3}[\s|\-]*$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{0,2}$/.test(i)) {
                t.preventDefault();
                if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}$/.test(s)) {
                    s = "" + s + " - "
                }
                if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{0,3}[\s|\-]*$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}[\s|\-]*[A-Za-z]{0,1}$/.test(i)) {
                t.preventDefault();
                if (/^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}[\s|\-]*[A-Za-z]{0,2}$/.test(s)) {
                    return n.val(s)
                }
            }
        };
        c = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\-)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\-)+$/, ""))
            }
        };
        P = function (t) {
            var n = this;
            return setTimeout(function () {
                var n, r, i, s, o, u, a, f;
                n = e(t.currentTarget);
                a = n.val();
                f = a.match(/^(\d{4})[\s|\-]*(\d{3})[\s|\-]*(\d{3})[\s|\-]*([A-Za-z]{2})$/), i = f[0], r = f[1], o = f[2], u = f[3], s = f[4];
                return n.val("" + r + " - " + o + " - " + u + " - " + s)
            })
        };
        e.formance.fn.format_ontario_photo_health_card_number = function () {
            this.formance("restrictAlphaNumeric");
            this.on("keypress", it);
            this.on("keypress", M);
            this.on("keydown", c);
            this.on("paste", P);
            return this
        };
        e.formance.fn.validate_ontario_photo_health_card_number = function () {
            var t, n;
            n = e(this).val();
            if (n == null) {
                return false
            }
            n = n.replace(/[\s|\-]/g, "");
            if (!/^[a-zA-Z\d]+$/.test()) {
                return false
            }
            t = /^\d{4}[\s|\-]*\d{3}[\s|\-]*\d{3}[\s|\-]*[A-Za-z]{2}$/;
            return t.test(n)
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        J = function (e) {
            var t, n, r, i, s, o;
            i = e.replace(/\D/g, "").match(/^(\d{0,3})?(\d{0,3})?(\d{0,4})?$/);
            o = i, i = o[0], t = o[1], n = o[2], r = o[3];
            s = "";
            if (t != null) {
                s += "(" + t
            }
            if ((t != null ? t.length : void 0) === 3) {
                s += ") "
            }
            if (n != null) {
                s += "" + n
            }
            if ((n != null ? n.length : void 0) === 3) {
                s += " - "
            }
            if (r != null) {
                s += "" + r
            }
            return s
        };
        st = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 10) {
                return false
            }
        };
        j = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            s = n.val() + r;
            i = J(s);
            t.preventDefault();
            return n.val(i)
        };
        h = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\(\d$/.test(r)) {
                t.preventDefault();
                return n.val("")
            } else if (/\d\)(\s)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d\)(\s)*$/, ""))
            } else if (/\d(\s|\-)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\-)+$/, ""))
            }
        };
        H = function (t) {
            var n = this;
            return setTimeout(function () {
                var n, r, i;
                n = e(t.currentTarget);
                i = n.val();
                r = J(i);
                return n.val(r)
            })
        };
        e.formance.fn.format_phone_number = function () {
            this.formance("restrictNumeric");
            this.on("keypress", st);
            this.on("keypress", j);
            this.on("keydown", h);
            this.on("paste", H);
            return this
        };
        e.formance.fn.validate_phone_number = function () {
            var t;
            t = e(this).val();
            if (t == null) {
                return false
            }
            t = t.replace(/\(|\)|\s+|-/g, "");
            if (!/^\d+$/.test(t)) {
                return false
            }
            return t.replace(/\D/g, "").length === 10
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        ot = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^[a-zA-Z\d]+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/[^a-zA-Z\d]/g, "");
            if (i.length > 6) {
                return false
            }
        };
        F = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^[a-zA-Z\d]+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r.toUpperCase();
            if (i === "") {
                t.preventDefault();
                if (/^[ABCEFGHJKLMNPRSTVXY]$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^[ABCEFGHJKLMNPRSTVXY]$/.test(i)) {
                t.preventDefault();
                if (/^[ABCEFGHJKLMNPRSTVXY][0-9]$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9]$/.test(i)) {
                t.preventDefault();
                if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]$/.test(s)) {
                    return n.val("" + s + " ")
                }
            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s$/.test(i)) {
                t.preventDefault();
                if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9]$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9]$/.test(i)) {
                t.preventDefault();
                if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ]$/.test(s)) {
                    return n.val(s)
                }
            } else if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ]$/.test(i)) {
                t.preventDefault();
                if (/^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9]$/.test(s)) {
                    return n.val(s)
                }
            }
        };
        p = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/[ABCEFGHJKLMNPRSTVWXYZ](\s)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/[ABCEFGHJKLMNPRSTVWXYZ](\s)*$/, ""))
            }
        };
        B = function (t) {
            var n = this;
            return setTimeout(function () {
                var n, r, i, s, o, u;
                n = e(t.currentTarget);
                o = n.val();
                u = o.match(/^([ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ])\s?([0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9])$/), i = u[0], r = u[1], s = u[2];
                return n.val("" + r + " " + s)
            })
        };
        e.formance.fn.format_postal_code = function () {
            this.formance("restrictAlphaNumeric");
            this.on("keypress", ot);
            this.on("keypress", F);
            this.on("keydown", p);
            this.on("paste", B);
            return this
        };
        e.formance.fn.validate_postal_code = function () {
            var t;
            t = e(this).val();
            if (t == null) {
                return false
            }
            t = t.replace(/\s+/g, "");
            if (!/^[a-zA-Z\d]+$/.test(t)) {
                return false
            }
            t = t.replace(/[^a-zA-Z\d]/g, "");
            return /^[ABCEFGHJKLMNPRSTVXY][0-9][ABCEFGHJKLMNPRSTVWXYZ]\s?[0-9][ABCEFGHJKLMNPRSTVWXYZ][0-9]$/.test(t.toUpperCase())
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        ut = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 4) {
                return false
            }
        };
        I = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r;
            if (/^\d{2}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " / ")
            } else if (/^\d{2}\s\/\s\d{1}$/.test(s) && r !== "0" && r !== "1") {
                t.preventDefault();
                return n.val("" + i + "0" + r)
            }
        };
        k = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            if (/^\d{2}$/.test(i)) {
                return n.val("" + i + " / ")
            }
        };
        C = function (t) {
            var n, r, i, s;
            i = String.fromCharCode(t.which);
            if (i !== "/") {
                return
            }
            n = e(t.currentTarget);
            s = n.val();
            r = /^(\d)$/;
            if (r.test(s) && s.length === 2 || s.length === 1) {
                return n.val("0" + s + " / ")
            }
        };
        d = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\/)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\/)*$/, ""))
            } else if (/\s\/\s?\d?$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\s\/\s?\d?$/, ""))
            }
        };
        e.formance.fn.format_time_yy_mm = function () {
            this.formance("restrictNumeric");
            this.on("keypress", ut);
            this.on("keypress", I);
            this.on("keypress", k);
            this.on("keypress", C);
            this.on("keydown", d);
            return this
        };
        X = function (e) {
            var t, n, r;
            r = e != null ? e.replace(/\s/g, "").split("/", 2) : [NaN, NaN], n = r[0], t = r[1];
            t = parseInt(t, 10);
            n = parseInt(n, 10);
            return {years: n, months: t}
        };
        e.formance.fn.val_time_yy_mm = function () {
            var e;
            e = X(this.val());
            if (e.years == null || isNaN(e.years)) {
                return false
            }
            if (e.months == null || isNaN(e.months)) {
                return false
            }
            return e
        };
        e.formance.fn.validate_time_yy_mm = function () {
            var t, n, r;
            n = X(this.val());
            t = this.formance("val_time_yy_mm");
            r = e(this).val();
            if (t.months !== n.months) {
                return false
            }
            if (t.years !== n.years) {
                return false
            }
            if (/^(\d{1}[\d{1}]*)[\s\/]*(\d{1}[\d{1}]*)[\s\/]*$/.test(r)) {
                return true
            }
            return false
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        at = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 6) {
                return false
            }
        };
        L = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            if (/^\d{2}$/.test(i) || /^\d{2}\s\-\s\d{2}$/.test(i)) {
                return n.val("" + i + " - ")
            }
        };
        v = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\-)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\-)+$/, ""))
            } else if (/\s\-\s?\d?$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\s\-\s?\d?$/, ""))
            }
        };
        q = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r;
            if (/^\d{2}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " - ")
            } else if (/^\d{2}\s\-\s\d{2}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " - ")
            }
        };
        e.formance.fn.format_uk_sort_code = function (e) {
            this.formance("restrictNumeric");
            this.on("keypress", at);
            this.on("keypress", q);
            this.on("keypress", L);
            this.on("keydown", v);
            return this
        };
        e.formance.fn.validate_uk_sort_code = function () {
            var t;
            t = e(this).val();
            if (/^(\d{2})[\s\-]*(\d{2})[\s\-]*(\d{2})[\s]*$/.test(t)) {
                return true
            }
            return false
        };
        e = jQuery;
        R = e.formance.fn.hasTextSelected;
        Z = function (t) {
            var n, r, i;
            n = e(t.currentTarget);
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            if (R(n)) {
                return
            }
            i = n.val() + r;
            i = i.replace(/\D/g, "");
            if (i.length > 8) {
                return false
            }
        };
        y = function (t) {
            var n, r, i, s;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            s = i + r;
            if (/^\d{4}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " / ")
            } else if (/^\d{4}\s\/\s\d$/.test(s) && r !== "0" && r !== "1") {
                t.preventDefault();
                return n.val("" + i + "0" + r + " / ")
            } else if (/^\d{4}\s\/\s\d{2}$/.test(s)) {
                t.preventDefault();
                return n.val("" + s + " / ")
            } else if (/^\d{4}\s\/\s\d{2}\s\/\s\d$/.test(s) && r !== "0" && r !== "1" && r !== "2" && r !== "3") {
                t.preventDefault();
                return n.val("" + i + "0" + r)
            }
        };
        E = function (t) {
            var n, r, i;
            r = String.fromCharCode(t.which);
            if (!/^\d+$/.test(r)) {
                return
            }
            n = e(t.currentTarget);
            i = n.val();
            if (/^\d{4}$/.test(i) || /^\d{4}\s\/\s\d{2}$/.test(i)) {
                return n.val("" + i + " / ")
            }
        };
        T = function (t) {
            var n, r, i, s, o, u, a, f;
            o = String.fromCharCode(t.which);
            if (o !== "/") {
                return
            }
            n = e(t.currentTarget);
            u = n.val();
            s = /^(\d{4})\s\/\s(\d)$/;
            if (s.test(u)) {
                f = u.match(s), r = f[0], a = f[1], i = f[2];
                if (i !== "0") {
                    return n.val("" + a + " / 0" + i + " / ")
                }
            }
        };
        u = function (t) {
            var n, r;
            if (t.meta) {
                return
            }
            n = e(t.currentTarget);
            r = n.val();
            if (t.which !== 8) {
                return
            }
            if (n.prop("selectionStart") != null && n.prop("selectionStart") !== r.length) {
                return
            }
            if (/\d(\s|\/)+$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\d(\s|\/)*$/, ""))
            } else if (/\s\/\s?\d?$/.test(r)) {
                t.preventDefault();
                return n.val(r.replace(/\s\/\s?\d?$/, ""))
            }
        };
        e.formance.fn.format_yyyy_mm_dd = function () {
            this.formance("restrictNumeric");
            this.on("keypress", Z);
            this.on("keypress", y);
            this.on("keypress", T);
            this.on("keypress", E);
            this.on("keydown", u);
            return this
        };
        V = function (e) {
            var t, n, r, i;
            i = e != null ? e.replace(/\s/g, "").split("/", 3) : [NaN, NaN, NaN], r = i[0], n = i[1], t = i[2];
            if (!(r != null && r.length === 4)) {
                r = NaN
            }
            t = parseInt(t, 10);
            n = parseInt(n, 10);
            r = parseInt(r, 10);
            return {day: t, month: n, year: r}
        };
        e.formance.fn.val_yyyy_mm_dd = function () {
            var e;
            e = V(this.val());
            if (e.day == null || isNaN(e.day)) {
                return false
            }
            if (e.month == null || isNaN(e.month)) {
                return false
            }
            if (e.year == null || isNaN(e.year)) {
                return false
            }
            return new Date(e.year, e.month - 1, e.day)
        };
        e.formance.fn.validate_yyyy_mm_dd = function () {
            var e, t;
            t = V(this.val());
            e = this.formance("val_yyyy_mm_dd");
            if (!(e != null && e instanceof Date)) {
                return false
            }
            if (e.getDate() !== t.day) {
                return false
            }
            if (e.getMonth() + 1 !== t.month) {
                return false
            }
            if (e.getFullYear() !== t.year) {
                return false
            }
            return true
        }
    }.call(this);

});
