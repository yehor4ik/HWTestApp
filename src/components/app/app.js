import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import AutoList from '../auto-list';
import SettingsPanel from '../settings-panel';

export default class App extends Component {

    maxId = 228;

    state = {
        cars: [
            {
                id: 0,
                model: 'Mazda',
                color: 'red',
            },
            {
                id: 1,
                model: 'Toyota',
                color: 'red',
            },
            {
                id: 2,
                model: 'WV',
                color: 'blue',
            },
            {
                id: 3,
                model: 'Mercedes',
                color: 'red',
            },
        ],
        term: '',
    };

    onRemove = (id) => {
        this.setState(({cars}) => {
            const _id = cars.findIndex((el) => el.id === id);

            const newArr = [
                ...cars.slice(0, _id),
                ...cars.slice(_id + 1)
            ];

            return {
                cars: newArr
            };
        });
    };

    onAddItem = (text) => {
        this.setState(({ cars }) => {

            if(text.length === 0) return;

            return {
                cars: [
                    ...cars,
                    {
                        id: this.maxId++,
                        model: text,
                        color: 'blue'
                    }
                ]
            };
        });
    }

    onFilter = (color) => {
        this.setState(({cars}) => {
            const filterColor = cars.filter((el) => el.color === color);
            return {
                cars: [
                    ...filterColor
                ]
            };
        });
    };

    onChangeSearch = (term) => {
        this.setState({term})
    }; 

    search(items, term) {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.model.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
        

    };

    render() {

        const { cars, term } = this.state;
        const visibleItems = this.search(cars, term);

        return (
            <div className="app">
                <Header />
                <div className="container row">
                    <AutoList cars={visibleItems} onDelete={this.onRemove}/>
                    <SettingsPanel addCar={this.onAddItem} onFilter={this.onFilter} onChangeSearch={this.onChangeSearch}/>
                </div>
            </div>
        );
    };

};