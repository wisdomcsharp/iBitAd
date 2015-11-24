jQuery(document).ready(function($){
  
  // Contact form
  $('input,textarea', '.wpb-contact-form-container').keyup(function(){
    $(this).addClass('user-modified');
  });
  
  
  $('.wpb-contact-form').click(function(){
    var error = false;
    var form = $('.wpb-contact-form-container');
    
    $('input,textarea', form).each(function(index, item) {
      if (!$(item).hasClass('user-modified')) {
        alert('You need to input all required fields!');
        error = true;
        return false;
      }
    });
    
    if (!error) {
      $('.wpb-contact-form-container').ajaxSubmit({ dataType: 'json', success: contactFormResponse });
    }
    
    return false;
  });
  
  // Partners Testimonials
  if ($('.wpb-partners-list li').length) {
    $('.wpb-partners-list li').partners();
  }
  
  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
  
  if ($('.parallax-background-contact').length) {
    $(".parallax-background-contact").parallax("50%", "0.25");
  }

  // ElastiSlide
  if ($('.wpb-elastislide-list').length) {
    $('.wpb-elastislide-list').elastislide({ speed : 500 });
  }
  
  // FlexSlider
  if ($('.flexslider').length) {
    $('.flexslider').flexslider({controlNav:false, animation: "slide"});
  }
  
  // DatePicker
  if ($('.wpb-datepicker').length) {
    $('.wpb-datepicker').datepicker();
  }
  
  // IsoTope
  if ($('.wpb-portfolio-list').length) {
    $('.wpb-portfolio-list').isotope({
      itemSelector: '.wpb-portfolio-item',
    });
  }
  
  if ($('.wpb-team-list').length) {
    $('.wpb-team-list').isotope({
      itemSelector: '.wpb-team-item',
    });
  }
  
  // IsoTope Filters
  if ($('.wpb-portfolio-filter').length) {
    $('.wpb-portfolio-filter a').click(function(){
      var selector = $(this).attr('data-filter');
      var parent = $(this).parent().parent();
      // Remove current active
      $('.wpb-portfolio-filter a.active').removeClass('active');
      $(this).addClass('active');
      $('.wpb-portfolio-list').isotope({ filter: '' + selector });
      return false;
    });
  }

  
  // Display Hidden Map
  $('.wpb-display-map').click(function(){
    
    var container = $(this).parents('.container');
    var parent    = $(container).parent();
    var opacity   = $('.background-opacity', parent);
    
    $(container).fadeOut(500);
    $(opacity).fadeOut(500);
    
    return false;
  });
  
  $('iframe.google-map-container').mouseleave(function(){
    var parent = $(this).parent();
    var opacity   = $('.background-opacity', parent);
    var container = $('.container', parent);
    
    $(opacity).fadeIn(500);
    $(container).fadeIn(500);
    
  });
  
  // Google Maps
   $('.google-map-container').each(function(index, element) {
    var gmap = $(element);
    var addr = 'http://maps.google.com/maps?hl=en&ie=utf8&output=embed&sensor=true&iwd=1&mrt=loc&t=m&q=' + encodeURIComponent(gmap.attr('data-address'));
    addr += '&z=' + gmap.attr('data-zoom');
    if (gmap.attr('data-bubble') == 'true') {
      addr += '&iwloc=addr';
    } else {
      addr += '&iwloc=near';
    }
    gmap.attr('src', addr);
  });
  

});

$(window).resize(function(){
  
  if ($('.wpb-portfolio-list').length) {
    $('.wpb-portfolio-list').isotope({
      itemSelector: '.wpb-portfolio-item',
    });
  }
  
  if ($('.wpb-team-list').length) {
    $('.wpb-team-list').isotope({
      itemSelector: '.wpb-team-item',
    });
  }
  
})