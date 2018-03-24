import React, { createContext } from 'react'
import axios from 'axios'

const {
  Consumer: NutritionConsumer,
  Provider
} = createContext()

class NutritionProvider extends React.Component {
  constructor () {
    super()
    this.fetchData = this.fetchData.bind(this)
    this.state = {
      data: null,
      status: null
    }
  }

  fetchData (query) {
    const data = {
      query
    }

    const headers = {
      'x-app-id': 'd1be2cf3',
      'x-app-key': '9510486bd82892303cfd1ee739552f68'
    }

    return Promise.resolve()
      .then(() => this.setState({ status: 'fetching' }))
      .then(() => axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', data, { headers }))
      .then((response) => response.data.foods)
      .then((foods) => foods.reduce((total, food) => total + food.nf_calories, 0))
      .then((data) => this.setState({ status: 'fetched', data }))
      .catch(() => this.setState({ status: 'failed' }))
  }

  render () {
    const value = {
      data: this.state.data,
      fetchData: this.fetchData,
      status: this.state.status
    }

    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  NutritionConsumer,
  NutritionProvider
}
