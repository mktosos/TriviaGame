# TriviaGame
This trivia game uses timer events, multiple functions, loops, jquery, and DOM manipulation.

The game uses timer events to show triva questions about video gaming history that are answered using radio check boxes. Once a user makes a guess or runs out of time, the nex questioned is presented. There is a running tally about correct, wrong and unaswered guesses.

The restart at the end of the game does not work. For some reason having the button actively listening for an .on "click" disrupted the timing of the game. It also seems the game still runs after the game ends as evident in the console.log. Not sure how to stop this. I wa relying on an error to stop the app but then the button wouldn't work.

Credits The game project student developer is Mike Taniguchi.

 License
The MIT License (MIT)

Copyright (c) 2019 Mike Taniguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
