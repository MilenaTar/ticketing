import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('replies').del();

  await knex('replies').insert([
    {
      id: 1,
      ticketId: 1,
      message: 'Hi, we’re looking into the login issue. Could you confirm your device model?',
    },
    {
      id: 2,
      ticketId: 1,
      message: 'We’ve identified the problem and will release a fix in the next update.',
    },
    {
      id: 3,
      ticketId: 2,
      message: 'The billing team has processed a refund for the duplicate charge. Apologies for the inconvenience.',
    },
    {
      id: 4,
      ticketId: 3,
      message: 'Thanks for the suggestion! We’ve added dark mode to our product roadmap.',
    }
    
  ]);
}
