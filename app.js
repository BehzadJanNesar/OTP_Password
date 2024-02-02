const input = document.querySelectorAll("#input");
let btn = document.querySelector("#btn");
let close = document.querySelector("#close");
let succsesPm = document.querySelector("#succses-pm");

input.forEach((element, index1) => {
   let nextElement = element.nextElementSibling;
   let prevElement = element.previousElementSibling;
   element.addEventListener("keyup", (e) => {
      if (element.value.length > 1) {
         element.value = "";
         return;
      }

      if (
         nextElement &&
         nextElement.hasAttribute("disabled") &&
         element.value !== ""
      ) {
         nextElement.removeAttribute("disabled");
         nextElement.focus();
         element.setAttribute("disabled", true);
      }

      if (e.key === "Backspace") {
         input.forEach((el, index2) => {
            if (index1 <= index2 && prevElement) {
               el.setAttribute("disabled", true);
               element.value = "";
               prevElement.removeAttribute("disabled");
               prevElement.focus();
            }
         });
      }
      if (!input[(0, 1, 2, 3)].disabled && input[(0, 1, 2, 3)].value !== "") {
         btn.classList.add("active");
         btn.removeAttribute("disabled");
         return;
      }
      btn.setAttribute("disabled", true);
      btn.classList.remove("active");
      succsesPm.classList.add("hide");
   });
});
btn.addEventListener("click", () => {
   succsesPm.classList.remove("hide");
   succsesPm.classList.add("show");
   setTimeout(() => {
      succsesPm.classList.add("hide");
   }, 5000);
});
close.addEventListener("click", () => {
   succsesPm.classList.add("hide");
});

window.addEventListener("load", () => input[0].focus());
