import { combineReducers } from 'redux';
import * as MenuReducer from '../../components/Header/MenuReducer';
import * as DealerReducer from '../../components/Redux/reducers/DealerReducer';
import * as PageReducer from '../../components/Redux/reducers/PageReducer';

// root reducer of app
export const rootReducer = combineReducers({
  menu: MenuReducer.MenuReducer,
  dealer: DealerReducer.DealerReducder,
  page: PageReducer.PageReducder
})

