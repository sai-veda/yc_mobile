import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CompanyCard({ company }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CompanyDetail', { company })}>
      <View style={styles.card}>
        <Image source={{ uri: company.small_logo_thumb_url }} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.name}>{company.name}</Text>
          <Text style={styles.oneLiner}>{company.one_liner}</Text>
          <Text style={styles.location}>{company.all_locations}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fdfdf7',
    borderColor: '#edede8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#545452',
  },
  oneLiner: {
    fontSize: 14,
    color: '#545452',
  },
  location: {
    fontSize: 12,
    color: '#98bad3',
  },
});
