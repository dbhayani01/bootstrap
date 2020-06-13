$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    //task 2 adding javascript for reserve table modal
    $("#myBtn").click(function () {
        $("#reservetable").modal();
    });
    $("#myBtncls").click(function () {
        $("#reservetable").modal("hide");
    });
    //task 3 adding javascript for login modal
    $("#login").click(function () {
        $("#loginModal").modal();
    });
    $("#logincls").click(function () {
        $("#loginModal").modal("hide");
    });
});