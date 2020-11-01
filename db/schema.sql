DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(150) NULL,
  devoured BOOLEAN,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_devoured TIMESTAMP NULL,
  PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS ua221ra4v05pm2ev;
CREATE database ua221ra4v05pm2ev;
USE ua221ra4v05pm2ev;
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(150) NULL,
  devoured BOOLEAN,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_devoured TIMESTAMP NULL,
  PRIMARY KEY (id)
);