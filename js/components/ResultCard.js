import React from 'react';

var ResultCard = React.createClass({
    displayName: 'ResultCard',

    render() {
        var card = this.props.card;
        var imageSrc = `../images/${card.image}.svg`;

        return(
            <div className="col-sm-4 col-md-3 col-lg-2">
                <div className="thumbnail">
                    <img src={imageSrc}/>
                    <div className="thumbnail-caption">
                        <h3>{card.name}</h3>
                        <table className="user-info table table-responsive">
                            <tbody>
                                <tr>
                                    <td>Age:</td>
                                    <td>{card.age}</td>
                                </tr>
                                <tr>
                                    <td>Favorite animal:</td>
                                    <td>{card.image}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{card.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <b>Favorite phrase:</b>
                            <span>{card.phrase}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    },
});

export default ResultCard;
