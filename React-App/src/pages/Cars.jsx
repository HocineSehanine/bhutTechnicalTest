import React from 'react';
import Car from '../components/car';
import { getCars } from '../helpers/requests';

class Cars extends React.Component {
  state = {
    carsList: [],
  };

  componentDidMount = async () => {
    this.listingCars();
  };

  listingCars = async () => {
    const cars = await getCars();
    this.setState({ carsList: cars });
  }

  render() {
    const { carsList } = this.state;
    return(
      <main>
      <div>
        {
          carsList.map((car, index) => (
            <div>
              <Car
              key={index}
              carId={car._id}
              carName={car.title}
              carBrand={car.brand}
              carPrice={ car.price }
              carAge={ car.age }
            />
            </div>
          ))
        }
      </div>
      </main>
    );
  }
};

export default Cars;