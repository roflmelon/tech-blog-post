const User = require('./User.js');
const Comment = require('./Comment.js');
const Post = require('./Post.js');

User.hasMany(Post, {
  foreignKey: {
    name: 'user_id',
    allowNull: true,
  },
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = {
  User,
  Comment,
  Post,
};
