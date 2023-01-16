import React from 'react';
import { updateCar } from '../helpers/requests';

class UpdatingCar extends React.Component {
  state = {
    carName: '',
    carBrand: '',
    carPrice: '',
    carAge: 0,
  };

  updateCar = async () => {
    const { match: { params: { carId } } } = this.props;
    const { carName, carBrand, carPrice, carAge } = this.state;
    await updateCar(carId, {
      _id: String(carId),
      title: String(carName),
      brand: String(carBrand),
      price: String(carPrice),
      age: Number(carAge)
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }), this.formValidation);
  }

  render() {
    const { carName, carBrand, carPrice, carAge} = this.state;
    return(
      <main>
        <form>
          <input
            type="text"
            name="carName"
            value={ carName }
            onChange={ this.handleChange }
            placeholder="nome do oarro"
          />
          <input
            type="text"
            name="carBrand"
            value={ carBrand }
            onChange={ this.handleChange }
            placeholder="marca do carro"
          />
          <input
            type="text"
            name="carPrice"
            value={ carPrice }
            onChange={ this.handleChange }
            placeholder="preço  do carro"
          />
          <input
            type="number"
            name="carAge"
            value={ carAge }
            onChange={ this.handleChange }
            placeholder="ano de fabricação"
          />
          <button
            type="button"
            onClick={ this.updateCar }
          >
          Editar
          </button>
        </form>
      </main>
    );
  }
};

export default UpdatingCar;