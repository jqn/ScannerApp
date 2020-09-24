import colors from './colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
const applicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: colors.$secondaryLight,
    },
    preview: {
      flex: 1,
    },
  },
};

export default applicationStyles;
