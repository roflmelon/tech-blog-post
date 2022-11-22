const { Post } = require('../model');

const posts = [
  {
    post_title: 'TECHNOLOGY ROCKS!!!',
    post_content:
      'Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to.',
    date_created: 'December 25, 2022',
    user_id: 1,
  },
  {
    post_title: 'Alien TECH?!?!?',
    post_content:
      'Court heard which up above hoped grave do. Answer living law things either sir bed length. Looked before we an on merely. These no death he at share alone. Yet outward the him compass hearted are tedious.',
    date_created: 'December 26, 2022',
    user_id: 3,
  },
  {
    post_title: 'Engineers are just aliens in disguise.',
    post_content:
      'Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my.',
    user_id: 1,
  },
  {
    post_title: 'Learn SQL in 1 steps!!',
    post_content:
      'Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing sex. Around really his use uneasy longer him man. His our pulled nature elinor talked now for excuse result. Admitted add peculiar get joy doubtful.',
    date_created: 'December 28, 2022',
    user_id: 2,
  },
  {
    post_title: 'Learn JavaScript in 2 steps!!',
    post_content:
      'comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young.',
    date_created: 'December 29, 2022',
    user_id: 4,
  },
  {
    post_title: 'Learn any tech stack with these tips!!',
    post_content:
      'On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to.',
    date_created: 'December 21, 2022',
    user_id: 1,
  },
  {
    post_title: 'Can AI replace all of our jobs?!?',
    post_content:
      'Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant.',
    date_created: 'December 20, 2022',
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;
