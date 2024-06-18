// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View ,Button,TextInput,Image} from 'react-native';
// // import { TextInput } from 'react-native-gesture-handler';


// export default function LoginForm(){
//     const [userDetails,setUserDetails]=useState({
//         Username:"",
//         Email:""
//     });
//     const handleLogin = () => {
//         const loginResult = { Username, Email }; 
//         navigation.navigate('Home', { loginResult });
//       };
//     function settingUserDetails(name,value){
      
//         setUserDetails((prevValue)=> {
            
//                 return {
//                     ...prevValue,
//                     [name]:value
//                 }
            
            
//         })
//     }
//     return(
//         <View style={styles.container}>
//                 <View style={{width: 300,height: 33,top: -106, left:16}}>
//                 <Text style={{color:"#356899",fontSize:22}}>Jobizz</Text>
//                 <Text style={{fontSize:24, fontFamily:"Poppins",fontWeight:"bold"}}>Welcome Back</Text>
//                 <Text style={{top:10}}>Let's log in, Apply to jobs!</Text>
//                 </View>
//             <View style={styles.form}>
                
//                 <TextInput 
//                 style={[styles.input,styles.roundedBorder]}
//                  placeholder='Username' 
//                  value={userDetails.Username}
//                  onChangeText={(text)=>settingUserDetails('Username',text)}
//                  />
                
//                 <TextInput 
//                 style={[styles.input,styles.roundedBorder]}
//                  placeholder='Email' 
//                 value={userDetails.Email}
//                  onChangeText={(text)=> settingUserDetails('Email',text)}
//                 />
//                 <Button title='log in' color="#356899" onPress={handleLogin} />
//             </View>
//             <View style={{width: 98, top: 100, left: 20, borderWidth:0.5,borderColor:"#AFB0B6"}}></View>
//             <Text style={{top:93,left:125 ,color:"#AFB0B6"}}>Or continue with</Text>
//             <View style={{width: 98, top: 80, left: 240, borderWidth:0.5,borderColor:"#AFB0B6"}}></View>
//             <View style={{top:120,flexDirection:'row',justifyContent:'space-evenly'}}>
//                 <View style={styles.ellipse}>  
//                     <Image style={styles.image} source={require('./Apple.png')} resizeMode="cover"/>
//                     </View>
//                 <View style={styles.ellipse}>
//                 <Image style={styles.image} source={require('./facebook.png')} resizeMode="cover" />
//                 </View>
//                 <View style={styles.ellipse}>
//                 <Image style={styles.image} source={require('./Google.png')} resizeMode="cover" />
//                 </View>
//             </View>
//        </View>
//     )
// }

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         paddingHorizontal:20,
//         backgroundColor:"#f5f5f5",
//         width:350,
//         height:350
//     },
//     ellipse:{
       
//         width: 50,
//         height:50,
//         borderRadius: 100, // Half of the width for an elliptical effect
//         overflow:'hidden',
//         backgroundColor: 'white',

//     },

//     image:{
//     // width: '100%',
//     // height: '100%',
//     // position:'absolute',
//     // top:'50%',
//     // left:'50%',

//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -25 }, { translateY: -25 }],
    
//     },
//     roundedBorder: {
//         borderRadius: 10,
//         borderColor:"#AFB0B6"
//       },
//     input:{
        
//         height:40,
//         borderWidth:1,
//         backgroundColor:"white",
//         marginBottom:15,
//         paddingHorizontal: 10,
//         color:"black",
       
        
       
//     }
// })


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function LoginForm({ navigation }) {
  const [userDetails, setUserDetails] = useState({
    Username: '',
    Email: '',
  });

  const handleLogin = () => {
    const loginResult = { Username: userDetails.Username, Email: userDetails.Email };
    navigation.navigate('Home', { loginResult });
  };

  function settingUserDetails(name, value) {
    setUserDetails(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <View style={styles.container}>
      <View style={{ width: 300, height: 33, top: -106, left: 16 }}>
        <Text style={{ color: '#356899', fontSize: 22 }}>Jobizz</Text>
        <Text style={{ fontSize: 24, fontFamily: 'Poppins', fontWeight: 'bold' }}>Welcome Back</Text>
        <Text style={{ top: 10 }}>Let's log in, Apply to jobs!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, styles.roundedBorder]}
          placeholder="Username"
          value={userDetails.Username}
          onChangeText={text => settingUserDetails('Username', text)}
        />

        <TextInput
          style={[styles.input, styles.roundedBorder]}
          placeholder="Email"
          value={userDetails.Email}
          onChangeText={text => settingUserDetails('Email', text)}
        />
        <Button title="Log in" color="#356899" onPress={handleLogin} />
      </View>
      <View style={{ width: 98, top: 100, left: 20, borderWidth: 0.5, borderColor: '#AFB0B6' }}></View>
      <Text style={{ top: 93, left: 125, color: '#AFB0B6' }}>Or continue with</Text>
      <View style={{ width: 98, top: 80, left: 240, borderWidth: 0.5, borderColor: '#AFB0B6' }}></View>
      <View style={{ top: 120, flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={styles.ellipse}>
          <Image style={styles.image} source={require('./Apple.png')} resizeMode="cover" />
        </View>
        <View style={styles.ellipse}>
          <Image style={styles.image} source={require('./facebook.png')} resizeMode="cover" />
        </View>
        <View style={styles.ellipse}>
          <Image style={styles.image} source={require('./Google.png')} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  ellipse: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  roundedBorder: {
    borderRadius: 10,
    borderColor: '#AFB0B6',
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'black',
  },
});
