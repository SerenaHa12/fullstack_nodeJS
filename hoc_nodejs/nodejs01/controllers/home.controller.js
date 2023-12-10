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
    const title = "<span>Hoc backend</span>";
    const check = true;
    const users = ["user1", "user2", "user3", "user4"]
    res.render("home/index", { title, check });
  },

  showProducts: (req, res) => {
    res.send("<h1>Sản phẩm</h1>");
    res.render("home/products")
  },
};

export default homeController;
