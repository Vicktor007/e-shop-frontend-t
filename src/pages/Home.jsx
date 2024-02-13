import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="error">
          {isError?.data?.message || isError.error}

          
        </Message>
      ) : (
        <>
        
          <div className="flex justify-center items-center">
          <h1 className=" mt-[10rem] text-center text-[2rem]">
              Special Products
            </h1>

            {/* <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link> */}
          </div>

          <div>
            <div className="flex flex-wrap justify-center mt-[2rem] m-auto w-[80%] p-10">
              {data.products.map((product) => (
                <div key={product._id} >
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
