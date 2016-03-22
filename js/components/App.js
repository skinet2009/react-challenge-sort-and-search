import React from 'react';
import SearchBar from './SearchBar';
import ToolBar from './ToolBar';
import ResultList from './ResultList';
import ResultCard from './ResultCard';

var App = React.createClass({
    displayName: 'App',

    getInitialState() {
        return {
            list: [],
            selected: {},
        };
    },

    componentDidMount() {
        var list;
        var selected;

        fetch('./data.json').
            then((response) => {
                response.text().
                    then((responseText) => {
                        list = JSON.parse(responseText);
                        selected = list[0];

                        this.setState({
                            list,
                            selected,
                        });
                    });
            }, (error) => {
                console.log(error);
            });
    },

    sorted() {

    },

    search() {

    },

    selectItem(id) {
        this.setState({
            selected: this.state.list[id],
        });
    },

    render() {
        return (
            <div className="app container-fluid">
                <SearchBar search={this.search} />

                <ToolBar sorted={this.sorted} />

                <div className="row">
                    <ResultCard card={this.state.selected}/>
                    <ResultList list={this.state.list} onSelect={this.selectItem}/>
                </div>

            </div>
        );
    },
});

export default App;
