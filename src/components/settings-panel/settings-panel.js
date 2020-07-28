import React, { Component } from 'react';

import './settings-panel.css';

export default class SettingsPanel extends Component {

    state ={
        label: '',
        term: '',
    }

    colorForFilter = [
        {
            id: 1,
            name: 'RED',
            color: 'red'
        },
        {   
            id: 2,
            name: 'BLUE',
            color: 'blue'
        }
    ];

    onAddCar = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCar(this.state.label)
        this.setState({
            label: ''
        });

    };

    createFilter = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onChangeSearch(term)

    };

    render() {

        const { onFilter } = this.props;
        

        return (

            <div className="settings-panels col">
                <div className="button-filter">
                    <h5>FILTER</h5>
                    <button type="button" 
                        className="btn btn-primary btn-lg" 
                        onClick={() => onFilter('blue')}>Filter Color</button>
                    <input type="text"
                        className="form-control search-input"
                        placeholder="type to search"
                        value={this.state.term} 
                        onChange={this.createFilter}/>
                </div>
                
                <div className="add-form">
                    <h5>ADD NEW CAR</h5>
                    <form className="item-add-form d-flex" 
                        onSubmit={this.onSubmit}>
                        <input type="text"
                            className="form-control"
                            onChange={this.onAddCar}
                            placeholder="What car are you adding?"
                            value={this.state.label}/>

                        <button 
                            className="btn btn-outline-secondary"
                            >Add
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
