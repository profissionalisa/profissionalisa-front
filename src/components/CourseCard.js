import { View, Text, StyleSheet } from 'react-native'

const CourseCard = () => {
    return(
        <View style={styles.cardBox}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Fundamentos do Marketing</Text>
                <Text style={styles.subTitle}>Prof Rafael Barros</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBox: {
        boxSizing: "border-box",
        width: "100%",
        height: 160,
        backgroundImage: "url()",
        borderWidth: 1,
        borderColor: "#FFB03B",
        borderRadius: 4,
        marginBottom: 20
    },
    titleBox: {
        boxSizing: "border-box",
        width: "100%",
        height: "40%",
        backgroundColor: "#ffffff",
        marginTop: "30%",
        padding: 15
    },
    title: {
        color: "#00381E",
        fontSize: 16
    },
    subTitle: {
        color: "#B64926",
        fontSize: 12
    }
})

export default CourseCard