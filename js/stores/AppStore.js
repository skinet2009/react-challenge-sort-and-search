import Dispatcher from '../dispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import stabData from './stab';

var CHANGE_EVENT = 'change';
var _data = {
    list: stabData,
    selected: stabData[0],
    sorting: {
        order: '',
    },
};

function changeActive(id) {
    _data.list.forEach((card) => {
        if (card.id === id) {
            _data.selected = card;
        }
    });
}

function changeText(text) {
    var newList = [];
    var findText = text.trim().toLowerCase();

    stabData.findIndex((card, i) => {
        let name = card.name.toLowerCase();
        let phrase = card.phrase.toLowerCase();

        if (name.indexOf(findText) >= 0 ||
            phrase.indexOf(findText) >= 0) {
                newList.push(card);
            }
    });

    _data.list = newList;
}

function sorted(type, order) {
    var list = _data.list;
    var fieldSort = type.trim();

    _data.list.sort((a, b) => {
        if (order === 'asc') {
            if (a[fieldSort] > b[fieldSort]) {
                return 1;
            }
            if (a[fieldSort] < b[fieldSort]) {
                return -1;
            }

            return 0;
        }

        if (order === 'desc') {
            if (a[fieldSort] > b[fieldSort]) {
                return -1;
            }
            if (a[fieldSort] < b[fieldSort]) {
                return 1;
            }

            return 0;
        }
    });

    _data.sorting.field = fieldSort;
    _data.sorting.direction = order;
}

var AppStore = assign({}, EventEmitter.prototype, {
    getList() {
        return _data.list;
    },

    getSortingOrder() {
        return _data.sorting.order;
    },

    getSelected() {
        return _data.selected;
    },

    getSearchText() {
        return _data.searchText;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        his.removeListener(CHANGE_EVENT, callback);
    },
});

Dispatcher.register((action) => {
    switch (action.actionType) {
        case AppConstants.CHANGE_ACTIVE:
            changeActive(action.id);
            AppStore.emitChange();
            break;
        case AppConstants.CHANGE_TEXT:
            changeText(action.text);
            AppStore.emitChange();
            break;
        case AppConstants.SORTED:
            sorted(action.type, action.order);
            AppStore.emitChange();
            break;
        default:
    }
});

export default AppStore;
