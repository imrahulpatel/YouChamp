import {StyleSheet} from 'react-native';
import {Colors} from './colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dropArrowStyle: {
    height: 18,
    width: 18,
    marginLeft: 10,
  },
});
export default styles;
