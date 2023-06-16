import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Jihan-Reservation, Gagnez du temps, économisez de l'argent !</h1>
      <span className="mailDesc">Inscrivez-vous et nous vous enverrons les meilleures offres</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="votre email" />
        <button>Suivez-nous !</button>
      </div>
    </div>
  )
}

export default MailList