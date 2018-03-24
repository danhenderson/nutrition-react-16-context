import React from 'react'
import { NutritionConsumer } from '../../providers/Nutrition'

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  render () {
    const { value } = this.state

    return (
      <NutritionConsumer>
        {(nutrition) => (
          <form
            className='n7n-search'
            onSubmit={(e) => {
              e.preventDefault()
              return nutrition.fetchData(value)
            }}>
            <fieldset>
              <label>Search for food or ingredients</label>
              <input
                className='n7n-search--input'
                onChange={(e) => this.setState({ value: e.target.value })}
                value={value}
              />
            </fieldset>
            <button
              className='button'
              type='submit'>
              {nutrition.status === 'fetching' ? 'Searching' : 'Search'}
            </button>
          </form>
        )}
      </NutritionConsumer>
    )
  }
}

export default Search
