const getPostDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const PostDetail = async ({ params }) => {
  const { id } = params;
  const data = await getPostDetail(id);
  console.log(id);
  return <PostDetail {...data} />;
};

export default PostDetail;
