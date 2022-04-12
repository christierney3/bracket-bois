const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id') && event.target.classList.contains('delete')) {
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

const updateBtnHandler = async (event) => {
  if (event.target.hasAttribute('data-id') && event.target.classList.contains('update')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/tournaments/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete tournament');
    }
  }
}
document
  .querySelector('.tournament-list')
  .addEventListener('click', delButtonHandler);