import * as Progress from 'react-native-progress';

import { Text, View } from 'react-native';

import { LevelBars } from '../LevelBars';

import { styles } from './styles';

export type HistoryProps = {
  id: string;
  title: string;
  points: number;
  questions: number;
  level: number;
  date: string;
}

type Props = {
  data: HistoryProps;
}

export function HistoryCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {data.title}
        </Text>

        <Text style={styles.title}>
          {data.date}
        </Text>

        <Text style={styles.subtitle}>
          {data.points} / {data.questions} = {Math.floor(100 * data.points/data.questions)} % 
        </Text>

        <Text>
        </Text>

        <Progress.Bar style={styles.progress} progress={data.points/data.questions} color={"#04FC04"} width={300} height={10}/>

      </View>

      {/* <LevelBars level={data.level} /> */}
      

    </View>
    
  );
}
