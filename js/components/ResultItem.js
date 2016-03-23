import React from 'react';

var ResultItem = React.createClass({
    displayName: 'ResultItem',

    getInitialState() {
        return {
            active: this.props.active,
        };
    },

    _handleClick() {
        this.props.onClick(this.props.card.id);
        this.setState({
            active: !this.state.active,
        });
    },

    componentWillReceiveProps(nextProps) {
        this.setState({
            active: nextProps.active,
        });
    },

    render() {
        var card = this.props.card;
        var imageSrc = `./images/${card.image}.svg`;

        return(
            <tr onClick={this._handleClick} className={this.state.active ? 'success' : ''} >
                <th>
                    <img className="user-image" src={imageSrc} />
                </th>
                <th>{card.name}</th>
                <th>{card.age}</th>
                <th>{card.phone}</th>
            </tr>
        );
    },
});

export default ResultItem;
