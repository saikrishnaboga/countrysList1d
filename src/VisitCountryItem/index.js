import './index.css'

const VisitCountries = props => {
  const {visitCountryDetails, removeCountry} = props
  const {imageUrl, name, id} = visitCountryDetails

  const onClick = () => {
    removeCountry(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div>
        <p>{name}</p>
        <button type="button" onClick={onClick}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitCountries
