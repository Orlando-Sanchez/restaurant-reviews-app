# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

50.times do |n|
  name  = Faker::Restaurant.name
  description = Faker::Lorem.paragraph(sentence_count: 3)
  restaurant = Restaurant.create!(name:  name,
               description: description)
  restaurant.images.attach(io: File.open('app/assets/images/descarga (1).jpeg'), filename: 'descarga (1).jpeg', content_type: 'image/jpeg') 

end