Tính năng đăng xuất:
- Cần call PAI đăng xuất
- Xóa Storage

- Xử lý khi user thay đổi access token
- Verify server -> call API profile.
    + Nếu trả về 200 -> OK
    + Nếu trả về 401 -> Xử lý Logout
- Khi access token hết hạn -> Xử lý luôn cấp lại token mới 
-> lưu lại storage -> call lại api cần lấy dữ liệu

Ví dụ: 
1. Lấy danh sách sản phẩm -> Lấy đươc
2. Lấy danh sách bài viết -> access token hết hạn -> không lấy được bài viết 
- call API/ refresh token -> lấy access mới -> lưu local storage -> call lại dsach bài viết

3. Lấy danh sách khóa học

-----------------------------------------------------------------------------------------------
STORAGE 

1. Local Storage:
- Lưu trữ vô thời hạn

1.1 setlocalStorage
- setlocalStorage: localStorage.setItem('key', 'value')

1.2 getlocalStorage
- getlocalStorage: localStorage.getItem('key')
-> không có hàm sửa, khi muốn sửa thì set lại

1.3 removelocalStorage
- remove localStorage: localStorage.removeItem('key')

1.4 clear localStorage
- xóa tất cả localStorage.clear()

2. Session Storage:
- Lưu trữ theo phiên
- Tắt trình duyệt là Xóa
- Tương tự localStorage

3. Cookie Storage:
- Lưu trữ theo phiên và lưu trữ theo thời gian xác định
- Tự động đính kèm vào HTTP request server
- Chuỗi Cookie: key1=value1;key2=value2;...;...

-> Local Storage ở các domain sẽ khác nhau

Research:
https://www.npmjs.com/package/cookie
