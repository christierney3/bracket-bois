const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#team-name').value.trim();

  if (name && size && type && start_date && end_date) {
    console.log({ name });
    const response = await fetch(`/api/teams`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create team');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/teams/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('The team has been deleted');
    } else {
      alert('Failed to delete team');
    }
  }
};



document
  .querySelector('.new-team-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.team-list')
  .addEventListener('click', delButtonHandler);
