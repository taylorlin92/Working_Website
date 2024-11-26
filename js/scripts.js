document.addEventListener('DOMContentLoaded', () => {
    // 選取 DOM 元素
    const burger = document.querySelector('.navbar-toggler');
    const nav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav li');
    const header = document.querySelector('.navbar');
    const logo = document.querySelector('#header-logo');

    // LOGO 滾動動畫
    const handleScroll = () => {
        if (header && logo) {
            const isScrolled = window.scrollY > 50;
            header.classList.toggle('scrolled', isScrolled);
            logo.style.opacity = isScrolled ? '1' : '0';
            logo.style.visibility = isScrolled ? 'visible' : 'hidden';
        }
    };
    window.addEventListener('scroll', handleScroll);

    // 漢堡選單切換
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            navLinks.forEach((link, index) => {
                link.style.animation = link.style.animation
                    ? ''
                    : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            });
        });
    }

    // 平滑滾動
    const smoothScroll = (selector, navbarHeight = 100) => {
        document.querySelectorAll(selector).forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const fullHref = anchor.getAttribute('href');
                const [pagePath, targetId] = fullHref.split('#');

                if (pagePath && targetId) {
                    const newUrl = `${pagePath}?scrollTo=${targetId}`;
                    window.location.href = newUrl;
                } else if (targetId) {
                    const targetElement = document.querySelector(`#${targetId}`);
                    if (targetElement) {
                        const offsetPosition =
                            targetElement.getBoundingClientRect().top +
                            window.pageYOffset -
                            navbarHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                }
            });
        });
    };

    // 綁定平滑滾動功能
    smoothScroll('.dropdown-item');
    smoothScroll('.carousel-link');
    smoothScroll('.site-nav');
    smoothScroll('.site-nav1');

    // 禁止右鍵及拖放圖片
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    // jQuery 支援的功能
    (function ($) {
        "use strict";

        // 漢堡選單點擊後關閉選單
        $('.navbar-collapse a').on('click', () => {
            $('.navbar-collapse').collapse('hide');
        });

        // 平滑滾動
        $('.smoothscroll').click(function () {
            const el = $(this).attr('href');
            const elWrapped = $(el);
            const headerHeight = $('.navbar').height() + 60;

            scrollToDiv(elWrapped, headerHeight);
            return false;

            function scrollToDiv(element, navHeight) {
                const offset = element.offset();
                const totalScroll = offset.top - navHeight;

                $('body,html').animate({ scrollTop: totalScroll }, 200);
            }
        });
    })(window.jQuery);
});

