function AllCards({data}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((data) => {
        return (
          <div key={data.id} style={{ backgroundColor: "red", width: "350px", height: "600px", padding:"10px" }}>
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
