import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Stars } from '../../components/Stars';

import { styles } from './styles';

import * as Progress from 'react-native-progress';

interface Params {
  total: number;
  points: number;
}

export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as Params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>
          Congratulations!
        </Text>

        <Text style={styles.subtitle}>
          You got {points} from {total} questions.
        </Text>

        <Text style={styles.percent}>
        {Math.floor(100 * points/total)} %
        </Text>

        <Text></Text>

        <Progress.Bar style={styles.progress} progress={points/total} color={"#04FC04"} width={300} height={10}/>

      </View>

      <Button
        title="Go to Main Menu"
        onPress={() => navigate('home')}
      />
    </View>
  );
}