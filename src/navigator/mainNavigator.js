import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen112606Navigator from '../features/BlankScreen112606/navigator';
import BlankScreen012605Navigator from '../features/BlankScreen012605/navigator';
import BlankScreen112604Navigator from '../features/BlankScreen112604/navigator';
import BlankScreen212601Navigator from '../features/BlankScreen212601/navigator';
import BlankScreen212598Navigator from '../features/BlankScreen212598/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen112606: { screen: BlankScreen112606Navigator },
BlankScreen012605: { screen: BlankScreen012605Navigator },
BlankScreen112604: { screen: BlankScreen112604Navigator },
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
