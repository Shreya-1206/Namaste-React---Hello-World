// div parent
//   div child
//      h1 
//      h2
///  div child2
//      h1
//      h2

const heading = React.createElement("div", {id : "parent"},
                 [React.createElement("div", {id : "child"}, 
                 [React.createElement("h1", {
                    id :"heading",
                }, "Child 1' heading tag 1"), React.createElement("h2", {
                    id :"heading2",
                }, "Child 1' heading tag 2")]), React.createElement("div", {id : "child2"}, 
                [React.createElement("h1", {
                   id :"h1",
               }, "Child 2' heading tag 1"), React.createElement("h2", {
                   id :"h2",
               }, "Child 2' heading tag 2")])]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);