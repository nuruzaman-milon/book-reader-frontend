import { useParams } from "react-router-dom";
import { useGetABookByIdQuery } from "../redux/services/bookSlice";

const BookDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetABookByIdQuery(`${id}`);
    console.log(data);
    
    return (
        <>
        {
            !isLoading && 
            <div className="my-20 text-center">
                <h1 className="text-4xl font-bold mb-10">{data.payload.title}</h1>
                <p className="font-medium text-lg mb-5">Author: {data.payload.author}</p>
                <p className="font-medium text-lg mb-5">Genre: {data.payload.genre}</p>
                <p className="font-medium text-lg mb-5">Publication Date: {data.payload.publication}</p>
            </div>
        }
        </>
    );
};

export default BookDetails;