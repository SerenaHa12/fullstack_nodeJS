import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
const Counter01 = () => {

  return <div>Counter01</div>;
};

export default Counter01;
/*
--> useEffect
1. state thay đổi
2. re-render component
3. UI update
4. callback trong useEffect chạy

--> uselayoutEffect
1. state thay đổi
2. re-render component
3. callback trong useEffect chạy
4. đợi callback xong -> UI update
*/