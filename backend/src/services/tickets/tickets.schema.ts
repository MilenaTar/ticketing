import { resolve } from '@feathersjs/schema';
import { Type, getValidator, querySyntax } from '@feathersjs/typebox';
import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';
import type { TicketsService } from './tickets.class';
import { repliesQuerySchema } from '../replies/replies.schema';

export const ticketsSchema = Type.Object(
  {
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    status: Type.Union([Type.Literal('Open'), Type.Literal('Closed')]),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    updatedAt: Type.Optional(Type.String({ format: 'date-time' })),
    replies: Type.Optional(Type.Array(repliesQuerySchema)),
  },
  { $id: 'Tickets', additionalProperties: false },
);

export type Tickets = Static<typeof ticketsSchema>;
export const ticketsValidator = getValidator(ticketsSchema, dataValidator);
export const ticketsResolver = resolve<Tickets, HookContext<TicketsService>>({
  replies: async (_value, ticket, context) => {
    if (context.method !== 'get') {
      return undefined;
    }
    const replies = await context.app.service('/replies').find({
      query: {
        ticketId: ticket.id,
        $sort: { createdAt: 1 },
      },
      paginate: false,
    });

    return replies as any;
  },
});
export const ticketsExternalResolver = resolve<Tickets, HookContext<TicketsService>>({});
export const ticketsDataSchema = Type.Pick(ticketsSchema, ['title', 'description', 'status'], {
  $id: 'TicketsData',
});
export type TicketsData = Static<typeof ticketsDataSchema>;
export const ticketsDataValidator = getValidator(ticketsDataSchema, dataValidator);
export const ticketsDataResolver = resolve<TicketsData, HookContext<TicketsService>>({});
export const ticketsPatchSchema = Type.Partial(ticketsDataSchema, {
  $id: 'TicketsPatch',
});
export type TicketsPatch = Static<typeof ticketsPatchSchema>;
export const ticketsPatchValidator = getValidator(ticketsPatchSchema, dataValidator);
export const ticketsPatchResolver = resolve<TicketsPatch, HookContext<TicketsService>>({});
export const ticketsQueryProperties = Type.Pick(ticketsSchema, [
  'id',
  'title',
  'status',
  'createdAt',
  'updatedAt',
]);
export const ticketsQuerySchema = Type.Intersect(
  [
    querySyntax(ticketsQueryProperties),
    Type.Object({ $summary: Type.Optional(Type.Boolean()) }, { additionalProperties: false }),
  ],
  { additionalProperties: false },
);
export type TicketsQuery = Static<typeof ticketsQuerySchema>;
export const ticketsQueryValidator = getValidator(ticketsQuerySchema, queryValidator);
export const ticketsQueryResolver = resolve<TicketsQuery, HookContext<TicketsService>>({});
