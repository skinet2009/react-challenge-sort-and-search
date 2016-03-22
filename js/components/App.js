import React from 'react';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';
import ResultList from './ResultList';
import ResultCard from './ResultCard';
import AppActions from '../actions/App';

var App = React.createClass({
    displayName: 'App',

    getInitialState() {
        return {
            list: [],
            selected: {},
        };
    },

    render() {
        return (
            <div className="app container-fluid">
                <SearchBar search={this.search} />

                <ToolBar sorted={this.sorted} />

                <div className="row">
                    <ResultCard />
                    <ResultList />
                </div>

            </div>
        );
    },
});

export default App;
