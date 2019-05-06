import React, { Component } from 'react';
import './App.css'
import { getData } from './api'
import { loadings } from './loader'


class App extends Component {

  state = {
    names: undefined
  }

  async componentDidMount() {
    this.setState({
      names: await getData()
    })
  }

  render() {
    // console.log(this.state.names)
    const loading = this.state.names === undefined ? true : false
    return (
      <div className="container">
        <div className="row">
          {loading === true ? loadings(loading) :
            this.state.names.data.map((i) =>
              <div className="col">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={i.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{i.name}</h5>
                    <p className="card-text">{i.dateOfBirth}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
