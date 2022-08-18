// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
     var x = e.clientX;
     var y = e.clientY;
     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
     var x = e.clientX;
     var y = e.clientY;
     cursorinner.style.left = x + 'px';
     cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
     cursor.classList.add('click');
     cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
     cursor.classList.remove('click')
     cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
     item.addEventListener('mouseover', () => {
          cursor.classList.add('hover');
     });
     item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
     });
})





// ============================ aside ===============================

// const nav = document.querySelector(".nav_menu"),
//      navList = nav.querySelectorAll('li'),
//      totalNavList = navList.lenght;
// for (let i = 0; i < totalNavList; i++) {
//      const a = navList[i].querySelector("a")
//      a.addEventListener("click", function () {
//           for (let j = 0; j < totalNavList; j++) {
//                navList[j].querySelector("a").classList.remove("active");
//           }
//           this.classList.add("active");
//      })
// }
$(document).ready(function () {
     $('.tab_a').click(function () {
          $(".section").removeClass('active_sec');
          $(".section[data-id='" + $(this).attr('data-id') + "']").addClass("active_sec");
          $(".tab_a").removeClass('active_class');
          $(this).parent().find(".tab_a").addClass('active_class');
     });
});



// ============================ aside ===============================

$(".typing").typed({
     strings: ["Web Designer", "Graphic Designer"],
     typeSpeed: 100,
     startDelay: 0,
     backSpeed: 60,
     backDelay: 1000,
     loop: true,
     cursorChar: "|",
     contentType: 'html'
});


// form submit 

const scriptURL = 'https://script.google.com/macros/s/AKfycbzsO_wTFbCPDYBAL2zPqX_MUJKlnj7fCL1x-u6OZCq03wzIizMducKXvsXFc_Y6DI7VLQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => $("#form_alerts").html("<div class='alert alert-success'>contact message send successfully.</div>"))
          .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>contact message not send.</div>"))
})
// resat btn

let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', (e) => {
     let name = document.getElementById('name');
     let email = document.getElementById('email');
     let massage = document.getElementById('massage');

     // set value 
     name.value = '';
     email.value = '';
     massage.value = '';

});

$(document).ready(function () {
     $(".nav-toggler").click(function () {
          $(this).toggleClass("is-active");
     });
});


// HAMBURGER MENU
"use strict";
let sidebar = document.querySelector(".aside");
let hamburger = document.querySelector(".nav-toggler");

hamburger.addEventListener('click', () => {
     sidebar.classList.toggle('active_sidebar');
})