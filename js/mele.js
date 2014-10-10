
function index_init() {
  var $hn = $('#hot_news');
  if ($hn.length === 0) return;
  $hn.before('<div class="hot-news"></div>');
  var $hnd = $('.hot-news');
  $hnd.append($hn);
  while (true)
  {
    var $n = $hnd.next();
    if ($n.length === 0) break;
    if ($n[0].tagName !== 'P') break;
    $hnd.append($n);
  }
};
$(document).ready(function() {
  index_init();
});

