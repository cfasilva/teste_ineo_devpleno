export async function seed(knex) {
  await knex('users').insert([
    { name: 'Ruan Nunes', email: 'ruan.nunes@ineodigital.com.br', password: '******' },
    { name: 'Cleber Silva', email: 'cleberfasilva@gmail.com', password: '******' },
  ])
}