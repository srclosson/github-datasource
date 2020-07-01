import { QueryDataRequest, DataFrame, DataService } from '@grafana/tsbackend';
import { Octokit } from "@octokit/rest";
import { FieldType, ArrayVector } from '@grafana/data';

export class GithubDataService extends DataService {
  octokit: Octokit;
  constructor() {
    super();
    this.octokit = new Octokit();
  }

  QueryData(request: QueryDataRequest): Promise<DataFrame[]> {
    return Promise.resolve([{
      name: 'some data',
      fields: [{
        name: 'time',
        config: {},
        type: FieldType.time,
        values: new ArrayVector([ Date.now()]),
      },{
        name: 'value',
        config: {},
        type: FieldType.number,
        values: new ArrayVector([ 1 ]),
      }],
      length: 2,
    }]);
  }
}
  