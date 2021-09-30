import Category from "./models/categories.js";
import productCategory from "./models/productCategories.js";
import Product from "./models/products.js";
import Review from "./models/reviews.js";
import User from "./models/users.js";



Product.hasMany(Review); 
Review.belongsTo(Product);

Product.belongsToMany(Category, {
    through: { model: productCategory, unique: false }, 
  });
  Category.belongsToMany(Product, {
    through: { model: productCategory, unique: false },
  });

  User.hasMany(Review); 
Review.belongsTo(User);


export default { Review, Product, Category, User };