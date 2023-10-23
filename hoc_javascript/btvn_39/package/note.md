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

- Xóa package: package uninstall
- Chỉ định một phiên bản package:
    + lưu ý: khi đang ở phiên bản cao sẽ không cài được phiên bản thấp

Có 2 loại ký hiệu:
    + Dấu mũ: cập nhập số thứ 2 lên mới nhất
    + Dấu ngã: cập nhập số thứ 3 lên mới nhất, update lên bản vá lỗi mới nhất
    + Dấu mũ sao: mới nhất

Loại dependency
    + dependency:
    + dev dependency:

Bản:
    + production
    + staging
    + dev


Tóm lại:
- Làm thế nào để khởi tạo dự án
- Làm thế nào để cài package bằng npm 
- Hiểu về các thông số trên phiên bản