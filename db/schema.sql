CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);