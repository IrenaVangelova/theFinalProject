const Recipe = require('../models/recipe');
const response = require('../lib/response_handler');
const User = require('../models/user');

const all = async (req, res) => {

  const recipes = await Recipe.find().populate('user');
  res.send({
    error: false,
    message: `All recipes from the database`,
    recipes: recipes
  });
};

const byId = async (req, res) => {

  const recipes = await Recipe.findById(req.params.id);

  res.send({
    error: false,
    message: `Recipe with id #${recipes._id}, has been fetched`,
    recipes: recipes,
  });
};

const create = async (req, res) => {

  const recipe = await Recipe.create({
    ...req.body
  });

  await User.findByIdAndUpdate(req.body.userId, {
    $push: { recipes: recipe._id },
  })

  res.send({
    error: false,
    message: 'New recipe has been created',
    recipe: recipe
  });
};

const update = async (req, res) => {
  await Recipe.findByIdAndUpdate(req.params.id, req.body);
  const recipe = await Recipe.findById(req.params.id);
};

const remove = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  await Recipe.findByIdAndDelete(req.params.id);
};

const addToFavourites = async (req, res) => {

  if (req.body) {
    res.send({
      error: true,
      message: 'Already in favourites',
    });
    return;
  }

  const recipe = Recipe.findByIdAndUpdate(req.body.recipeId,
    { $inc: { 'recipe.likes': 1 } }).exec((err, result) => {
      if (err) {
        return res.status(400).json({ error: err })
      }
      else {
        res.json(result);
      }
    });

  await User.findByIdAndUpdate(req.body.userId, {
    $push: { likedRecipes: req.body.recipeId },
  });

  res.send({
    error: false,
    message: 'New recipe has been liked',
    likedRecipes: recipe
  });
};

const getMostPopular = async (req, res) => {
  const recipes = await Recipe.find().sort({ likes: -1 });

  res.send({
    error: false,
    message: `All recipes from the database`,
    recipes: recipes.slice(0, 6)
  });
};

const getLatest = async (req, res) => {

  const recipes = await Recipe.find().sort({ createdOn: -1 });

  res.send({
    error: false,
    message: `All recipes from the database`,
    recipes: recipes.slice(0, 3)
  });

};

const getByCategory = async (req, res) => {

  let category = req.params.category;

  let recipes = [];

  console.log(category);
  if (typeof category === 'undefined') {
    recipes = await Recipe.find();
  } else {
    recipes = await Recipe.find({ category: category });
  }

  res.send({
    error: false,
    recipes: recipes
  });
};

const myRecipes = async (req, res) => {
  const user = req.body.user;
  let recipes = await Recipe.find({ user: user });

  res.send({
    error: false,
    recipes: recipes
  });
};

module.exports = {
  all,
  byId,
  create,
  update,
  remove,
  addToFavourites,
  getMostPopular,
  getLatest,
  getByCategory,
  myRecipes
}