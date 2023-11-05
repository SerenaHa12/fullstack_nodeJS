# Vấn đề
- Chia sẻ dữ liệu giữa các Component với nhau -> render prop + state của component cha 
- Dữ liệu dùng chung cho các component -> Thông tin user sau khi đăng nhập

# Giải pháp
- Local State -> dùng useState
- Global State: Context API

# Muốn lấy dữ liệu từ contexxt
- Import đối tượng Context 
- Import hook useContext 

-> Gom thành 1 hook mới -> Tạo một hàm bắt đầu bằng từ khóa use