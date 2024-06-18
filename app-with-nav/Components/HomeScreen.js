// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image,TextInput,Button,StatusBar,FlatList,Pressable} from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen({ route }) {
const { loginResult } = route.params;
  const [SearchInput, setSearchText]=useState('')
  const Activities=[
    { id: 1, name: 'Jr Executive', category: 'Burger King',Pay:'$96,00/y',location:'Los Angeles US',img:require('./Group.png')},
    { id: 2, name: 'Product Manager', category: 'Beats',Pay:'$84,00/y',location:'Florida,US',img:require('./beats.png')},
    { id: 3, name: 'Product Manager', category: 'facebook',Pay:'$86,00/y',location:'Florida,US',img:require('./Vector (3).png') },

  
  ]
  function settingSearchText(text){
    setSearchText(text)
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white"  barStyle='dark-content'/>
    <ScrollView>
     
      
      <View style={{position:'relative'}}> 
        <Text style={{fontSize:24,fontWeight:'bold'}}>{loginResult.Username}</Text>
        <Text style={{color:'#95969D'}}>{loginResult.Email}</Text>
        <View style={{position:'absolute',top:10,left:250}}>
      <Image  style={{height:50,width:50}} source={require('./face.png')}></Image> 
      </View>
      </View> 
      
   
      <Text style={{paddingBottom:50}}></Text>
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row',alignItems: 'center',}}></View>
      <TextInput
        style={styles.setSearchInput}
        value={setSearchText}
        placeholder='search a job or postion'
        onChange={settingSearchText}
       />
       
       <Pressable >
            <View style={{width:40, height:40, backgroundColor:'white', borderRadius:10}}>
                <Image style={{position:'absolute',top:-109,left:20}} source={require('./Ellipse 767.png')}></Image>
            <Image style={{position:'absolute',top:5,left:5}} source={require('./filter.5.png')}></Image>
            </View>
       </Pressable>
       </View>
      < View style={{position:'relative'}}>
      <Text style={{fontSize:20, padding:20 ,fontWeight:"bold", borderRadius:100}}> Featured jobs </Text>
      <Text style={{position:'absolute',top:30,left:250,color:'#95969D'}}>See All </Text>
      <View style={{width:270, height:200,  backgroundColor:'#4B70F5',borderRadius:15}}>
       <View style={{borderRadius:10, borderColor:'black',backgroundColor:'white',width:60, height:60,left:20, top:20}}>
       
       <Image style={{position:'relative',left:15,top:10}} source={require('./facebook.png')}></Image>
       </View>
       <Text style={{padding:20, fontSize:17,position:'relative',top:-50,left:80,color:'white'}}>Software Engineer</Text>
      < Text style={{position:'relative',top:-70,left:100,color:'white'}}>Facebook</Text>
     <Text style={{color:'white', position:'relative',left:20}}>$180,00</Text>
     <Text style={{color:'white', position:'relative',left:180}} >Accra, Ghana</Text>
      {/* <Image style={{ justifyContent:'center' }} source={require('')}>
        
      </Image> */}
            
      </View>
      </View>
      
      <View style={{position:'relative'}}>
        
      <View style={{width:100, height:200,  backgroundColor:'#102C57',borderRadius:15, position:'absolute',top:-200,left:280}}>
      <View style={{borderRadius:10, borderColor:'black',backgroundColor:'white',width:30, height:50,left:20, top:20}}>
       
        <Image style={{position:'absolute',top:10}} source={require('./Google.png')} />
    </View>
      </View>
      </View>

      <View style={{position:'relative'}}>
      <Text style={{padding:20,fontSize:20}}>Popular jobs</Text>
      <Text style={{position:'absolute',top:30,left:250,color:'#95969D'}}>See All</Text>
      {/* {Activities.map((activity)=>{
        return(
          <View key={activity.id}>
            <Text style={styles.data}>{activity.name}</Text>

          </View>
        )
      })} */}
      
      </View>
      <FlatList 
        data={Activities}
        renderItem={({item})=>{return(
          <View key={item.id}>
            <Text style={styles.data}>
            <Image style={{position:'absolute'}} source={item.img} />
            <Text style={{position:'absolute' ,justifyContent:'center'}}>{item.name}
            </Text>
            
            </Text>
            <Text style={{position:'absolute',top:70, left:70,color:'#95969D'}}>{item.category}</Text>
            <Text style={{position:'absolute',left:230, top:20}}>{item.Pay}</Text>
            <Text style={{position:'absolute',left:220, top:60 , color:'#95969D'}}>{item.location}</Text>
          </View>
        )}}
      />
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    backgroundColor: '#f2f2f2',
    padding:40,
    width:400,
    height:600
   
   
  },
  searchContainer:{
    // backgroundColor: '#f2f2f2',
    // padding: 10,
    // borderRadius: 8,
    // marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,

  },
  setSearchInput:{
    
    // fontSize: 16,
    // paddingHorizontal: 12,
    // paddingVertical: 8,
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  data:{
    
    backgroundColor:'#fff',
    padding:16,
    borderRadius:8,
    borderWidth:0.2,
    marginBottom:16,
      height:100,
    position:'relative',
  
  }
});


// import { StyleSheet, Text, View, ScrollView, Image, TextInput, StatusBar, FlatList, Pressable } from 'react-native';
// import React, { useState } from 'react';

// export default function HomeScreen({ route }) {
//   const { loginResult } = route.params;

//   const [searchInput, setSearchText] = useState('');
//   const Activities = [
//     { id: 1, name: 'Jr Executive', category: 'Burger King', Pay: '$96,00/y', location: 'Los Angeles US', img: require('./Group.png') },
//     { id: 2, name: 'Product Manager', category: 'Beats', Pay: '$84,00/y', location: 'Florida, US', img: require('./beats.png') },
//     { id: 3, name: 'Product Manager', category: 'Facebook', Pay: '$86,00/y', location: 'Florida, US', img: require('./Vector (3).png') },
//   ];

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="white" barStyle="dark-content" />
//       <ScrollView>
//         <View style={{ position: 'relative' }}>
//           <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{loginResult.Username}</Text>
//           <Text style={{ color: '#95969D' }}>{loginResult.Email}</Text>
//           <View style={{ position: 'absolute', top: 10, left: 250 }}>
//             <Image style={{ height: 50, width: 50 }} source={require('./face.png')} />
//           </View>
//         </View>

//         <Text style={{ paddingBottom: 50 }}></Text>
//         <View style={styles.searchContainer}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}></View>
//           <TextInput
//             style={styles.setSearchInput}
//             value={searchInput}
//             placeholder="search a job or position"
//             onChangeText={text => setSearchText(text)}
//           />

//           <Pressable>
//             <View style={{ width: 40, height: 40, backgroundColor: 'white', borderRadius: 10 }}>
//               <Image style={{ position: 'absolute', top: -109, left: 20 }} source={require('./Ellipse 767.png')} />
//               <Image style={{ position: 'absolute', top: 5, left: 5 }} source={require('./filter.5.png')} />
//             </View>
//           </Pressable>
//         </View>

//         <View style={{ position: 'relative' }}>
//           <Text style={{ fontSize: 20, padding: 20, fontWeight: 'bold', borderRadius: 100 }}> Featured jobs </Text>
//           <Text style={{ position: 'absolute', top: 30, left: 250, color: '#95969D' }}>See All </Text>
//           <View style={{ width: 270, height: 200, backgroundColor: '#4B70F5', borderRadius: 15 }}>
//             <View style={{ borderRadius: 10, borderColor: 'black', backgroundColor: 'white', width: 60, height: 60, left: 20, top: 20 }}>
//               <Image style={{ position: 'relative', left: 15, top: 10 }} source={require('./facebook.png')} />
//             </View>
//             <Text style={{ padding: 20, fontSize: 17, position: 'relative', top: -50, left: 80, color: 'white' }}>Software Engineer</Text>
//             <Text style={{ position: 'relative', top: -70, left: 100, color: 'white' }}>Facebook</Text>
//             <Text style={{ color: 'white', position: 'relative', left: 20 }}>$180,00</Text>
//             <Text style={{ color: 'white', position: 'relative', left: 180 }}>Accra, Ghana</Text>
//           </View>
//         </View>

//         <View style={{ position: 'relative' }}>
//           <View style={{ width: 100, height: 200, backgroundColor: '#102C57', borderRadius: 15, position: 'absolute', top: -200, left: 280 }}>
//             <View style={{ borderRadius: 10, borderColor: 'black', backgroundColor: 'white', width: 30, height: 50, left: 20, top: 20 }}>
//               <Image style={{ position: 'absolute', top: 10 }} source={require('./Google.png')} />
//             </View>
//           </View>
//         </View>

//         <View style={{ position: 'relative' }}>
//           <Text style={{ padding: 20, fontSize: 20 }}>Popular jobs</Text>
//           <Text style={{ position: 'absolute', top: 30, left: 250, color: '#95969D' }}>See All</Text>
//         </View>

//         <FlatList
//           data={Activities}
//           renderItem={({ item }) => {
//             return (
//               <View key={item.id} style={styles.data}>
//                 <Image style={{ width: 50, height: 50 }} source={item.img} />
//                 <View style={{ marginLeft: 60 }}>
//                   <Text>{item.name}</Text>
//                   <Text style={{ color: '#95969D' }}>{item.category}</Text>
//                   <Text>{item.Pay}</Text>
//                   <Text style={{ color: '#95969D' }}>{item.location}</Text>
//                 </View>
//               </View>
//             );
//           }}
//         />
//         <StatusBar style="auto" />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 40,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginBottom: 20,
//   },
//   setSearchInput: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   data: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 0.2,
//     marginBottom: 16,
//     height: 100,
//   },
// });
