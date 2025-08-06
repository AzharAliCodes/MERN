function AllCards({ data }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-wrap justify-center items-center gap-6 p-6">
      {data.map((data) => {
        return (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {data.title}
            </h2>
            <p className="text-green-600 font-bold mb-2">${data.price}</p>
            <p className="text-gray-600 text-sm">{data.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllCards;
