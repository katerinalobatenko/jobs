    $(document).ready(function(){
        $('.icon-menu').click(function () {
            $(this).toggleClass('menu-toggle-forward');
            $('.sidebar').toggle('slide', { direction: "right" }, 1000);
        });
    });

