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
        const { protest_id } = req.body;

        const protest = await knex('protests').where('id', protest_id).first();

        if (!protest) {
            return res.status(400).json({ message: 'Protest not found' });
        }

        const totalValue = protest.total_value;
        var value = 0;

        if (totalValue <= 1000) {
            value = totalValue * 0.05;
        } else if (totalValue > 1000 && totalValue <= 5000) {
            value = totalValue * 0.075;
        } else if (totalValue > 5000) {
            value = totalValue * 0.1;
        }
    
        await knex('emoluments').insert({ value, protest_id });
    
        return res.status(201).send();
    }

    async update(req, res) {
        const { id } = req.params;
        const { protest_id } = req.body;

        const protest = await knex('protests').where('id', protest_id).first();

        if (!protest) {
            return res.status(400).json({ message: 'Protest not found' });
        }

        const totalValue = protest.total_value;
        var value = 0;

        if (totalValue <= 1000) {
            value = totalValue * 0.05;
        } else if (totalValue > 1000 && totalValue <= 5000) {
            value = totalValue * 0.075;
        } else if (totalValue > 5000) {
            value = totalValue * 0.1;
        }
    
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