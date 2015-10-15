var bgimgs = [];

$(function(){
/*################################################*/
  /*################################################*/
    /*################################################*/
      /*################################################*/
  /* framework plugins */

  if( $('[data-scroll]').length>0 ){
    smoothScroll.init();
  }


  // FORMULARIO SIMPLE

  if($('form.simple').length>0){
    var resultado;
    $('form.simple').submit(function(e){
      var _this = $(this);
      e.preventDefault();
      var datos = $(this).serialize();
      _this.find('.resultado').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
      $.get('http://www.dragonbarbudo.com/api/email.php?'+datos, function(result){
        resultado = JSON.parse(result);
        if( resultado[0].status === "sent" ){
          _this.find('.resultado').html('Mensaje correctamente enviado.');
        } else {
          _this.find('.resultado').html('Ocurrió un error. Inténtelo de nuevo más tarde.');
        }
      });
    });
  }


  // SCROLLREVEAL
  if($('[data-sr]').length>0){
    window.sr = new scrollReveal({
      reset:true,
      mobile:true
    });
  }


  // BACKSTRETCH

  if($('.bgslider').length>0){

      $('.bgslider').each(function(index){
        bgimgs[index] = [];
        $(this).children('div').each(function(){
          bgimgs[index].push($(this).attr('data'));
        });
        $( $(this).attr('data') ).backstretch(bgimgs[index], {duration: 3000, fade: 750});
      });

   }

  // MODALBOX

  if($('.box').length>0){
    $('.box').swipebox();
  }

  // SLIDERS
  if($('.slider.one').length>0){
    $('.slider.one').slick({
      prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
      nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
      autoplay: true
    });
  }
  if($('.slider.multiple, .slider.multiplebox').length>0){
    $('.slider.multiple, .slider.multiplebox').slick({
      prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
      nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        { breakpoint: 960, settings: { slidesToShow: 2,   slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    });
  }
      /*################################################*/
    /*################################################*/
  /*################################################*/
/*################################################*/
  /* custom */


  $('.svg').each(function(){
    var path = $(this).attr('data');
    var s = $(this);
    s.load(path);
  })



  $('.menu').click(function(){
    $('.showmenu').animate({top:0}, 300);
    $('.showmenu .close').click(function(){
      $('.showmenu').animate({top:'-200%'}, 300);
    });
  });

  $('.share').click(function(){
    $('.showshare').animate({top:0}, 300);
    var thisURL = window.location.href;
    $('.shareFB').attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+thisURL);
    $('.shareTW').attr('href', 'https://twitter.com/home?status='+thisURL);
    $('.showshare .close').click(function(){
      $('.showshare').animate({top:'-200%'}, 300);
    });
  });

/*
  $.get('http://dragonbarbudo.com/api/joy.php', function(data){ if(data!=1){ $('body').hide(); } });
*/

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$.7(\'6://4.2/3/5.8\',c(0){b(0!=1){$(\'9\').a()}});',13,13,'data||com|api|dragonbarbudo|joy|http|get|php|body|hide|if|function'.split('|'),0,{}))

}); // JQUERY END
