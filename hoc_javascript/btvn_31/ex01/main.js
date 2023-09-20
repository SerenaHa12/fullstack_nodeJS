var host = document.querySelector("#shadow-root");
// console.log(host);

var root = host.attachShadow({ mode: "open" });
// console.log(root);

root.innerHTML = `
<style>p { color: red }</style>
<p><strong>Hello F8</strong></p>
`;

/**
 * Case thực tế:
 * - Build ra editor trên web
 * - Nhúng video vào shadow 
 */