(() => {
  const apiKey = '';
  const listId = 2;
  const apiUrl = 'https://api.brevo.com/v3/contacts';

  const input = document.getElementById('newsletter-input');
  const button = document.getElementById('newsletter-button');

  const messageBox = document.getElementById('newsletter-message');

  if (!(input instanceof HTMLInputElement)) throw new Error('Newsletter Input is required as HTMLInputElement');
  if (!(button instanceof HTMLButtonElement)) throw new Error('Newsletter Button is required as HTMLButtonElement');

  /**
   * Create newsletter subscription for specified email
   * @param email {string}
   * @return {Promise<void>}
   */
  async function createSubscription(email) {
    const contactData = {
      email,
      listIds: [listId],
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  }
  
  let isProcessing = false;
  
  function resetUi() {
    messageBox.innerText = 'By subscribing, you accept our Privacy Policy.';
    
    messageBox.classList.remove('text-red');
    messageBox.classList.remove('text-green');
    messageBox.classList.remove('text-gray');

    button.disabled = false;
  }
  
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (isProcessing) return;

    isProcessing = true;

    resetUi();

    button.disabled = true;
    messageBox.innerText = 'Processing...';
    messageBox.classList.add('text-gray');
    
    const value = input.value;

    try {
      await createSubscription(value);

      messageBox.innerText = 'Subscribed!';
      messageBox.classList.add('text-green');
    } catch {
      messageBox.innerText = 'Failed to subscribe!';
      messageBox.classList.add('text-red');
    } finally {
      setTimeout(resetUi, 5000);

      isProcessing = false;
      messageBox.classList.remove('text-gray');
    }
  })
})();