document.querySelector('.loader__title').style.display = 'none';
document.querySelector('.loader__text').style.display = 'none';
document.querySelector('.loader__button').style.display = 'none';

setTimeout(() => {
  document.querySelector('.loader__title').style.display = 'block';
  document.querySelector('.loader__text').style.display = 'block';
  document.querySelector('.loader__button').style.display = 'flex';
}, 3000);