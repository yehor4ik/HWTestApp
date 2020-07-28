import React, { Component } from 'react';

import './auto-list.css';
import AutoListItem from './auto-list-item';

export default class AutoList extends Component {
    
    render() {

        const { cars, onDelete } = this.props ;

        const elementsCar = cars.map((item) => {
            
            const { id, ...labelCars } = item
            
            return (    
                    <li key={id} className="color-border list-group-item">
                        <AutoListItem labelCars={labelCars} onRemove={() => onDelete(id)} />
                    </li>
            )
        });

        return (

            <div className="auto-list col">
                <ul className="list-group">
                    {elementsCar}
                </ul>
            </div>

        );
    };
};
