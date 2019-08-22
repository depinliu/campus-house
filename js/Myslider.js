
$(document).ready(function(){
	
	setInterval(function () {
         $('#parent').append($('#parent li:first-of-type'));
    var cur = parseInt(($("#parent").css("left")));
    $('#parent li').removeClass('active');
    $('#parent li:nth-of-type(3)').addClass('active');
    $('#parent').css('left',cur);
    }, 3000);
	
	
	$('#checkbox-2').click(function() {
		$('#parent').append($('#parent li:first-of-type'));
		var cur = parseInt(($("#parent").css("left")));
		$('#parent li').removeClass('active');
		$('#parent li:nth-of-type(1)').addClass('active');
		$('#parent').css('left',cur);
	});
});