import React from 'react';
import ResultList from './ResultList';
import ResultCard from './ResultCard';

var ResultBody = React.createClass({
    displayName: 'ResultBody',

    render() {
        console.log(this.props.list);

        return(
            <div className="row">
                <ResultCard />
                <ResultList />
            </div>
        );
    },
});

export default ResultBody;