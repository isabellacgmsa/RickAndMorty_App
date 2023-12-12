import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SharedElement } from 'react-navigation-shared-element';
import CharacterList from './src/components/CharacterList';
import CharacterDetailScreen from './src/components/CharacterDetail';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CharacterList"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CharacterList"
        component={CharacterList}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={() => ({
          gestureEnabled: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
