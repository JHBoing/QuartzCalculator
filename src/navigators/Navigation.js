import { createStackNavigator, createAppContainer } from "react-navigation";
import Calculator from "../screens/Calculator"

const Navigation = createStackNavigator({
    Home: Calculator
});
  
export default createAppContainer(Navigation);