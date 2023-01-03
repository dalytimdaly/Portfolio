
require 'faker'

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
  url: "yalp",
  attachment: ""
)

Project.create(
  name: "Gregslist - A Craigslist Clone",
  project_length: "",
  description: "",
  url: "gregslist",
  attachment: ""
)

Project.create(
  name: "PicklePartners",
  project_length: "",
  description: "",
  url: "picklepartners",
  attachment: ""
)

