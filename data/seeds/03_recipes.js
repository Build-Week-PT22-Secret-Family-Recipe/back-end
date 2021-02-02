exports.seed = async function(knex) {
  await knex("recipes").insert([
    { category: "breakfast", name: "Cinnamon Baked Doughnuts", instruction: "Preheat the oven to 350 degrees. Spray 2 doughnut pans well. Into a large bowl, sift together the flour, sugar, baking powder, cinnamon, nutmeg, and salt. In a small bowl, whisk together the egg, milk, melted butter, and vanilla. Stir the wet mixture into the dry ingredients until just combined. Spoon the batter into the baking pans, filling each one a little more than three-quarters full. Bake for 17 minutes, until a toothpick comes out clean. Allow to cool for 5 minutes, then tap the doughnuts out onto a sheet pan.  For the topping, melt the 8 tablespoons of butter in an 8-inch saute pan. Combine the sugar and cinnamon in a small bowl. Dip each doughnut first in the butter and then in the cinnamon sugar, either on one side or both sides." },
    {category: "lunch", name: "Spinach Tortellini Soup", instruction: "Bring the stock to a simmer in a large pot over medium heat. Stir in the tortellini and simmer gently for 3 minutes. Stir in the spinach, garlic, tomatoes and dried basil. Season with salt and pepper. Return to a simmer and cook for 2 to 3 more minutes. Serve hot with the grated Parmesan cheese."}
    
  ])
};
