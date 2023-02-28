import { modalSet } from "./modal";


const submitForm = document.getElementById('submit');
const modalWindow = document.querySelector('.modal');



const sendPost = async (data) => {
    console.log('send');
  return fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST', postData: data }).then(res => {
    return res;
  })
}
const startModal = () => {
    modalWindow.style.visibility = 'visible';
    modalWindow.style.opacity = '1';
};

const onFormSubmit = async (event, startModal) => {
  const { message } = event.target.elements;

  const response = await sendPost(message.value)
//   document.forms.submit.onsubmit = function() {
//     let message = this.message.value;          
//    };

  if (response.ok) {
    startModal()
  }
}

submitForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await onFormSubmit(event, startModal);
})

