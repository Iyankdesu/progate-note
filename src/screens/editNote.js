import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

const EditNote = ({ setCurrentPage, editNote, currentNote }) => {
	const [title, setTitle] = useState(currentNote ? currentNote.title : "");
	const [desc, setDesc] = useState(currentNote ? currentNote.desc : "");

	useEffect(() => {
		if (currentNote) {
			setTitle(currentNote.title);
			setDesc(currentNote.desc);
		}
	}, [currentNote]);

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Ubah Note</Text>
			<CustomTextInput
				text={title}
				onChange={setTitle}
				label="Judul"
				numberOfLines={1}
				multiline={false}
			/>
			<CustomTextInput
				text={desc}
				onChange={setDesc}
				label="Deskripsi"
				numberOfLines={4}
				multiline
			/>
			<View style={styles.spacerTop}>
				<CustomButton
					backgroundColor="#247881"
					color="#fff"
					text="Simpan Perubahan"
					width="100%"
					onPress={() => {
						editNote(currentNote.id, title, desc);
						setCurrentPage("home");
					}}
				/>
			</View>
			<View style={styles.spacerTop}>
				<CustomButton
					backgroundColor="#DDDDDD"
					color="#203239"
					text="Kembali ke Home"
					width="100%"
					onPress={() => setCurrentPage("home")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: 20,
	},
	pageTitle: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: "700",
		textAlign: "center",
		color: "#203239",
	},
	spacerTop: {
		marginTop: 30,
	},
});

export default EditNote;
