Khi xây dựng dự án
- Tự code
- Dùng thư viện
    + Cách cũ: Download các code thư viện về, đưa vào project hoặc dùng qua link CDN 
    -> Folder project rất nặng
    -> Thư viện update -> Tải lại file mới -> Mất rất nhiều thời gian

    + Cách mới: dùng thông qua các công cụ quản lý package. 
    -> Dễ dàng thao tác, cài đặt, cập nhập, xóa -> tự động
    -> Dễ dàng di chuyên từ máy này qua máy khác, lên server... mà không cần mang theo thư viện

    làm thế nào để các công cụ biết được project đang sử dụng thư viện nào?
    -> Dựa vào file cấu hinh của các công cụ quản lý -> để lưu lại các tên package và phiên bản
    -> Trong JS: package.JSON

    Trong JS có 2 công cụ sử dụng phổ biến: npm, yarn

- Có 2 chế độ cài:
+ local package:
+ global package: -g