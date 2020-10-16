import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212600Navigator from '../features/BlankScreen212600/navigator';
import BlankScreen112599Navigator from '../features/BlankScreen112599/navigator';
import BlankScreen212598Navigator from '../features/BlankScreen212598/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212600: { screen: BlankScreen212600Navigator },
BlankScreen112599: { screen: BlankScreen112599Navigator },
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
