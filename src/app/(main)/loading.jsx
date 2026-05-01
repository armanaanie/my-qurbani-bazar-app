

const loading = () => {
    return (
        <div className="flex items-center w-96 mx-auto h-[500px] p-5">
           <p>Loading...</p>
           <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span> 
        </div>
    );
};

export default loading;