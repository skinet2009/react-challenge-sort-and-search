import React from 'react';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';

function getState() {
    return {
        list: AppStore.getList(),
        selected: AppStore.getSelected(),
        text: AppStore.getSearchText(),
    };
}

var SearchBar = React.createClass({
    displayName: 'SearchBar',

    getInitialState() {
        return getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getState());
    },

    handleChange(event) {
        AppAction.changeText(event.target.value);
    },

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="searchbar form-group">
                        <input onKeyUp={this.handleChange} type="text" className="form-control" placeholder="Search people by name..." />
                    </div>
                </div>
            </div>
        );
    },
});

export default SearchBar;
