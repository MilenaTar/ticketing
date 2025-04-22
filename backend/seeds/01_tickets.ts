import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('tickets').del();

  await knex('tickets').insert([
    {
      id: 1,
      title: 'Login issue on mobile app',
      description: 'User reports being unable to log in via the mobile application on iOS 17.',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Billing discrepancy in March invoice',
      description: 'Customer was charged twice for a single subscription cycle. Needs urgent review.',
      status: 'Closed'
    },
    {
      id: 3,
      title: 'Feature request: Dark mode',
      description: 'Several users have requested a dark theme option for better accessibility at night.',
      status: 'Open'
    }    
  ]);
}
