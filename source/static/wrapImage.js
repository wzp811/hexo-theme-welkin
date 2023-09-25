$(document).ready(function() {
  var alt = '';
  $('main img').each(function() {
    console.log($(this).parent());
    console.log($(this));
    if ($(this).parent().hasClass('fancybox')) return;
    
    if (!$(this).parent().hasClass('img-para')) $(this).parent().attr('class','img-para')
    if ($(this).hasClass('nofancybox')) return;
    if (this.alt) alt = this.alt;
  //   if (alt) $(this).after('<span class="caption">' + alt + '</span>');
    $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
  });

  $(this).find('.img-para').each(function(){
    $(this).append('<span class="caption">' + alt + '</span>');
    $(this).children('a, span').wrapAll('<div class="img-container"></div>');
  });
});
// $(document).ready(function() {
//     $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
//         helpers : {
//         title: { type: 'inside'}
//         }
//     });
// });