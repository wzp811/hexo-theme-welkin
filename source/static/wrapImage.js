$(document).ready(function() {
  var alt = '';
  $('main img').each(function() {
    if ($(this).parent().hasClass('fancybox')) return;
    
    if (!$(this).parent().hasClass('img-para')) $(this).parent().attr('class','img-para')
    if ($(this).hasClass('nofancybox')) return;
    if (this.alt) alt = this.alt;
  //   if (alt) $(this).after('<span class="caption">' + alt + '</span>');
    $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
  });

  $(this).find('.img-para').each(function(){
    $(this).append('<span class="caption">' + alt + '</span>');
    var imgCnt = $(this).children('a').length;
    var fatherWidth = $(this).width() * 0.8;
    var resWidth = fatherWidth / imgCnt;
    $(this).children('a').each(function() {
      var img_detail = $(this).children('img');
      console.log(img_detail);
      var originWidth = img_detail.width();
      if (originWidth > resWidth) {
        var percent = resWidth / originWidth;
        var height = img_detail.height() * percent;
        console.log(img_detail);
        console.log(percent);
        console.log(img_detail.width());
        console.log(resWidth);
        console.log(img_detail.height());
        console.log(height);
        img_detail.css({
          'width': resWidth,
          'height': height
        });
      }
    })
    $(this).children('a').wrapAll('<div class="img-container"></div>');
  });

});

// 当前页面放大 而不是跳到另一个页面
$(document).ready(function() {
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
        helpers : {
        title: { type: 'inside'}
        }
    });
});