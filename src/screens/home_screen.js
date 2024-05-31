import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import CompanyCard from '../components/company_card';
import FiltersModal from '../components/filters_modal';
import companiesData from '../data/companies.json';

export default function HomeScreen() {
  const [companies, setCompanies] = useState(companiesData.results[0].hits);
  const [filters, setFilters] = useState({
    topCompanies: false,
    isHiring: false,
    nonprofit: false,
    blackFounded: false,
    hispanicLatinoFounded: false,
    womenFounded: false,
    batch: 'All batches',
    industry: 'All industries',
    region: 'Anywhere',
    tags: [],
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [displayedCompanies, setDisplayedCompanies] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const itemsPerPage = 10;

  useEffect(() => {
    let sortedCompanies = [...companies];
    if (sortOption === 'launchDate') {
      sortedCompanies.sort((a, b) => b.launched_at - a.launched_at);
    }
    setDisplayedCompanies(sortedCompanies.slice(0, itemsPerPage));
  }, [companies, sortOption]);

  const applyFilters = (newFilters) => {
    let filteredCompanies = companiesData.results[0].hits;

    if (newFilters.topCompanies) {
      filteredCompanies = filteredCompanies.filter(company => company.top_company);
    }

    if (newFilters.isHiring) {
      filteredCompanies = filteredCompanies.filter(company => company.isHiring);
    }

    if (newFilters.nonprofit) {
      filteredCompanies = filteredCompanies.filter(company => company.nonprofit);
    }

    if (newFilters.blackFounded) {
      filteredCompanies = filteredCompanies.filter(company => company.highlight_black);
    }

    if (newFilters.hispanicLatinoFounded) {
      filteredCompanies = filteredCompanies.filter(company => company.highlight_latinx);
    }

    if (newFilters.womenFounded) {
      filteredCompanies = filteredCompanies.filter(company => company.highlight_women);
    }

    if (newFilters.batch !== 'All batches') {
      filteredCompanies = filteredCompanies.filter(company => company.batch === newFilters.batch);
    }

    if (newFilters.industry !== 'All industries') {
      filteredCompanies = filteredCompanies.filter(company => company.industry.includes(newFilters.industry));
    }

    if (newFilters.region !== 'Anywhere') {
      filteredCompanies = filteredCompanies.filter(company => company.regions.includes(newFilters.region));
    }

    if (newFilters.tags.length > 0) {
      filteredCompanies = filteredCompanies.filter(company => 
        newFilters.tags.every(tag => company.tags.includes(tag))
      );
    }

    setCompanies(filteredCompanies);
    setPage(1); // Reset to first page when filters are applied
    setDisplayedCompanies(filteredCompanies.slice(0, itemsPerPage));
  };

  const loadMoreCompanies = () => {
    const nextPage = page + 1;
    const newCompanies = companies.slice(0, nextPage * itemsPerPage);
    setDisplayedCompanies(newCompanies);
    setPage(nextPage);
  };

  const handleSort = () => {
    setSortOption(prevOption => prevOption === 'default' ? 'launchDate' : 'default');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Companies</Text>
        <View style={styles.buttonContainer}>
       
          <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={displayedCompanies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CompanyCard company={item} />}
        onEndReached={loadMoreCompanies}
        onEndReachedThreshold={0.5}
      />
      <FiltersModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5ee',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  filterButton: {
    backgroundColor: '#007bff', // Proper button color
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sortButton: {
    borderColor: '#007bff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  sortButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});
