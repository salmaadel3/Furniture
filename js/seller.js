let loader = document.querySelector('.loader');
let applybtn = document.querySelector('.apply-btn');

applybtn.addEventListener('click',()=>{
   let businessname = document.querySelector('#name').value;
   let about = document.querySelector('#about').value;
   let number = document.querySelector('#number').value;
   let address = document.querySelector('#address').value;
   if(!businessname.length || !address.length || !about.length || !Number(number) || number<11){
    showFormError('Some information(s) is/are incorrect');
   }else{
    loader.style.display='block';
   }
})