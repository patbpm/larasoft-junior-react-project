# Welcome to Larasoft's Hands-on Skills Test

This is a brand new React App with no functionality built in.
You will need to FORK this repo on GitHub, which will make a copy that you can edit and share.

**Some tips on doing well at this project:**

- work as efficiently as you can: keep things moving forward, but write good code and don't hack things in - separate things out into components well to demonstrate your ability to program in an object-oriented way
- **don't get stuck!** The hours will fly by! As soon as you don't know how to do something or feel like you're not moving forward, drop me a voice note on WhatsApp. We're not trying to test that you know how to do everything by yourself, we're wanting to see someone who is able to work in team well, ask for help when needed, communicate well and keep things moving forward.
- read these instructions carefully: make sure you understand all 4 phases well before you start phase 1. Don't stress about not finishing - there is more here than can be done in the time allotted, the goal is to keep moving and get as far as you can, while doing good quality work too.

## Part 1: Generating the Data we will use in the App

In the real world, we'll be getting this from a database. For now, you just need to generate a JSON file, once-off that contains an array of 500 vehicles, made up of random data. Make a `utility` folder to save the code you use to generate this file.

You should use https://github.com/marak/Faker.js/ to generate the following fields for each Vehicle:

- `manufacturer:` from Faker's `vehicle.manufacturer`
- `model:` from Faker's `vehicle.model`
- `type:` from Faker's `vehicle.type`
- `fuel:` from Faker's `vehicle.fuel`
- `colour:` from Faker's `vehicle.colour`

In addition to the above, please also include the following fields:

- `mileage:` a random integer between 0 and 50,000
- `tyres:` randomly select either 'summer', 'winter', or 'winter-spike' for each vehicle
- `registration:` a random selection of 3 capital letters, a dash, and 3 digits: e.g. CMY-403, ZRR-238, LTR-056

## Part 2: Displaying the Data in a Table in the App

**NB: do not** put ANY effort into making this look good - no CSS and styling, we just want it to work for now!
**NB: do not** use an imported library to display the table, use only JSX.

Just display all the data from the JSON file in the App - 8 columns, and 500 rows (plus the header row)

## Part 3: Make the table look more presentable

Apply whatever styling you would like, to make the table look more presentable to a user - apply a _'mobile first'_ mindset: assume that more people will use this on their phones than on a computer, so it needs to be presented well on a phone. Use any type of CSS you feel comfortable with, or styled-components. Don't install and use any frameworks like Bootstrap, Material, etc - only use CSS type styling.

## Part 4: Add some intelligent functionality to the app

Time will be running out now, so choose whichever of these you feel most confident you can implement quickly.

- filter by license plate (typing a '9' must show any vehicle with a '9' in, '90' should show any vehicle with '90' in, 'CMY' any vehicle with 'CMY' in etc)
- filter by fuel type
- filter by manufacturer
- filter by tyre type
- combine the above: e.g. filter by fuel AND manufacturer AND tyre AND license plate
