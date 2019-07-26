const paras = document.querySelectorAll('p');
console.log(paras); // NodeList [p,p,p,p,p,p,p,p]

/* Use forEach to cycle through paragraphs. Add a class="success" to paragraphs containing 'success',
or class="error" to paragraphs containing 'error' */

paras.forEach(p => {
  if (p.innerText.includes('success')) {
    p.classList.add('success');
  };
  if (p.innerText.includes('error')) {
    p.classList.add('error');
  }
});
