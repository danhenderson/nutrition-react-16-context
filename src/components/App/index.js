import React from 'react'
import './index.css'

import { NutritionProvider } from '../../providers/Nutrition'
import Attribution from '../Attribution'
import Page from '../Page'
import Search from '../Search'
import Total from '../Total'

const App = () => (
  <NutritionProvider>
    <Page>
      <Search />
      <Total />
      <Attribution />
    </Page>
  </NutritionProvider>
)

export default App
