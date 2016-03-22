import React from 'react';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';

function getState() {
    return {
        field: AppStore.getFieldSort(),
        direction: AppStore.getDirectionSort(),
    };
}

var ToolBar = React.createClass({
    displayName: 'ToolBar',

    getInitialState() {
        return getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onClick);
    },

    _onClick: function() {
        this.setState(getState());
    },

    toggleDirrection() {
        if (this.state.direction === 'asc') {
            return 'desc';
        }

        return 'asc';
    },

    handleClickSortByName() {
        AppAction.sorted('name', this.toggleDirrection());
    },

    handleClickSortByAge() {
        AppAction.sorted('age', this.toggleDirrection());
    },

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default" onClick={this.handleClickSortByName}>
                            <i className="icon fa fa-sort-alpha-asc"></i>
                            <span> Sort by name</span>
                        </button>

                        <button className="btn btn-default" onClick={this.handleClickSortByAge}>
                            <i className="icon fa fa-sort-numeric-desc"></i>
                            <span> Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    },
});

export default ToolBar;
