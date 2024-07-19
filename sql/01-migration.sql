DROP DATABASE IF EXISTS monitoria;

CREATE DATABASE monitoria;

USE monitoria;

CREATE TABLE products (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = INNODB;

SET SQL_SAFE_UPDATES = 0;