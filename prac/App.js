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


// const heading  = React.createElement('h1', {id : "heading"}, "Hello from react🚀");
// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(parent);