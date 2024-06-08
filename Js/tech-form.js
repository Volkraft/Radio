(function () {
const tech = document.querySelector(`#shadow-block-form`);

const form = document.querySelector('#support');

const formArr = Array.from(form);

const validFormArr = [];


formArr.forEach((el) => {

   if (el.hasAttribute("data-reg")) {

      el.setAttribute("is-valid", "0");

      validFormArr.push(el);

   }
});


form.addEventListener("input", inputHandler);


form.addEventListener("submit", formCheck);


function inputHandler({ target }) {

   if (target.hasAttribute("data-reg")) {

      inputCheck(target);

   }
}

function inputCheck(el) {

   const inputValue = el.value;

   const inputReg = el.getAttribute("data-reg");

   const reg = new RegExp(inputReg);


   if (reg.test(inputValue)) {

      el.setAttribute("is-valid", "1");

      el.style.boxShadow = "0px 0px 10px rgb(0, 196, 0)";

   } else {

      el.setAttribute("is-valid", "0");
      el.style.boxShadow = "0px 0px 10px rgb(255, 0, 0)";
   }
}

function formCheck(e) {

   e.preventDefault();

   const allValid = [];

   validFormArr.forEach((el) => {

      allValid.push(el.getAttribute("is-valid"));

   });

   const isAllValid = allValid.reduce((acc, current) => {

      return acc & current;

   });

   if (!Boolean(Number(isAllValid))) {
      alert('заполните поля правильно!');
      return;

   }

   formSubmit();
}

async function formSubmit() {

   const data = serializeForm(form);

   const response = await sendData(data);

   if (response.ok) {
      let result = await response.json();
      alert(result.message);
      formReset();
   } else {
      alert('ошибка!');
   }
}

function serializeForm(formNode) {
   return new FormData(form);
}

async function sendData(data) {
   return await fetch('sendmail.php', {
      method: 'POST',
      body: data,
   });
}

function formReset() {
       form.reset();
    tech.classList.add('hidden');
   validFormArr.forEach((el) => {
      el.setAttribute('is-valide', 0);
      el.style.boxShadow = 'none';
   });
}
})();