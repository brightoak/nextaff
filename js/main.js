"use strict";var sections=document.querySelectorAll(".js-flyin");function inView(){window.innerWidth>768&&sections.forEach(function(e){inViewport(e,{offset:-300})&&e.classList.add("js-inview")})}sections.length>0&&(inView(),window.onscroll=function(){inView()});var scroll=new SmoothScroll,smoothScrollWithoutHash=function(e,t){window.addEventListener("click",function(a){var o=a.target.closest(e);if(o&&"a"===o.tagName.toLowerCase()){var s=document.querySelector(o.hash);s&&(a.preventDefault(),scroll.animateScroll(s,o,t||{}))}},!1)};smoothScrollWithoutHash('a.scrollto[href*="#"]',{header:"#header"});var header=document.getElementById("header");if(header){var headroom=new Headroom(header);headroom.init()}customSelect(".custom-select");var slider=tns({container:"#steps-slides",navContainer:"#steps-navigation",autoplay:!1,autoHeight:!0}),tabset=document.getElementById("faqs-tabs");if(tabset){var tabsEls=tabset.querySelectorAll("li"),tabs=document.querySelectorAll("#faqs .tab");tabsEls.forEach(function(e){var t=e.querySelector("a");t.onclick=function(e){e.preventDefault();var a=t.parentNode;if(!a.classList.contains("js-active")){tabset.querySelector(".js-active").classList.remove("js-active"),a.classList.add("js-active");var o=t.getAttribute("href"),s=document.querySelector('#faqs .tab[data-attr="'+o+'"]');tabs.forEach(function(e,t){e.classList.contains("js-active")&&e.classList.remove("js-active"),t+1>o&&e.setAttribute("data-direction","right"),t+1<o&&e.setAttribute("data-direction","left")}),s.classList.add("js-active")}}});var openers=document.querySelectorAll(".tabs-holder .opener");openers.forEach(function(e){e.onclick=function(){e.parentNode.classList.toggle("js-opened")}})}MediaBox(".mediabox");