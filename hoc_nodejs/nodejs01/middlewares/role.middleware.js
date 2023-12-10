const roleMiddleware = (req, res, next) => {
    const status = false;
    if (!status){
        res.redirect("/users");
    }
    next()
}

export default roleMiddleware