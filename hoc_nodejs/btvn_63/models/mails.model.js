// Mỗi model tương ứng với 1 table
// Trong 1 controller có thể có nhiều model

const sql = require("../utils/db");

module.exports = {
  all: async () => {
    return sql`SELECT * FROM emails ORDER BY created_at DESC`;
  },
  create: (data) => {
    const { email, title, description } = data;
    return sql`INSERT INTO emails(email, title, description) VALUES(${email}, ${title}, ${description})`;
  },
};
