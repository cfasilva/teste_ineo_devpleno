import knex from '../database/connection.cjs'

class ProtestsController {
  async index(req, res) {
    const protests = await knex('protests').select('*');

    return res.json(protests);
  }

    async show(req, res) {
        const { id } = req.params;
        const protest = await knex('protests').where('id', id).first();
    
        if (!protest) {
            return res.status(404).json({ message: 'Protest not found' });
        }
    
        return res.json(protest);
    }

    async create(req, res) {
        const { description, total_value, user_id } = req.body;
    
        await knex('protests').insert({ description, total_value, user_id });
    
        return res.status(201).send();
    }

    async update(req, res) {
        const { id } = req.params;
        const { description, total_value, user_id } = req.body;
    
        await knex('protests').where('id', id).update({ description, total_value, user_id });
    
        return res.send();
    }

    async delete(req, res) {
        const { id } = req.params;
    
        await knex('protests').where('id', id).delete();
    
        return res.send();
    }
}

export default ProtestsController