export default class WeatherApplicationItem {

    public Title: string;
    public Temperature: string;
    public IconUri: string;    

    constructor(options: WeatherApplicationItem){
        this.Title  = options.Title;
        this.Temperature = options.Temperature;
        this.IconUri = options.IconUri;
    }

}