var checkItems = document.querySelectorAll(".check-item");
var checkAll = document.querySelector(".check-all");
var count = 0;

checkAll.addEventListener("change", function() {
    // Đếm và reset check all
    count = checkAll.checked ? checkItems.length : 0;
    checkItems.forEach(function(checkItem) {
        checkItem.checked = checkAll.checked;
    });
});

checkItems.forEach(function(checkItem) {
    checkItem.addEventListener("change", function() {
        console.log(checkItem.checked);
        if (checkItem.checked) {
            count++;
        } else {
            count--;
        }

        if (count === checkItems.length) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
    });
});

/*
Case 1: Bấm vào check all, tất cả được check
Case 2: gán sự kiện cho từng check Item
Có một biến đếm, item nào được check +1
item nào không được check -1.
Khi bấm checkall thực tế count vẫn là 0.
*/