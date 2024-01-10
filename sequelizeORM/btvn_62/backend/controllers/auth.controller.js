const { formSchema } = require("@whatsapp-clone/common");

const validateForm = (req, res) => {
  const formData = req.body;
  formSchema
    .validate(formData)
    .catch((err) => {
      res.status(422).send();
      console.log(err.errors);
    })
    .them((valid) => {
      if (valid) {
        res.status(200).send();
        console.log("form ok");
      }
    });
};

module.exports = validateForm;
