import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Filters({ filters, setFilters, applyFilters }) {
  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Filters</Text>
      
      <View style={styles.filterRow}>
        <Text style={styles.label}>Top Companies</Text>
        <Switch
          value={filters.topCompanies}
          onValueChange={(value) => setFilters({ ...filters, topCompanies: value })}
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Is Hiring</Text>
        <Switch
          value={filters.isHiring}
          onValueChange={(value) => setFilters({ ...filters, isHiring: value })}
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Nonprofit</Text>
        <Switch
          value={filters.nonprofit}
          onValueChange={(value) => setFilters({ ...filters, nonprofit: value })}
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Black-founded</Text>
        <Switch
          value={filters.blackFounded}
          onValueChange={(value) => setFilters({ ...filters, blackFounded: value })}
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Hispanic & Latino-founded</Text>
        <Switch
          value={filters.hispanicLatinoFounded}
          onValueChange={(value) => setFilters({ ...filters, hispanicLatinoFounded: value })}
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Women-founded</Text>
        <Switch
          value={filters.womenFounded}
          onValueChange={(value) => setFilters({ ...filters, womenFounded: value })}
        />
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Batch</Text>
        <Picker
          selectedValue={filters.batch}
          style={styles.picker}
          onValueChange={(itemValue) => setFilters({ ...filters, batch: itemValue })}
        >
          <Picker.Item label="All batches" value="All batches" />
          <Picker.Item label="S24" value="S24" />
          <Picker.Item label="W24" value="W24" />
          {/* Add other batch options here */}
        </Picker>
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Industry</Text>
        <Picker
          selectedValue={filters.industry}
          style={styles.picker}
          onValueChange={(itemValue) => setFilters({ ...filters, industry: itemValue })}
        >
          <Picker.Item label="All industries" value="All industries" />
          <Picker.Item label="B2B" value="B2B" />
          <Picker.Item label="Education" value="Education" />
          {/* Add other industry options here */}
        </Picker>
      </View>

      <View style={styles.filterRow}>
        <Text style={styles.label}>Region</Text>
        <Picker
          selectedValue={filters.region}
          style={styles.picker}
          onValueChange={(itemValue) => setFilters({ ...filters, region: itemValue })}
        >
          <Picker.Item label="Anywhere" value="Anywhere" />
          <Picker.Item label="America / Canada" value="America / Canada" />
          <Picker.Item label="Remote" value="Remote" />
          {/* Add other region options here */}
        </Picker>
      </View>

      {/* Implement tags selection */}

      <Button title="Apply Filters" onPress={handleApplyFilters} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5ee',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  picker: {
    flex: 2,
  },
});