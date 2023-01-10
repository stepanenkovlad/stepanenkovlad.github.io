$(function(){
    $('.item__carousel').slick({
        prevArrow: "<img src='/img/angle-left-svgrepo-com.svg' class='prev' alt='1'>",
        nextArrow: "<img src='/img/angle-right-svgrepo-com.svg' class='next' alt='2'>",
        
    })

    $('.slct').click(function(){
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        var arrowImg = "<img class='arrow__img' src='icons/down-arrow.svg' alt=''>"
    
        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();
    
            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
    
            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function(){
    
                /* Заносим в переменную HTML код элемента
                списка по которому кликнули */
                var selectResult = $(this).find('a').data('znach');
                var selectResultName = $(this).find('a').html();
    
                /* Находим наш скрытый инпут и передаем в него
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);
    
                /* Передаем значение переменной selectResult в ссылку которая
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find('.slct').removeClass('active').html(selectResultName + arrowImg);

                $(this).find('img').style= "transform: rotate(180deg)".style= "transition: all .5s;";
    
                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });
    
        /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }
    
        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
})