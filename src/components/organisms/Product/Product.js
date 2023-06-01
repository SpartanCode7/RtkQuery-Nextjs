// ExampleComponent.js
'use client';
import { useGetPostsQuery } from '../../../app/api/ProductSlice/ProductSlice';

function Product() {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default Product;
