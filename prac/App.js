// make this in React.createElement
{/* <div>
  <div className="child">
    <h1></h1>
  </div>
</div> */}  

const parent = React.createElement('div', {id:"parent"}, 
               React.createElement('div', {id:"child"}, 
               React.createElement('h1', {id:"heading"}, "Hello From React Element 😁")))

console.log(parent);

const grandParent =  [React.createElement('div', {id:"parent"}, 
React.createElement('div', {id:"child"}, [React.createElement('h1', {id:"heading"}, "Hello From React Element 😁"),
React.createElement('h2', {id:"heading"}, "Hello 2 From React Element 😁")])),
React.createElement('div', {id:"parent"}, 
React.createElement('div', {id:"child"}, [React.createElement('h1', {id:"heading"}, "Hello From React Element 😁"),
React.createElement('h2', {id:"heading"}, "Hello 2 From React Element 😁")]))]

// const heading  = React.createElement('h1', {id : "heading"}, "Hello from react🚀");
// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(grandParent);