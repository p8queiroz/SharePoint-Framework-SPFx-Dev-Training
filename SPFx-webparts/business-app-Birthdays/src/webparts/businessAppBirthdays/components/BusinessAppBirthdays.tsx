import * as React from 'react';
import styles from './BusinessAppBirthdays.module.scss';
import { IBusinessAppBirthdaysProps } from './IBusinessAppBirthdaysProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BusinessAppBirthdays extends React.Component<IBusinessAppBirthdaysProps, {}> {
  public render(): React.ReactElement<IBusinessAppBirthdaysProps> {
    return (
      <div className={ styles.businessAppBirthdays }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
