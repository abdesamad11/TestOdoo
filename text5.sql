#Test 5: SQL (3/20)
#Write pseudo-SQL statements to create database tables to store the products of a basic webshop. Each product has a name, a price, a creation date and may belong to several categories. Categories have a name and a flag to indicate whether the category is private or public.
#Write a SQL query to find the list of products that belong to more than 5 public categories.


 
PostgreSQL
 
CREATE TABLE products (
      product_id SERIAL PRIMARY KEY,
      product_name VARCHAR(100) NOT NULL,
      price NUMERIC (10,2),
      created_at TIMESTAMP
    );
 
CREATE TABLE categories (
    cat_id SERIAL PRIMARY KEY,
    cat_name VARCHAR(100) NOT NULL,
    private BOOLEAN
 
    );
 
CREATE TABLE products_categories (
      cat_id INT REFERENCES categories (cat_id) ON DELETE CASCADE,
      product_id INT REFERENCES products (product_id)  ON DELETE CASCADE
      CONSTRAINT id PRIMARY KEY (cat_id, product_id)
    );
 
    Write a SQL query to find the list of products that belong to more than 5 public categories.
 
 
// Having too much trouble with the 2nd part of the question.
 
SELECT * FROM categories 
WHERE private = FALSE;