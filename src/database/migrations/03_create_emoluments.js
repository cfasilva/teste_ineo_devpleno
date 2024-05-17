export async function up(knex) {
  return knex.schema.createTable('emoluments', table => {
    table.increments('id').primary();
    table.decimal('value').notNullable();
    table.integer('protest_id').notNullable()
      .references('id')
      .inTable('protests');
  });
}

export async function down(knex) {
  return knex.schema.dropTable('emoluments');
}