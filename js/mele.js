
function index_init() {
  var $hn = $('#hot_news');
  $hn.before('<div class="hot-news"></div>');
  var $hnd = $('.hot-news');
  $hnd.append($hn);
  while (true)
  {
    var $n = $hnd.next();
    console.log($n[0].tagName);
    if ($n[0].tagName !== 'P') break;
    $hnd.append($n);
  }
};
$(document).ready(function() {
  index_init();
});

