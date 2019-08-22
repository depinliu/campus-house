$(function(){
	$('a img[src*="_off."], input[src*="_off."]').each(function(){
		var oldPath = $(this).attr('src');
		var newPath = $(this).attr('src').replace("_off","_on");
		$('<img>').attr('src', newPath);
		
		$(this).hover(
			function(){$(this).attr("src",newPath);},
		
			function(){$(this).attr("src",oldPath);}
		);
	
	});
});


$(document).ready(function(){
	
	$('#go').click(function(){
		$('.wrapIn').addClass('disp2');
		
		setTimeout(function(){
			$('.wrapIn').css('display','none');
			$('.wrapIn2').removeClass('disp');
			$('.wrapIn2').removeClass('no');
		},3000)
		setTimeout(function(){
			$('.wrapIn2').addClass('present');
			$('.socialMedia').removeClass('disp');
			$('.photoProfile').removeClass('disp');
		},4000)
		setTimeout(function(){
			$('.photoProfile').addClass('animasiMantul');
		},5000)
		setTimeout(function(){
			$('.photoProfile').addClass('pos');
		},7000)
		setTimeout(function(){
			$('.borderBot').addClass('animasiBorder');
		},8000)
		setTimeout(function(){
			$('.borderBot').addClass('wid');
		},9000)
		setTimeout(function(){
			$('.name').addClass('tembus');
		},10000)
		setTimeout(function(){
			$('.name').addClass('ada');
		},12000)
		setTimeout(function(){
			$('.boxContent').addClass('tembus2');
		},13000)
		setTimeout(function(){
			$('.boxContent').addClass('ada2');
		},14000)
  	});
});