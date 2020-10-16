import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212598Navigator from '../features/BlankScreen212598/navigator';
import BlankScreen112597Navigator from '../features/BlankScreen112597/navigator';
import BlankScreen012596Navigator from '../features/BlankScreen012596/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212598: { screen: BlankScreen212598Navigator },
BlankScreen112597: { screen: BlankScreen112597Navigator },
BlankScreen012596: { screen: BlankScreen012596Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
