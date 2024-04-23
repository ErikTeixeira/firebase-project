import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import React from 'react';
import Counter from 'react-native-counters';

export default function App() {

  const [activity, setActivity] = React.useState('');

  const [partipants, setParticipants] = React.useState(1);

  const onPressButton = () => {
    // axios.get('http://www.boredapi.com/api/activity/')
    axios.get(`http://www.boredapi.com/api/activity?participants=${partipants}`)
    .then(response => {
      console.log('response', response);

      setActivity(response.data.activity);
    })
    .catch(e => {
      console.log('catch', e);
    })
    .finally(() => {
      console.log('finally');
    })
  }

  

  return (
    <View style={styles.container}>
      <Text>- {activity} </Text>
      <Counter 
        start={1}
        max={5}
        onChange={(number) => {setParticipants(number)}} 
      />

      <Button 
        title='Nova Atividade'
        onPress={onPressButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
