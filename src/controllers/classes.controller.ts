import {authenticate} from '@loopback/authentication';
////////////////////////////////////
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Classes} from '../models';
import {ClassesRepository} from '../repositories';

@authenticate('jwt')
export class ClassesController {
  constructor(
    @repository(ClassesRepository)
    public classesRepository: ClassesRepository,
  ) { }

  @post('/classes')
  @response(200, {
    description: 'Classes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Classes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classes, {
            title: 'NewClasses',
            exclude: ['ClassID'],
          }),
        },
      },
    })
    classes: Omit<Classes, 'ClassID'>,
  ): Promise<Classes> {
    return this.classesRepository.create(classes);
  }

  @get('/classes/count')
  @response(200, {
    description: 'Classes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Classes) where?: Where<Classes>,
  ): Promise<Count> {
    return this.classesRepository.count(where);
  }

  @get('/classes')
  @response(200, {
    description: 'Array of Classes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Classes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Classes) filter?: Filter<Classes>,
  ): Promise<Classes[]> {
    return this.classesRepository.find(filter);
  }

  @patch('/classes')
  @response(200, {
    description: 'Classes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classes, {partial: true}),
        },
      },
    })
    classes: Classes,
    @param.where(Classes) where?: Where<Classes>,
  ): Promise<Count> {
    return this.classesRepository.updateAll(classes, where);
  }

  @get('/classes/{id}')
  @response(200, {
    description: 'Classes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Classes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Classes, {exclude: 'where'}) filter?: FilterExcludingWhere<Classes>
  ): Promise<Classes> {
    return this.classesRepository.findById(id, filter);
  }

  @patch('/classes/{id}')
  @response(204, {
    description: 'Classes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Classes, {partial: true}),
        },
      },
    })
    classes: Classes,
  ): Promise<void> {
    await this.classesRepository.updateById(id, classes);
  }

  @put('/classes/{id}')
  @response(204, {
    description: 'Classes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() classes: Classes,
  ): Promise<void> {
    await this.classesRepository.replaceById(id, classes);
  }

  @del('/classes/{id}')
  @response(204, {
    description: 'Classes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.classesRepository.deleteById(id);
  }
}
