/**
 * Google Analytics
 */
(function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, "script", "http://www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-75463090-1", "auto");
ga("send", "pageview");

/**
 * Ace Editor
 */
// trigger extension
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
// Todo: Auto change Theme by User Config and mode by file extension
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/php");
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
document.getElementById('editor').style.fontSize = '16px';
// Infinity scroll
editor.$blockScrolling = Infinity;
editor.getSession().setUseWrapMode(true);
editor.getSession().setUseSoftTabs(true);
editor.getSession().setTabSize(4);
