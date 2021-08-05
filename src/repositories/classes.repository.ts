import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserDataSource} from '../datasources';
import {Classes, ClassesRelations} from '../models';

export class ClassesRepository extends DefaultCrudRepository<
  Classes,
  typeof Classes.prototype.ClassID,
  ClassesRelations
> {
  constructor(
    @inject('datasources.user') dataSource: UserDataSource,
  ) {
    super(Classes, dataSource);
  }
}
