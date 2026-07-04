
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    const modal=document.querySelector('.modal');
    modal.querySelector('img').src=img.src;
    modal.querySelector('img').alt=img.alt;
    modal.classList.add('open');
  });
});
document.querySelector('.modal button').addEventListener('click',()=>document.querySelector('.modal').classList.remove('open'));
document.querySelector('.modal').addEventListener('click',(e)=>{ if(e.target.classList.contains('modal')) e.target.classList.remove('open'); });
