import React from 'react';
import ResultItem from './ResultItem';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';

function getState() {
    return {
        list: AppStore.getList(),
        selected: AppStore.getSelected(),
    };
}

var ResultList = React.createClass({
    displayName: 'ResultList',

    getInitialState() {
        return getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },

    _onClick(id) {
        AppAction.changeActive(id);
    },

    _onChange: function() {
        this.setState(getState());
    },

    render() {
        var list = this.state.list;

        var renderedList = list.map((item, i) => {
            return(
                <ResultItem onClick={this._onClick} card={item} key={i}/>
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
