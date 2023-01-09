import React from 'react'

export default function Currency({currencies}) {
    var currency=[];
    for(let curr in currencies){
        currency.push(currencies[curr].name)

      }
  return (
    <div className='font-medium text-lg my-2'>Currencies: <span className='font-normal'>{currency.join(', ')}</span></div>
  )
}
