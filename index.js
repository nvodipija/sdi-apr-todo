const input = document.querySelector('#user-input');
const button = document.querySelector('#taskBtn');
const output = document.querySelector('#user-output');

button.addEventListener('click', () => {
  const userInputValue = input.value;
   if (userInputValue === "") return;
  /*output.innerHTML += `<li>${userInputValue}</li>`;*/


 const li = document.createElement('li');
  li.innerHTML = userInputValue;

 li.addEventListener('click', () => {
    li.style.textDecoration = "line-through"
    li.style.textDecorationThickness = "4px";

 li.addEventListener('dblclick', () => {
  li.remove();
 })
})
  output.appendChild(li);

   input.value = "";
 });