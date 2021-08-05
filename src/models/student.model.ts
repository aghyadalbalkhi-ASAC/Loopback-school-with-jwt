import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  StudentID?: number;

  @property({
    type: 'string',
    required: true,
  })
  StudentFullName: string;

  @property({
    type: 'number',
  })
  ClassNumber?: number;

  @property({
    type: 'number',
  })
  SchoolID?: number;

  @property({
    type: 'number',
    required: true,
  })
  ClassID: number;


  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
