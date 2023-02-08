import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import axios from 'axios'

const dpWidth = parseInt(Dimensions.get('window').width);
const dpHeight = Dimensions.get('window').height;

export default function ListaPokemon({navigation}) {

  const [datos, setDatos] = useState({count:0, results:[]});

  const pedirdatos = async()=>{
    const datos = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');       
    setDatos(datos.data);
  }

  const getCodigo = (url)=>{
    //split
    const partes = url.split('/');
    return partes[6];
  }

  useEffect(()=>{
    pedirdatos();
  },[])


  return (
    <View style={styles.container}>
      <ScrollView>
        {datos.results.map((reg, indx)=>{
          const codigoPokemon = getCodigo(reg.url);
          const urlImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${codigoPokemon}.png`          
          return(
            <View style={styles.regPoke} key={indx}>
              <Text >
                Nombre:
              </Text>
              <Text style={styles.pokeNombre}>
                {reg.name}
              </Text>
              <Image  style={styles.imgPoke} source={{uri:urlImagen}} />
              <Button
                onPress={()=>navigation.navigate('Detalle')}
                title={'Detalle'}
              />
            </View>
            
            
          )
        })}
      </ScrollView>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:dpWidth
  },
  imgPoke:{
    width:64,
    height:64,
    resizeMode:'stretch'
  },
  regPoke:{
    display: 'flex',
    flexDirection:'row',
    width: dpWidth*0.9,    
    padding: 5,
    borderWidth:1,
    borderColor:'black',
    borderStyle:'solid',
    alignContent:'center',
    alignItems:'center',
    verticalAlign:'center'
  },
  pokeNombre:{
    fontSize:18,
    fontWeight:'bold'
  }
});
