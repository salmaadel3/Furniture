const showFormError = (err)=>{
    let error = document.querySelector('.error');
    error.innerHTML=err;
    error.classList.add('show');
}