# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 # User.create(email: 'user@example.com', nickname: 'UOne', name: 'User One', password: "monkey67")
#the nickname was defaultly generated for us when we used the devise token
#our login would now be email: user@example.com with password monkey67

#rails db:migrate && rails db:seed
#this oneliner would migrate the users table and seed our data in it

User.create(email: 'user@example.com', nickname: 'UOne', name: 'User One', password: "monkey67")


u1 = User.create!(email: 'user8@example.com', password: 'password', name: 'u1', nickname: 'U1international')
u2 = User.create!(email: 'user10@example.com', password: 'password', name: 'u2', nickname: 'U2international')
 
p1 = u1.posts.create!(title: 'First Post', body: 'My name is theoderic and my flows is rhetoretic')
p2 = u1.posts.create!(title: 'Second Post', body: 'Let the mind control the formation by usin the formless to control the tangible')
 #this is becos a post belongs to a User
p3 = u2.posts.create!(title: 'Third Post', body: 'Welcome to my world, Yall, I am what I am')
p4 = u2.posts.create!(title: 'Fourth Post', body: 'Its dj Elixir with Kaya in the skya')