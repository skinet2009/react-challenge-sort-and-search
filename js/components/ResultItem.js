import React from 'react';

var ResultItem = React.createClass({
    displayName: 'ResultItem',

    render() {
        var item = this.props.card;
        var imageSrc = `../images/${item.image}.svg`;

        return(
            <tr onClick={this.props.click}>
                <th>
                    <img className="user-image" src={imageSrc}/>
                </th>
                <th>{item.name}</th>
                <th>{item.age}</th>
                <th>{item.phone}</th>
            </tr>
        );
    },
});

export default ResultItem;
