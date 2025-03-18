# WPM Measure

## To Do

### REACT
- [ ] Div to hold the paragrah
- [ ] Div to hold individual word
- [ ] Div to hold each letter
- [ ] invisible input to check users words
- [ ] Stats page that displays upon completion
- [ ] Cursor following current selected letter
- [ ] Only display 3 lines of words (this can be adjusted by the user)

#### SCSS
- [ ] Styling for correct letter/ word
- [ ] Styling for incorrect letter/ word


##### TS
- [ ] 60 second timer, this can be adjusted by user
  - [ ] Timer starts as soon as user types first letter
- [ ] Calculate wpm upon time completion (can this be tracked in real time too?)
- [ ] 

###### Backend
- [ ] User authentication using OAuth
- [ ] Leaderboard
- [ ] Quote / text submission
- [ ] Quote / challenge of the day + Leaderboard


Generate list of random words -> 
Each word goes into a div -> each letter in a div
Current letter is held as a variable. if 

if(ExpectedLetter = UserInput){
    Letter div updated with the 'correct' class styling
} Else{
    Letter div updated with the 'incorrect' class styling
}

if(All Letters in a word = correct){
    update word div to correct and move on to next generated word
}