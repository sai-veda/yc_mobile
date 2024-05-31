import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CompanyDetail({ company }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: company.small_logo_thumb_url }} style={styles.logo} />
        <View style={styles.headerInfo}>
     <Text style={styles.name}>{company.name}</Text>
          <Text style={styles.oneLiner}>{company.one_liner}</Text>
          <View style={styles.tags}>
            {company.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>{tag}</Text>
            ))}
          </View>
          <Text style={styles.location}>{company.all_locations}</Text>
          <Text style={styles.website} onPress={() => Linking.openURL(company.website)}>{company.website}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{company.long_description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fdfdf7',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#545452',
  },
  oneLiner: {
    fontSize: 16,
    color: '#545452',
    marginVertical: 10,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: '#edede8',
    color: '#545452',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    color: '#98bad3',
  },
  website: {
    fontSize: 14,
    color: '#98bad3',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  body: {
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#545452',
    lineHeight: 22,
  },
});