-- for connecting use port 5432

-- for help \?

-- list database \l

-- choose database \c database_name

-- list all table \d

CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN
);

ALTER TABLE products ADD COLUMN featured BOOLEAN;

ALTER TABLE products DROP COLUMN featured;

DROP TABLE products;

\c postgres;

DROP DATABASE practice;

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(120) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)   
);

INSERT INTO restaurants(name, location, price_range) VALUES ('McDonalds', '1993 McKee Rd San Jose, CA 95133', 2 );

SELECT * FROM restaurants;

