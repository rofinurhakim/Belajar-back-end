const db = require("../models/index");
const Books = db.books;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({
        status: false,
        error: "Nama buku tidak boleh kosong!",
      });
      return;
    }

    return await Books.create(req.body).then((data) => {
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
    var search = req.query.search;
    var pencarian = null;

    if (search) {
      pencarian = {
        name: {
          [Op.like]: `%${search}%`,
        },
      };
    }

    return await Books.findAll({
      where: pencarian,
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
    return await Books.findByPk(id).then((data) => {
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
    return await Books.update(req.body, {
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

exports.destroy = async (req, res) => {
  const id = req.params.id;

  try {
    return await Books.destroy({
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