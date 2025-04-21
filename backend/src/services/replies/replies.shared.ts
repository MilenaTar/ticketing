import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Replies, RepliesData, RepliesPatch, RepliesQuery, RepliesService } from './replies.class'

export type { Replies, RepliesData, RepliesPatch, RepliesQuery }

export type RepliesClientService = Pick<RepliesService<Params<RepliesQuery>>, (typeof repliesMethods)[number]>

export const repliesPath = '/replies'

export const repliesMethods: Array<keyof RepliesService> = ['find', 'get', 'create', 'patch', 'remove']

export const repliesClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(repliesPath, connection.service(repliesPath), {
    methods: repliesMethods
  })
}

declare module '../../client' {
  interface ServiceTypes {
    [repliesPath]: RepliesClientService
  }
}
