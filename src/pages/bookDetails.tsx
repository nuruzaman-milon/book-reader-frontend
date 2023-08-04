import { useParams } from "react-router-dom";
import { useGetABookByIdQuery } from "../redux/services/bookSlice";

interface Book {
  title: string;
  author: string;
  genre: string;
  publication: string;
}

// No need for ApiResponse interface as it's not being used in the code

interface RouteParams {
  id: string;
  [key: string]: string | undefined; // Index signature to satisfy the constraint
}

const BookDetails = () => {
  const { id } = useParams<RouteParams>(); // Specify the type of useParams
  const { data, isLoading, isError } = useGetABookByIdQuery(id || '');
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const potentialBook: Book | [] | undefined = data?.payload;

  if (isError || !potentialBook || Array.isArray(potentialBook)) {
    return <div>Error fetching book data.</div>;
  }

  const book: Book = potentialBook;

  return (
    <div className="my-20 text-center">
      <h1 className="text-4xl font-bold mb-10">{book.title}</h1>
      <p className="font-medium text-lg mb-5">Author: {book.author}</p>
      <p className="font-medium text-lg mb-5">Genre: {book.genre}</p>
      <p className="font-medium text-lg mb-5">Publication Date: {book.publication}</p>
    </div>
  );
};

export default BookDetails;
