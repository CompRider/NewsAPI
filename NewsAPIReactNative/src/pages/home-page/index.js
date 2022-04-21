import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import HomeService from '../../services/home-service';
import CategorySelection from './components/category-selection';
import NewsCard from './components/news-card';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    if (selectedCategory) {
      getData(selectedCategory.value);
    }
  }, [selectedCategory]);

  const getData = category => {
    setLoading(true);
    HomeService.getNewsData(category)
      .then(response => {
        setData(response.articles);
      })
      .catch(error => {
        error?.message && Alert.alert('Error', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderEmptyListComponent = () => (
    <Text style={styles.noResultText}>No result found.</Text>
  );

  return (
    <View style={styles.container}>
      <CategorySelection
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
        dataFetching={loading}
      />
      {loading ? (
        <ActivityIndicator size={'large'} style={styles.loader} />
      ) : (
        <FlatList
          data={data || []}
          renderItem={({item}) => <NewsCard news={item} />}
          ListEmptyComponent={renderEmptyListComponent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    marginTop: 30,
  },
  noResultText: {fontSize: 20, textAlign: 'center', marginTop: 30},
});

export default HomePage;
