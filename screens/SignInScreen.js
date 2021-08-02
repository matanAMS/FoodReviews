import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    Button,
    Image,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Foods from './Foods'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const apiUrl = ''
const SignInScreen = ({navigation}) => {

//      const Foods =[{
//     name: 'Burger' , 
//     price: '35', 
//     img: 'burger.jpg'
// },
// {
//     name:'Pizza', 
//     price: '25', 
//     img: 'Pizza.jpg'
// }
// ]
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
     const[password,setPassword] = React.useState("")
      
     const textInputChange = (val)=>{
       var emailValid =  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
       if(emailValid.test(val)){
           setData({...data,email:val,check_textInputChange:true});
       }
       else{
           setData({...data,email:val,check_textInputChange:false});
       }
   }

   const handlePasswordChange = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
  const btnLogin = async() => {
     const client ={
         email: data.email,
         password: password
     }
  if(client.email=="" || password ==""){
      Alert.alert("אחד או יותר מהפרטים שגויים, אנא נסה שוב")
      return
      }
      console.log(client)
     fetch('http://ruppinmobile.tempdomain.co.il/site05/api/connection', {
         method: 'POST',
         body: JSON.stringify(client),
         headers: new Headers({ 
             'Content-Type': 'application/json; charset=UTF-8',
             'Accept': 'application/json; charset=UTF-8'})
     })
     .then(res =>{
         return res.json()
     }).then((result)=>{
         console.log("POST => ", JSON.stringify(result))
         if(result)
         {   
          navigation.navigate("HomeScreen")
         }
         if(!result)
          alert("אופס, הוכנסו פרטים שגויים, אנא נסה שוב")
 
  },
      (error) => {
        console.log("error POST= ",error)
  })
 }
    
 return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>ברוך הבא!</Text>
        </View>
        <View style={styles.footer}>
        <Text style={styles.text_footer}>אימייל</Text>
        <View style={styles.action}>
            <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
            />
            <TextInput
            placeholder="האימייל שלך"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val)=>textInputChange(val)}
            />
            {data.check_textInputChange ?
            <Animatable.View
             animation="bounceIn">
            <Feather
            name="check-circle"
            color="green"
            size={20}
            />
            </Animatable.View>
            : null}

           
         </View> 
            <Text style={[styles.text_footer,{ marginTop : 35 }]}>סיסמה</Text>
               <View style={styles.action}>
            <Feather
            name="lock"
            color="#05375a"
            size={20}
            />
            <TextInput
            placeholder="הסיסמה שלך"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            />
            <Feather
            name="eye-off"
            color="grey"
            size={20}
            />
            </View> 
                <TouchableOpacity
                    onPress={() => btnLogin()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>תחבר אותי אני רעב</Text>
                </TouchableOpacity>
          <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>הירשם עכשיו</Text>
                </TouchableOpacity>
                <View>
                <Text style={[styles.textSign, {}]} > 
                </Text>
                <Image resizeMode= 'contain'
                style={{
                    width:50,
                    height:90
                }} />
                
                {/* // source = {require('../assets/burger.jpg')}  */}
                
                </View>

        </View> 
          </View>
      
          
         


    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
         textAlign: 'right'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });