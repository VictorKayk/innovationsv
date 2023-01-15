import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City, CityDocument } from './schemas/city.schema';
import { Model } from 'mongoose';

interface CreateCityInput {
  cities: Array<{
    cityId: string;
    name: string;
  }>;
}

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}
  create({ cities }: CreateCityInput) {
    return this.cityModel.create(cities);
  }

  findAll() {
    return this.cityModel.find();
  }
}
