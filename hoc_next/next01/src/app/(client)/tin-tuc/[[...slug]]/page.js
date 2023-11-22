const PostDetail = ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return <h1>Danh sách bài viết</h1>;
  }

  return (
    <div>
      <h1>Chuyên mục: {slug[0]}</h1>
      <h1>Bài viết: {slug[1]}</h1>
    </div>
  );
};

export default PostDetail;
