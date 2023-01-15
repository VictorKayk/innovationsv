import {CityModel} from '../../models/CityModel';

export async function listCitiesRepository() {
  return CityModel.find().sort({ name: 1 });
}
