import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");
  console.log(data)
  if (loading) {
    return <div>telechargement...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length) {
    return <div>No data found.</div>;
  }

  return (
    <div className="fp">
      {data.slice(0, 9).map((item) => (
        <div className="fpItem" key={item._id}>
          <img src={item.photos[0]} alt="" className="fpImg" />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">a partir de ${item.cheapestPrice}</span>
          {item.rating && (
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>tres bien</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
