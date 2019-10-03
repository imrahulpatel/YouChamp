import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {Dimens} from '../../theme/dimens';
import {Font} from '../../theme/fonts';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollViewContainer: {
    backgroundColor: Colors.white,
    paddingBottom: Dimens.dimen_20,
  },
  flex_row_Container: {
    flexDirection: 'row',
  },
  terms_condition_Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: Dimens.dimen_10,
    paddingTop: Dimens.dimen_5,
    paddingVertical: Dimens.dimen_5,
  },
  subrootContainer: {
    flex: 1,
    paddingTop: Dimens.dimen_50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
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
  logo_termscondition: {
    width: Dimens.dimen_18,
    height: Dimens.dimen_18,
    marginRight: Dimens.dimen_10,
  },
  inputContainer: {
    marginHorizontal: Dimens.dimen_10,
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
  signup_share_container: {
    paddingVertical: Dimens.dimen_15,
    marginHorizontal: Dimens.dimen_10,
  },
  signup_share_sub_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  signup_text: {
    color: Colors.inputLableColor,
    paddingVertical: Dimens.dimen_5,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_26,
    textAlign: 'center',
  },
  sign_sub_share_text: {
    color: '#707070',
    textAlign: 'center',
    fontFamily: Font.Light,
    fontSize: Dimens.dimen_15,
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
    paddingTop: Dimens.dimen_5,
    paddingHorizontal: Dimens.dimen_5,
  },
  referal_code_text: {
    color: Colors.red,
    paddingHorizontal: Dimens.dimen_10,
    paddingVertical: Dimens.dimen_1,
    fontFamily: Font.Regular,
    fontSize: Dimens.dimen_15,
  },
  form_button_container: {
    paddingTop: Dimens.dimen_5,
    paddingHorizontal: Dimens.dimen_5,
  },
  signup_button_container: {
    backgroundColor: Colors.inputLableColor,
    paddingVertical: Dimens.dimen_10,
    borderRadius: Dimens.dimen_26,
    width: '49%',
    alignSelf: 'center',
    margin: Dimens.dimen_10,
  },
  signup_button_text: {
    fontSize: Dimens.dimen_18,
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Font.SemiBold,
  },
  already_account_row_Container: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: Dimens.dimen_5,
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
