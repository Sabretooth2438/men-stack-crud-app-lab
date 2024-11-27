const Cat = require('../models/Cat');
const router = require('express').Router();

// List all cats
router.get('/cats', async (req, res) => {
  const cats = await Cat.find();
  res.render('cats/cats-index.ejs', { cats });
});

// Form to create a new cat
router.get('/cats/new', (req, res) => {
  res.render('cats/new.ejs');
});

// Add a new cat
router.post('/cats', async (req, res) => {
  try {
    req.body.isAdopted = req.body.isAdopted === 'on';
    await Cat.create(req.body);
    res.redirect('/cats');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Show cat details
router.get('/cats/:id', async (req, res) => {
  const cat = await Cat.findById(req.params.id);
  res.render('cats/show.ejs', { cat });
});

// Delete a cat
router.delete('/cats/:id', async (req, res) => {
  await Cat.findByIdAndDelete(req.params.id);
  res.redirect('/cats');
});

// Form to edit a cat
router.get('/cats/:id/edit', async (req, res) => {
  const cat = await Cat.findById(req.params.id);
  res.render('cats/edit.ejs', { cat });
});

// Update a cat
router.put('/cats/:id', async (req, res) => {
  try {
    req.body.isAdopted = req.body.isAdopted === 'on';
    await Cat.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/cats/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
