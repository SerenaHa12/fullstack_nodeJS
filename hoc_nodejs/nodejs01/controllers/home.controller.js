/*
Controller: 
- Tên Controler (Hay gọi tắt là controller)
- Action --> Hành động

Ví dụ: Controller Users sẽ có các action: 
- Thêm
- Sửa
- Xóa
- Hiển thị
*/

const homeController = {
  index: (req, res) => {
    //Tiếp nhận request
    //Xử lý dữ liệu của request: Validate
    //Truy vấn với Database --> Thông qua Model
    //Trả về response
    res.send("<h1>Học Express không khó</h1>");
  },

  showProducts: (req, res) => {
    res.send("<h1>Sản phẩm</h1>");
  },
};

export default homeController;
