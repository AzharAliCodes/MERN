function AllCards({data}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((data) => {
        return (
          <div style={{ backgroundColor: "red", width: "350px", height: "400px" }}>
            {/* <p>{data.id}</p> */}
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
