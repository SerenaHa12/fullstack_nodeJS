"use client";
import useSWR from "swr";

// step 1: call API by fetching
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const api = `${process.env.NEXT_PUBLIC_SERVER_API}/posts`;

const PostList = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(api, fetcher, {
    refreshInterval: 2000,
    //revalidateOnReConnect
  });

  //   loading
  if (isLoading)
    return (
      <div className="container mx-auto my-auto text-center">Loading...</div>
    );

  // error
  if (error)
    return (
      <div className="container mx-auto my-auto text-center">
        failed to load
      </div>
    );
  return (
    <div className="container mx-auto m-4">
      <h1>Posts</h1>
      {posts?.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default PostList;
