# Tandem-SE-Apprentice-Challenge-2020

The challenge was to create a trivia game where users could view questions and select an answer from multiple choices.

## How to Run Code
This project was bootstrapped with create-react-app
```npm start```
Runs app in dev mode to be viewed at [http://localhost:3000](http://localhost:3000)

## Acceptance Criteria
- Questions and their corresponding answer choices can be viewed at one time.
- Questions do not duplicate.
- Only one answer of four possible choices can be selected.
- The correct answer must be revealed after a user has submitted their answer 
- A user can see the score they received at the end of the round.

## Known Issues
In order to create a round of 10 questions I generated a random array to shuffle the questions which presented a problem with duplicate questions. None of the solutions I tried guaranteed a game free of duplicates but I decided to risk duplicates rather than create a game where every round has the same questions in the same order. Also, I tried multiple different ways to deselect the previous choice selected but could not solve that issue as well.

## Future Improvements
I would definitely work to solve my aforementioned issues. Additionally, I would add a timing feature where the incorrect answers disappear as time goes down leaving the correct answer as time is up.
