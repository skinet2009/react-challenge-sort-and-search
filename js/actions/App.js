import Dispatcher from '../dispatcher';
import AppConstants from '../constants/AppConstants';

var AppActions = {
    changeActive(id) {
        Dispatcher.dispatch({
            actionType: AppConstants.CHANGE_ACTIVE,
            id,
        });
    },

    changeText(text) {
        Dispatcher.dispatch({
            actionType: AppConstants.CHANGE_TEXT,
            text,
        });
    },

    sorted(type, route) {
        Dispatcher.dispatch({
            actionType: AppConstants.SORTED,
            type,
            route,
        });
    },
};

export default AppActions;
