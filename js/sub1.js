$(function(){
    var thumb = $('.artBtm .article');
    var heart = $('.artMid .article .btn');
    var view = $('.artMid .article')
    var more = $('.section>.btn');
    var i = 0;
    var counter = 1;
    var likec = 1;
    var slideBtns = $('.artMid .btns i');
    var slideI = 0;
    var artGroup = $('.artMid .artGroup');
    var artLen = $('.artMid .artGroup .article').length;
    var wd = $(window).width();
    thumb.click(function(){
        var th = $(this);
        i = th.index();
        if(th.parent().attr('class') == 'artGroup g2'){
            i += 5;
        }
        slideI = i;
        artGroup.css('marginLeft', -100 * slideI + '%');
        // if(wd <= 1024){
        //     artGroup.css('marginLeft', -100 * slideI + '%');

        // }else{
        //     view.html(th.html());
        //     view.find('.image').css('backgroundImage', th.find('.image').css('backgroundImage'));
        // }

    });

    heart.on('click', function(){
        if(likec == -1){
            var icon = $(this).find('i');
            if(icon.attr('class') == 'xi-heart-o'){
                likec = 1;
            }
        }

        
        if(likec == 1){
            view.eq(slideI).find('i').removeClass('xi-heart-o');
            view.eq(slideI).find('i').addClass('xi-heart');
            var count = Number($('.texts span').eq(slideI).text());
            $('.texts span').eq(slideI).text(count + 1);
        }else{
            view.eq(slideI).find('i').removeClass('xi-heart');
            view.eq(slideI).find('i').addClass('xi-heart-o');
            var count = Number($('.texts span').eq(slideI).text());
            $('.texts span').eq(slideI).text(count - 1);
        }
        thumb.eq(slideI).find('.texts').html(view.eq(slideI).find('.texts').html());
        thumb.eq(slideI).find('.image .btn').html(view.eq(slideI).find('.image .btn').html());
        
        // if(wd <= 1024){
        //     if(likec == 1){
        //         view.eq(slideI).find('i').removeClass('xi-heart-o');
        //         view.eq(slideI).find('i').addClass('xi-heart');
        //         var count = Number($('.texts span').eq(0).text());
        //         $('.texts span').eq(0).text(count + 1);
        //     }else{
        //         view.eq(slideI).find('i').removeClass('xi-heart');
        //         view.eq(slideI).find('i').addClass('xi-heart-o');
        //         var count = Number($('.texts span').eq(0).text());
        //         $('.texts span').eq(0).text(count - 1);
        //     }
        //     thumb.eq(slideI).find('.texts').html(view.eq(slideI).find('.texts').html());
        //     thumb.eq(slideI).find('.image .btn').html(view.eq(slideI).find('.image .btn').html());
        // }else{
        //     if(likec == 1){
        //         view.find('i').removeClass('xi-heart-o');
        //         view.find('i').addClass('xi-heart');
        //         var count = Number($('.texts span').eq(0).text());
        //         $('.texts span').eq(0).text(count + 1);
        //     }else{
        //         view.find('i').removeClass('xi-heart');
        //         view.find('i').addClass('xi-heart-o');
        //         var count = Number($('.texts span').eq(0).text());
        //         $('.texts span').eq(0).text(count - 1);
        //     }

        //     thumb.eq(i).find('.texts').html(view.find('.texts').html());
        //     thumb.eq(i).find('.image .btn').html(view.find('.image .btn').html());
        // }
        likec *= -1;
    });

    more.click(function(){
        if(counter == 1){
            $('.artBtm').append($('.artBtm').html());
            $(this).text('Close -');
        }else{
            $('.artBtm .artGroup:eq(1)~').remove();
            $(this).text('View More +');
        }
        counter *= -1;
    });

    
    slideBtns.first().click(function(){
        slideI--;
        slideI = (slideI + artLen) % artLen;
        artGroup.css('marginLeft', -100 * slideI + '%');
    });
    slideBtns.last().click(function(){
        slideI++;
        slideI = slideI % artLen;
        artGroup.css('marginLeft', -100 * slideI + '%');
    });

});