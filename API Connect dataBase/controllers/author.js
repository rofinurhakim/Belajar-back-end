const db = require("../models/index");
const Author = db.author;


exports.create = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      res.status(400).json({
        status: false,
        error: "Nama buku tidak boleh kosong!",
      });
      return;
    }

    return await Author.create(req.body).then((data) => {
      res.json({
        status: true,
        data: data,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error: error.message || `Data gagal di tambahkan ke database`,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    
    return await Author.findAll({
    //   where: pencarian,
    }).then((data) => {
      res.json({
        data: data,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error: error.message || `Gagal menampilkan data dari database`,
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    return await Author.findByPk(id).then((data) => {
      res.json({
        data: data,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error:
        error.message || `Gagal menampilkan data dari database dengan id ${id}`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;

  try {
    return await Author.update(req.body, {
      where: {
        id,
      },
    }).then(() => {
      res.json({
        status: true,
        message: `Berhasil melakukan update data dengan id ${id}`,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error:
        error.message || `Gagal mengubah / mengupdate data dengan id ${id}`,
    });
  }
};

exports.deleteData = async (req, res) => {
  const id = req.params.id;

  try {
    return await Author.destroy({
      where: {
        id,
      },
    }).then(() => {
      res.json({
        status: true,
        message: `Berhasil melakukan delete data dengan id ${id}`,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error: error.message || `Gagal menghapus data dengan id ${id}`,
    });
  }
};