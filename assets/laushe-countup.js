(function () {
  function parseTarget(raw) {
    var s = String(raw || '').trim();
    var m = s.match(/^([\d,]+)\s*(K)?\s*([+%]*)$/i);
    if (!m) return null;
    var value = parseInt(m[1].replace(/,/g, ''), 10);
    if (isNaN(value)) return null;
    var kMode = !!m[2];
    var suffix = (kMode ? 'K' : '') + (m[3] || '');
    return {
      value: value,
      kMode: kMode,
      suffix: suffix,
      useComma: m[1].indexOf(',') !== -1
    };
  }

  function formatValue(n, opts) {
    if (opts.kMode) return String(n) + opts.suffix;
    var s = opts.useComma ? n.toLocaleString('en-US') : String(n);
    return s + opts.suffix;
  }

  function animateEl(el, opts) {
    var duration = 1600;
    var start = null;
    el.textContent = formatValue(0, opts);

    function frame(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var current = Math.round(opts.value * eased);
      el.textContent = formatValue(current, opts);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = formatValue(opts.value, opts);
    }
    requestAnimationFrame(frame);
  }

  function prepareLine(el) {
    if (el.getAttribute('data-count-ready')) return el.querySelector('.js-count-up');
    var text = el.getAttribute('data-count-line') || el.textContent || '';
    var m = String(text).trim().match(/^([\d,]+)\s*(K)?([+%]?)\s*(.*)$/i);
    if (!m) return null;
    var numberPart = m[1] + (m[2] || '') + (m[3] || '');
    var rest = m[4] || '';
    el.innerHTML = '<span class="js-count-up" data-count="' + numberPart.replace(/"/g, '') + '">' + numberPart + '</span>' + (rest ? ' ' + rest : '');
    el.setAttribute('data-count-ready', '1');
    return el.querySelector('.js-count-up');
  }

  function initCountUps() {
    document.querySelectorAll('.js-count-up-line:not([data-count-ready])').forEach(prepareLine);

    var els = document.querySelectorAll('.js-count-up:not([data-counted])');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) {
        var opts = parseTarget(el.getAttribute('data-count') || el.textContent);
        if (opts) {
          el.setAttribute('data-counted', '1');
          el.textContent = formatValue(opts.value, opts);
        }
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.getAttribute('data-counted')) return;
        var opts = parseTarget(el.getAttribute('data-count') || el.textContent);
        if (!opts) return;
        el.setAttribute('data-counted', '1');
        io.unobserve(el);
        animateEl(el, opts);
      });
    }, { threshold: 0.35, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountUps);
  } else {
    initCountUps();
  }
  document.addEventListener('shopify:section:load', initCountUps);
})();
