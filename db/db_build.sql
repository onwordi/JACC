BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name VARCHAR(155) NOT NULL
);

DROP TABLE IF EXISTS shoppingList CASCADE;

CREATE TABLE shoppingList (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users (id),
  item VARCHAR(100) NOT NULL,
  quantity VARCHAR(20) NOT NULL,
  price VARCHAR
);



INSERT INTO users (full_name) values ('Jane Doe');
INSERT INTO shoppingList (user_id, item, quantity, price) values (1, 'potatoes', '3', '£2');

COMMIT;
