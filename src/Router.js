// Screen, Forms Iniciais
import FirstComponent from "./components/firstComponent";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CarroScreen from "./screens/CarroScreen";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
	FirstComponent: { screen: FirstComponent },
	Login: { screen: LoginScreen },
	Home: { screen: HomeScreen },
	Register: { screen: RegisterScreen },
	Carro: { screen: CarroScreen }
}, { defaultNavigationOptions: { header: null } });

const Router = createAppContainer(MainNavigator);

export default Router;