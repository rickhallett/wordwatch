# FED Test

## Challenge

Create a word cloud that displays the topics in the `topics.json` file.

- The label.property of each topic should be the 'word' in the word cloud
- Each topic should have one of 6 different text sizes, with the most popular topics largest, and least popular smallest
- A topic with a sentiment score > 60 should be displayed in green
- A topic with a sentiment score < 40 should be displayed in red
- Other topics should be displayed in grey
- When a topic is clicked, metadata about the topic should be displayed (total volume, and how that breaks down into positive, neutral and negative sentiment)

- Your implementation should be provided as a public GitHub repository, with instructions on how to run the code locally.
- Your implementation should be of a quality that you consider production-ready.
- Please use any libraries or frameworks that you consider suitable for the task

We will be looking at:

- The structure of the code and any markup
- The modularity of the code and any markup
- The suitability of the chosen technologies
- Tests
- Documentation

### Additional Information

The browser statistics for the target site:

```
Chrome  (62+)         - 42%
Safari  (11+)         - 23%
MS Edge (40+)         - 14.5%
Firefox (57+)         - 20%
Other                 - 0.5%
```

---

## Implementation

### Planning

- I thought it might be a good idea to scribble down the various thoughts that have gone through my head before sitting down to begin this challenge. At least that way, Brandwatch have some insight into what happened in between the task input, and solution output...I believe it was Skinner who was famous for treating the mind as a black box. Turns out he was massively wrong, but thats really a discussion for another day...

- Initially, I reached out mentally to a bunch of typical tools I might use to approach a coding problem. "What JavaScript framework would be most suitable?", "It would sure be nice to bring in some of the reassurance of Typescript", "maybe Material-UI would give it an appealing look without much fuss". Secondly, I found myself wondering which choices would be most _impressive_. Which technology choices would demonstrate the deepest learning, or best express my current opinions in the rapidly changing landscape of web development? There are, after all, thousands of tools that could be used. All of these considerations lead me to one final question; ["what technologies do I actually _need_ to solve the task spec?](https://stackoverflow.blog/2020/02/03/is-it-time-for-a-front-end-framework/) Given the nature of the task, it would not be especially difficult to create a basic MVC pattern in pure JavaScript (primarily for code organisation, semantic clarity and testability), create components at runtime in JavaScript and append/substract from the DOM as needed. Some basic CSS3 could get us to the given wireframe, with no need for the overhead of JavaScript frameworks, CSS frameworks or build steps.

- This led me to think initially that perhaps the optimal solution was just that, ES6, CSS3 and HTML5. If a coding task does not have complex DOM manipulation, complex state, or many interacting parts, then why add additional complexity? My own familiarity and/or preferences don't seem to be particularly good choices, given that this code would be going into production and could stick around for a long time. If I choose a framework, future developers will need to understand that framework. As useful as CSS3 frameworks are, they can be a headache when incorporating into existing code bases.

- Essentially, the less code I write, the better. A few semantic HTML elements for accessibility, constructed with classes to modify their appearence based on the incoming topics data. That's basically it, right? This could be done in one script file, one styles file and one HTML file, easily deployable into any existing application.

- Another consideration is testing. To what degree can I unit test (and browser test) an application built with just vanilla technologies? There is nothing in principle that would stop me (document.querySelectorAll covers almost every DOM usecase...), but would it be faster to develop and more robust if I used a tried and true testing library? For an app of this size, it is arguable that a [simple array of functions](https://github.com/rickhallett/jstinytest) that asserts render output, and response to a click event is enough. Another function that iterates this array, aggregates results and plops them out in the console would be enough!

- To what degree should my code consider the ease with which additional features may be added over time? If this was an MVC that was likely to be developed further overtime, it might be better to start with a JavaScript framework, as it will make componentisation easier in the future. Testing should also be mostly focused on the end user experience, not the implementation details.

- Is it sufficient, for the time being, to just load the JSON file into memory locally? The spec doesn't mention requesting this over HTTP. Presumably in a real world usecase, it is almost certain the data would come from a remote source, but we don't know what that is yet. Provided the data retrieval code is decoupled from the actual source, we can easily switch that out later by means of interface.

- Why do I feel such a desire to deploy a built solution that pulls the JSON data remotely from another server, with extra features like choosing the data set. Honestly I'm like a _dog digging for bones_.

### This leaves me with two primary choices

1. Vanilla JS, CSS3 and HTML5. No unncessary layers of abstraction; if the project stays within this scope, it doesn't need anything else.
2. A framework like Preact, giving me (and future developers) the benefit of Typescript, established and tested patterns the shadow DOM, Jest/Enzyme/preact-testing-library, the benefit of good design decisions that come OOTB from CSS frameworks and a self contained project that can automatically bundle up and optimise all code ready for production.

So, if I was building it just for my own use, as a one off, I would choose option 1. I did a preliminary browser check to make sure I could use ES6 modules and other important features within the provided demographic. But when would a silo code situation like this arise in a team of 130+ engineers at Brandwatch? And doesn't Brandwatch actively encourage the experimentation with other technologies to find improvements? I've never used Preact before, but 3kb shipped is impressive. My production build will be tiny, and it's the opportunity to learn something else within my chosen specialisation.

And so, with that, I choose option 2. React, Typescript, Tailwind, React Testing Library.

---

### Browser Functionality Analysis

[ES6](https://caniuse.com/?search=es6)
Chrome: 51+
Safari: 10+
Firefox: 54+
Edge: 15+
Other: Most mobile device browsers are likely to handle ES6 features

[ES Modules](https://caniuse.com/es6-module)
Chrome: 61+
Safari: 11+
Firefox: 60+
Edge: 16+
Other: Most mobile device browsers can handle the ES module system.

[async/await](https://caniuse.com/?search=async)
Chrome: 55+
Safari: 11+
Firefox: 52+
Edge: 15+
Other: Most mobile device browsers are likely to handle modern approaches to asynchronous code. Let's avoid callback hell please.

[Flexbox](https://caniuse.com/?search=flex)
Chrome: 21+
Safari: 10+
Firefox: 28+
Edge: 12+
Other: Most mobile device browsers are likely to handle Flexbox

---

### User Stories

- "As a user I want to see a word cloud of my topics data to more easily analyse both popularity and sentiment"
- "As a user I want to be able to see additional metadata on these topics at the click of a button"
- "As a user I want to finish work slightly earlier on Fridays"

---

## Challenges and solutions

- Challenge: Attempted to construct a re-usable TopicElement component that could generate HTML on the fly, see commit history. This ended up proving more problematic than it was worth.
- Solution: Reverted back to separate component for each topic popularity.

- Challenge: Jest kept throwing error about illegal hooks at the top of App.jsx. The [React docs](https://reactjs.org/warnings/invalid-hook-call-warning.html) and other searches didn't provide a clear solution; attempted various combinations of custom hooks, checking for React/react-dom duplicate object instances and implementing act() within the relevant test.
- Solution: removing all setState from App render cycles

- Challenge: Getting react testing library to wait for wordcloud re-render
- Solution: It was a case of making better sense of the react-testing-library, and using data-id selectors. Whilst this is not ideal, I found it difficult and laboriuous to find ways of meeting the use case with the semantic query API function set.

---

## If I had more time...

1. Make tests more efficient by mocking the 'api' call, as opposed to processing the entire topics.json each time.
2. Screenshot tests for layout changes
3. Look for a way to dry up topic element set up and testing; its readable, but very repetitive
4. Improve the responsive styling; there are inline element wrapping errors depending on the order of topic element sizes

In retrospect, I could have done this quicker with vanilla JavaScript; the unfamiliar abstractions of React/react-testing-library probably slowed me down 5x.

More than any other coding experience, this has demonstrated to me the value of creating tests DURING development, not just after..!

## Running instructions

Clone repository:

`git clone https://github.com/rickhallett/wordwatch.git`

Install dependencies:

`cd wordwatch`

`npm install`

Run application:

`npm run start`

Run tests:

`npm run test`
