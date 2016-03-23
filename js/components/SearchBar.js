import React from 'react';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';

function _getState() {
    return {
        list: AppStore.getList(),
        selected: AppStore.getSelected(),
        text: '',
    };
}

var SearchBar = React.createClass({
    displayName: 'SearchBar',

    getInitialState() {
        return _getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({
            text: this.state.text,
        });
    },

    _handleChange(event) {
        AppAction.changeText(event.target.value);
        this.setState({
            text: event.target.value,
        });
    },

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="searchbar form-group">
                        <input type="text" onChange={this._handleChange} value={this.state.text} className="form-control" placeholder="Search people by name..." />
                    </div>
                </div>
            </div>
        );
    },
});

export default SearchBar;
