$( document ).ready(function() {
    // Открытие/закрытие выпадающего меню с адресами
    $('.header__address--btn').on('click', function () {
        $('.mount').addClass('active')
        $(this).next().addClass('active')
    })

    // Закрытие всех модальных окон
    $('.mount').on('click', function () {
        $(this).removeClass('active')
        $('.header__address--dropdown').removeClass('active')
    })

    // Появление/исчезновение крестика в поиске
    $('.header__search input').on('input', function () {
        if ($(this).val() === '') {
            $(this).next().removeClass('active')
        } else {
            $(this).next().addClass('active')
        }
    })

    // Клик на крестик в поиске
    $('.header__search--cancel').on('click', function () {
        $(this).removeClass('active')
        $(this).prev().val('').focus()
    })

    // Слайдер с баннерами
    $('.banner__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1
    })

    // Слайдер с отзывами
    $('.review__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true
    })

    // Слайдер с сертификатами
    $('.certificates__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 4,
        slidesToShow: 4
    })

    // Слайдер с видео
    $('.video__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 2
    })
});