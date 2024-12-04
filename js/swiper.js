    // var swiper = new Swiper(".availableSwiper", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
       
    // });

    // var swiper = new Swiper(".availableSwiper", {
    //     slidesPerView: 3, // Настройки по умолчанию для больших экранов
    //     spaceBetween: 30, // Пространство между слайдами
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     loop: false, // Отключаем бесконечную прокрутку
    //     breakpoints: {
    //         674: {
    //             slidesPerView: 1, // Если экран <= 674px, показывать только 1 слайд
    //         },
    //         668:{
    //             slidesPerView: 1, // Если экран <= 674px, показывать только 1 слайд

    //         }
    //     },
    // });
    
    var swiper = new Swiper(".availableSwiper", {
        slidesPerView: 3, // Настройки по умолчанию
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: false, 
        breakpoints: {

            1208: {
                slidesPerView: 3, 
            },
            874: {
                slidesPerView: 2, 
            },
            803: {
                slidesPerView: 2, 
            },
            736: {
                slidesPerView: 1, 
            },
            
            674: {
                slidesPerView: 1, 
            },
            673: {
                slidesPerView: 1, 
            },
            600: {
                slidesPerView: 1, 
            },
            500: {
                slidesPerView: 1, 
            },
            400: {
                slidesPerView: 1, 
              }, 
            350: {
                slidesPerView: 1, 
              } ,
            300: {
                slidesPerView: 1, 
              } 
             },
        },
    );
    
    // Обновляем Swiper при ресайзе окна
    window.addEventListener("resize", () => {
        swiper.update(); // Обновляет размеры слайдов
    });
    
    
    