import throttle from 'lodash.throttle';
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

const inputEl = document.querySelector(`input`);
const text =  document.querySelector(`textarea`);
const form = document.querySelector(".feedback-form");
console.dir (inputEl)
form.addEventListener(`input`, throttle(onForm, 500));

function onForm (evt){
   const inputValue =  {
   email: inputEl.value,
   message: text.value
  };
   localStorage.setItem(`feedback-form-state`, JSON.stringify(inputValue));
}

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
function checking() {
const pars = JSON.parse(localStorage.getItem(`feedback-form-state`))
       if (pars){
            inputEl.value = pars.email;
            text.value = pars.message;
            console.log (pars.email)
            console.log (pars.message)
            } 
 else {inputEl.textContent = "";
                text.textContent = "";
            }}
            checking()
           
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
form.addEventListener(`submit`, onSubmit);

function onSubmit (event) {
     event.preventDefault();
     if (inputEl.value !== "" & text.value !== ""){
      console.log(JSON.parse(localStorage.getItem(`feedback-form-state`)))
event.currentTarget.reset();
localStorage.removeItem(`feedback-form-state`)
     } else {alert ("заповніть всі поля")}}
     // Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
