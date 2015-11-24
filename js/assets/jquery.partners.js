/*
 * jQuery - Partners Testimonials
 * © 2013. WpBrickr
 */

(function ( $ ) {
 
    $.fn.partners = function(options) {

        // Default Options
        var settings = $.extend({
            debug: false,
        }, options);
 
        // Testimonial List
        var testimonial_list = '<div class="wpb-partners-testimonial-container"><div class="container"><div class="row"><div class="span12"><ul class="wpb-partner-testimonial-list"></ul></div></div></div></div>';
        var parent_ul = '';
        
        $(this).parents('section').append(testimonial_list);
        
        // Fetch testimonial text and add it to html
        this.each(function(i, item) {
          // UL
          parent_ul = $(item).parent();
          
          // LI
          var li = $(item);
          // Image
          var image = $('img', li);
          // Testimonial
          var testimonial = $('div.wpb-partner-testimonial', li).html();
          
          $('.wpb-partner-testimonial-list').append('<li style="display:none;">' + testimonial + '</li>');
        });
        
        // Display First Items
        $('li:first-child a', parent_ul).addClass('active');
        $('li:first-child', '.wpb-partner-testimonial-list').addClass('active').show();
        
        // Track Mouse Click
        $('li a', parent_ul).click(function(){
          
          var ul = $(this).parent().parent();
          var list_index = $(this).parent().index();
          $('li a.active', ul).removeClass('active');
          $(this).addClass('active');
          
          $('li.active', '.wpb-partner-testimonial-list').hide();
          $('li', '.wpb-partner-testimonial-list').eq(list_index).addClass('active ').show();
          
          return false;
        });
 
    };
 
}( jQuery ));