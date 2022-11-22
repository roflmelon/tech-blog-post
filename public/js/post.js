const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#postTitle').value.trim();
  const content = document.querySelector('#postContent').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/`, {
      method: 'POST',
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.edit-delete-form')
  .addEventListener('submit', newPostHandler);

[...document.querySelectorAll('.all-posts')].forEach((el) =>
  el.addEventListener('click', delButtonHandler)
);
