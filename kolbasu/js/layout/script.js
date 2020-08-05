function ibg(){

	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();

// header burger

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu').toggleClass('_active');
		$('body').toggleClass('_lock')
	});
});




$(document).ready(function() {
	$('.down').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.up').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});


document.addEventListener("DOMContentLoaded", () => {

    // ======== Slider with one handle
    
    const priceSlider = document.getElementById('r-slider');

    noUiSlider.create(priceSlider, {
    	start: [0, 4700],
    	tooltips: true,
    	padding: 0,
    	range: {
    		'min': 0,
    		'max': 4700
    	},
    	pips: {
    		mode: 'values',
    		values: [50, 100, 150],
    		density: 4
    	}
    });

    

    // ======== Slider with two handles
    
    const discountSlider = document.getElementById('m-slider');

    noUiSlider.create(discountSlider, {
    	start: 2,
    	tooltips: true,
    	step: 1,
    	range: {
    		'min': 2,
    		'max': 100
    	},
    	format: {
    		to: function (value) {
    			return parseInt(value);
    		},
    		from: function (value) {
    			return parseInt(value);
    		}
    	}
    });
});



$(function(){
	$('.catalog-card').slick({
		fade: true,
		arrows: false,
		dots: true
	});
});

$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});