String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
$('.thread').each(function(elem,i){
    var item = $(this).attr('id');
    if($(this).html().toLowerCase().contains('крым') == true) { $(this).fadeOut(); }
});
