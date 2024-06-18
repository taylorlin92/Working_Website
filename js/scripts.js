const burger = document.querySelector('.burger'); // 選取漢堡圖示元素
const nav = document.querySelector('.nav-links'); // 選取導航連結容器
const navLinks = document.querySelectorAll('.nav-links li'); // 選取所有導航連結列表項目
const header = document.querySelector('header'); // 選取頁首元素
const logo = document.querySelector('.logo img'); // 選取 logo 圖片元素

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

    burger.classList.toggle('toggle'); // 切換漢堡圖示的樣式，讓其變成叉叉
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


