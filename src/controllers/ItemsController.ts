import { Request, Response } from 'express';

import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        // image_url: `http://192.168.0.104:3333/uploads/${item.image}`,//ubuntu
        image_url: `http://172.28.43.173:3333/uploads/${item.image}`, //windows
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
