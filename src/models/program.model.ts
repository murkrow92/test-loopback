import { Entity, model, property } from '@loopback/repository';

@model()
export class Program extends Entity {
  @property({
    type: 'string',
    required: true
  })
  title: string;

  @property({
    type: 'string'
  })
  description?: string;

  constructor(data?: Partial<Program>) {
    super(data);
  }
}

export interface ProgramRelations {
  // describe navigational properties here
}

export type ProgramWithRelations = Program & ProgramRelations;
