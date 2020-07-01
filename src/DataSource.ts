import { DataSourceInstanceSettings } from '@grafana/data';
import { DataSourceWithBackend } from '@grafana/runtime';
import { GithubDataSourceOptions, GithubQuery } from './types';

export class DataSource extends DataSourceWithBackend<GithubQuery, GithubDataSourceOptions> {
  constructor(instanceSettings: DataSourceInstanceSettings<GithubDataSourceOptions>) {
    super(instanceSettings);
  }
}
