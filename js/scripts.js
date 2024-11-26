document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-toggler'); // 選取漢堡圖示元素
    const nav = document.querySelector('.navbar-nav'); // 選取導航連結容器
    const navLinks = document.querySelectorAll('.navbar-nav li'); // 選取所有導航連結列表項目
    const header = document.querySelector('.navbar'); // 選取頁首元素
    const logo = document.querySelector('#header-logo'); // 選取 logo 圖片元素


    // 確保 LOGO 動畫滾動功能有效
    if (header && logo) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled'); // 如果滾動距離超過50px，添加scrolled類別
                logo.style.opacity = '1'; // 顯示 logo
                logo.style.visibility = 'visible'; // 設置 logo 為可見
            } else {
                header.classList.remove('scrolled'); // 如果滾動距離小於50px，移除scrolled類別
                logo.style.opacity = '0'; // 隱藏 logo
                logo.style.visibility = 'hidden'; // 設置 logo 為隱藏
            }
        });
    }
    // 點擊漢堡圖示時的事件處理
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // 平滑滾動到指定部分
    document.querySelectorAll('.site-nav').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // 移除選中樣式
            document.querySelectorAll('.site-nav').forEach(link => {
                link.classList.remove('active');
            });

            // 添加選中樣式
            this.classList.add('active');

            // 滾動到目標位置
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // 檢查目標元素是否存在
            if (targetElement) {
                const navbarHeight = 100; // 使用有效的數字
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    //Photo_Page頁面的side-bar要平滑跳去product.html的指定地方
    document.querySelectorAll('.site-nav1').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

        const fullHref = this.getAttribute('href'); // 取得完整的 href
        const [pagePath, targetId] = fullHref.split('#'); // 分離頁面與 ID 部分
        const currentPath = window.location.pathname.split('/').pop(); // 當前頁面

        if (pagePath && currentPath !== pagePath) {
        // 如果不在同一頁面，跳轉到目標頁面
            window.location.href = fullHref;
        } else {
            // 如果在同一頁面，平滑滾動到目標
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const navbarHeight = 100; // 調整為你的 navbar 高度
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
            });
        }
    }
});
});

    // 使用 jQuery 實現其他邏輯
    (function ($) {
        "use strict";
      
        // NAVBAR
        $('.navbar-collapse a').on('click', function () {
            $(".navbar-collapse").collapse('hide');
        });

        // 自定義平滑滾動邏輯
        $('.smoothscroll').click(function () {
            var el = $(this).attr('href');
            var elWrapped = $(el);
            var header_height = $('.navbar').height() + 60;

            scrollToDiv(elWrapped, header_height);
            return false;

            function scrollToDiv(element, navheight) {
                var offset = element.offset();
                var offsetTop = offset.top;
                var totalScroll = offsetTop - navheight;

                $('body,html').animate({
                    scrollTop: totalScroll
                }, 200);
            }
        });
    })(window.jQuery);
});
