import React, { Component } from 'react';
import dataGlasses from "./dataGlasses.json";
import './TestGlasses.css'
class TestGlasses extends Component {
  state = {
    Glassescuren: dataGlasses[0],
  };
  renderGlassesList = () => {
    return dataGlasses.map((item, index) => {
      return <div key={item.id} className="item-image">
        <img src={item.url}  alt="" onClick={()=>this.setState({ Glassescuren: item })} />
      </div>;
    });
  };

  
  render() {
    return (
      <div className="wrapper">
        <div className="header bg-dark text-white fs-1 text-center py-3">
          TRY GLASSES APP ONLINE
        </div>

        <div className="py-5 text-center">
          <div className="model">
            <img
              className="model-img"
              src="./glassesImage/model.jpg"
              alt="model"
            />
            <img
              className="model-glasses"
              src={this.state.Glassescuren.url}
              alt=""
            />
            <div className="model-content">
              <h3>{this.state.Glassescuren.name}</h3>
              <p>{this.state.Glassescuren.desc}</p>
            </div>
          </div>
          <div className="model">
            <img
              className="model-img"
              src="./glassesImage/model.jpg"
              alt="model"
            />
          </div>
        </div>
        <div className="list-img ">{this.renderGlassesList()}</div>
      </div>
    );
  }
}

export default TestGlasses;