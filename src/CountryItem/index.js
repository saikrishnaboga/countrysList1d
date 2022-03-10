// import {Component} from 'react'
import './index.css'

const CountryItem = props => {
  const {countryDetails, visitCountries} = props
  const {id, name, isVisited} = countryDetails

  const onCLick = () => {
    visitCountries(id)
  }

  return (
    <li>
      <p className="heading">{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onCLick}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
