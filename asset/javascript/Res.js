    // index
    !(function ($) {
        'use strict';
        $('#listslide .owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false,
            nav: false,
            // navText: ["<i class='slide__icon po--left fas fa-chevron-left'></i>", "<i class='slide__icon po--right fas fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,

                },
                739: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            }
        })
        $('#listcmt .owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            nav: false,

            responsive: {
                0: {
                    items: 1,

                },
                739: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        })
        $('#cheft-mobile .owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            nav: false,

            responsive: {
                0: {
                    items: 1,

                }
            }
        })

        document.addEventListener("DOMContentLoaded", function () {
            var menu = document.querySelectorAll('.nav__pc');
            var menu = menu[0];
            //Truy xuất div menu
            var trangthai = "duoi300";
            window.addEventListener("scroll", function () {
                var x = pageYOffset;
                if (x > 600) {
                    if (trangthai == "duoi300") {
                        trangthai = "tren300";
                        menu.classList.add('nav__pc-scoll');
                    }
                } else {
                    if (trangthai == "tren300") {
                        menu.classList.remove('nav__pc-scoll');
                        trangthai = "duoi300";
                    }
                }

            })
        })

        const read = document.querySelector.bind(document);
        const read1 = document.querySelectorAll.bind(document);

        const tabs = read1(".tab-item");
        const panes = read1(".tab-pane");

        const tabActive = $(".tab-item.active");

        tabs.forEach((tab, index) => {
            const pane = panes[index];

            tab.onclick = function () {
                read(".tab-item.active").classList.remove("active");
                read(".tab-pane.active").classList.remove("active");

                this.classList.add("active");
                pane.classList.add("active");
            };
        });
    })(jQuery);