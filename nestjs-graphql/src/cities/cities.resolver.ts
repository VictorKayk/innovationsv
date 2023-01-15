import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CitiesService } from './cities.service';
import { HttpService } from '@nestjs/axios';
@Resolver('City')
export class CitiesResolver {
  constructor(
    private readonly citiesService: CitiesService,
    private readonly httpService: HttpService,
  ) {}

  @Query('cities')
  async findAll() {
    let cities = await this.citiesService.findAll();
    if (cities.length > 0) return cities;

    const { data } = await this.httpService.axiosRef.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios',
    );
    const citiesData = data.map(({ id, nome }) => ({
      cityId: id,
      name: nome,
    }));

    cities = await this.citiesService.create({ cities: citiesData });
    return cities;
  }
}
