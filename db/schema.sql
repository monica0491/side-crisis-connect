CREATE DATABASE crisis_db;

USE crisis_db;

CREATE TABLE group_table
(
	group_id int NOT NULL AUTO_INCREMENT,
	group_name varchar(255) NOT NULL,
   	admin_id int NOT NULL,
	PRIMARY KEY (group_id),
    FOREIGN KEY (admin_id) REFERENCES profile_indiv (id)
);

CREATE TABLE profile_indiv
(
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(255) NOT NULL,
	lastName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE inventory
(
	id int NOT NULL AUTO_INCREMENT,
	product_owner int (40) NOT NULL,
	product_name VARCHAR (255) NOT NULL,
    product_category VARCHAR (40) NOT NULL,
    product_description VARCHAR (300) NOT NULL,
    quantity_in_stock VARCHAR (300) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (product_owner) REFERENCES profile_indiv (id)
);

