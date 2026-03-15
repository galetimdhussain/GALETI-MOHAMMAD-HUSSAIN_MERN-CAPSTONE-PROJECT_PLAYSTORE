const Category = require('../models/Category');
const { DEFAULT_CATEGORIES } = require('../utils/constants');
const { serializeCategory } = require('../utils/serializers');

async function ensureDefaultCategories() {
  for (const category of DEFAULT_CATEGORIES) {
    await Category.updateOne(
      { slug: category.slug },
      {
        $set: {
          name: category.name,
          description: category.description,
          isActive: true,
        },
      },
      { upsert: true }
    );
  }
}

async function getCategories() {
  await ensureDefaultCategories();
  const categories = await Category.find({ isActive: true }).sort({ name: 1 });
  return categories.map(serializeCategory);
}

module.exports = {
  ensureDefaultCategories,
  getCategories,
};
