//Pre-hashed password for "abc123"
const hashedPassword = "$2a$12$gidvflLXiaXpoNrYsLGFe.f2vwJPIERvmb8LP0FgYzeyjeQMpK0Va";

exports.seed = async function(knex) {
  await knex("users").insert([
    { username: "vicky", password: hashedPassword},
    { username: "john", password: hashedPassword},
    { username: "Nelson", password: hashedPassword},
    { username: "Noah", password: hashedPassword},
  ])
};
