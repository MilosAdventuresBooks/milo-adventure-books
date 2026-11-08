// Click a preview page to see it bigger. Arrow keys or the side buttons step through the
// pages of the same book; Esc, the close button or a click outside closes it.
(function () {
  var box, img, cap, list = [], at = 0;
  function build() {
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-prev" aria-label="Previous page">&#8249;</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lb-next" aria-label="Next page">&#8250;</button>';
    document.body.appendChild(box);
    img = box.querySelector('img'); cap = box.querySelector('figcaption');
    box.addEventListener('click', function (e) {
      if (e.target.closest('.lb-prev')) return step(-1);
      if (e.target.closest('.lb-next')) return step(1);
      if (e.target === box || e.target.closest('.lb-close')) close();
    });
  }
  function show() {
    var a = list[at];
    img.src = a.getAttribute('href');
    img.alt = a.querySelector('img').alt;
    cap.textContent = a.dataset.caption || '';
    box.querySelector('.lb-prev').hidden = box.querySelector('.lb-next').hidden = list.length < 2;
  }
  function step(d) { at = (at + d + list.length) % list.length; show(); }
  function close() { box.classList.remove('open'); document.body.classList.remove('lb-open'); img.src = ''; }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a.zoom');
    if (!a) return;
    e.preventDefault();
    if (!box) build();
    var strip = a.closest('.marquee, .strip');
    list = Array.prototype.filter.call(strip.querySelectorAll('a.zoom'), function (x) { return !x.closest('[aria-hidden]'); });
    var key = a.getAttribute('href');
    at = Math.max(0, list.findIndex(function (x) { return x.getAttribute('href') === key; }));
    show();
    box.classList.add('open'); document.body.classList.add('lb-open');
    box.querySelector('.lb-close').focus();
  });
  document.addEventListener('keydown', function (e) {
    if (!box || !box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
})();

// Scrolling strips: they drift by themselves; the arrow buttons (or a swipe) move them by hand.
// Without JavaScript the CSS animation still runs.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SPEED = 38; // px per second
  Array.prototype.forEach.call(document.querySelectorAll('.marquee'), function (mq) {
    var track = mq.querySelector('.track');
    var wrap = document.createElement('div');
    wrap.className = 'mq-wrap';
    mq.parentNode.insertBefore(wrap, mq);
    wrap.appendChild(mq);
    mq.classList.add('js-scroll');
    ['prev', 'next'].forEach(function (dir) {
      var b = document.createElement('button');
      b.className = 'mq-' + dir;
      b.type = 'button';
      b.setAttribute('aria-label', dir === 'prev' ? 'Previous pages' : 'Next pages');
      b.innerHTML = dir === 'prev' ? '&#8249;' : '&#8250;';
      b.addEventListener('click', function () { nudge(dir === 'prev' ? -1 : 1); });
      wrap.appendChild(b);
    });
    var pos = 0, last = 0, hold = 0, hover = false;
    function half() { return track.scrollWidth / 2; }
    function stepSize() { var f = track.querySelector('figure'); return f ? f.getBoundingClientRect().width + 18 : 300; }
    function nudge(d) {
      hold = performance.now() + 3500;
      var h = half(), x = mq.scrollLeft;
      if (d < 0 && x - stepSize() < 0) { x += h; mq.scrollLeft = x; }
      mq.scrollTo({ left: x + d * stepSize(), behavior: 'smooth' });
    }
    wrap.addEventListener('mouseenter', function () { hover = true; });
    wrap.addEventListener('mouseleave', function () { hover = false; });
    mq.addEventListener('touchstart', function () { hold = performance.now() + 60000; }, { passive: true });
    mq.addEventListener('touchend', function () { hold = performance.now() + 3000; }, { passive: true });
    function frame(t) {
      var dt = last ? Math.min(0.05, (t - last) / 1000) : 0; last = t;
      var h = half();
      if (Math.abs(mq.scrollLeft - pos) > 2) pos = mq.scrollLeft; // moved by hand
      var paused = reduce || hover || t < hold || document.body.classList.contains('lb-open');
      if (!paused) pos += SPEED * dt;
      if (h > 0 && pos >= h) pos -= h;
      if (!paused || Math.abs(mq.scrollLeft - pos) > 0.5 && t >= hold) mq.scrollLeft = pos;
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
})();
