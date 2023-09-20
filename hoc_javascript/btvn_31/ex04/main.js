/*
Scope: Phạm vi

1. Global Scope: Phạm vi toàn cục
2. Local Scope: Phạm vi cục bộ
- Function Scope: Phạm vi trong hàm
- Block Scope: Phạm vi trong 1 khối: if, for, while, ...(Cặp ngoặc {})
*/

// Global Scope
function handle() {
  // Function Scope
  var a = 10;
  if (a >= 10) {
    // Block Scope
    for (var i = 0; i < a; i++) {}
  }
}

// Từ khóa let và const
if (a > 5) {
  let c = 10;
  if (c === 10) {
    c = 30;
  }
  console.log(c);
}
