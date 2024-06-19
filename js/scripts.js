(function ($) {
    "use strict";
  
    // NAVBAR
    $('.navbar-collapse a').on('click', function () {
      $(".navbar-collapse").collapse('hide');
    });

    $(document).ready(function () {
        var lastScrollTop = 0;
        $(window).scroll(function () {
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
            // 向下滚动
            $('.navbar').addClass('hidden');
          } else {
            // 向上滚动
            $('.navbar').removeClass('hidden').addClass('navbar-logo-only');
          }
          lastScrollTop = st;
        });
  
        // 初始化时显示 LOGO 和汉堡菜单
        $('.navbar').addClass('navbar-logo-only');
      });



//home page next section
document.querySelectorAll('.filter-menu button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-menu .active').classList.remove('active');
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        const gridContainer = document.querySelector('.grid_container');
        gridContainer.className = 'grid_container ' + filter;
    });
});




//footer
document.addEventListener('DOMContentLoaded', (event) => {
    const year = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = `&copy; ${year} Taylor Co., Ltd. All rights reserved.`;
});
})(window.jQuery);

