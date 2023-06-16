import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import hotel from '../images/hotel.jpg';
import appart from '../images/appart.jpg';
import resort from '../images/resort.jpg';
import villa from '../images/villa.jpg';
import cabin from '../images/cabin.jpg';

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    hotel,
    appart,
    resort,
    villa,
    cabin,
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
