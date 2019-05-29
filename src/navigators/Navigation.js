import { createStackNavigator, createAppContainer } from "react-navigation";
import Calculator from "../screens/Calculator"

const AppNavigator = createStackNavigator({
    Home: Calculator
});
  
export default createAppContainer(AppNavigator);