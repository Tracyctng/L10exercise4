// Import the necessary tools
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react';

export default function App() {

    // Title + background colors with names + images
    const sections = [
        {
            title: 'K-POP BOYS GROUP 💙',
            background: '#b0e0e6',
            titleColor: '#4169e1',
            data: [
                { name: 'BTS', cardUrl: 'https://i1.wp.com/stephanieeffevottu.com/wp-content/uploads/2023/06/20230609_100516.jpg?fit=1200%2C800&ssl=1' },
                { name: 'EXO', cardUrl: 'https://0.soompi.io/wp-content/uploads/2016/06/07212603/EXO-Star-Daily-News.jpg' },
            ],
        },
        {
            title: 'K-POP GIRLS GROUP 🩷',
            background: '#ffb6c1',
            titleColor: '#ff1493',
            data: [
                { name: 'BLACKPINK', cardUrl: 'https://headlineplanet.com/home/wp-content/uploads/2020/08/BLACKPINK-Ice-Cream-Video.jpg' },
                { name: 'IVE', cardUrl: 'https://kpopofficial.com/wp-content/uploads/2025/09/1-IVE-Members-Group-Photo.webp' },
            ]
        }
    ];

    // Actions once an image is clicked
    const [selectedImage, setSelectedImage] = React.useState(null);

    const renderItem = ({ item }) => {

        return (

            <View style={styles.itemContainer}>

                {/* Left text */}
                <View style={styles.leftBox}>
                    <Text style={styles.nameText}>{item.name}</Text>
                </View>

                {/* Right image */}
                <View style={styles.rightBox}>
                    <TouchableOpacity onPress={() => setSelectedImage(item.cardUrl)}>
                        <Image source={{ uri: item.cardUrl }} style={styles.cardImage} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

            </View>
        );
    };

    // Header title
    const renderSectionHeader = ({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: section.background }]}>
            <Text style={[styles.sectionHeaderText, { color: section.titleColor }]}>
                {section.title}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* Add button + Full width border */}
            <View style={styles.addButtonContainer}>
                <Button title="ADD GROUP" onPress={() => {}} />
            </View>

            <View style={styles.fullLine} />

            {/* List */}
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={() => <View style={styles.fullLine} />}
                contentContainerStyle={styles.listContent}
            />

            {/* When an image on the right is clicked*/}
            {selectedImage && (
                <View styles={styles.cardImage}>
                    <TouchableOpacity onPress={() => setSelectedImage(null)}>
                        <Image
                            source={{ uri: selectedImage }}
                            style={styles.fullImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff5ee',
    },

    fullLine: {
        backgroundColor: '#000',
        width: "100%",
    },

    addButtonContainer: {
        padding: 10,
        backgroundColor: '#fff5ee',
        borderBottomWidth: 1,
        borderColor: '#000',
    },

    listContent: { paddingBottom: 10},

    // Top and bottom section header
    sectionHeader: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#000",
    },

    sectionHeaderText: {
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
    },

    // Item outer rectangle
    itemContainer: {
        flexDirection: "row",
        backgroundColor: "#fff5ee",
        borderWidth: 1,
        borderColor: "#000",
        minHeight: 200,
        padding: 10
    },

    // Left name box
    leftBox: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
    },

    nameText: { fontSize: 20, fontWeight: "600" },

    // Right image box
    rightBox: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 10,
    },

    fullImage: {
        width: "100%",
        height: "95%",
        justifyContent: "center",
    },

    cardImage: { width: 140, height: 180 },

    placeholder: {
        width: 100,
        height: 140,
        borderWidth: 1,
        borderColor: "#999",
        justifyContent: "center",
        alignItems: "center",
    },

    placeholderText: { fontSize: 12, textAlign: "center", color: "#666" }
});