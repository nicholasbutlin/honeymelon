document.addEventListener('DOMContentLoaded', ()=>{
  // set year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // modal logic
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.querySelector('.modal .close');

  function openModal(html){
    modalContent.innerHTML = html;
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalContent.innerHTML = '';
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });

  // character views
  document.querySelectorAll('.card .view').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const name = e.currentTarget.dataset.character;
      const html = `<h3>${name}</h3><p class="small">Short bio for ${name}. Check the latest merch inspired by this character — tees, hoodies and stickers.</p><div style="margin-top:12px"><a class="btn primary" href="#">Shop ${name}</a></div>`;
      openModal(html);
    })
  });

  // signup form handler (client-only mock)
  const form = document.getElementById('signupForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = form.email.value;
    openModal(`<h3>Thanks!</h3><p class="small">We'll send a confirmation to <strong>${email}</strong>. Parent verification required.</p>`);
    form.reset();
  });
});
