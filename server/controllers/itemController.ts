import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Item from '../models/item';

// Create new item
const createItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.create(req.body);
    return res.status(201).json({ item });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Get all items
const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.findAll();
    return res.status(200).json({ items });
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Get item by id
const getItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await Item.findOne({
      where: { id: id }
    });

    if (item) {
      return res.status(200).json({ item });
    }
    return res.status(404).send('Item with the specified ID does not exists');
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Update item
const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Item.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedItem = await Item.findOne({ where: { id: id } });
      return res.status(200).json({ item: updatedItem });
    }
    return res.status(404).send('Item with the specified ID does not exists');
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

// Delete item
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Item.destroy({
      where: { id: id }
    });

    if (deleted) {
      return res.status(204).send('Item deleted');
    }
    return res.status(404).send('Item not found');
  } catch (error: any) {
    return res.status(500).send({ error: error.message });
  }
};

export default {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
};
