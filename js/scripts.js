const menu = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const loginButton = document.querySelector('#entrar');
const loginBox = document.querySelector('#login-box');
const loginForm = document.querySelector('#logar');
const contactForm = document.querySelector('#form-contact');

window.onresize = function (e) {
  let width = window.innerWidth;
  if (width <= 660) {
    //mobile
    if (menu.classList.contains('menu-mobile')) {
      document.getElementById('menu').style.display = 'grid';
      document.getElementById('close').style.display = 'block';
      document.getElementById('overlayer').style.display = 'block';
    } else {
      menu.classList.remove('menu-mobile');
      document.getElementById('menu').style.display = 'none';
      document.getElementById('close').style.display = 'none';
      document.getElementById('overlayer').style.display = 'none';
    }
  } else {
    //desktop
    menu.classList.remove('menu-mobile');
    document.getElementById('menu').style.display = 'grid';
    document.getElementById('close').style.display = 'none';
    document.getElementById('overlayer').style.display = 'none';
  }
};

openMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.add('menu-mobile');
  document.getElementById('menu').style.display = 'grid';
  document.getElementById('close').style.display = 'block';
  document.getElementById('overlayer').style.display = 'block';
});

closeMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('menu-mobile');
  document.getElementById('menu').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('overlayer').style.display = 'none';
});

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (loginBox.classList.contains('show')) {
    loginBox.classList.remove('show');
  } else {
    loginBox.classList.add('show');
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Evento de login...');
  document.querySelector("input[name='login']").value = '';
  document.querySelector("input[name='senha']").value = '';
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Envio de formulário!');
  document.querySelector("input[name='nome']").value = '';
  document.querySelector("input[name='email']").value = '';
  document.querySelector("input[name='nascimento']").value = '';
  document.querySelector("textarea[name='mensagem']").value = '';
});
