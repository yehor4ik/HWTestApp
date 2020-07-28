import React, { Component } from 'react';

import './auto-list-item.css';

export default class AutoListItem extends Component {
    

    render() {

        const { model, color } = this.props.labelCars;

        const styles = {
            createColor: {
                color: color
            }
        }



        return (
            <span className="auto-list-item">
                <span style={styles.createColor}>{model}</span>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={this.props.onRemove}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
            
        );
    };
};
