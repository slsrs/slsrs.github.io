String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
    var makaba_list = ['крым','новороссия', 'еот'];
$('.thread').each(function(elem,i){
    var item = $(this).attr('id');
    for(i = 0; i < makaba_list.length; i++) {
	var id = $(this).attr("id");
	$("postbtn-hide").attr('onclick', 'mkhelper.hide("'+id+'")');
      if($(this).html().toLowerCase().contains(makaba_list[i]) == true) {
         var thread = $(this).html();
          $(this).html('<div class="mk-hidden" id="mk-'+id+'"><b>Hidden thread: matched</b> '+makaba_list[i]+ '</div> \
          <div style="display:none;" id="mk-full-'+id+'">'+thread+'</div>'); 
          $(this).attr('onclick', 'mkhelper.show("'+id+'")');
      }
    }
});
var mkhelper = {
    show: function(id) {
        var note = $("#mk-"+id);
        var post = $('#mk-full-'+id);
        note.remove();
		$('#'+id).html(post.html());
		$('#'+id).attr('onclick','');
    },
	hide: function(id) {
	var thread = $(this).html();
    $(this).html('<div class="mk-hidden" id="mk-'+id+'"><b>Hidden thread: hidden by user</b></div> \
     <div style="display:none;" id="mk-full-'+id+'">'+thread+'</div>'); 
    $(this).attr('onclick', 'mkhelper.show("'+id+'")');
	}
};
