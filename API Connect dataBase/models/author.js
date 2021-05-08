module.exports = (conn2, Sequelize) => {
    const Author = conn2.define("author", {
      username: {
        type: Sequelize.STRING(50),
      },
      password: {
        type: Sequelize.STRING,
      },
    });
    return Author;
  };