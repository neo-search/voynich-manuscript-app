/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
// import { NativeStackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  StartScreen: undefined;
  PageViewerScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

// export type Props = NativeStackScreenProps<RootStackParamList, "Profile">;
