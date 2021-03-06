import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19175408Navigator from '../features/BlankScreen19175408/navigator';
import ArticleList175391Navigator from '../features/ArticleList175391/navigator';
import ArticleList175390Navigator from '../features/ArticleList175390/navigator';
import ArticleList175389Navigator from '../features/ArticleList175389/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19175408: { screen: BlankScreen19175408Navigator },
ArticleList175391: { screen: ArticleList175391Navigator },
ArticleList175390: { screen: ArticleList175390Navigator },
ArticleList175389: { screen: ArticleList175389Navigator },

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
