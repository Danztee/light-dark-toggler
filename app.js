const btn = document.querySelector('.btn');
const text = document.querySelector('.container h2');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    text.innerHTML = "Yo! you're in Dark Mode";
    btn.style.color = '#fff';
    btn.style.border = '2px solid white';
  } else if (!document.body.classList.contains('dark')) {
    text.innerHTML = "Yo! you're in Light Mode";
    btn.style.color = 'black';
    btn.style.border = '2px solid black';
  }
});
