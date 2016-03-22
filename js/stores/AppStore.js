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
};

function changeActive(id) {
    _data.selected = _data.list[id];
}

function changeText(text) {
    var newList = [];

    _data.searchText = text.trim();

    stabData.findIndex((elem, i) => {
        // elem.name elem.phrase
        if (elem.name.indexOf(_data.searchText) >= 0 ||
            elem.phrase.indexOf(_data.searchText) >= 0) {
                newList.push(elem);
            }
    });

    _data.list = newList;
    _data.selected = newList[0] || 'none';
}

var AppStore = assign({}, EventEmitter.prototype, {
    getList() {
        return _data.list;
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
        default:
    }
});

export default AppStore;
