import { Button, Card, Dropdown } from "flowbite-react";
import Loading from "../components/Loading";
import { useGetAllBooksQuery } from "../redux/services/bookSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [booksData, setBooksData] = useState([]);
  const { data: allBooks, isLoading } = useGetAllBooksQuery("");

  //get genre data dynamically
  const arrayOfGenre = allBooks?.payload.map((data) => data.genre);
  const distinctSetOfGenre = new Set(arrayOfGenre);
  const distinctArrayOfGenre = Array.from(distinctSetOfGenre);

  //get publication data dynamically
  const arrayOfPublication = allBooks?.payload.map((data) => data.publication);
  const distinctSetOfPublication = new Set(arrayOfPublication);
  const distinctArrayOfPublication = Array.from(distinctSetOfPublication);

  const handleGenre = (data: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const arrayOfGenre = allBooks?.payload.filter(
      (genre) => genre.genre === data
    );
    // console.log(arrayOfGenre);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <div>
                <Dropdown label="Genre">
                  <div className="flex flex-col items-start px-3 py-1">
                    {distinctArrayOfGenre &&
                      distinctArrayOfGenre.map((data) => (
                        <button onClick={() => handleGenre(data)} key={data}>
                          {data}
                        </button>
                      ))}
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown label="Publication Year">
                  <div className="flex flex-col">
                    {distinctArrayOfPublication &&
                      distinctArrayOfPublication.map((data) => (
                        <button key={data}>{data}</button>
                      ))}
                  </div>
                </Dropdown>
              </div>
            </div>
            <Link to="/add-new-book"><Button>Add New Book</Button></Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {allBooks?.payload.map((data) => (
              <Card key={data._id} className="">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  <p>{data.title}</p>
                </h5>
                <p className="font-normal text-gray-700 flex flex-col gap-2">
                  <p>Genre: {data.genre}</p>
                  <p>Author: {data.author}</p>
                  <p>Publication: {data.publication}</p>
                </p>
                <Button>
                  <p>Details</p>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllBooks;
