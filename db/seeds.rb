# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

30.times do |n|
  name  = Faker::Restaurant.name
  description = Faker::Lorem.paragraph(sentence_count: 3)
  restaurant = Restaurant.create!(name:  name,
               description: description)
  4.times do |i| 
    image_number = rand(1..12)
    url = Rails.root.join("app/assets/images/descarga(#{image_number}).jpeg")
    restaurant.images.attach(io: File.open(url), filename: "restaurant#{restaurant.id}_(#{image_number}).jpeg", content_type: 'image/jpeg')
  end

  10.times do
    Comment.create(username: Faker::Name.name, text: Faker::Lorem.paragraph(sentence_count: 3), restaurant_id: restaurant.id)
  end
end