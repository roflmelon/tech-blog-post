const EditPostHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('.btn-primary').getAttribute('data-id');
  console.log(event.target);
  const title = document.querySelector('#updateTitle').value.trim();
  const content = document.querySelector('#updateContent').value.trim();
  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post!');
    }
  }
};

document
  .querySelector('.edit-post')
  .addEventListener('submit', EditPostHandler);
