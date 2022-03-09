// import {Component} from 'react'
import './index.css'

const CountryItem = props => {
  const {countryDetails, visitCountries} = props
  const {id, name} = countryDetails

  const onCLick = () => {
    visitCountries(id)
  }

  return (
    <li>
      <h1 className="heading">{name}</h1>
      <button type="button" onClick={onCLick}>
        Visit
      </button>
    </li>
  )
}

export default CountryItem
