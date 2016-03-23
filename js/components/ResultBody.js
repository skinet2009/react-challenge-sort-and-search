import React from 'react';
import ResultList from './ResultList';
import ResultCard from './ResultCard';

var ResultBody = React.createClass({
    displayName: 'ResultBody',

    render() {
        return(
            <div className="row">
                <ResultCard />
                <ResultList />
            </div>
        );
    },
});

export default ResultBody;