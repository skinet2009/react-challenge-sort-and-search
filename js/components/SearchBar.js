import React from 'react';

var SearchBar = React.createClass({
    displayName: 'SearchBar',

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="searchbar form-group">
                        <input onKeyUp={this.props.search} type="text" className="form-control" placeholder="Search people by name..." />
                    </div>
                </div>
            </div>
        );
    },
});

export default SearchBar;
