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

/**
 * Interaction
 */
function saveTextAsFile() {
    var textToWrite = editor.getValue();
    var textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'});
    var fileNameToSaveAs = document.getElementById("filename").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function loadFileAsText() {
    var fileToLoad = document.getElementById("loadfile").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        editor.setValue(textFromFileLoaded);
        document.getElementById("filename").value = document.getElementById("loadfile").value;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

/**
 * Set menu as active
 */
$('.dropdown-menu a').click(function () {
    $('.dropdown-menu a').removeClass('active');
    $(this).addClass('active');
});
