import useFetch from "../../hooks/useFetch";
import "./featured.css";
import tetouanImage from '../images/tetouan.jpg';
import tangerImage from '../images/tanger.jpg';
import chaouenImage from '../images/chaouen.jpg';

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Tetouan,Tanger,Chefchaouen"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
       
          <div className="featuredItem">
            <div class="rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
            </div>
            <img src={tetouanImage} alt="" className="featuredImg"/>
            <div className="featuredTitles">
              <h1>Tetouan</h1>
              <h4>{data[0]} proprietés</h4>
            </div>
          </div>

          <div className="featuredItem">
            <div class="rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
            </div>
            <img src={tangerImage} alt="" className="featuredImg"/>
            <div className="featuredTitles">
              <h1>Tanger</h1>
              <h4>{data[1]} proprietés</h4>
            </div>
          </div>
          <div className="featuredItem">
            <div class="rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d=""/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.5l5.253 3.202-1.452-5.603L21 9.145l-6.039-.45L12 3 9.039 8.695 3 9.145l3.199 2.954-1.452 5.603L12 15.5z"/>
          </svg>
            </div>
            <img src={chaouenImage} alt="" className="featuredImg"/>
            <div className="featuredTitles">
              <h1>Chaouen</h1>
              <h4>{data[2]} proprietés</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
