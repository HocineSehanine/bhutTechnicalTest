import ICar from '../interfaces/ICar';
import logModule from '../models/logs.model';

const importDynamic = new Function('modulePath', 'return import(modulePath)');

const fetch = async (...args:any[]) => {
  const module = await importDynamic('node-fetch');
  return module.default(...args);
};

class carsService {
  static async listAllCars() {
    const results = async () => {
      const request = await fetch('http://api-test.bhut.com.br:3000/api/cars');
      const requestJson = await request.json();
      return requestJson;
    };
    const carslist = await results();
    return carslist;
  }

  static async addNewCar(car: ICar) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    }
    const request = await fetch('http://api-test.bhut.com.br:3000/api/cars', options);
    const requestJson = await request.json();
    await carsService.createNewCarlog(requestJson._id)
    return requestJson;
  }

  static async createNewCarlog(id: string) {
    if (id) {
      const date = new Date().toLocaleDateString('pt-BR');
      const time = new Date().toLocaleTimeString('pt-BR');
      await logModule.create({
        'data_hora': `Horario: ${time}, Data: ${date}`,
        'car_id': id,
      });
    }
  }
}

export default carsService;
