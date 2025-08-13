document.querySelector('.form-btn').addEventListener('click', () => {

  const input = document.querySelector('.email');
  const err = document.querySelector('.err-hidden');
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(regex.test(input.value.trim()) === false){
    err.style.display = 'flex';
    input.style.border = '1px solid var(--red400)';
  } else {
    alert('Your Email so sexual!');
    err.style.display = 'none';
    input.style.border = '1px solid var(--blue200)';
    input.value = '';
  }
});