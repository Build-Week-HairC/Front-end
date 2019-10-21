

# Front-end

Clone this document and answer the prompts to the best of your team's ability 

# Proposal

---

## What problem does your app solve?

App for new cannabis consumers (especially those trying to get off of pharmaceuticals) who want to use cannabis as a means to battle medical conditions and ailments. Help patients find the right strains, dosing, intake method and intake schedule! Use user data along with strain data to build ML models to guide recommendations.

- Be as specific as possible; how does your app solve the problem?

It allows new people to become acquainted with cannabis and find the specific strains that suites their needs. Allows the users to keep track of previous strains so they know what was able to help them and others with the same conditions. 

- What is the mission statement?

Provide people with accurate and reliable information so they can make an informed decision when choosing a strain for their needs.

## Features

---

- What features are required for your minimum viable product?

- user creation and login
- Form to gather data from the user to submit to the DS API
- User can save response from the DS API to the Web backend in the user's profile
- User can view saved responses and filter them in a useful way
- User can edit/delete saved responses in the user's profile.
- strain recommender
- save recommendations
- age verification
- Source and analyze data to better understand the reported effects of different cannabis strains/types
- Given this, create a model to predict which strains/types a user would enjoy based on their input (desired effects). Can use any techniques you wish.
- Make the recommendations accessible to the rest of the team via a Flask API or equivalent.

- What features may you wish to put in a future release?

- .link user to dispensary that has product that fulfills their needs
- pre-searched static categories (top 5 relaxing for example)
- Improve model performance by sourcing additional data and/or tuning hyperparameters

- What do the top 3 similar apps do for their users?

- Leafly
- WikiLeaf
- WeedMaps

## Design - Planning

---

*Optional but highly recommended*
*Please refer to this document:*

[Build Weeks: Planning & Design Worksheet (How to build a beautiful application)](https://www.notion.so/aabd4ef25a184a2085e511ce93480c0f)

- What design system will you use?

- What will your user flow be? 

- What is the URL to your wireframes?

# Frameworks - Libraries

---

- What 3rd party frameworks/libraries are you considering using?

- Formik, Axios, Styled-Components
- DS: Spacy, Gensim, Scikit-Learn
- Backend: Oauth2

- Do APIs require you to contact its maintainer to gain access?

- None

- Are you required to pay to use the API?

- No

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)

- N/A

# For Data Scientists

---

- Describe the Established data source with at least rough data able to be provided on day 1.

- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.

- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)

- right strains, dosing, intake method and intake schedule

- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

- JSON

# Target Audience

---

- Who is your target audience? Be specific.

- 21 - 99
- Adults who are relatively inexperienced with cannabis and are curious to learn more.
- Those who want to use cannabis as a means to battle medical conditions and ailments

- What feedback have you gotten from potential users?

- Have you validated the problem and your solution with your target audience? How?

## Research

---

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

## Prototype Key Feature(s)

---

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

- DS API returns recommendation - 12hr (Tuesday 1pm)
- Backend Endpoints (Login, Signup) 8hr (Monday 5pm)
- FrontEnd (Request Shape) 4hr (Monday 2pm)
- Backend Endpoints (Save Responses) 8hr (Tuesday 5pm)
- Landing Page (First Designs)

