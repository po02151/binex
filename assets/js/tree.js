$(document).ready(function(){
    treeOpen();
});

function treeOpen(){
    $('.title_1').click(function(){
        if($(this).hasClass('active')){
			$(this).removeClass('active');

            $('.title_2').removeClass('active');
            $('.title_2').removeClass('underline');
		}else{
            $('.title_1').removeClass('active');
            $(this).addClass('active');
        }
    })
    $('.title_2').click(function(){
        if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
            $('.title_2').removeClass('active');

            $(this).addClass('active');
            $(this).addClass('underline');
        }
    })
    $('.title_3').click(function(){
        if($(this).hasClass('active')){
			$(this).removeClass('active');
            $('.title_2').removeClass('underline');
		}else{
            $('.title_3').removeClass('active');
            
            $(this).addClass('active');
            $(this).addClass('underline');
        }
    })
}

function tree_underline(){
    $()
}