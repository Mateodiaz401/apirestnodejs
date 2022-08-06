const express = require('express');
const ProductsSerice = require('../services/product.services')

const router = express.Router();
const service = new ProductsSerice();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filters', (req, res) => {
  res.send('I am a filter')
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error('not fount')
    })
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newproduct = await service.create(body);
  res.status(201).json(newproduct);
});
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);

  } catch (error) {
    res.status(404).json({
      message: error.message,
    })
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta)
  } catch (error) {
    res.status(404).json({
      message: error.message,
    })
  }

})

module.exports = router;
