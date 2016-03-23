import React from 'react';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';

function _getState() {
    return {
        order: AppStore.getSortingOrder(),
    };
}

var ToolBar = React.createClass({
    displayName: 'ToolBar',

    getInitialState() {
        return _getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onClick);
    },

    _onClick: function() {
        this.setState(_getState());
    },

    _toggleSortingOrder() {
        if (this.state.order === 'asc') {
            return 'desc';
        }

        return 'asc';
    },

    _handleClickSortByName() {
        AppAction.sorted('name', this._toggleSortingOrder());
    },

    _handleClickSortByAge() {
        AppAction.sorted('age', this._toggleSortingOrder());
    },

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="toolbar">
                        <button className="btn btn-default" onClick={this._handleClickSortByName} >
                            <i className="icon fa fa-sort-alpha-asc"></i>
                            <span> Sort by name</span>
                        </button>

                        <button className="btn btn-default" onClick={this._handleClickSortByAge} >
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
