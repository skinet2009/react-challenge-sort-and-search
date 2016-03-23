import Dispatcher from '../dispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import stabData from './stab';

var CHANGE_EVENT = 'change';
var _data = {
    list: stabData,
    selected: stabData[0],
    searchText: '',
    sorting: {
        field: '',
        direction: '',
    },
    className: '',
};

function changeActive(id) {
    _data.list.forEach((item) => {
        if (item.id === id) {
            _data.selected = item;
        }
    });
}

function changeText(text) {
    var newList = [];

    _data.searchText = text.trim().toLowerCase();

    stabData.findIndex((elem, i) => {
        let name = elem.name.toLowerCase();
        let phrase = elem.phrase.toLowerCase();

        if (name.indexOf(_data.searchText) >= 0 ||
            phrase.indexOf(_data.searchText) >= 0) {
                newList.push(elem);
            }
    });

    _data.list = newList;
    // _data.selected = newList[0] || 'none';
}

function sorted(type, route) {
    var list = _data.list;
    var fieldSort = type.trim();

    _data.list.sort((a, b) => {
        if (route === 'asc') {
            if (a[fieldSort] > b[fieldSort]) {
                return 1;
            }
            if (a[fieldSort] < b[fieldSort]) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        }

        if (route === 'desc') {
            if (a[fieldSort] > b[fieldSort]) {
                return -1;
            }
            if (a[fieldSort] < b[fieldSort]) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        }
    });

    // _data.list = list;
    _data.sorting.field = fieldSort;
    _data.sorting.direction = route;
    // _data.selected = list[0] || 'none';
}

var AppStore = assign({}, EventEmitter.prototype, {
    getList() {
        return _data.list;
    },

    getFieldSort() {
        return _data.sorting.field;
    },

    getDirectionSort() {
        return _data.sorting.direction;
    },

    getSelected() {
        return _data.selected;
    },

    getClassName() {
        return _data.className;
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
            sorted(action.type, action.route);
            AppStore.emitChange();
            break;
        default:
    }
});

export default AppStore;
