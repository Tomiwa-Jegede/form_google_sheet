const formelement = document.querySelector('form');
formelement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formdata = new FormData(formelement);
  fetch('https://script.google.com/macros/s/AKfycbwV0AdvTHLxRsSAZb_7g8LqhXSsQ0IN1KBifhnr7hI350pG3oiwaJZ4xc3Aw5dKjaWm9g/exec', {
    method: 'POST',
    body: formdata
  })
    .then(response => {
      if (response.ok) {
        alert('Form has been sent successfully');
      }
      else {
        throw new Error('Failed to send form');
      };
    })
    .catch(error => {
      console.log('it has faild to send form', error);
    })
  formelement.reset();
});