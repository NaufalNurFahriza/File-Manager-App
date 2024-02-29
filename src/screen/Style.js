import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F6F8FF',
    },
    header: {
        paddingTop: 56,
        paddingHorizontal: 20,
        paddingBottom:28,
        backgroundColor: '#FFFFFF'

    },
    photoBag: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 7,
    },
    textHeader: {

    },
    searchFilter: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
    },
    categoryBox: {
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryItems: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: 95,
        height: 95,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    recomendBox: {
        paddingHorizontal: 20,
        paddingTop:5,
        
    },
    recomendText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 20,
    },
    recomendItems: {
        padding:6,
        marginVertical: 3,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    starheart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:3,
    },
    stars:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    location: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between'

    },
    times: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
    },
    description: {
    },
    profile: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 52,
        paddingBottom: 41,
    },
    menuProfile: {
        backgroundColor: '#F6F8FF',
    },
    settingProfile:{
        backgroundColor: '#FFFFFF',
        marginHorizontal: 18,
        marginVertical: 12,
        paddingLeft: 79,
    },
    logoutBox: {
        backgroundColor: '#F6F8FF'
    },
    logoutButton: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginHorizontal: 18,
        marginTop: 7,
        paddingVertical: 14,
    },
    editProfile: {
        alignItems: 'center',
        paddingTop: 31,
        paddingBottom: 50
    },
    editButton: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    editBio:{
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 70,

    },
    simpanButton:{
        backgroundColor: '#243bbb',
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop:22,
        marginBottom:40,
        height: 55,
    },
    faqBox:{
        flexDirection:'column',
        backgroundColor:'#FFFFFF',
        paddingTop:11,
        paddingLeft:14,
        paddingBottom:14,
        paddingRight:11,
    },
    orderForm:{
        marginTop: 15,
        marginHorizontal: 20,
        marginBottom: 25,
    },
    photoBox:{
        width: 84,
        height: 84,
        borderColor: '#BB2427',
        borderRadius: 8,
        borderWidth: 1,
        marginTop:21,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
    },
    checkBox:{
        flexDirection: 'row',
        alignItems:'center',
        marginTop:23,
    },
    cartButton:{
        backgroundColor: '#BB2427',
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop:12,
        marginBottom:20,
        height: 55,
    },
    cartBox:{
            width: '87%',
            height: 133,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            marginVertical: 10,
    },
    paymentMethod:{
        width: 126,
        height: 82,
        borderColor: '#E1E1E1',
        borderRadius: 3,
        borderWidth: 1,
        marginTop:16,
        marginBottom:21,
        marginHorizontal:6,
        alignItems:'center',  
    },
    btnFloating: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      cardItem: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 4,
        borderColor: '#dedede',
        borderWidth: 1,
        padding: 15,
      },
      boxList: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F8FF',
        paddingVertical: 15,
      },
});
