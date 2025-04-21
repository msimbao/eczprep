import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

const dimensions = Dimensions.get('window');

const CARDS_PER_ROW = 2;
const HORIZONTAL_PADDING_SCREEN = 32 * 2;
const MARGIN = 6 * 2;

const CARD_WIDTH = (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: 169,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 0,
    padding: 16,
    margin: MARGIN,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 0,
    backgroundColor: THEME.COLORS.GREY_600,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_100,
    marginTop: 24
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 12,
    borderColor: "#e5e7eb",
    borderWidth: 1,
  },
});