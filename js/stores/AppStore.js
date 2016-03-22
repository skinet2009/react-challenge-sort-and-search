import Dispatcher from '../dispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import stabData from './stab';

var CHANGE_EVENT = 'change';
var _data = {
    list: stabData,
    selected: stabData[0],
};

function changeActive(id) {
    _data.selected = _data.list[id];
}

var AppStore = assign({}, EventEmitter.prototype, {
    getList() {
        return _data.list;
    },

    getSelected() {
        return _data.selected;
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
        default:
    }
});

export default AppStore;
