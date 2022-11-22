const router = require('express').Router();
const { User, Post, Comment } = require('../model');
const withAuth = require('../utils/withAuth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id', 'post_title', 'post_content', 'date_created'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    if (postData) {
      const posts = postData.map((posts) => posts.get({ plain: true }));

      res.status(200).render('homepage', { posts });
    } else {
      res.status(400);
    }
  } catch {
    res.status(500);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [{ model: User }],
        },
      ],
    });
    if (postData) {
      //   res.json(postData);
      const postDataGet = postData.get({ plain: true });
      console.log(postDataGet);
      res.render('post', { ...postDataGet });
    } else {
      res.status(400);
    }
  } catch {
    res.status(500);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Post,
          attributes: ['id', 'post_title', 'post_content', 'date_created'],
        },
      ],
    });
    if (userData) {
      const user = userData.get({ plain: true });

      res.render('dashboard', {
        ...user,
        logged_in: true,
      });
    } else {
      res.status(400);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  } else {
    res.render('login');
  }
});

module.exports = router;
