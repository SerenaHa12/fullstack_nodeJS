const PostDetail = ({ params }) => {
  const slug = params.slug;
  return (
    <div>
      <h1>Chuyeen muc: {slug[0]}</h1>
      <p>Bai viet {slug[1]}</p>
    </div>
  );
};

export default PostDetail;
