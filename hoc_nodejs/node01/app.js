/**
 * Client -> HTTP (Request, Response) -> Server
 *
 * Import 1 file, thư viện khác --> Sử dụng lệnh require() ==> CommonJS
 *
 * Node sẽ có một số thư viện không cần cài đặt như
 * - HTTP
 * - fs
 * - path
 *
 *
 */

// muốn build một thư viện node cần import http
const http = require("http");
console.log(http);
