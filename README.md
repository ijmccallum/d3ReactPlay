[How D3 does rendering, kind of](https://bost.ocks.org/mike/join/)

- selectAll: define a data visualization component name that will be used to represent data (doesn't exist yet). Should be something like "virtual"
- data: yep, good name
- enter: data points that don't have corresponding svg els, could be something like incoming. Enter is probably ok actually.
  - append: adds the svg el for this new data point. Should probably take the chained parent by default in enter and allow overrides within enter's args so append would be redundant... possibly?
- update: data points that have svg els and their data has changed, could be something like existing.
- exit: Left over svg els whose data points have been removed, could be something like exiting. (I like the ing)

[Ways of using D3 in React](https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/):

- D3.js Within React: make a component that uses D3, block the should update by always returning false
- React Faux DOM: give D3 a fake dom, then pass the result to react to render (this smells funny)
- Lifecycle Methods Wrapping: hook up the react lifecycle methods to the D3 enter, update, exit "selections" (like it!)
- React for the DOM, D3 for Math: only use the D3 submodules, pipe their results into a react render method (really need to know you're D3 for this one.)

[Lifecycle Methods Wrapping](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)
