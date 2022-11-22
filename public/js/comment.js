const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#commentInput').value.trim();
  const post_id = document
    .querySelector('#post-all')
    .getAttribute('data-postid');

  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('#createComment')
  .addEventListener('submit', newFormHandler);
