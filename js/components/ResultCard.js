import React from 'react';
import AppStore from '../stores/AppStore';
import AppAction from '../actions/App';


function _getState() {
    return {
        selected: AppStore.getSelected(),
    };
}

var ResultCard = React.createClass({
    displayName: 'ResultCard',

    getInitialState() {
        return _getState();
    },

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(_getState());
    },

    render() {
        var card;
        var imageSrc;

        if (this.state.selected === 'none') {
            card = {
                name: this.state.selected,
                age: this.state.selected,
                image: this.state.selected,
                phone: this.state.selected,
                phrase: this.state.selected,
            };
            imageSrc = './images/react.svg';
        } else {
            card = this.state.selected;
            imageSrc = `./images/${card.image}.svg`;
        }

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
