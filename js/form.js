let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click',()=>{
    let fullname = document.querySelector('#name')|| null;
    let email = document.querySelector('#email');
    let number = document.querySelector('#number')||null;
    let password = document.querySelector('#password');
    let tc = document.querySelector('#tc')||null;
    if(fullname != null){
        if(fullname.value.length<3){
            showFormError('name must be 8 letters long');
        }else if(!email.value.length){
            showFormError('Please enter your mail');
        }else if(Number(number) || number.value.length < 8){
            showFormError('number must be 11 numbers long');
        }else if(password.value.length<8){
            showFormError('invalid password ! password must be 10 numbers long');
        }else if(!tc.checked){
            showFormError('you must agree to our terms and conditions');
        }else{
            loader.style.disple='block';
        }
    }else{
        if(!email.value.length || !password.value.length){
            showFormError('fill all the inputs!')
        }
    }
})