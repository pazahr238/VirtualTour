// Look Ma! no JS!!!
// Pure CSS Accordion with images and color filters
$('.case').each(function() {
  var link = $(this).html();
  $(this).contents().wrap('<a href="http://vt.iauahvaz.ac.ir/Tour/lab/index.htm"></a>');
});