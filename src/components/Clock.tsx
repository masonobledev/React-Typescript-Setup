import React from 'react';

//this is a 'Type Alias' which houses the state of our application
type ClockState = {
    time: Date
};

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
    //'?' denotes that the prop is optional
};

//We've passed in a prop first, then a state
class Clock extends React.Component <AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            time: newDate()
        }
    }

    //We're adding a method that will update our state
    tick() {
        this.setState({
            time: newDate()
        })
    };

    //this lifecycle method is initializing our state
    componentWillMount() {
        this.tick();
    };

    //this lifecycle method calls a setInterval method that will update state every second
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    render(){
        return(
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                {/* <p>{this.props.testProp}</p>
                <p>{this.props.optionalProp}</p> */}
                {/* We're grabbing our state property of time and calling the 'toLocaleTimeString' method -
                it returns a string representing the time portion of the given Date */}
            </div>
        )
    }
}

export default Clock;