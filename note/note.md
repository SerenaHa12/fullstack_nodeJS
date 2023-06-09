# Flex

## Flex Container
- display: flex | inline-flex => kích hoạt flex
- flex-direction: chọn hướng của flex
    - row: nằm trục x
    - row-reverse: đảo chiều
    - column: trục y

- flex-wrap: thuộc tính được dùng khi muốn căn chỉnh chiều dài của các item trong phần tử
- justify-content: căn chỉnh các phẩn tử song song so với trục chính
    - flex-start
    - flex-end
    - center
    - space-around
    - space-between
    - space-evenly

- align-items: căn chỉnh item theo hướng vuông góc với trục chính
    - stretch
    - flex-start
    - center
    - flex-end
    -base-line

- align-content: căn chỉnh hàng với cột vuông góc với trục chính
- gap: tạo khoảng cách giữa hàng và cột
    - row-gap
    - column-gap

- flex-shrink: mặc định luôn là 1
-flex-basis: tự động dổi kích thước khi chuyển hướng

-align-self:
-order css: thuộc tính sắp xếp

## Flex Item


_____________________________________________________________________________

# Biến trong CSS:
- Biến toàn cục: sử dụng khắp mọi nơi (tính từ chỗ khai báo)
- Biến cục bộ: chỉ sử dụng bên trong selector đã khai báo 

_____________________________________________________________________________

# Transition:

- transition-property: all | tên thuộc tính (Mỗi thuộc tính cách nhau bởi dấu phẩy)
- transition duaration: 

phân biệt duaration và delay


_____________________________________________________________________________

# Transform
- Định nghĩa: Thuộc tính transform trong CSS cho phép bạn biến đổi, xoay, co giãn hoặc biến đổi hình dạng các phần tử HTML.
- Cú pháp: transform: <transform-function>
- Các giá trị của <transform-function>:
    - translate(): Dịch chuyển phần tử theo trục X và trục Y.
    - scale(): Thay đổi tỷ lệ kích thước của phần tử.
    - rotate(): Xoay phần tử theo góc quay.
    - skew(): Nghiêng phần tử theo trục X và trục Y.
    - matrix(): Kết hợp các phép biến đổi tùy chỉnh.

- rotate: xoay
    + transform: rotate(360deg)
    + transform: rotateX(360deg)
    + transform: rotateY(360deg)
    + transform: rotateZ(360deg)

- scale
    + transform: scale(x, y)
    + transform: scaleX(x)
    + transform: scaleY(y)

lưu ý: khi scale thì các phần tử bên trong cũng sẽ ăn theo transform của thẻ cha

- skew: nghiêng
    + skew(x, y)
    + skewX(x)
    + skewY(y)

- translate: di chuyển
    + translate(x, y)
    + translateX(x)
    + translateY(y)

thuộc tính translate có giống với position: relative không?
- về mục đích sử dụng
"translate" được sử dụng để di chuyển phần tử theo các giá trị x và y, 
trong khi "position: relative" được sử dụng để xác định vị trí của phần 
tử trong luồng tài liệu và di chuyển nó dựa trên các thuộc tính top, 
right, bottom và left.

- về tính năng
khi di chuyển chỉ giống nhau khi sử dụng chung 1 đơn vị, 
khi để khác đơn vị thì sẽ có sự khác biệt


- sự kết hợp giữa position và translate

_____________________________________________________________________________

# animation

- keyframe: định nghĩa ra một hiệu ứng

https://uiverse.io/
https://lottiefiles.com/featured
https://animate.style/
http://demo.tech2.vn/

_____________________________________________________________________________

# break point

- điểm dừng mà tại đó giao diện sẽ thay đổi
- không có breakpoint nào cho tất cả các dự án
- không khai báo tất cả các breakpoint khi làm dự án (tùy)
- một số breakpoint phổ biến
    - 576*
    - 768*
    - 992*
    - 1200*
    - 1400*

_____________________________________________________________________________

# viewport
- để xây dựng web responsive => cần có thẻ meta viewport


_____________________________________________________________________________

# media query

    ## destop first
    ## mobile first: nên sử dụng mobile first vì khi sử dụng mobile first thì sẽ tối ưu màn hình hơn.