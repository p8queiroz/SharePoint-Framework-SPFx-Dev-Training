
import WeatherApplicationItem from '../models/WeatherApplicationItem';

export interface IService {

   getItems(units: string, location: string) : Promise<WeatherApplicationItem>;

}