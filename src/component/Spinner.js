import React, { Component } from 'react'
import loading from '../Walk.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" srcSet="" className='my-3' />
      </div>
    )
  }
}

export default Spinner
