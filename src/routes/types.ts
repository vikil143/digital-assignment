import { Data as UserData } from '@myapp/screens/types';
import { StackNavigationProp } from '@react-navigation/stack';
export type StackScreens = {
    Login: undefined;
    List: undefined;
    User: UserData
}

export type MainStackNavigationFunction = StackNavigationProp<StackScreens>;

export interface MainStackNavigator {
    navigation: MainStackNavigationFunction;
}
