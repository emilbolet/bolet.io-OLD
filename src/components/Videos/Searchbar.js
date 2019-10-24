import React from 'react';

export class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="mb-5">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.term} />
            </div>
        )
    }
}