
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "All-purpose flour" },//1
    { name: "Sugar" },//2
    { name: "Baking Powder" },//3
    { name: "Ground Cinnamon" },//4
    { name: "Ground Nutmeg" },//5
    { name: "Kosher Salt" },//6
    { name: "Eggs" },//7
    { name: "Milk" },//8
    { name: "Butter" },//9
    { name: "Vanilla extract" },//10
    { name: "Low Sodium Chicken Stock" },//11
    { name: "cheese tortellini" },//12
    {name: "frozen chopped spinach, thawed and squeezed "},//13
    {name: "minced garlic"},//14
    {name: "Italian-style stewed tomatoes"},//15
    {name: "Dried basil"},//16
    {name: "ground black pepper"},//17
    {name: "Parmesan cheese, grated"},//18
  ])
};
