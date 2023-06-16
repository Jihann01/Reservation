import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe,faHandshake,faShieldAlt,faNewspaper, faMapMarkerAlt,faScroll,faBriefcase, faBuilding,faLeaf, faBed, faCar, faHeadset, faUser, faFileAlt, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css'
// Add icons to the library
library.add(faGlobe, faMapMarkerAlt, faBuilding, faBed, faCar, faHeadset, faUser, faFileAlt, faPlane);

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem"><FontAwesomeIcon icon={faGlobe} />Pays</li>
          <li className="fListItem"><FontAwesomeIcon icon={faMapMarkerAlt} />Régions</li>
          <li className="fListItem"><FontAwesomeIcon icon={faMapMarkerAlt} />Villes</li>
          <li className="fListItem"><FontAwesomeIcon icon={faMapMarkerAlt} />Quartiers</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Aéroports</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBed} />Hôtels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Maisons</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Appartements</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Centres de villégiature</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Villas</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBed} />Auberges de jeunesse</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBed} />Maisons d'hôtes</li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Lieux de séjour uniques</li>
          <li className="fListItem"><FontAwesomeIcon icon={faFileAlt} />Avis</li>
          <li className="fListItem"><FontAwesomeIcon icon={faFileAlt} />Non manipulé: Articles de voyage</li>
          <li className="fListItem"><FontAwesomeIcon icon={faUser} />Communautés de voyageurs</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBed} />Offres saisonnières et de vacances</li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><FontAwesomeIcon icon={faCar} />Location de voiture</li>
          <li className="fListItem"><FontAwesomeIcon icon={faPlane} />Chercheur de vols</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBuilding} />Réservations de restaurants</li>
          <li className="fListItem"><FontAwesomeIcon icon={faHeadset} />Agents de voyage</li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><FontAwesomeIcon icon={faHeadset} />Service client</li>
          <li className="fListItem"><FontAwesomeIcon icon={faUser} />Aide aux partenaires</li>
          <li className="fListItem"><FontAwesomeIcon icon={faBriefcase} />Carrières</li>
          <li className="fListItem"><FontAwesomeIcon icon={faLeaf} />Durabilité</li>
          <li className="fListItem"><FontAwesomeIcon icon={faNewspaper} />Centre de presse</li>
          <li className="fListItem"><FontAwesomeIcon icon={faShieldAlt} />Centre de ressources sur la sécurité</li>
          <li className="fListItem"><FontAwesomeIcon icon={faHandshake} />Relations avec les investisseurs</li>
          <li className="fListItem"><FontAwesomeIcon icon={faScroll} />Termes et conditions</li>
        </ul>
</div>
<div className="fText">© 2023 Jihan-Reservation</div>
</div>
);
};

export default Footer;