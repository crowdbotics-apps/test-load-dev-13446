import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen112604Navigator from '../features/BlankScreen112604/navigator';
import BlankScreen012602Navigator from '../features/BlankScreen012602/navigator';
import BlankScreen212601Navigator from '../features/BlankScreen212601/navigator';
import BlankScreen212598Navigator from '../features/BlankScreen212598/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen112604: { screen: BlankScreen112604Navigator },
BlankScreen012602: { screen: BlankScreen012602Navigator },
BlankScreen212601: { screen: BlankScreen212601Navigator },
BlankScreen212598: { screen: BlankScreen212598Navigator },

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
