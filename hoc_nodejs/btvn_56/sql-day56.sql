--
CREATE DATABASE database_01_dohachi;
--

-- create courses table
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price FLOAT,
  detail TEXT,
  teacher_id INT NOT NULL,
  active INT,
  created_at TIMESTAMP with TIMEZONE,
  updated_at TIMESTAMP with TIMEZONE
);
--
ALTER TABLE courses ADD description TEXT NULL;
--
ALTER TABLE courses RENAME COLUMN detail TO content;
--

-- create teacher table
CREATE TABLE teacher (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  bio TEXT,
  created_at TIMESTAMP with TIMEZONE,
  updated_at TIMESTAMP with TIMEZONE
);
ALTER TABLE courses
      ADD CONSTRAINT fk_course_teacher FOREIGN KEY (teacher_id) 
          REFERENCES teacher (id);
--
INSERT INTO teacher (name, bio) VALUES
  ('Teacher 1', 'Bio 1'),
  ('Teacher 2', 'Bio 2'),
  ('Teacher 3', 'Bio 3');
--
INSERT INTO courses (name, price, teacher_id, active, created_at, updated_at) VALUES
  ('Course 1', 100000, 1, 1, NOW(), NOW()),
  ('Course 2', 200000, 1, 1, NOW(), NOW()),
  ('Course 3', 300000, 1, 1, NOW(), NOW()),
  ('Course 4', 100000, 2, 1, NOW(), NOW()),
  ('Course 5', 200000, 2, 1, NOW(), NOW()),
  ('Course 6', 300000, 2, 1, NOW(), NOW()),
  ('Course 7', 100000, 3, 1, NOW(), NOW()),
  ('Course 8', 200000, 3, 1, NOW(), NOW()),
  ('Course 9', 300000, 3, 1, NOW(), NOW());
--
UPDATE courses SET name = 'New Course 1', price = 200000 WHERE id = 1;
UPDATE courses SET name = 'New Course 2', price = 300000 WHERE id = 2;
UPDATE courses SET name = 'New Course 3', price = 400000 WHERE id = 3;
UPDATE courses SET name = 'New Course 4', price = 200000 WHERE id = 4;
UPDATE courses SET name = 'New Course 5', price = 300000 WHERE id = 5;
UPDATE courses SET name = 'New Course 6', price = 400000 WHERE id = 6;
UPDATE courses SET name = 'New Course 7', price = 200000 WHERE id = 7;
UPDATE courses SET name = 'New Course 8', price = 300000 WHERE id = 8;
UPDATE courses SET name = 'New Course 9', price = 400000 WHERE id = 9;
--
UPDATE teacher SET bio = 'New bio 1' WHERE id = 1;
UPDATE teacher SET bio = 'New bio 2' WHERE id = 2;
UPDATE teacher SET bio = 'New bio 3' WHERE id = 3;
--
SELECT * FROM teacher;

SELECT * FROM courses;