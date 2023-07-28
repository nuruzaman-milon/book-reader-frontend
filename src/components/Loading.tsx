import { Spinner } from "flowbite-react";

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Spinner aria-label="Default status example" />
        </div>
    );
};

export default Loading;