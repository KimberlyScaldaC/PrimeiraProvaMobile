import { Button, Text, View } from "react-native";
import { Image } from "react-native";
import styles from "./styles";



export default function Item(props){
    return(
        <View style={styles.blocoPrincipal}>

                <View style={styles.viewImagem}>
                    <Image style={styles.Imagem} source={{uri: props.item.urlImagem}}/>
                </View>
                <View style={styles.viewInformacoes}>
                    <Text style={styles.textoTitulo}>Nome: {props.item.nome}</Text>
                    <Text style={styles.textoPoder}>Poder: {props.item.poder}</Text>
                    <Text style={styles.textoDescricao}>Descrição: {props.item.descricao}</Text>
                    <Button title="Propor a troca" style={styles.botao}/>
                </View>

        </View>



    )
}