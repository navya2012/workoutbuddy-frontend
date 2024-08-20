import React from 'react'
import Records from '../../Components/Records/Records'
import Form from '../../Components/Form/Form'
import './HomeStyles.css'

const Home = () => {
  return (
   <>
     <section className='home-section'>
      <div className='records'>
        <Records />
      </div>
      <div className='forms'>
        <Form />
      </div>
    </section>
   </>
  )
}

export default Home