import React from 'react'
import numbro from 'numbro'
import { NutritionConsumer } from '../../providers/Nutrition'

const Total = () => (
  <NutritionConsumer>
    {(nutrition) => {
      switch (nutrition.status) {
        case 'fetching':
          return (
            <div className='n7n-total'>
              <div className='n7n-total--icon'>
                <i className='fa fa-spinner fa-spin' />
              </div>
            </div>
          )
        case 'failed':
          return (
            <div className='n7n-total'>
              <div className='n7n-total--icon'>
                <i className='fa fa-warning' />
              </div>
            </div>
          )
        default:
          return (
            <div className='n7n-total'>
              <div className='n7n-total--amount'>
                {numbro(nutrition.data || 0).format({
                  thousandSeparated: true,
                  mantissa: 0
                })}
              </div>
              <div className='n7n-total--label'>cals</div>
            </div>
          )
      }
    }}
  </NutritionConsumer>
)

export default Total
