import knex from '../database/connection.cjs'

class EmolumentsController {
    async index(req, res) {
        const emoluments = await knex('emoluments').select('*');
    
        return res.json(emoluments);
    }
    
    async show(req, res) {
        const { id } = req.params;
        const emolument = await knex('emoluments').where('id', id).first();
    
        if (!emolument) {
            return res.status(404).json({ message: 'Emolument not found' });
        }
    
        return res.json(emolument);
    }

    async create(req, res) {
        const { value, protest_id } = req.body;
    
        await knex('emoluments').insert({ value, protest_id });
    
        return res.status(201).send();
    }

    async update(req, res) {
        const { id } = req.params;
        const { value, protest_id } = req.body;
    
        await knex('emoluments').where('id', id).update({ value, protest_id });
    
        return res.send();
    }

    async delete(req, res) {
        const { id } = req.params;
    
        await knex('emoluments').where('id', id).delete();
    
        return res.send();
    }
}

export default EmolumentsController