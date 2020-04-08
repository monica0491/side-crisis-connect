CREATE DATABASE crisisconnect_db;

USE crisisconnect_db;

CREATE TABLE profile_indiv
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE groups_table
(
	id int NOT NULL AUTO_INCREMENT,
	group_name varchar(255) NOT NULL,
   	admin_id int NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES profile_indiv (id)
);

CREATE TABLE inventory_table
(
	id int NOT NULL AUTO_INCREMENT,
	product_owner_id int NOT NULL,
	product_name VARCHAR (255) NOT NULL,
    quantity_in_stock VARCHAR (300) NOT NULL,
	group_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (product_owner_id) REFERENCES profile_indiv (id),
	FOREIGN KEY (group_id) REFERENCES groups_table (id)
);