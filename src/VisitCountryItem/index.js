import './index.css'

const VisitCountries = props => {
  const {visitCountryDetails} = props
  const {imageUrl, name} = visitCountryDetails
  return (
    <li>
      <img src={imageUrl} alt={name} className="image" />
      <div>
        <p>{name}</p>
        <button type="button">Remove</button>
      </div>
    </li>
  )
}

export default VisitCountries
