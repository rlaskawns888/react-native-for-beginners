import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput
} from 'react-native';
import { theme } from './color';

export default function App() {
  const [working, setWorking] = useState(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (e) => console.log(e);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color:working ? "white" : theme.gray}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>          
          <Text style={{...styles.btnText, color:!working ? "white" : theme.gray}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput 
          onChangeText={onChangeText}
          placeholder={working ? "Add a TO Do" : "where do you want to go?"} style={styles.input} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,    
    paddingHorizontal: 20,
  },
  header : {
    justifyContent: "space-between",
    flexDirection:"row",
    marginTop : 100
  },
  btnText : {
    fontSize: 38,
    fontWeight : "600",
  },  
  input : {
    backgroundColor:"#fff",
    paddingVertical: 15,
    paddingHorizontal : 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize : 18,
  }
});
