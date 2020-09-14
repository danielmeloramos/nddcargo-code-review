Reveal.initialize({
    controls: !0,
    progress: !1,
    history: !0,
    center: !0,
    transition: "fade",
    dependencies: [{
        src: "/js/vendor/classList.js",
        condition: function() {
            return !document.body.classList
        }
    }, {
        src: "js/vendor/highlight/highlight.js",
        async: !0,
        condition: function() {
            return !!document.querySelector("pre code")
        },
        callback: function() {
            hljs.initHighlightingOnLoad()
        }
    }, {
        src: "js/vendor/notes/notes.js",
        async: !0
    }]
}),
function(e, n, t, s, i, o, c) {
    e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
        (e[i].q = e[i].q || []).push(arguments)
    }, e[i].l = 1 * new Date, o = n.createElement(t), c = n.getElementsByTagName(t)[0], o.async = 1, o.src = s, c.parentNode.insertBefore(o, c)
}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-58087941-1", "auto"), ga("send", "pageview");