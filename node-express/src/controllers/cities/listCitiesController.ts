import {Request, Response} from 'express';
import {listCitiesRepository} from '../../repositories/cities/listCitiesRepository';
import {createCitiesRepository} from '../../repositories/cities/createCitiesRepository';
import {api} from '../../utils/api';

export async function listCitiesController(req: Request, res: Response) {
  try {
    let cities = await listCitiesRepository();
    if (cities.length > 0) return res.status(200).json(cities);

    const { data } = await api.get<
      Array<{ id: string, nome: string }>
    >('https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios');
    const citiesData = data.map(({ id, nome }) => ({ cityId: id, name: nome}));

    cities = await createCitiesRepository({ cities: citiesData });

    return res.status(200).json(cities);
  } catch (e) {
    res.sendStatus(500);
  }
}
