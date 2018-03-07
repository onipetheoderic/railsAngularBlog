$ rails new rails_devise_token_auth --api --database=postgresql

$ rails generate devise_token_auth:install User auth

User will be our model name, and auth will be the endpoint of our user management rest api (ex: /auth/sign_in, /auth/sign_out)

we remove the :confirmable option from the user.rb model

we now create a default user seed

Create a default User seed

We’ll initialise the users table with a default user that will allow us to test our API as we go. In ./db/seeds.rb add the following line:

User.create(email: 'user@example.com', nickname: 'UOne', name: 'User One', password: "monkey67")



$ ng new angular-token-auth --style=sass --skip-tests=true --routing=true
This command will generate a new Angular CLI project named angular-devise-token-auth, will use SASS as default styling format, for the purpose of this tutorial we’ll disable unit test files, and initialise the project with a routing module, because we’ll need at least 2 routes in our app, Welcome Page and Profile Page.


npm install angular2-token --save