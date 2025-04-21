import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

const { width } = Dimensions.get('window');

const MARGIN_HORIZONTAL = 24 * 2;

export const styles = StyleSheet.create({
  container: {
    width: width - MARGIN_HORIZONTAL,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 0,
    padding: 22,
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    color: THEME.COLORS.WHITE,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18
  },
  answer: {
    backgroundColor: THEME.COLORS.STAR_GREEN,
    color: THEME.COLORS.WHITE,
    borderRadius: 0,
    padding: 22,
    margin: 0,
    marginTop: 10,
    fontSize:16,
  },
  option: {
    width: '100%',
    minHeight: 76,
    backgroundColor: THEME.COLORS.GREY_800,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 12,
  },

});