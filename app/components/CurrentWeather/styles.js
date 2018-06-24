import EstyleSheet from 'react-native-extended-stylesheet';

const styles= EstyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 20,
    //height: 200,
  },
  iconWeatherCondContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    //resizeMode: 'contain',
    fontSize: 80,
    color: '$goldenWhite',
  },
  weatherDesc:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:20,
    color:'$white',
  },
  tempNumber:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:80,
    color:'$white',
    paddingLeft: 20,
  },
  subWeatherDetailsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  twoTextsCol:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  subText:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:16,
    color:'$white',
  },
  lastUpdatedText:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:14,
    color:'$white',
  }
});

export default styles;