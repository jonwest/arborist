function getFavouriteTree(req, res, next) {
  // They remind me of Sideshow Bob
  const favouriteTree = {
    "myFavouriteTree": "Weeping Willow"
  };

  res.json(favouriteTree);
  next();
};

module.exports = getFavouriteTree;
