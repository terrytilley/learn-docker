import express from 'express';
import models from '../models';

const router = express.Router();

router.get('/', async (req, res) => {
  const todos = await models.Todo.findAll().map(({ id, text, completed }) => {
    return { id, text, completed };
  });
  return res.status(200).json({ todos });
});

router.post('/', async (req, res) => {
  const { id, text, completed } = await models.Todo.create({
    text: req.body.text,
  });
  return res.status(200).json({ id, text, completed });
});

export default router;
