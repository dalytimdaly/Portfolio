# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

skills = ["pro", "advanced", "intermediate", "beginner"]

100.times do
  User.create(
    username: Faker::Internet.email,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    area: "Denver, CO",
    phone_number: Faker::PhoneNumber.cell_phone,
    bio: Faker::Hipster.paragraph(sentence_count: 8),
  )
end

Project.create(
  name: "Yalp - A Yelp Clone",
  project_length: "",
  description: "",
  url: "yalp"
)

Project.create(
  name: "Gregslist - A Craigslist Clone",
  project_length: "",
  description: "",
  url: "gregslist"
)

Project.create(
  name: "PicklePartners",
  project_length: "",
  description: "",
  url: "picklepartners"
)

