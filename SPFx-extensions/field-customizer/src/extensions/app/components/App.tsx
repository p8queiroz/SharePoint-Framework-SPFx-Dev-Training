import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import styles from './App.module.scss';
import   { IService }  from '../interfaces/IService';
import { WeatherService } from '../services/WeatherService';
import WeatherApplicationItem from '../models/WeatherApplicationItem';

export interface IAppProps {
  location: string;
  units: string;
  weatherService: WeatherService;
}

export interface IAppState {
  item?: WeatherApplicationItem;
  isLoading: boolean;
  error?: Error;
}

const LOG_SOURCE: string = 'App';

export default class AppFieldCustomizer extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps){
    super(props);  
    this.state = {
      isLoading: false
    };
  }

  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: App mounted');
    this.getWeather(this.props.units, this.props.location);
  }

  public getWeather(units: string, province: string) {
    debugger;
    this.setState({ isLoading: true });
    this.props.weatherService.getItems(units, province)
      .then((result: WeatherApplicationItem) => {
        this.setState({ item: result, isLoading: false });
    }).catch((err) => {
        this.setState({ error: err, isLoading: false });
        console.error('Weather', err);
    });
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: App unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {

    var getCurrentTemp = () => {
      if (this.state && this.state.item) {
        return <div>
          <span className="img-scope">
            <img className="li-img" src={this.state.item.IconUri} />
          </span>
          <span className="li-title">{this.state.item.Title} </span>
          <span className="li-temp">
            {this.state.item.Temperature}°C
          </span>
        </div>;
      }
    };

    var getRender = () => {
      if (this.state.isLoading == true) {
        return <Spinner size={SpinnerSize.large} label="loading..." ariaLive="assertive" />;
      }
      else if (this.state.error) {
        return <div>There was a problem running this webpart. The administrator should be aware of this.</div>;
      }
      else {
        return <div>
          {getCurrentTemp()}
        </div>;
      }
    };

    return (
      <div className={styles.cell}>
        { getRender() }
      </div>
    );

  }
  
}
