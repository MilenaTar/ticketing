import { ServiceInterface, Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';

export interface TicketsSummaryResult {
  stats: {
    total: number;
    open: number;
    closed: number;
  };
  recent: any[];
}

export class TicketsSummaryService implements ServiceInterface<TicketsSummaryResult> {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  async find(_params: Params): Promise<TicketsSummaryResult> {
    const db = this.app.get('postgresqlClient');

    const [{ count: total }] = await db('tickets').count('*');
    const [{ count: open }] = await db('tickets').where({ status: 'Open' }).count('*');
    const [{ count: closed }] = await db('tickets').where({ status: 'Closed' }).count('*');

    const recent = await db('tickets').orderBy('createdAt', 'desc').limit(5);

    return {
      stats: {
        total: Number(total),
        open: Number(open),
        closed: Number(closed),
      },
      recent,
    };
  }
}
