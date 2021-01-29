
exports.seed = async function (knex) {
  await knex("recipes").del();
  await knex("ingredients").del();
  await knex("recipe_ingredients").del();
  await knex("users").del();
  await knex("roles").del();
};