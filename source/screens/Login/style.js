import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {Dimens} from '../../theme/dimens';
import {Font} from '../../theme/fonts';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rootBackContainer: {
    position: 'absolute',
  },
  flex_row_Container: {
    flexDirection: 'row',
  },
  scrollViewContainer: {
    paddingBottom: Dimens.dimen_20,
  },
  subrootContainer: {
    flex: 1,
    paddingTop: Dimens.dimen_50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  login_button_container: {
    backgroundColor: Colors.inputLableColor,
    paddingVertical: Dimens.dimen_10,
    borderRadius: Dimens.dimen_26,
    width: '49%',
    alignSelf: 'center',
    margin: Dimens.dimen_10,
  },
  login_text: {
    fontSize: Dimens.dimen_18,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Font.SemiBold,
  },
  logo_champ: {
    width: Dimens.dimen_90,
    height: Dimens.dimen_90,
  },
  ribbins_backgroud: {
    width: '100%',
    position: 'absolute',
  },
  hexagonal_backgroud: {
    width: '74%',
    height: 110,
    marginLeft: -30,
    position: 'absolute',
  },
  inputContainer: {
    margin: Dimens.dimen_10,
    paddingVertical: Dimens.dimen_5,
  },
  inputStyle: {
    fontSize: Dimens.dimen_24,
    fontFamily: Font.SemiBold,
  },
  floatable_text: {
    color: Colors.inputLableColor,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_15,
  },
  logo_text: {
    color: Colors.red,
    paddingVertical: Dimens.dimen_7,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_28,
  },
  login_share_text: {
    color: Colors.inputLableColor,
    paddingVertical: Dimens.dimen_10,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_26,
    textAlign: 'center',
  },
  login_sub_share_text: {
    color: '#707070',
    textAlign: 'center',
    fontFamily: Font.Light,
    fontSize: Dimens.dimen_15,
  },
  login_share_container: {
    paddingVertical: Dimens.dimen_15,
    marginHorizontal: Dimens.dimen_10,
  },
  login_share_sub_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  hyperlink_text: {
    color: Colors.red,
    paddingHorizontal: Dimens.dimen_5,
    fontFamily: Font.SemiBold,
    fontSize: Dimens.dimen_16,
  },
  note_black_text: {
    color: Colors.black,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_15,
  },
  form_container: {
    width: '86%',
    paddingTop: Dimens.dimen_35,
    paddingHorizontal: Dimens.dimen_5,
  },
  form_button_container: {
    paddingTop: Dimens.dimen_35,
    paddingHorizontal: Dimens.dimen_5,
  },
  forgot_pass_row_Container: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: Dimens.dimen_12,
  },
  signup_row_Container: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: Dimens.dimen_1,
  },
  cancel_button: {
    fontSize: Dimens.dimen_16,
    color: Colors.grey,
    textAlign: 'left',
    fontFamily: Font.SemiBold,
  },
  done_button: {
    fontSize: Dimens.dimen_16,
    color: Colors.donetext,
    textAlign: 'left',
    fontFamily: Font.SemiBold,
  },
  country_list_item: {
    fontSize: Dimens.dimen_22,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Font.Regular,
  },
});
export default styles;
