!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1;setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(){a.disabled=!0,e.disabled=!1,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.44c4e072.js.map
