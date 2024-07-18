const burger = document.querySelector('.navbar-toggler'); // 選取漢堡圖示元素
const nav = document.querySelector('.navbar-nav'); // 選取導航連結容器
const navLinks = document.querySelectorAll('.navbar-nav li'); // 選取所有導航連結列表項目
const header = document.querySelectorAll('.navbar'); // 選取頁首元素
const logo = document.getElementById('header-logo'); // 選取 logo 圖片元素

(function ($) {
    "use strict";
  
    // NAVBAR
    $('.navbar-collapse a').on('click', function () {
      $(".navbar-collapse").collapse('hide');
    });

    // 點擊漢堡圖示時的事件處理
    burger.addEventListener('click', () => {
        nav.classList.toggle('active'); // 切換導航連結容器的顯示狀態

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''; // 如果有動畫，則清除動畫
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; // 設置動畫效果
            }
        });
    });

    // 滾動頁面時的事件處理
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // 如果滾動距離超過50px，添加scrolled類別
            logo.style.opacity = 1; // 顯示 logo
            logo.style.visibility = 'visible'; // 設置 logo 為可見
        } else {
            header.classList.remove('scrolled'); // 如果滾動距離小於50px，移除scrolled類別
            logo.style.opacity = 0; // 隱藏 logo
            logo.style.visibility = 'hidden'; // 設置 logo 為隱藏
        }
    });

    // Overview isotope and filter
    $(document).ready(function() {
    // Initialize Isotope
        var $grid = $('.overview-container').isotope({
         itemSelector: '.overview-item',
            layoutMode: 'fitRows'
        });

    // Filter items on button click
    $('#overview-filters').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

    // Change active class
        $('#overview-filters li').removeClass('active');
        $(this).addClass('active');
        });
    });


    // CUSTOM LINK
    $('.smoothscroll').click(function(){
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height() + 60;

        scrollToDiv(elWrapped,header_height);
        return false;

        function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;

        $('body,html').animate({
        scrollTop: totalScroll
        }, 200);
        }
    });

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
            const navbarHeight = 100px;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
})(window.jQuery);