import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'
import type { Application } from '../../declarations'
import type { Replies, RepliesData, RepliesPatch, RepliesQuery } from './replies.schema'

export type { Replies, RepliesData, RepliesPatch, RepliesQuery }

export interface RepliesParams extends KnexAdapterParams<RepliesQuery> {}

export class RepliesService<ServiceParams extends Params = RepliesParams> extends KnexService<
  Replies,
  RepliesData,
  RepliesParams,
  RepliesPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'replies'
  }
}
