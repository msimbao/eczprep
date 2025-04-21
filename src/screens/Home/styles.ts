import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    alignItems: 'center'
  },
  levels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32
  },
  cards: {
    paddingTop: 32,
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