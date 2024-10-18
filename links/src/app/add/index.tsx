import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import { styles } from './styles';
import { colors } from '@/styles/colors';

import { Categories } from '@/components/categories';
import { Input } from '@/components/input';
import { Button } from '@/components/button';


export default function Add() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    function handleAdd() {
        console.log({name, url});
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>

            <Categories/>

            <View style={styles.form}>
                <Input placeholder='Nome' onChangeText={setName} autoCorrect={false}/>
                <Input placeholder='URL' onChangeText={setUrl} autoCorrect={false}/>
                <Button title='Adicionar' onPress={handleAdd}/>
            </View>
        </View>
    )
}