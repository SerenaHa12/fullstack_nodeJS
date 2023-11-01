Content API
- Tạo đối tượng context: React.createContext
- Provide:
+ Component có sẵn của context, dùng để fuiwr dữ liệu tới các component con 
+ Comsumer: nhận dữ liệu từ provider (có thể sử dụng hook useContent)

Context nâng cao: Xây dựng state Manager kết hợp với useReducer

State:
1. Local State: state nội bộ trong một component
2. Global State: kho lưu trữ các state mà các component có thể sử dụng 

A, B là con của provider


ôn tập
- vòng lập reduce, usestate, usecontext, usereducer -> buổi sau: build store state sywr dụng useReducer kết hợp React Context
- action
- action creator
- selector
- dispatch
- call api setstate bằng use reducer
