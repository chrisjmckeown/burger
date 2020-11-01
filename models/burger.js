const orm = require('../config/orm.js');

var burger = {
  selectOne: function (condition, cb) {
    orm.selectOne("burgers", condition, (res) => {
      cb(res);
    });
  },selectAll: function (cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  },
  deleteall : function (cb) {
    orm.deleteall("burgers", (res) => {
      cb(res);
    });
  }
};

module.exports = burger;