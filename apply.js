

// This is when you click il right
  document.addEventListener("DOMContentLoaded", function() {
        ['personalLoan', 'homeLoan', 'carLoan'].forEach(function(id) {
          document.getElementById(id).addEventListener("click", function() {
            setActiveTab(id);
          });
        });
      });
      
    function setActiveTab(tabId) {
        // إزالة النشاط من جميع الروابط
        var tabs = document.querySelectorAll(".box-right-li");
        tabs.forEach(function(tab) {
          tab.style.backgroundColor = "#d9dbdc";
        });
        document.getElementById(tabId).style.backgroundColor = "#5bb8e6";
      }



// This is when you click il left

// left

  document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fadeIn');

    fadeInElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
      }, 500 * index);
    });
  });



  let tabs = document.querySelectorAll(".box-left-li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("box-left-li-active");
    });
    e.currentTarget.classList.add("box-left-li-active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});





  