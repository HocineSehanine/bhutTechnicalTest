import React from 'react';
import { deleteCar } from '../helpers/requests';

class Car extends React.Component {
  
  clickDelete = async () => {
    const { carId } = this.props;
    await deleteCar (carId, {"_id": `${carId}`});
    window.location.reload(false);
  }

  clickUpdate = () => {
    const { carId } = this.props;
    window.location.replace(`http://localhost:3000/updating/${carId}`);
  }

  render() {
    const { carName, carBrand,carPrice, carAge } = this.props;
    return (
      <div>
        <div>
         <h1>{ carName }</h1>
         <h3>Marca { carBrand }</h3>
         <h3>Preço: { carPrice }</h3>
         <h3>Ano: { carAge }</h3>
        </div>

        <button onClick={ this.clickDelete } >Delete car</button>
        <button onClick={ this.clickUpdate } >Update car</button>
      </div>
    );
  }
}

export default Car;