import React from 'react';
import ReactDOM from 'react-dom';
const App = props => {
    return;
};
class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 0,
            addAmount: '',
            waitlistedStudents: 0,
            addWaitAmount: ''
        };
    }
    increment() {
        this.setState({ enrolledStudents: this.state.enrolledStudents + 1 });
    }
    incrementAddMultiple() {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount)
        });
    }
    incrementAddtwo() {
        this.setState({ waitlistedStudents: this.state.waitlistedStudents + 1 });
    }
    incrementAddtwo2() {
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addWaitAmount)
        });
    }


    render() {
        return (
            <div>

                <h1>Enrolled Students: {this.setState.enrolledStudents}</h1>
                <button onClick={this.incrementEnrolledStudent.bind(this)}>Add 1 Enrolled Student</button>

                <h3>Add Waitlist Students</h3>
                <input type="number" onChange={event => this.setState(addEStudent: event.target.value)} value=
               {this.state.addEStudent}>/
                <button onClick={this.addMulToStudent.bind(this)}>Add 1 E Student</button>


                <h1>Enrolled Waitlist Students: {this.state.waitlistStudent}</h1>
            <button onClick={this.incrementwaitlistStudent.bind(this)}>Add 1 W Student</button>

            <h3>Add Multiple Waitlisted Students:</h3>
            <input type="number" onChange={event => this.setState({addToStudent: event.target.value})}
            value= {this.state.addWStudent}/>
            <button onClick={this.addMulToStudent.bind(this)}>Increased Students</button>
            
            </div>
        );
    }
    ReactDOM.render(<App />, document.getElementById('root'));