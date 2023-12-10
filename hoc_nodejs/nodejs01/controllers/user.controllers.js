const userController = {
    index: (req, res) => {
        const {status, keyword} = req.query;
        console.log(status, keyword);

        res.send(`<h1>Danh sach nguowi dung</h1>
            <h2>Status: ${status}</h2>
            <p>Keyword: ${keyword}</p>
        `);
    },

    add: (req, res) => {
        res.send("<h1>them nguowi dung</h1>")
    },

    edit: (req, res) => {
        const id = req.params.id;
        res.send("<h1>sua nguoi dung " + id + "</h1>")
    },

    orderList: (req, res) => {
        res.send("<h1>Danh sach don hang</h1>")
    },

    orderCompleted: (req, res) => {
        res.send("<h1>Don hang da hoan thanh</h1>")
    },

    orderCancel: (req, res) => {
        res.send("<h1>Don hang da huy</h1>")
    }
}

export default userController