String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
$(".passcode-banner").attr('style','display:none;');
if(window.hidden_threads == null) { window.hidden_threads = []; }
    var makaba_list = ['крым','новорос', 'еот', '+15', 'сибир'];
$('.thread').each(function(elem,i){
    var item = $(this).attr('id');
    for(i = 0; i < makaba_list.length; i++) {
	var id = $(this).attr("id");
	$("postbtn-hide").attr('onclick', 'mkhelper.hide("'+id+'")');
      if($(this).html().toLowerCase().contains(makaba_list[i]) == true && window.hidden_threads[item] == null) {
         var thread = $(this).html();
          $(this).html('<div class="mk-hidden" id="mk-'+id+'"><b>Hidden thread: matched</b> '+makaba_list[i]+ '</div> \
          <div style="display:none;" id="mk-full-'+id+'">'+thread+'</div>'); 
          $(this).attr('onclick', 'mkhelper.show("'+id+'")');
		  window.hidden_threads[item] = 'auto';
      }
    }
});
$(document).ready(function() {
function addStyleSheet (css) { var head, styleElement; head = document.getElementsByTagName('head')[0]; styleElement = document.createElement('style'); styleElement.setAttribute('type', 'text/css');
    if (styleElement.styleSheet) {  styleElement.styleSheet.cssText = css; } else { styleElement.appendChild(document.createTextNode(css)); } head.appendChild(styleElement);
    return styleElement;
  }
 
var mk_css = ' \
.mk-hide { \
background: url("data:image/gif;base64,R0lGODlhDgAOAJEAAPDw8IyMjP///wAAACH5BAEAAAIALAAAAAAOAA4AQAIUVI55pu0Pozyg2jqz3u9evjGRUAAAOw==") no-repeat; \
outline: none; \
cursor: pointer; \
margin: -2px 1px 0 0; \
display: inline-block; \
width: 14px; \
height: 14px; \
vertical-align: middle; \
} ';
addStyleSheet(mk_css);
$('.postbtn-hide').each(function(elem,i){
var item = $(this).attr('data-num');
$(this).removeAttr('data-num');
$(this).attr('class', 'mk-hide');
$(this).attr('onclick', 'mkhelper.hide(\'#thread-'+item+'\', event);');
});
});
var mkhelper = {
    show: function(id) {
        var note = $("#mk-"+id);
        var post = $('#mk-full-'+id);
        note.remove();
		$('#'+id).html(post.html());
		$('#'+id).attr('onclick','');
    },
	hide: function(id, e) {
	e.preventDefault();
	var thread = $(id).html();
    $(id).html('<div class="mk-hidden" id="mk-'+id.replace("#", "")+'"><b>Hidden thread: hidden by user</b></div> \
     <div style="display:none;" id="mk-full-'+id.replace("#", "")+'">'+thread+'</div>'); 
    $(id).attr('onclick', 'mkhelper.show("'+id.replace("#", "")+'")');
	}
};
