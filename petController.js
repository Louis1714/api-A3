const Pet = require('../models/Pet');

exports.getAll = async (req, res) => {
  const pets = await Pet.findAll();
  res.set('Cache-Control', 'public, max-age=3600');
  res.json(pets);
};

exports.getById = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ error: 'Pet não encontrado' });
  res.json(pet);
};

exports.create = async (req, res) => {
  const novo = await Pet.create(req.body);
  res.status(201).json(novo);
};

exports.update = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ error: 'Pet não encontrado' });
  await pet.update(req.body);
  res.json(pet);
};

exports.partialUpdate = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ error: 'Pet não encontrado' });
  await pet.update(req.body);
  res.json(pet);
};

exports.remove = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ error: 'Pet não encontrado' });
  await pet.destroy();
  res.status(204).end();
};
