module.exports = (conn, Sequelize) => {
    const Books = conn.define("book", {
      name: {
        type: Sequelize.STRING(50),
      },
      description: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
    });
    return Books;
  };