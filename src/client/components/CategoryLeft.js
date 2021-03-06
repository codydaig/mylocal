import React from 'react';

export default class CategoryDetail extends React.Component {
  render() {
    return (
      <div className="row" style={{ margin: 'none' }}>
        <div className="col-lg-6 searchInfoMain">
        {console.log(this.props)}
          <h1>{ this.props.header }</h1>
          <div className="divider"></div>
        </div>
        <div className="col-lg-6 col-fluid">
          <img src={ this.props.image } className="img-fluid" alt="Volunteers-Banner" />
        </div>
      </div>
    );
  }
}