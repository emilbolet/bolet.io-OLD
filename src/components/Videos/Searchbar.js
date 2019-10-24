import React from 'react';

export class Searchbar extends React.Component {
    state = {
        term: 'Default text'
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
            <div className="md-form pt-3">
                <label htmlFor="video-search">Video Search</label>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.term} />
            </div>
        )
    }
}