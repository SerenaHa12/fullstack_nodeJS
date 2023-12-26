--
CREATE DATABASE database_02_dohachi;
--

CREATE TABLE customers(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
);

CREATE TABLE products(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	product_code VARCHAR(20),
	name VARCHAR(100) NOT NULL,
	price FLOAT NOT NULL,
	product_category_id INT,
	total_quantity INT NOT NULL,
);

CREATE TABLE products_category(
	  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	  name VARCHAR(30)  NOT NULL,
);

CREATE TABLE orders(
	 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	 total_quantity INT NOT NULL,
	 total_amount FLOAT NOT NULL,
	 customer_id INT, 
);

CREATE TABLE orders_detail(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	order_id INT NOT NULL,
	product_id INT NOT NULL,
	quantity INT NOT NULL,
	created_at TIMESTAMPTZ,
	updated_at TIMESTAMPTZ,
    status VARCHAR(30)  NOT NULL,
);

ALTER TABLE products 
ADD CONSTRAINT products_product_categroy_id_fk 
FOREIGN KEY (product_category_id) 
REFERENCES products_category(id);

ALTER TABLE orders 
ADD CONSTRAINT orders_customer_id_fk
FOREIGN KEY (customer_id) 
REFERENCES customers(id);

ALTER TABLE orders_detail
ADD CONSTRAINT orders_detail_order_id_fk
FOREIGN KEY (order_id) 
REFERENCES orders(id);

ALTER TABLE orders_detail 
ADD CONSTRAINT orders_detail_product_id_fk
FOREIGN KEY (product_id) 
REFERENCES products(id);

INSERT INTO customers(name ,email,phone, password)
VALUES('chi', 'chi@gmail.com','0967833175', '123456'),
	  ('haha', 'haha@gmail.com','0547493743', '123456'),
	  ('hihi', 'hihi@gmail.com','0768594564', '123456')

INSERT INTO products(name,product_code , price,product_category_id,total_quantity)
VALUES ('Len 1', 'l1101',  10000,  1, 10),
	   ('Book 1', 'l1103',  15000,  3, 5),
	   ('Len xanh', 'l1107',  11000,  11, 17),
	   ('Tra chanh', 'P11001',  11000,  9, 20),
	   ('Roll Royce', 'VIPl1101',  11000,  12, 3)

INSERT INTO products_category(name)
VALUES  ('Đồ trang trí'),
		('Đồ uống'),
		('Xe cộ'),
        ('Sách vở')

INSERT INTO orders(total_quantity, total_amount, customer_id,)
VALUES(1, 36000, 1  ),
      (3, 370123, 2 ),
      (3, 30054843, 2 ),
      (3, 37000, 2 )
	  
	  
INSERT INTO orders_detail(order_id, product_id , quantity, created_at, updated_at, status)
VALUES(1,1,1,NOW(), NOW(),'Done'),
      (4,2,3,NOW(), NOW(),'Done'),
	  (3,3,4, NOW(), NOW(),'Not-Done'),
	  (1,2,6, NOW(), NOW(),'Done'),
	  (6,3,12, NOW(), NOW(),'Not-Done'),
	  (2,4,1, NOW(), NOW(),'Done')
    /*
1. Xem danh sách đơn hàng
Tên khách hàng
Email khách hàng
Số điện thoại khách hàng
Tổng số lượng sản phẩm
Tổng tiền đơn hàng
Trạng thái đơn hàng
Thời gian đặt hàng
*/
SELECT  customers.name, 
		customers.email, 
		customers.phone , 
		orders.total_quantity,
		orders.total_amount,
        orders_details.status,
		orders_details.created_at,
		orders_details.status_id
FROM customers
JOIN orders
ON customers.id = orders.customer_id

/*
2. Xem chi tiết đơn hàng
Tên khách hàng
Email khách hàng
Số điện thoại khách hàng
Danh sách sản phẩm trong đơn hàng: Tên, Mã sản phẩm, giá, số lượng, tổng tiền từng sản phẩm
Trạng thái đơn hàng
Thời gian tạo đơn hàng
Thời gian cập nhật cuối cùng

*/
SELECT  customers.name, 
		customers.email, 
		customers.phone , 
		orders_details.created_at as time_start_order,
		orders_details.updated_at as time_update_order,
		orders.status,
		products.*
FROM customers
JOIN orders
ON customers.id = orders.customer_id
JOIN orders_detail
ON orders.id = orders_detail.order_id
JOIN products
ON orders_detail.product_id = products.id