import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import NewCaw from './pages/NewCaw';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App: createStackNavigator({
            Timeline,
            NewCaw
        })
    })
);

export default Routes;