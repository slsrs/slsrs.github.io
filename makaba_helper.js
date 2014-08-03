$('.thread').each(function(elem,i){
    var item = $(this).attr('id'); if(document.getElementById(item).innerHTML.search('Росси') == true) { $(this).fadeOut(); }
});
