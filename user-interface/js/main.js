(function ($) {
    $(document).ready(function () {

        var date = new Date();
        var year = date.getFullYear();
        $("footer").append(document.createTextNode("Company ©" + " " + year));

        $("#application").multiselect();
        $("#dropdown").click(function () {
            $("#form-clans").show();
        });

        $("#form-clans").keyup(function (e) {
            if (e.keyCode == 13) {
                $(this).trigger("enter");
            }
        }).bind("enter", function () {
            $("#form-clans").hide();
        });

        $(window).resize(function () {
            if (($(window).width() >= 1000) && ($(window).width() <= 1365)) {
                $("#others-nav").css({"display":"block"});
            }
            else $("#nav").load("index.html #nav");
        });

        $('.toggle-link').click(function(e) {
            var $id = $('#user-menu-id');
            var x = this.offsetLeft;
            var y = this.offsetTop + 15;

            if ($id.css('display') != 'block') {
                $id.css({top: y + "px", left: x + "px"}).show();

                var firstClick = true;
                $(document).bind('click.myEvent', function(e) {
                    if (!firstClick && $(e.target).closest('#id').length == 0) {
                        $id.hide();
                        $(document).unbind('click.myEvent');
                    }
                    firstClick = false;
                });
            }
            e.preventDefault();
        });
    });
})(jQuery);