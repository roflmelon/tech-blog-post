const { Comment } = require('../model');

const commentData = [
  {
    text: 'Loved it!',
    date_created: 'December 30, 2022',
    user_id: 1,
    post_id: 4,
  },
  {
    text: 'My favourite recipe',
    date_created: 'December 30, 2022',
    user_id: 4,
    post_id: 1,
  },
  {
    text: 'Kids love it',
    date_created: 'December 30, 2022',
    user_id: 2,
    post_id: 1,
  },
  {
    text: 'Easy to make and healthy',
    date_created: 'December 30, 2022',
    user_id: 3,
    post_id: 4,
  },
  {
    text: "I'll make this recipe again",
    date_created: 'December 30, 2022',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
