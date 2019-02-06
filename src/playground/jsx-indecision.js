console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'This is my first ReactApp!',
    options: []
};


const user = {
    name: 'Christian',
    age: 18,
    location: 'Columbus'
};



function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = "";
    }
    renderIndecisionApp();
 };

 const removeAllOptions = () => {
    app.options = [];
    renderIndecisionApp();
}

const addList = () => {

}

// JSX - JavaScript XML
// ternary ? operators are great if you  want to do 2 things 
// Logical & operators are if you just want to do one thing else nothing at all

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000, 50];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderIndecisionApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            {app.options.length > 0 && <p>{app.options.length}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove all</button>
            {
            //    numbers.map((number) => {
            //     return <p key={number}>number: {number}</p>;
            //    })
            }
            <ol>
            {
               app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();