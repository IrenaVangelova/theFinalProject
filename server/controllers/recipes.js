const Recipe = require("../models/recipe");
const response = require("../lib/response_handler");
const User = require("../models/user");
const user = require("../models/user");
const fs = require('fs');

const all = async (req, res) => {
  const recipes = await Recipe.find().populate("user");
  res.send({
    error: false,
    message: "All recipes from the database",
    recipes: recipes,
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
  req.body.image = `images/${req.file.filename}`;
  const recipe = await Recipe.create({
    ...req.body,
  });

  await User.findByIdAndUpdate(req.body.userId, {
    $push: { recipes: recipe._id },
  });

  res.send({
    error: false,
    message: "New recipe has been created",
    recipe: recipe,
  });
};

const update = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if(req.file) {
    fs.unlink('public/' + recipe.image, (err) => {
      if (err) console.log(err);
    })
    req.body.image = `images/${req.file.filename}`;
  }
  else {
    req.body.image = recipe.image;
  }

  await Recipe.findByIdAndUpdate(req.params.id, req.body);

  res.send({
    error: false,
    message: `Recipe with id #${recipe._id} has been updated`,
    recipe: recipe,
  });
};

const remove = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  await Recipe.findByIdAndDelete(req.params.id);

  res.send({
    error: false,
    message: "Recipe has been deleted",
    recipe: recipe,
  });
};

const addToFavourites = async (req, res) => {
  const userId = req.body.userId;
  const recipeId = req.body.recipeId;

  const user = await User.findById(userId, "likedRecipes").exec();

  let exists = user.likedRecipes.some((item) => {
    return item.equals(recipeId);
  });

  if (exists) {
    let update = { $inc: { likes: -1 } };
    let options = { new: true };

    Recipe.findOneAndUpdate({ _id: recipeId }, update, options, function (err, response) {});

    await User.findOneAndUpdate(
      { _id: userId },
      {
        $pull: { likedRecipes: recipeId },
      }
    );

    res.send({
      error: false,
      message: "Unliked",
    });
  } else {
    let update = { $inc: { likes: 1 } };
    let options = { new: true };

    Recipe.findOneAndUpdate({ _id: recipeId }, update, options, function (err, response) {
      console.log(response);
    });

    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: { likedRecipes: recipeId },
      }
    );

    res.send({
      error: false,
      message: "New recipe has been liked",
    });
  }
};

const getMostPopular = async (req, res) => {
  const recipes = await Recipe.find().sort({ likes: -1 });

  res.send({
    error: false,
    message: "All recipes from the database",
    recipes: recipes.slice(0, 6),
  });
};

const getLatest = async (req, res) => {
  const recipes = await Recipe.find().sort({ createdOn: -1 });

  res.send({
    error: false,
    message: "All recipes from the database",
    recipes: recipes.slice(0, 3),
  });
};

const getByCategory = async (req, res) => {
  let category = req.params.category;
  let page = req.params.page;

  if (page === null || typeof page === undefined) {
    page = 1;
  }

  let perPage = 9;
  let length = 1;

  let recipes = [];

  if (typeof category === "undefined") {
    recipes = await Recipe.find();
    length = recipes.length;
  } else {
    length = await (await Recipe.find({ category: category })).length;
    recipes = await Recipe.find({ category: category })
      .skip(perPage * page)
      .limit(perPage);
  }

  let totalPages = Math.ceil(length / perPage);

  res.send({
    error: false,
    recipes: recipes,
    totalPages: totalPages,
    length: length,
    page: page,
  });
};

const myRecipes = async (req, res) => {
  const user = req.body.user;
  let recipes = await Recipe.find({ user: user });

  res.send({
    error: false,
    recipes: recipes,
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
  myRecipes,
};