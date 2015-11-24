/* 
 * Theme Customizer
 * © 2013. Brickr
 */
 
 jQuery(document).ready(function($){
   
   var open = false;
   $('.wpc-customizer-icon a').click(function(){
     if (open) {
       $(this).parent().parent().animate({left:'-315px'}, 800);
       open = false;
     } else {
       $(this).parent().parent().animate({left:'0'}, 800);
       open = true;
     }
     return false;
   });
   
   
   $('select', 'form[name="customizer-form"]').change(function() {
     var selected = $(this).val();
     $(this).parent('form').submit();
   });
   
 });