export async function up(knex) {
  return knex.schema.createTable('protests', table => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.decimal('total_value').notNullable();
    table.integer('user_id').notNullable()
      .references('id')
      .inTable('users');
  });
}

export async function down(knex) {
  return knex.schema.dropTable('protests');
}