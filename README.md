Create the following tables:
Cart model:
CREATE TYPE cart_status AS ENUM ('OPEN', 'ORDERED');
CREATE TABLE carts ( id uuid PRIMARY KEY, user_id uuid NOT NULL, created_at date NOT NULL, updated_at date NOT NULL, status cart_status NOT NULL );

Cart Item model:
CREATE TABLE cart_items ( cart_id UUID NOT NULL REFERENCES carts(id), product_id UUID, count INTEGER, PRIMARY KEY (cart_id, product_id) );

create table orders
CREATE TABLE orders ( id UUID PRIMARY KEY, user_id UUID NOT NULL, cart_id UUID NOT NULL, payment JSON NOT NULL, delivery JSON NOT NULL, comments TEXT, status TEXT, total NUMERIC(10, 2) NOT NULL, FOREIGN KEY (cart_id) REFERENCES carts(id) );

prefill
INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES ('9ac5aa34-4753-4580-a813-5bb5d43036bf', 'bce31d1e-2c9f-4147-b8c8-385e256289f0', '2022-03-15', '2022-03-15', 'OPEN');
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('9ac5aa34-4753-4580-a813-5bb5d43036bf', '607af7ec-3f05-4a74-a9cb-14e1332c1202', 2);
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('9ac5aa34-4753-4580-a813-5bb5d43036bf', 'dc9e0c65-c32e-4f02-89ef-93504b769800', 1); 
