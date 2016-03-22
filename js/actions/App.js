import Dispatcher from '../dispatcher';
import AppConstants from '../constants/AppConstants';

var AppActions = {
    changeActive(id) {
        Dispatcher.dispatch({
            actionType: AppConstants.CHANGE_ACTIVE,
            id: id,
        });
    },
};

export default AppActions;
