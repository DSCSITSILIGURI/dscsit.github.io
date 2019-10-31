function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("main-nav").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementsByClassName("nav-logo")[0].style.height = "65px";
        document.getElementsByClassName("nav-text")[0].style.fontSize = "1.50rem";
        document.getElementById("scroll-up-button").classList.add("scale-in");
    } else {
        document.getElementById("main-nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementsByClassName("nav-logo")[0].style.height = "85px";
        document.getElementsByClassName("nav-text")[0].style.fontSize = "2.00rem";
        document.getElementById("scroll-up-button").classList.remove("scale-in");
    }
}

$(window).on('load', function () {
    $(window).scrollTop(0);
    setTimeout(() => {
        // $('#preloader').fadeOut('slow');
        $('#preloader').slideUp();
    }, 1000)
});

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {});
});


$(document).ready(function () {
    $('.sidenav').sidenav();
    $("#scroll-up-button").on('click', function (event) {
        $(window).scrollTop(0);
    });
    $('.slider').slider();
    let flag = 0;
    let flag1 = 0;
    let flag2 = 0;
    let flag3 = 0;
    let flag4 = 0;
    let flag5 = 0;
    let flag6 = 0;
    const front_img_one = $('#front-img-1');
    const front_img_two = $('#front-img-2');
    const back_img_one = $('#back-img-1');
    const back_img_two = $('#back-img-2');
    const domain_title = $('#domain-title');
    const domain_card = $('#domain-card');
    const pin1 = $('#pin1');

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 3000})
        .setPin("#pin1")
        // .addIndicators({name: "1 (duration: 3000)"}) // add indicators (requires plugin)
        .addTo(controller)
        .on("progress", function (e) {
            let scrollDirection = e.target.controller().info("scrollDirection");
            let progress = e.progress.toFixed(3);
            if (progress < 0.050 && scrollDirection === 'FORWARD') {
                if (flag === 0) {
                    flag = 1;
                    M.Toast.dismissAll();
                    M.toast({html: 'Designing'}, 500);
                }
            }
            if (progress < 0.166 && progress > 0.050 && scrollDirection === 'FORWARD') {
                if (flag1 === 0) {
                    flag1 = 1;
                    temp2();
                    setTimeout(() => {
                        M.Toast.dismissAll();
                        M.toast({html: 'Frontend Development'});
                        console.log('DESING DOWN');
                        front_img_one.hide();
                    }, 500);
                }
            }
            if (progress < 0.200 && scrollDirection === 'REVERSE') {
                if (flag1 === 1) {
                    flag1 = 0;
                    M.Toast.dismissAll();
                    M.toast({html: 'Designing'});
                    console.log('DESIGN UP');
                    front_img_one.show();
                    temp();
                }
            }
            if (progress > 0.200 && progress < 0.400 && scrollDirection === 'FORWARD') {
                if (flag2 === 0) {
                    flag2 = 1;
                    temp();
                    setTimeout(() => {
                        M.Toast.dismissAll();
                        M.toast({html: 'Mobile Development'});
                        console.log('FRONTEND DOWN');
                        back_img_one.hide();
                    }, 500);
                }
            }
            if (progress > 0.200 && progress < 0.400 && scrollDirection === 'REVERSE') {
                if (flag2 === 1) {
                    flag2 = 0;
                    M.Toast.dismissAll();
                    M.toast({html: 'Frontend Development'});
                    console.log('FRONTEND UP');
                    back_img_one.show();
                    temp2();
                }
            }
            if (progress > 0.400 && progress < 0.600 && scrollDirection === 'FORWARD') {
                if (flag3 === 0) {
                    flag3 = 1;
                    temp2();
                    setTimeout(() => {
                        M.Toast.dismissAll();
                        M.toast({html: 'Backend Development'});
                        console.log('ANDROID DOWN');
                        front_img_two.hide();
                    }, 500);
                }
            }
            if (progress > 0.400 && progress < 0.600 && scrollDirection === 'REVERSE') {
                if (flag3 === 1) {
                    flag3 = 0;
                    M.Toast.dismissAll();
                    M.toast({html: 'Mobile Development'});
                    console.log('ANDROID UP');
                    front_img_two.show();
                    temp();
                }
            }
            if (progress > 0.600 && progress < 0.800 && scrollDirection === 'FORWARD') {
                if (flag4 === 0) {
                    flag4 = 1;
                    temp();
                    setTimeout(() => {
                        M.Toast.dismissAll();
                        M.toast({html: 'Cloud Development'});
                        console.log('BACKEND DOWN');
                        back_img_two.hide();
                    }, 500);
                }

            }
            if (progress > 0.600 && progress < 0.800 && scrollDirection === 'REVERSE') {
                if (flag4 === 1) {
                    flag4 = 0;
                    M.Toast.dismissAll();
                    M.toast({html: 'Backend Development'});
                    console.log('BACKEND UP');
                    back_img_two.show();
                    temp2();
                }
            }
            if (progress > 0.800 && progress < 1.000 && scrollDirection === 'FORWARD') {
                if (flag5 === 0) {
                    flag5 = 1;
                    M.Toast.dismissAll();
                    M.toast({html: 'Machine Learning / AI'});
                    temp2();
                }
            }
            if (progress > 0.800 && progress < 1.000 && scrollDirection === 'REVERSE') {
                if (flag5 === 1) {
                    flag5 = 0;
                    M.Toast.dismissAll();
                    M.toast({html: 'Cloud Development'});
                    temp();
                }
            }
        }).on("start end", function (e) {
            if (e.type === 'end') {
                front_img_one.hide();
                front_img_two.hide();
                back_img_one.hide();
                back_img_two.hide();
            }
        });

    // var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 200})
    //     .addTo(controller)
    //     .addIndicators({name: "Trigger Action"}) // add indicators (requires plugin)
    //     .on("update", function (e) {
    //         $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
    //     })
    //     .on("enter leave", function (e) {
    //         console.log(e.type);
    //         temp();
    //     })
    //     .on("start end", function (e) {
    //         $("#lastHit").text(e.type == "start" ? "top" : "bottom");
    //     })
    //     .on("progress", function (e) {
    //         $("#progress").text(e.progress.toFixed(3));
    //     });
});

function temp() {
    console.log('temp');
    TweenMax.to("#mask", 0.5, {
        attr: {
            x: "0%"
        },
        repeat: 0,
        repeatDelay: 0,
        ease: Power2.easeInOut
    });
}

function temp2() {
    console.log('temp2');
    TweenMax.to("#mask", 0.5, {
        attr: {
            x: "100%"
        },
        ease: Power2.easeInOut
    });
}

window.onscroll = function () {
    scrollFunction()
};
