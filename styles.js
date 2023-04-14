import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    blocoPrincipal: {
        flexDirection: 'row',
        backgroundColor: '#EFF1F3',
        width: '90%',
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1
        
    },
    viewImagem: {
        width:'35%',
        padding: 5
    },
    viewInformacoes: {
        width:'65%',
        padding: 10
    },
    Imagem: {
        marginTop: 20,
        height: '70%',
        width: '100%',
        borderRadius: 10

    },
    textoTitulo: {
        fontSize: 18,
        padding: 1
    },
    textoPoder: {
        fontSize: 15,
        padding: 1
    },
    textoDescricao: {
        fontSize: 13,
        marginBottom: 10
    },
    botao: {
        borderRadius: 15,
        bottom: 10,
        padding: 15
    },
});

export default styles;

