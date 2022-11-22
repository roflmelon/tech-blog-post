const router = require('express').Router();
const { User, Post, Comment } = require('../model');
const withAuth = require('../utils/withAuth');

//getting all posts for homepage
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

      res
        .status(200)
        .render('homepage', { posts, logged_in: req.session.logged_in });
    } else {
      res.status(400);
    }
  } catch {
    res.status(500);
  }
});

//view a particular post via id
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
      const postDataGet = postData.get({ plain: true });
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
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Post,
          attributes: ['id', 'post_title', 'post_content', 'date_created'],
        },
      ],
    });
    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render('edit', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
