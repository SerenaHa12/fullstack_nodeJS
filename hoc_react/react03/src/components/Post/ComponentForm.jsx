import { toast } from "react-toastify";

const ComponentForm = ({ setListPost }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const valueName = e.target.name.value;
    const valueContent = e.target.content.value;
    setListPost((prev) =>
      prev.concat({ name: valueName, content: valueContent })
    );
    toast.success("Thêm bình luận thành công");
    e.target.name.value = "";
    e.target.content.value = "";
  };

  return (
    <>
      <h3>Form Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tên tác giả..."
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            name="content"
            className="form-control my-3"
            placeholder="Nội dung"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary btn-sm">Submit</button>
        </div>
      </form>
    </>
  );
};
export default ComponentForm;
