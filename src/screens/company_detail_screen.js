import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CompanyDetail from '../components/company_detail';

export default function CompanyDetailScreen() {
  const route = useRoute();
  const { company } = route.params;

  return (
    <ScrollView style={styles.container}>
      <CompanyDetail company={company} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5ee',
  },
});
