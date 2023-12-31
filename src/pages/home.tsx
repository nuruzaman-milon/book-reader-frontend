'use client'
import { Button, Card } from "flowbite-react";
import { useGetAllBooksDscQuery } from "../redux/services/bookSlice";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const {data:allBooks, isLoading} = useGetAllBooksDscQuery(''); 
  return(
    <>
      {
        isLoading ? <Loading /> :
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {
            allBooks?.payload.map((data)=> 
            <Card key={data._id} className="">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                <p>
                  {data.title}
                </p>
              </h5>
              <p className="font-normal text-gray-700 flex flex-col gap-2">
                <p>
                 Genre: {data.genre}
                </p>
                <p>
                 Author: {data.author}
                </p>
                <p>
                 Publication: {data.publication}
                </p>
              </p>
              <Link to={`/book/${data._id}`}><Button>
                  Details
              </Button></Link>
          </Card>)
          }
      </div>
      }
    </>
  )
};

export default Home;
