function AllCards({data}) {
  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.thumbnail} alt="" />
            <h2>{data.title}</h2>
            <p>${data.price}</p>
            <p>{data.description}</p>
          </div>
        );  
      })}
    </div>
  );
}


export default AllCards;
