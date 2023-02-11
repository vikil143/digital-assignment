import { StackNavigationProp } from '@react-navigation/stack';
export type StackScreens = {
    Login: undefined;
    List: undefined;
    User: undefined
}

export type MainStackNavigationFunction = StackNavigationProp<StackScreens>;

export interface MainStackNavigator {
    navigation: MainStackNavigationFunction;
}
