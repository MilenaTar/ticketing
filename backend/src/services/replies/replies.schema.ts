import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { RepliesService } from './replies.class'

export const repliesSchema = Type.Object(
  {
    id: Type.Number(),
    ticketId: Type.Number(),
    message: Type.String(),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    updatedAt: Type.Optional(Type.String({ format: 'date-time' }))
  },
  { $id: 'Replies', additionalProperties: false }
)

export type Replies = Static<typeof repliesSchema>
export const repliesValidator = getValidator(repliesSchema, dataValidator)
export const repliesResolver = resolve<Replies, HookContext<RepliesService>>({})

export const repliesExternalResolver = resolve<Replies, HookContext<RepliesService>>({})

export const repliesDataSchema = Type.Pick(repliesSchema, ['ticketId', 'message'], {
  $id: 'RepliesData'
})
export type RepliesData = Static<typeof repliesDataSchema>
export const repliesDataValidator = getValidator(repliesDataSchema, dataValidator)
export const repliesDataResolver = resolve<RepliesData, HookContext<RepliesService>>({})

export const repliesPatchSchema = Type.Partial(repliesDataSchema, {
  $id: 'RepliesPatch'
})
export type RepliesPatch = Static<typeof repliesPatchSchema>
export const repliesPatchValidator = getValidator(repliesPatchSchema, dataValidator)
export const repliesPatchResolver = resolve<RepliesPatch, HookContext<RepliesService>>({})

export const repliesQueryProperties = Type.Pick(repliesSchema, ['id', 'ticketId', 'createdAt'])
export const repliesQuerySchema = Type.Intersect(
  [querySyntax(repliesQueryProperties), Type.Object({}, { additionalProperties: false })],
  { additionalProperties: false }
)
export type RepliesQuery = Static<typeof repliesQuerySchema>
export const repliesQueryValidator = getValidator(repliesQuerySchema, queryValidator)
export const repliesQueryResolver = resolve<RepliesQuery, HookContext<RepliesService>>({})
