import React from 'react'

export default function Language({languages}) {
    var language=[];
    for(let lang in languages){
        language.push(languages[lang])
      }
  return (
    <div className='font-medium text-lg my-2'>Languages: <span className='font-normal'>{language.join(', ')}</span></div>
    // <div>{language.join(', ')}</div>
  )
}
