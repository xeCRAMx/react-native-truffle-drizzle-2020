import React from 'react';
import {Text} from 'react-native';
import {Drizzle} from '@drizzle/store';
import {DrizzleContext} from '@drizzle/react-plugin';
import drizzleOptions from './drizzleOptions';
import ReadString from './ReadString';

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {(drizzleContext) => {
          const {drizzle, drizzleState, initialized} = drizzleContext;

          if (!initialized) {
            return <Text>Loading...</Text>;
          }

          return <ReadString drizzle={drizzle} drizzleState={drizzleState} />;
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
