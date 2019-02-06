class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleIsVisible = this.handleIsVisible.bind(this);
        this.state = {
            showDetails: false
        };
    }

    handleIsVisible() {
        this.setState((prevState) => {
            return {
                showDetails: !prevState.showDetails
            };
        });
    }

    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleIsVisible}>
                {this.state.showDetails ? "Hide details" : "Show details"}
            </button>
            {this.state.showDetails && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showDetails = false;
// const VisibilityToggle = () => {
//     showDetails = !showDetails
//     renderApp();
// };

// const renderApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Visibility Toggle</h1>
            
//             <button onClick={VisibilityToggle}>
//                 {showDetails ? "Hide details" : "Show details"}
//             </button>
//             {showDetails && <p>Hey. These are some details you can now see!</p>}
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// const appRoot = document.getElementById('app');
// renderApp();