import {
  // useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "../store/apiSlice";

function RTK() {
  const { data: product, isLoading, error } = useGetSingleProductQuery(1);

  console.log("data", product);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>404 could not be found!</h1>;
  }

  return (
    // <div>
    //   {data.products.map((product) => (
    //     <div key={product.id}>
    //       <h3>{product.title}</h3>
    //     </div>
    //   ))}
    // </div>
    <div>
      <h3>{product.title}</h3>
    </div>
  );
}

export default RTK;
