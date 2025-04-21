import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GREY_700,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
  },
  subtitle: {
    color: THEME.COLORS.GREY_100,
    fontSize: 16
  },
  root: {
    width: '100%',
    height: 8,
    borderRadius: 9999,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
  },
  progress: {
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderColor:"#333333",
    color:"#04FC04"
  },
});