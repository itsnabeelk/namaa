
// STICKY
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});


    $(document).ready(function() {
        $('.selectpicker').selectpicker();

        $('#mySelect').on('change', function() {
            var selectedValue = $(this).val();
            if (selectedValue === 'placeholder') {
                $(this).val('');
            }
        });
    });
