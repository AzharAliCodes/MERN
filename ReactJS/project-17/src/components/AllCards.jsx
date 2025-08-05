function AllCards({data}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((data) => {
        return (
          <div style={{ backgroundColor: "red", width: "350px", height: "400px" }}>
            {/* <p>{data.id}</p> */}
            <img src="" alt="" />
            {/* <h2>{data.title}</h2> */}
            <p>500</p>
            <p>Description</p>
          </div>
        );  
      })}
    </div>
  );
}


export default AllCards;
