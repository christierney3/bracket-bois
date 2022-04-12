const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#tournament-name').value.trim();
  const size = document.querySelector('#tournament-size').value.trim();
  const type = document.querySelector('#tournament-type').value.trim();
  const start_date = document.querySelector('#start-date').value.trim();
  const end_date = document.querySelector('#end-date').value.trim();

  if (name && size && type && start_date && end_date) {
    console.log({ name, size, type, start_date, end_date });
    const response = await fetch(`/api/tournaments`, {
      method: 'POST',
      body: JSON.stringify({ name, size, type, start_date, end_date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create tournament');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/tournaments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete tournament');
    }
  }
};



document
  .querySelector('.new-tournament-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.tournament-list')
  .addEventListener('click', delButtonHandler);
