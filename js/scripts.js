// borrowed from: https://gist.github.com/1042026 =======================================
// allows us to fake a native app by installing on home screen of iPad =============================

(function () {
  "use strict";

  if (("standalone" in window.navigator) && window.navigator.standalone) {
    var tap, remotes = false; // to prevent remote links from opening Mobile Safari, change 'remotes' to true
    document.addEventListener('click', function(event) {
      tap = event.target;
      while(tap.nodeName !== "A" && tap.nodeName !== "HTML") {
        tap = tap.parentNode;
      }
      if ('href' in tap && tap.href.indexOf('http') !== -1 && (tap.href.indexOf(document.location.host) !== -1 || remotes)) {
        event.preventDefault();
        document.location.href = tap.href;
      }
    }, false);
  }
}());