import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface GithubQuery extends DataQuery {
  queryText?: string;
  constant: number;
}

export const defaultQuery: Partial<GithubQuery> = {
  constant: 6.5,
};

/**
 * These are options configured for each DataSource instance
 */
export interface GithubDataSourceOptions extends DataSourceJsonData {}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface GithubSecureJsonData {
  apiKey: string;
}
