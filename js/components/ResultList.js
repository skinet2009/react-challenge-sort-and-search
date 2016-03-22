import React from 'react';
import ResultItem from './ResultItem';

var ResultList = React.createClass({
    displayName: 'ResultList',

    onClick(id) {
        this.props.select(id);
    },

    render() {
        var renderedList = this.props.list.map((item) => {
            return(
                <ResultItem click={this.onClick.bind(null, item.id)} card={item}/>
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
