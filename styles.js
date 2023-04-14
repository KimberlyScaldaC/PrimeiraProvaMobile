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




// container: {
//     flexDirection: 'row',
//     backgroundColor: 'yellow',
//     width: '90%',
//     height: 150,
//     borderRadius: 10
// },
// viewImagem: {
//     width:'30%',
//     padding: 10
// },
// viewDados: {
//     width: '70%',
//     padding: 10,
// },
// poster: {
//     height: '100%',
//     width: '100%',
//     borderRadius: 10
// },
// titulo: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center'
// },
// sinopse: {
//     marginBottom: 10
// },
// btnComprar: {
//     borderRadius: 15,
//     bottom: 10
// },