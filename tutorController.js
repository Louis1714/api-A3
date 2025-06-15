const Tutor = require('../models/Tutor');

exports.getAll = async (req, res) => {
  const tutores = await Tutor.findAll();
  res.set('Cache-Control', 'public, max-age=3600');
  res.json(tutores);
};

exports.getById = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
  res.json(tutor);
};

exports.create = async (req, res) => {
  const novo = await Tutor.create(req.body);
  res.status(201).json(novo);
};

exports.update = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
  await tutor.update(req.body);
  res.json(tutor);
};

exports.partialUpdate = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
  await tutor.update(req.body);
  res.json(tutor);
};

exports.remove = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
  await tutor.destroy();
  res.status(204).end();
};
