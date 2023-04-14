import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from './Itens';



const listaItens = [
  {
    nome: "Bulbasaur",
    descricao: "Aumenta o Poder de movimentos do tipo Planta quando o HP do Pokémon estiver baixo.",
    poder: "Grama/Venenoso",
    urlImagem: "https://1.bp.blogspot.com/-V7h17AGTUdk/VxKCMmQ203I/AAAAAAAAD_I/lt0afftfYV0V09LGO58rcenBkTpXrui2wCLcB/s1600/bulbasaur.gif"
  },
  {
    nome: "Charmander",
    descricao: "Aumenta o Poder de movimentos do tipo Fogo quando o HP do Pokémon estiver baixo.",
    poder: "Fogo",
    urlImagem: "https://3.bp.blogspot.com/-GJTT46a6Hoc/VxKCQ2Qd-mI/AAAAAAAAD_M/VLzya2PiJb8C8I0Hr8OiZ2UFK_aFNo33gCLcB/s1600/charmander.gif"
  },
  {
    nome: "Squirtle",
    descricao: "Ele cria um vórtice de água em sua calda que pega todas as esferas do Hidden piwer e volta junto com o vórtice contra Fennekin, Snivy e Pancham",
    poder: "Água",
    urlImagem: "https://1.bp.blogspot.com/-faWDQWOHX6Y/VxKCUXIzkCI/AAAAAAAAD_Q/wMzcTSnX5OssBrJLoiAH0htA98_LEVvGQCLcB/s1600/squirtle.gif"
  },
]






export default function App() {
  return (
    <View style={styles.container}>
      {listaItens.map(item => <Item item={item}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
