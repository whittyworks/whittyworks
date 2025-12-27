// script.js
// Small nicety: set the copyright year dynamically
// Kept minimal and defensive in case the element is missing
(function(){
  try {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  } catch (e) {
    // fail silently — this is non-critical
    console && console.warn && console.warn('script.js error', e);
  }
})();
