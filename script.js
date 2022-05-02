 (function($){
$(document).ready(function(){
$("a[title]").style_my_tooltips({
tip_follows_cursor:true,
tip_delay_time:0,
tip_fade_speed:0,
attribute:"title"
});
});
})(jQuery);
</script>
 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
jQuery(".sub").hide();
//toggle the componenet with class msg_body
jQuery(".cthrough").click(function()
{
jQuery(this).next(".sub").slideToggle(500); return false;
});});
</script>
 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
jQuery(".sub2").hide();
//toggle the componenet with class msg_body
jQuery(".cthrough2").click(function()
{
jQuery(this).next(".sub2").slideToggle(500); return false;
});});
 
$(document).ready(function() {
        //
//When you click on a link with class of poplight and the href starts with a #
$('a.poplight[href^=#]').click(function() {
    var popID = $(this).attr('rel'); //Get Popup Name
    var popURL = $(this).attr('href'); //Get Popup href to define size
    //Pull Query & Variables from href URL
    var query= popURL.split('?');
    var dim= query[1].split('&');
    var popWidth = dim[0].split('=')[1]; //Gets the first query string value
    //Fade in the Popup and add close button
    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="https://31.media.tumblr.com/7d91072c76c4379e9c9625a9b318cabf/tumblr_inline_n7oirdgCRB1rshr70.png" class="btn_close" title="Close Window" alt="Close" /></a>');
    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;
    //Apply Margin to Popup
    $('#' + popID).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });
    //Fade in Background
    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies
    return false;
});
//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() { //When clicking on the close or fade layer...
    $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();  //fade them both out
    });
    return false;
});
});
