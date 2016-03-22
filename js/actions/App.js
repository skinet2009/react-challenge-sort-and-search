import Dispatcher from '../dispatcher';
import AppConstants from '../constants/AppConstants';

var AppActions = {
    changeActive(id) {
        Dispatcher.dispatch({
            actionType: AppConstants.CHANGE_ACTIVE,
            id: id,
        });
    },

    changeText(text) {
        Dispatcher.dispatch({
            actionType: AppConstants.CHANGE_TEXT,
            text: text,
        });
    },
};

export default AppActions;
