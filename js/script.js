$( document ).ready(function() {
    // Открытие/закрытие выпадающего меню с адресами
    $('.header__address--btn').on('click', function () {
        $('.mount').addClass('active')
        $(this).next().addClass('active')
        $('.header__top').addClass('show')
    })

    // Закрытие всех модальных окон
    $('.mount, .modal__outside, .modal__close').on('click', function () {
        $(this).removeClass('active')
        $('.header__address--dropdown, .nav, .nav__dropdown, .modal, .aside__header').removeClass('active')
        $('.header, .nav, .main, .footer, .sticky-btns, .side-btns').removeClass('blur')
        $('.header__top').removeClass('show')
        $('.nav__container').removeClass('show')
        $('.header__search--wrapper').removeClass('active')
        $('.header__user--dropdown').removeClass('active')
    })

    // Открытие поиска на маленьких экранах
    $('.header__search--submit').on('click', function () {
        if ($(this).width() <= 1050) {
            $(this).next().addClass('active')
            $('.mount').addClass('active')
            $('.header__top').addClass('show')
        }
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

    // Дропдаун для пользователя в шапке
    $('.header__user').on('click', function (e) {
        if ($(window).width() <= 850) {
            e.preventDefault()

            $('.header__top').addClass('show')
            $('.mount').addClass('active')
            $(this).next().addClass('active')
        }
    })

    // Открытие формы для записи на прием
    $('.header__blue-btn, .nav__blue-btn, .footer__buttons--blue-btn, .team__white-btn, .services__white-btn, ' +
        '.sticky-btns__enroll').on(
        'click', function () {
            $('.header, .nav, .main, .footer, .sticky-btns, .side-btns').addClass('blur')
            $('#enroll-modal').addClass('active')
        }
    )

    // Клик на бургер в шапке
    $('.header__burger').on('click', function () {
        $(this).toggleClass('active')
        $('.nav').toggleClass('active')
    })

    // Открытие выпадающего меню в навигации
    $('button.nav__link').on('click', function () {
        if($(window).width() > 1200) {
            $('.nav__dropdown').removeClass('active')
            $('.mount').addClass('active')
            $(this).parent().next().addClass('active')
            $('.nav__container').addClass('show')
        }
    })

    // Открытие/закрытие групп в мобильной навигации
    $('.nav__open').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Открытие/закрытие подгрупп в мобильной навигации
    $('.nav__dropdown--open').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Слайдер с баннерами
    $('.banner__slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
    })

    // Адаптивный бургер в навигации по сервисам
    $('.services-nav__tabs').flexMenu({
        showOnHover: true,
        linkText: "Все разделы",
        linkTitle: "Показать еще",
        linkTextAll: "Меню",
        linkTitleAll: "Развернуть меню",
        popupClass: 'services-nav__dropdown',
        cutoff: 0,
        threshold: 1
    });

    // Слайдер с услугами
    servicesSlider()
    $(window).on('resize', servicesSlider)

    // Слайдер с командой врачей
    teamSlider()
    $(window).on('resize', teamSlider)

    // Слайдер с отзывами
    $('.review__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
    })

    $(document).on('click', '.review__readme', function () {
        $('.review-modal__text').text($(this).prev().text())
        $('.review-modal__surname').text($(this).prev().prev().prev().find('.review__surname').text())
        $('.review-modal__name').text($(this).prev().prev().prev().find('.review__lastname').text())
        $('.header, .nav, .main, .footer').addClass('blur')
        $('#review-modal').addClass('active')
    })

    Fancybox.bind("[data-fancybox='review-video']", {
        arrows: true,
        hideScrollbar: false,
        on: {
            ready: () => {
                $('.header, .nav, .main, .footer').addClass('blur')
            },
            destroy: () => {
                $('.header, .nav, .main, .footer').removeClass('blur')
            }
        },
    });

    // Слайдер "О центре"
    $('.about__slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
    })

    // Слайдер с новостями и акциями
    $('.news__slider').slick({
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false
                }
            }
        ]
    })

    // Слайдер с сертификатами
    $('.certificates__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 4,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    })

    // Слайдер с видео
    $('.video__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }
        ]
    })

    Fancybox.bind("[data-fancybox='video']", {
        arrows: true,
        hideScrollbar: false,
        on: {
            ready: () => {
                $('.header, .nav, .main, .footer').addClass('blur')
            },
            destroy: () => {
                $('.header, .nav, .main, .footer').removeClass('blur')
            }
        },
    });


    // Плавный скролл вверх
    $('.side-btns__scroll-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    // Закрытие липких кнопок
    $('.sticky-btns__close').on('click', function () {
        $('.sticky-btns').removeClass('active')
    })

    // Слайдер с расписанием
    timetableSlider()
    $(window).on('resize', timetableSlider)

    // Открытие/закрытие слайдеров в расписании
    $('.timetable__toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Открытие/закрытие информации о враче
    $('.doctor__toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Кастомный скролл
    $('.custom-scroll').each((index, scrollContainer) => {
        Scrollbar.init(scrollContainer, {
            alwaysShowTracks: true,
            continuousScrolling: false
        })
    })

    // Дропдауны в фильрах
    $('.aside__header').on('click', function () {
        $('.mount').addClass('active')
        $(this).addClass('active')
    })

    // Слайдер на странице акции
    $('.promotion-page .team__wrapper').slick({
        arrows: false,
        dots: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 100,
    })

    // Открытие/закрытие вкладок на странице с ценами
    $('.price__toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Открытие/закрытие подвкладок в расписании
    $('.timetable__person-toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })
})

function servicesSlider () {
    if ($(window).width() > 640 && $('.services__wrapper.slick-initialized').length > 0) {
        $('.services__wrapper').slick('unslick')
    } else if ($(window).width() <= 640 && $('.services__wrapper.slick-initialized').length === 0) {
        $('.services__wrapper').slick({
            arrows: false,
            dots: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 100,
        })
    }
}

function teamSlider () {
    if ($('.index-page, .doctor-page').length > 0) {
        if ($(window).width() > 1200 && $('.team__wrapper.slick-initialized').length > 0) {
            $('.team__wrapper').slick('unslick')
        } else if ($(window).width() <= 1200 && $('.team__wrapper.slick-initialized').length === 0) {
            $('.team__wrapper').slick({
                arrows: false,
                dots: true,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold: 100,
            })
        }
    }
}

function timetableSlider () {
    if ($(window).width() > 640 && $('.timetable__slider.slick-initialized').length === 0) {
        $('.timetable__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            touchThreshold: 100,
        })
    } else if ($(window).width() <= 640 && $('.timetable__slider.slick-initialized').length > 0) {
        $('.timetable__slider').slick('unslick')
    }
}

function initMap() {
    const coordinates = {lat: 55.72205045934391, lng: 37.633825298674395}

    const map = new google.maps.Map(document.getElementById("google-map"), {
        center: coordinates,
        zoom: 16,
        disableDefaultUI: true
    });

    const image = 'img/map_pin.svg'

    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: image
    });

    const styles = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ]

    map.setOptions({ styles })
}