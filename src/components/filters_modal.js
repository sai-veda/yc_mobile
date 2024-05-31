import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Button, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function FiltersModal({ modalVisible, setModalVisible, filters, setFilters, applyFilters }) {
    const [isFilterChanged, setIsFilterChanged] = useState(false);

    const handleApplyFilters = () => {
      applyFilters(filters);
      setModalVisible(false);
      setIsFilterChanged(false);
    };

    const handleValueChange = (key, value) => {
      setFilters({ ...filters, [key]: value });
      setIsFilterChanged(true);
    };

    useEffect(() => {
      setIsFilterChanged(false);
    }, [modalVisible]);

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setIsFilterChanged(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Filters</Text>
            <ScrollView>
              <View style={styles.filterRow}>
                <Text style={styles.label}>Top Companies</Text>
                <Switch
                  value={filters.topCompanies}
                  onValueChange={(value) => handleValueChange('topCompanies', value)}
                />
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Is Hiring</Text>
                <Switch
                  value={filters.isHiring}
                  onValueChange={(value) => handleValueChange('isHiring', value)}
                />
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Nonprofit</Text>
                <Switch
                  value={filters.nonprofit}
                  onValueChange={(value) => handleValueChange('nonprofit', value)}
                />
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Black-founded</Text>
                <Switch
                  value={filters.blackFounded}
                  onValueChange={(value) => handleValueChange('blackFounded', value)}
                />
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Hispanic & Latino-founded</Text>
                <Switch
                  value={filters.hispanicLatinoFounded}
                  onValueChange={(value) => handleValueChange('hispanicLatinoFounded', value)}
                />
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Women-founded</Text>
                <Switch
                  value={filters.womenFounded}
                  onValueChange={(value) => handleValueChange('womenFounded', value)}
                />
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Batch</Text>
                <Picker
                  selectedValue={filters.batch}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleValueChange('batch', itemValue)}
                >
                  <Picker.Item label="All batches" value="All batches" />
                  <Picker.Item label="S24" value="S24" />
                  <Picker.Item label="W24" value="W24" />
                  <Picker.Item label="S23" value="S23" />
                  <Picker.Item label="W23" value="W23" />
                  <Picker.Item label="S22" value="S22" />
                  <Picker.Item label="W22" value="W22" />
                  <Picker.Item label="S21" value="S21" />
                  <Picker.Item label="W21" value="W21" />
                  <Picker.Item label="S20" value="S20" />
                  <Picker.Item label="W20" value="W20" />
                  <Picker.Item label="S19" value="S19" />
                  <Picker.Item label="W19" value="W19" />
                  <Picker.Item label="S18" value="S18" />
                  <Picker.Item label="W18" value="W18" />
                  <Picker.Item label="S17" value="S17" />
                  <Picker.Item label="W17" value="W17" />
                  <Picker.Item label="IK12" value="IK12" />
                  <Picker.Item label="S16" value="S16" />
                  <Picker.Item label="W16" value="W16" />
                  <Picker.Item label="S15" value="S15" />
                  <Picker.Item label="W15" value="W15" />
                  <Picker.Item label="S14" value="S14" />
                  <Picker.Item label="W14" value="W14" />
                  <Picker.Item label="S13" value="S13" />
                  <Picker.Item label="W13" value="W13" />
                  <Picker.Item label="S12" value="S12" />
                  <Picker.Item label="W12" value="W12" />
                  <Picker.Item label="S11" value="S11" />
                  <Picker.Item label="W11" value="W11" />
                  <Picker.Item label="S10" value="S10" />
                  <Picker.Item label="W10" value="W10" />
                  <Picker.Item label="S09" value="S09" />
                  <Picker.Item label="W09" value="W09" />
                  <Picker.Item label="S08" value="S08" />
                  <Picker.Item label="W08" value="W08" />
                  <Picker.Item label="S07" value="S07" />
                  <Picker.Item label="W07" value="W07" />
                  <Picker.Item label="S06" value="S06" />
                  <Picker.Item label="W06" value="W06" />
                  <Picker.Item label="S05" value="S05" />
                </Picker>
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Industry</Text>
                <Picker
                  selectedValue={filters.industry}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleValueChange('industry', itemValue)}
                >
                  <Picker.Item label="All industries" value="All industries" />
                  <Picker.Item label="B2B" value="B2B" />
                  <Picker.Item label="Education" value="Education" />
                  <Picker.Item label="Fintech" value="Fintech" />
                  <Picker.Item label="Consumer" value="Consumer" />
                  <Picker.Item label="Healthcare" value="Healthcare" />
                  <Picker.Item label="Real Estate and Construction" value="Real Estate and Construction" />
                  <Picker.Item label="Industrials" value="Industrials" />
                  <Picker.Item label="Government" value="Government" />
                  <Picker.Item label="Unspecified" value="Unspecified" />
                </Picker>
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Region</Text>
                <Picker
                  selectedValue={filters.region}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleValueChange('region', itemValue)}
                >
                  <Picker.Item label="Anywhere" value="Anywhere" />
                  <Picker.Item label="America / Canada" value="America / Canada" />
                  <Picker.Item label="Remote" value="Remote" />
                  <Picker.Item label="Europe" value="Europe" />
                  <Picker.Item label="South Asia" value="South Asia" />
                  <Picker.Item label="Latin America" value="Latin America" />
                  <Picker.Item label="Southeast Asia" value="Southeast Asia" />
                  <Picker.Item label="Africa" value="Africa" />
                  <Picker.Item label="Middle East and North Africa" value="Middle East and North Africa" />
                  <Picker.Item label="East Asia" value="East Asia" />
                  <Picker.Item label="Oceania" value="Oceania" />
                </Picker>
              </View>
  
              <View style={styles.filterRow}>
                <Text style={styles.label}>Tags</Text>
                <Picker
                  selectedValue={filters.tags}
                  style={styles.picker}
                  onValueChange={(itemValue) => handleValueChange('tags', itemValue)}
                >
                  <Picker.Item label="SaaS" value="SaaS" />
                  <Picker.Item label="B2B" value="B2B" />
                  <Picker.Item label="Fintech" value="Fintech" />
                  <Picker.Item label="Artificial Intelligence" value="Artificial Intelligence" />
                  <Picker.Item label="Developer Tools" value="Developer Tools" />
                  <Picker.Item label="AI" value="AI" />
                  <Picker.Item label="Marketplace" value="Marketplace" />
                  <Picker.Item label="E-commerce" value="E-commerce" />
                  <Picker.Item label="Machine Learning" value="Machine Learning" />
                  <Picker.Item label="Generative AI" value="Generative AI" />
                  <Picker.Item label="Analytics" value="Analytics" />
                  <Picker.Item label="Education" value="Education" />
                  <Picker.Item label="Consumer" value="Consumer" />
                  <Picker.Item label="Healthcare" value="Healthcare" />
                  <Picker.Item label="Climate" value="Climate" />
                  <Picker.Item label="API" value="API" />
                  <Picker.Item label="Open Source" value="Open Source" />
                  <Picker.Item label="Health Tech" value="Health Tech" />
                  <Picker.Item label="Productivity" value="Productivity" />
                  <Picker.Item label="Payments" value="Payments" />
                  <Picker.Item label="Biotech" value="Biotech" />
                  <Picker.Item label="Consumer Health Services" value="Consumer Health Services" />
                  <Picker.Item label="Logistics" value="Logistics" />
                  <Picker.Item label="Enterprise" value="Enterprise" />
                  <Picker.Item label="Hardware" value="Hardware" />
                  <Picker.Item label="Crypto / Web3" value="Crypto / Web3" />
                  <Picker.Item label="Digital Health" value="Digital Health" />
                  <Picker.Item label="Data Engineering" value="Data Engineering" />
                  <Picker.Item label="Proptech" value="Proptech" />
                  <Picker.Item label="Gaming" value="Gaming" />
                  <Picker.Item label="Sales" value="Sales" />
                  <Picker.Item label="Video" value="Video" />
                  <Picker.Item label="Security" value="Security" />
                  <Picker.Item label="AI Assistant" value="AI Assistant" />
                  <Picker.Item label="Medical Devices" value="Medical Devices" />
                  <Picker.Item label="Social" value="Social" />
                  <Picker.Item label="HR Tech" value="HR Tech" />
                  <Picker.Item label="Hard Tech" value="Hard Tech" />
                  <Picker.Item label="Community" value="Community" />
                  <Picker.Item label="Real Estate" value="Real Estate" />
                  <Picker.Item label="Recruiting" value="Recruiting" />
                  <Picker.Item label="Robotics" value="Robotics" />
                  <Picker.Item label="Insurance" value="Insurance" />
                  <Picker.Item label="Marketing" value="Marketing" />
                  <Picker.Item label="Supply Chain" value="Supply Chain" />
                  <Picker.Item label="Computer Vision" value="Computer Vision" />
                  <Picker.Item label="Enterprise Software" value="Enterprise Software" />
                  <Picker.Item label="Infrastructure" value="Infrastructure" />
                  <Picker.Item label="Design Tools" value="Design Tools" />
                  <Picker.Item label="Delivery" value="Delivery" />
                  <Picker.Item label="Construction" value="Construction" />
                  <Picker.Item label="Finance" value="Finance" />
                  <Picker.Item label="Neobank" value="Neobank" />
                  <Picker.Item label="eLearning" value="eLearning" />
                  <Picker.Item label="Entertainment" value="Entertainment" />
                  <Picker.Item label="Compliance" value="Compliance" />
                  <Picker.Item label="Food Tech" value="Food Tech" />
                  <Picker.Item label="Investing" value="Investing" />
                  <Picker.Item label="Collaboration" value="Collaboration" />
                  <Picker.Item label="Retail" value="Retail" />
                  <Picker.Item label="Mental Health Tech" value="Mental Health Tech" />
                  <Picker.Item label="Messaging" value="Messaging" />
                  <Picker.Item label="Automation" value="Automation" />
                  <Picker.Item label="IoT" value="IoT" />
                  <Picker.Item label="Therapeutics" value="Therapeutics" />
                  <Picker.Item label="LegalTech" value="LegalTech" />
                  <Picker.Item label="Travel" value="Travel" />
                  <Picker.Item label="India" value="India" />
                  <Picker.Item label="Manufacturing" value="Manufacturing" />
                  <Picker.Item label="Media" value="Media" />
                  <Picker.Item label="Subscriptions" value="Subscriptions" />
                  <Picker.Item label="AI-Enhanced Learning" value="AI-Enhanced Learning" />
                  <Picker.Item label="Deep Learning" value="Deep Learning" />
                  <Picker.Item label="Transportation" value="Transportation" />
                  <Picker.Item label="ClimateTech" value="ClimateTech" />
                  <Picker.Item label="Health & Wellness" value="Health & Wellness" />
                  <Picker.Item label="DevOps" value="DevOps" />
                  <Picker.Item label="Diagnostics" value="Diagnostics" />
                  <Picker.Item label="Energy" value="Energy" />
                  <Picker.Item label="Workflow Automation" value="Workflow Automation" />
                  <Picker.Item label="AI-powered Drug Discovery" value="AI-powered Drug Discovery" />
                  <Picker.Item label="Creator Economy" value="Creator Economy" />
                  <Picker.Item label="DevSecOps" value="DevSecOps" />
                  <Picker.Item label="GovTech" value="GovTech" />
                  <Picker.Item label="Telemedicine" value="Telemedicine" />
                  <Picker.Item label="AIOps" value="AIOps" />
                  <Picker.Item label="Advertising" value="Advertising" />
                  <Picker.Item label="Cloud Computing" value="Cloud Computing" />
                  <Picker.Item label="Drug discovery" value="Drug discovery" />
                  <Picker.Item label="Genomics" value="Genomics" />
                  <Picker.Item label="No-code" value="No-code" />
                  <Picker.Item label="Agriculture" value="Agriculture" />
                  <Picker.Item label="Grocery" value="Grocery" />
                  <Picker.Item label="NLP" value="NLP" />
                  <Picker.Item label="Nonprofit" value="Nonprofit" />
                  <Picker.Item label="Cybersecurity" value="Cybersecurity" />
                  <Picker.Item label="Electric Vehicles" value="Electric Vehicles" />
                  <Picker.Item label="Food & Beverage" value="Food & Beverage" />
                  <Picker.Item label="Banking as a Service" value="Banking as a Service" />
                  <Picker.Item label="Social Media" value="Social Media" />
                </Picker>
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={isFilterChanged ? styles.applyButtonActive : styles.applyButton} 
                onPress={handleApplyFilters}
                disabled={!isFilterChanged}
              >
                <Text style={styles.buttonText}>Apply Filters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      maxHeight: '80%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    applyButton: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      alignItems: 'center',
      marginRight: 10,
    },
    applyButtonActive: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      alignItems: 'center',
      marginRight: 10,
    },
    cancelButton: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
