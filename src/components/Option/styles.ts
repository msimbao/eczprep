import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 76,
    backgroundColor: THEME.COLORS.GREY_800,
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 2,
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    marginRight: 32,
    flex: 1,
  },
  checked: {
    borderWidth: 1,
    borderColor: THEME.COLORS.BRAND_MID
  },
  correct: {
    borderWidth: 2,
    borderColor: THEME.COLORS.BRAND_LIGHT
  },
  wrong: {
    borderWidth: 2,
    borderColor: THEME.COLORS.DANGER_LIGHT
  }
});