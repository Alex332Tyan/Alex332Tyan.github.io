// $(window).scroll(function() {

//     $(".section").each(function() {

//         var x = $(window).scrollTop() + $(window).height();
//         var y = $(this).offset().top + $(this).height() / 2;

//         if (x >= y) {
//             $(this).addClass('activeSec');

//         };

//     });


// });  



// var mainDiv0 = document.getElementById("mainDiv0")

// function myfunction1() {
//     mainDiv0.style.display = "block"
// }



// var mainDiv1 = document.getElementById("mainDiv1")

// function myfunction2() {
//     mainDiv1.style.display = "block"
// }




// var mainDiv2 = document.getElementById("mainDiv2")

// function myfunction3() {
//     mainDiv2.style.display = "block"
// }



// var mainDiv3 = document.getElementById("mainDiv3")

// function myfunction4() {
//     mainDiv3.style.display = "block"
// }




// var mainDiv4 = document.getElementById("mainDiv4")

// function myfunction5() {
//     mainDiv4.style.display = "block"
// }

// var mainDiv5 = document.getElementById("mainDiv5")

// function myfunction6() {
//     mainDiv5.style.display = "block"
// }

// var mainDiv6 = document.getElementById("mainDiv5")

// function myfunction7() {
//     mainDiv5.style.display = "block"
// }

// var mainDiv7 = document.getElementById("mainDiv5")

// function myfunction8() {
//     mainDiv7.style.display = "block"
// }

// var mainDiv9 = document.getElementById("mainDiv5")

// function myfunction9() {
//     mainDiv9.style.display = "block"
// }

// var mainDiv5 = document.getElementById("mainDiv5")

// function myfunction6() {
//     mainDiv5.style.display = "block"
// }


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

