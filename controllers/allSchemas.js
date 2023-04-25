import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";

export async function getAll(req, res, next) {
  try {
    const categories = await SubCategory.find({});
    const categoryData = [];
    for (const category of categories) {
      const products = await Product.find({ subCategory: category.id });
      categoryData.push({
        category: category,
        products: products,
      });
    }
    res.send({ message: categoryData.products});
  } catch (err) {
    next(err);
  }
}
