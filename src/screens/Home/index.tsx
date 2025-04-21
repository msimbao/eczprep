import { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Trophy } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Level } from '../../components/Level';
import { Header } from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';

import { styles } from './styles';
import { QUIZ } from '../../data/quiz';
import { THEME } from '../../styles/theme';

import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);
import * as Icons from 'phosphor-react-native';

export function Home() {
  const [quizzes, setQuizzes] = useState(QUIZ);
  const [levels, setLevels] = useState([1, 2, 3]);

  const { navigate } = useNavigation();
  const [gradePanel, setGradePanel] = useState<boolean>(true);

  function handleLevelFilter(level: number) {
    const levelAlreadySelected = levels.includes(level);

    if (levelAlreadySelected) {
      if (levels.length > 1) {
        setLevels(prevState => prevState.filter(item => item !== level));
      }
    } else {
      setLevels(prevState => [...prevState, level]);
    }
  }

  useEffect(() => {
    setQuizzes(QUIZ.filter(quiz => levels.includes(quiz.level)));
  }, [levels]);

  const Icon = Icons.ToggleLeft;

  return (
    <View style={styles.container}>
      <Header
        icon={Trophy}
        title="Let's Study"
        subtitle="Expand your knowledge"
        onPress={() => navigate('history')}
      />

      <View style={styles.levels}>
        <Level title="Easy" type="EASY" onPress={() => handleLevelFilter(1)} isChecked={levels.includes(1)} />
        <Level title="Medium" type="MEDIUM" onPress={() => handleLevelFilter(2)} isChecked={levels.includes(2)} />
        <Level title="Hard" type="HARD" onPress={() => handleLevelFilter(3)} isChecked={levels.includes(3)} />
      </View>


      {gradePanel ? (
         
         <TouchableOpacityAnimated
         entering={FadeInUp}
         exiting={FadeOutUp}
         style={styles.container}
       >
         <View style={styles.header}>

           <View style={styles.iconContainer}>
             {Icon && <Icon size={70} color={THEME.COLORS.GREY_100} />}
           </View>
   
           {/* <LevelBars level={data.level} /> */}
         </View>
   
         <Text style={styles.title}>
           Test
         </Text>
       </TouchableOpacityAnimated>

          ) : (
       
      <FlatList
      data={quizzes}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <QuizCard
          index={index}
          data={item}
          onPress={() => navigate('quiz', { id: item.id })}
        />
      )}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.cards}
    />

          )}

    </View>
  );
}
