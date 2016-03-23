import React from 'react';
import ResultItem from './ResultItem';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';

function _getState() {
    return {
        list: AppStore.getList(),
        selected: AppStore.getSelected(),
    };
}

var ResultList = React.createClass({
    displayName: 'ResultList',

    getInitialState() {
        return _getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },

    _onClick(id) {
        AppAction.changeActive(id);
    },

    _onChange: function() {
        this.setState(_getState());
    },

    render() {
        var list = this.state.list;

        var renderedList = list.map((card, i) => {
            let isActive = false;

            if (this.state.selected.id === card.id) {
                isActive = true;
            }

            return(
                <ResultItem onClick={this._onClick} card={card} key={i} active={isActive} />
            );
        });

        return(
            <div className="col-sm-8 col-md-9 col-lg-10">
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedList}
                    </tbody>
                </table>
            </div>
        );
    },
});

export default ResultList;
