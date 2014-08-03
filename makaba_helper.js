String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
    var makaba_list = ['крым','новороссия', 'еот'];
$('.thread').each(function(elem,i){
    var item = $(this).attr('id');
    for(i = 0; i < makaba_list.length; i++) {
      if($(this).html().toLowerCase().contains(makaba_list[i]) == true) { $(this).fadeOut(); }
    }
});
