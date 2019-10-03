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
    paddingTop: Dimens.dimen_60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ribbins_backgroud: {
    width: '100%',
    position: 'absolute',
  },
  hexagonal_backgroud: {
    width: '74%',
    height: 110,
    marginLeft: -30,
    tintColor: Colors.yellow,
    position: 'absolute',
  },
  logo_champ: {
    width: Dimens.dimen_80,
    height: Dimens.dimen_80,
  },
  forgotpass_share_container: {
    paddingVertical: Dimens.dimen_15,
    marginHorizontal: Dimens.dimen_10,
  },
  forgotpass_text: {
    color: Colors.inputLableColor,
    paddingTop: Dimens.dimen_5,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_26,
    textAlign: 'center',
  },
  champy_help_text: {
    color: Colors.inputLableColor,
    fontFamily: Font.Italic,
    fontSize: Dimens.dimen_20,
    textAlign: 'center',
  },
  hyperlink_text: {
    color: Colors.red,
    textAlign: 'center',
    paddingHorizontal: Dimens.dimen_5,
    fontFamily: Font.SemiBold,
    fontSize: Dimens.dimen_14,
  },
  note_black_text: {
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_14,
  },
  phone_link_text: {
    color: Colors.black,
    paddingTop: Dimens.dimen_20,
    fontFamily: Font.Regular,
    marginHorizontal: Dimens.dimen_8,
    fontSize: Dimens.dimen_14,
  },
  select_country_note_text: {
    color: Colors.black,
    textAlign: 'center',
    paddingTop: Dimens.dimen_20,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_14,
  },
  form_container: {
    width: '86%',
    paddingTop: Dimens.dimen_35,
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
  form_button_container: {
    paddingTop: Dimens.dimen_35,
    paddingHorizontal: Dimens.dimen_5,
  },
  sendnow_button_container: {
    backgroundColor: Colors.red,
    paddingVertical: Dimens.dimen_10,
    borderRadius: Dimens.dimen_26,
    width: '49%',
    alignSelf: 'center',
    margin: Dimens.dimen_10,
  },
  sendnow_text: {
    fontSize: Dimens.dimen_18,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Font.SemiBold,
  },
  goback_sub_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  forgotpass_row_Container: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: Dimens.dimen_5,
  },
});
export default styles;
