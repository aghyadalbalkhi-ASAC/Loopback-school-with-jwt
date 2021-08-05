import {Entity, model, property} from '@loopback/repository';

@model()
export class School extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  SchoolID?: number;

  @property({
    type: 'string',
    required: true,
  })
  SchoolName: string;


  constructor(data?: Partial<School>) {
    super(data);
  }
}

export interface SchoolRelations {
  // describe navigational properties here
}

export type SchoolWithRelations = School & SchoolRelations;
