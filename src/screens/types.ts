import { MainStackNavigator } from "@myapp/routes/types";


export interface LoginProps extends MainStackNavigator { };

export interface ListProps extends MainStackNavigator { }


export interface UserProps extends MainStackNavigator { }

export type Data = {
    name: string;
}
