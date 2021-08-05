import {Entity, model, property} from '@loopback/repository';

@model()
export class Classes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ClassID?: number;

  @property({
    type: 'number',
    required: true,
  })
  ClassNumber: number;

  @property({
    type: 'number',
    required: true,
  })
  SchoolID: number;


  constructor(data?: Partial<Classes>) {
    super(data);
  }
}

export interface ClassesRelations {
  // describe navigational properties here
}

export type ClassesWithRelations = Classes & ClassesRelations;
