import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserDataSource} from '../datasources';
import {School, SchoolRelations} from '../models';

export class SchoolRepository extends DefaultCrudRepository<
  School,
  typeof School.prototype.SchoolID,
  SchoolRelations
> {
  constructor(
    @inject('datasources.user') dataSource: UserDataSource,
  ) {
    super(School, dataSource);
  }
}
