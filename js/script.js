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
    $('.header__search--submit').on('click', function (e) {
        if ($(window).width() <= 1050 && !$(this).next().hasClass('active')) {
            e.preventDefault()
            $(this).next().addClass('active')
            $(this).next().find('input').focus()
            $(window).scrollTop(0)
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
    let isNavClosing = false

    $('.nav__link').on('mouseover', function () {
        if($(window).width() > 1200) {
            $('.nav__dropdown').removeClass('active')
            $(this).parent().next().addClass('active')
            isNavClosing = false
        }
    })

    $('.nav__link').on('mouseleave', function () {
        if (!isNavClosing) {
            setTimeout(() => {
                if (isNavClosing) {
                    $(this).parent().next().removeClass('active')
                }
            }, 1000)
            isNavClosing = true
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
                $('.header, .nav, .main, .footer, .side-btns, .sticky-btns').addClass('blur')
            },
            destroy: () => {
                $('.header, .nav, .main, .footer, .side-btns, .sticky-btns').removeClass('blur')
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
    if ($('.licenses-page').length === 0) {
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
    }

    // Слайдер с видео
    if ($('.contacts-page').length === 0) {
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
    }

    Fancybox.bind("[data-fancybox='video']", {
        arrows: true,
        hideScrollbar: false,
        on: {
            ready: () => {
                $('.header, .nav, .main, .footer, .side-btns, .sticky-btns').addClass('blur')
            },
            destroy: () => {
                $('.header, .nav, .main, .footer, .side-btns, .sticky-btns').removeClass('blur')
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
    if ($('.promotion-page, .service-page').length > 0) {
        $('.team__wrapper').slick({
            arrows: false,
            dots: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 100,
        })
    }

    // Открытие/закрытие вкладок на странице с ценами
    $('.price__toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Открытие/закрытие подвкладок в расписании
    $('.timetable__person-toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Разворачивание/сворачивание отзывов на странице с отзывами
    $('.reviews-page__toggle').on('click', function () {
        $(this).parent().toggleClass('active')
    })

    // Слайдеры на странице услуги
    $('.service__main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.service__nav-slider'
    })

    $('.service__nav-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.service__main-slider',
        variableWidth: true,
        focusOnSelect: true
    })

    // Загрузка файла в форме
    $('.form__file input').on('change', function (e) {
        const fileSize = $(this)[0].files[0].size

        if (fileSize > 5000000) {
            e.preventDefault()
            alert('Слишком большой размер файла')
            return
        }

        $(this).parent().prev().addClass('active')

        $(this).parent().prev().text($(this)[0].files[0].name + ' ('
            + (fileSize / 1000000).toFixed(2) + 'Мб)')
    })

    // Маска телефона в форме
    $('input[name=phone]').each(function () {
        IMask($(this)[0], {mask: '+{7} (000) 000-00-00'})
    })

    // Открытие формы для записи к конкретному врачу
    $('.timetable__btn').on('click', function () {
        $('.header, .nav, .main, .footer, .sticky-btns, .side-btns').addClass('blur')
        $('.doctor-modal').addClass('active')
    })

    // Выбор свободной даты в модалке с записью
    const natDays = [
        [1, 26, 'free'], [1, 27, 'busy'], [1, 23, 'busy']
    ];

    function nationalDays(date) {
        for (i = 0; i < natDays.length; i++) {
            if (date.getMonth() == natDays[i][0] - 1
                && date.getDate() == natDays[i][1] && natDays[i][2] === 'free') {
                return [true, 'free-day'];
            } else if (date.getMonth() == natDays[i][0] - 1
                && date.getDate() == natDays[i][1] && natDays[i][2] === 'busy') {
                return [false, 'busy-day'];
            }
        }
        return [false, ''];
    }

    $( ".form__inline-datepicker" ).datepicker({
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['вс','пн','вт','ср','чт','пт','сб'],
        beforeShowDay: nationalDays
    })

    // Выбор даты в форме
    $( ".form__datepicker input" ).datepicker({
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['вс','пн','вт','ср','чт','пт','сб'],
    })

    // Выбор времени в форме записи
    $.widget( "ui.timespinner", $.ui.spinner, {
        options: {
            // seconds
            step: 30 * 60 * 1000,
            // hours
            page: 60
        },

        _parse: function( value ) {
            if ( typeof value === "string" ) {
                // already a timestamp
                if ( Number( value ) == value ) {
                    return Number( value );
                }
                return +Globalize.parseDate( value );
            }
            return value;
        },

        _format: function( value ) {
            return Globalize.format( new Date(value), "t" );
        }
    });

    Globalize.culture("ru-RU");
    $(".form__time-spinner").timespinner();

    // Выпадающее меню в форме
    $( ".form__select" ).selectmenu();

    // Открытие модалки "Оставить отзыв"
    $('.aside__add-review').on('click', function () {
        $('.header, .nav, .main, .footer, .sticky-btns, .side-btns').addClass('blur')
        $('.add-review-modal').addClass('active')
    })

    // Показ баннера в карточке услуги
    const serviceBannerEl = $('.service__banner')
    const servicePriceEl = $('.service__price')
    const serviceSectionEl = $('.service')

    // Прилипание баннера к экрану на странице услуги
    $(window).on('scroll', function () {
        if ($(this).width() > 1200 && serviceBannerEl.hasClass('active')) {
            const bannerTop = Math.floor(serviceBannerEl.offset().top)
            const bannerBottom = Math.floor(serviceBannerEl.offset().top + serviceBannerEl.outerHeight())
            const priceBottom = Math.floor(servicePriceEl.offset().top + servicePriceEl.outerHeight())
            const sectionBottom = Math.floor(serviceSectionEl.offset().top + serviceSectionEl.outerHeight())
            const windowBottom = Math.floor($(this).scrollTop() + $(this).height())

            if (bannerBottom + 4 <= windowBottom && bannerTop >= priceBottom + 4 || serviceBannerEl.hasClass('bottom')) {
                serviceBannerEl.addClass('fixed')
                serviceBannerEl.css('right', ($(window).width() - 1140) / 2)
            } else {
                serviceBannerEl.removeClass('fixed')
            }

            if (bannerBottom >= sectionBottom - 4 && windowBottom - 4 > sectionBottom) {
                serviceBannerEl.addClass('bottom')
            } else {
                serviceBannerEl.removeClass('bottom')
            }
        }
    })

    // Показ баннера на страницах с боковой панелью
    const stickyBannerEl = $('.sticky-banner')
    const asideFiltersEl = $('.aside__filters')
    const containerEl = $('.container.with-sidebar')

    if ($(window).width() > 1200 && stickyBannerEl.height()
        < containerEl.offset().top + containerEl.outerHeight() - asideFiltersEl.offset().top
        - asideFiltersEl.outerHeight() - 8) {
        stickyBannerEl.addClass('active')
    }

    // Прилипание баннера к экрану на страницах с сайдбаром
    $(window).on('scroll', function () {
        if ($(this).width() > 1200 && stickyBannerEl.hasClass('active')) {
            const bannerTop = Math.floor(stickyBannerEl.offset().top)
            const bannerBottom = Math.floor(stickyBannerEl.offset().top + stickyBannerEl.outerHeight())
            const filtersBottom = Math.floor(asideFiltersEl.offset().top + asideFiltersEl.outerHeight())
            const containerBottom = Math.floor(containerEl.offset().top + containerEl.outerHeight())
            const windowBottom = Math.floor($(this).scrollTop() + $(this).height())

            if (bannerBottom + 4 <= windowBottom && bannerTop >= filtersBottom + 4 || stickyBannerEl.hasClass('bottom')) {
                stickyBannerEl.addClass('fixed')
                stickyBannerEl.css('left', ($(window).width() - 1140) / 2)
            } else {
                stickyBannerEl.removeClass('fixed')
            }

            if (bannerBottom >= containerBottom - 4 && windowBottom - 4 > containerBottom) {
                stickyBannerEl.addClass('bottom')
            } else {
                stickyBannerEl.removeClass('bottom')
            }
        }
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