document.addEventListener('DOMContentLoaded', function () {

    const menu_btn = document.querySelector('#menu_btn');
    const nav_links = document.querySelector('#nav_links');
    const menu_icon = document.querySelector('#menu_icon');

    menu_btn.addEventListener('click', function () {

        nav_links.classList.toggle('open');

        if (nav_links.classList.contains('open')) {
            menu_icon.classList.remove('fa-bars');
            menu_icon.classList.add('fa-xmark');
        } else {
            menu_icon.classList.remove('fa-xmark');
            menu_icon.classList.add('fa-bars');
        }
    });

    const search_toggle_btn = document.querySelector('#search_toggle_btn');
    const search_box = document.querySelector('#search_box');

    search_toggle_btn.addEventListener('click', function () {

        search_box.classList.toggle('open');

        if (search_box.classList.contains('open')) {
            document.querySelector('#search_input').focus();
        }
    });

    const all_links = document.querySelectorAll('.nav_link');

    all_links.forEach(function (link) {
        link.addEventListener('click', function () {

            all_links.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

});