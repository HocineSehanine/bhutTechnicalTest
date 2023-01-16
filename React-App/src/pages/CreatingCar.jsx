import React from 'react';
import { createCar } from '../helpers/requests';

class CreatingCar extends React.Component {
  state = {
    carId: '',
    carName: '',
    carBrand: '',
    carPrice: '',
    carAge: 0,
  };

  updateCar = async () => {
    const {carId, carName, carBrand, carPrice, carAge } = this.state;
    await createCar({
      "_id": `${String(carId)}`,
      "title": `${String(carName)}`,
      "brand": `${String(carBrand)}`,
      "price": `${String(carPrice)}`,
      "age": Number(carAge)
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }), this.formValidation);
  }

  render() {
    const { carId, carName, carBrand, carPrice, carAge } = this.state;
    return(
      <main>
        <form>
          <input
            type="text"
            name="carId"
            value={ carId }
            onChange={ this.handleChange }
            placeholder="id do carro"
          />
          <input
            type="text"
            name="carName"
            value={ carName }
            onChange={ this.handleChange }
            placeholder="nome do carro"
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
          Adiciona
          </button>
        </form>
      </main>
    );
  }
};

export default CreatingCar;