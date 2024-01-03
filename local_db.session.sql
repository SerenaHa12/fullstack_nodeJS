SELECT courses.*, users.name as username, users.email,
CASE 
    WHEN courses.price >= 200000 ThEN '10%'
    ELSE '0'
END AS discount
FROM users
INNER JOIN users_courses
ON users.id = users_courses.user_id
INNER JOIN courses
ON courses.id = users_courses.course_id
INNER JOIN phones
ON phones.user_id = users.id
WHERE phones.phone = '0123456787';
