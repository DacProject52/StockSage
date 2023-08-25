import React, { Component } from 'react'
import LineGraph from './LineGraph'
import "./CSS/linegraph.css";

export class Linegraphbox extends Component {
  render() {
    return (
      <div className='linegraph'>
        <LineGraph />
      </div>
    )
  }
}

export default Linegraphbox