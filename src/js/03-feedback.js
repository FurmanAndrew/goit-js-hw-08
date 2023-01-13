import  throttle  from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textArea: document.querySelector('.feedback-form textarea'),
    emailUser: document.querySelector('.feedback-form input'),
};
const FEEDBACK_FORM = "feedback-form-state";
let formData = {};

onLoadedData();
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormInput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData))
    
    console.log(formData);
};


function onLoadedData() {
    const saveFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    if (saveFormData) {
        
        refs.textArea.value = saveFormData.message || '';
        refs.emailUser.value = saveFormData.email || '';
        Object.entries(saveFormData).forEach(([name, value]) => formData[name] = value);
    };

};
 

function onFormSubmit(e) {
    if (refs.textArea.value !== '' && refs.emailUser.value !== '') {
        e.preventDefault();
        console.log('Submit:', formData); 
        e.target.reset();
        localStorage.removeItem(FEEDBACK_FORM);
        formData = {};
        return
    }
    e.preventDefault();
    console.log('Enter your fidback!')
    return

};
    
console.log(formData);
