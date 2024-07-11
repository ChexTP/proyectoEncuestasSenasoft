import "./loader.css";

const Loader = () => {
    return (
        <div className="w-screen h-screen bg-dark-gradient absolute top-0 left-0 backdrop-blur-sm flex justify-center items-center">
            <div className="loader"></div>
        </div>
    );
}

export default Loader;
