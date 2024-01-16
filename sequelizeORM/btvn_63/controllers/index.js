const Email = models.Email;

module.exports = {
  submit: async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
      await Email.create({
        email: body.email,
        title: body.title,
        description: body.description,
        status: false,
        time: new Date(),
      });
    } catch (error) {
      console.error("Error inserting data:", error);
      // You might want to send a response to the client indicating the failure.
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
