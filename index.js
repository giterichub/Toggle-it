var checkbox = document.querySelector('#checkbox');
var change1 = document.querySelector('body .fa-moon');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

function myFunction(){
  change1.style.transition = "none";
}
function whyFunction(){
  change1.style.transition= "1s";
}
