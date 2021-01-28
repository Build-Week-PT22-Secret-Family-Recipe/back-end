
exports.up = async function(knex) {
    await knex.schema.createTable("roles", (table) => {
        table.increments("id");
        table.text("role").notNull().unique();
    })
    
    await knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.text("username").notNull().unique()
        table.text("password").notNull()
        table.integer("role_id").notNull().defaultTo(1).references("id").inTable("roles").onDelete("RESTRICT")
    })

    await knex.schema.createTable("recipes", (table) => {
        table.increments("id");
        table.text("name").notNull().unique()
        table.text("instruction").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id");
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("recipe_ingredients", (table) => {
        table.integer("recipe_id").notNull().references("id").inTable("recipes");
        table.integer("ingredients_id").notNull().references("id").inTable("ingredients")
        table.primary(["recipe_id", "ingredients_id"])
        table.text("quantity").notNull();
    })

};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes");
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("roles");
};
