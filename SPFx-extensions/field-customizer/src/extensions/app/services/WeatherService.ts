import { IService } from '../interfaces/IService';
import WeatherApplicationItem from '../models/WeatherApplicationItem';

export class WeatherService  implements IService {

    private static instance: WeatherService;

    private constructor () {

    }

    public static getInstance() {
        if(!WeatherService.instance) {
            WeatherService.instance = new WeatherService();
        }
        return WeatherService.instance;
    }

    
    public getItems(units:string, location: string): Promise<WeatherApplicationItem> {
        return new Promise((resolve, reject) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?appid=1d6185f0f9b832b5a85c2a6189af3f56&q=${location}&units=${units}`).then(response => response.json())
                .then((response) => {
                    debugger;
                    resolve({
                        Title: response.name,
                        IconUri: `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
                        Temperature: response.main.temp.toFixed(0)
                    });
                })
                .catch(error => reject(error));

        });
    }

    
}

export default WeatherService.getInstance();
