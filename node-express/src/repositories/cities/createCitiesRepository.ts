import {CityModel} from '../../models/CityModel';
import {CityType} from '../../types/CityType';

interface ICreateCitiesRepository {
  cities: Array<CityType>
}
export async function createCitiesRepository({ cities }: ICreateCitiesRepository) {
  return CityModel.create(cities);
}
