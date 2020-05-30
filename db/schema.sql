USE au34h9cchf2c6p98;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    createdAt TIMESTAMP NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    UNIQUE (burger_name)
);