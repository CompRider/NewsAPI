import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Menu, Divider} from 'react-native-paper';
import PropTypes from 'prop-types';

const CategorySelection = ({
  onCategoryChange,
  selectedCategory,
  dataFetching,
}) => {
  const [visible, setVisible] = useState(false);
  const [categoryList] = useState([
    {
      value: 'business',
      label: 'Business',
    },
    {
      value: 'entertainment',
      label: 'Entertainment',
    },
    {
      value: 'science',
      label: 'Science',
    },
    {
      value: 'technology',
      label: 'Technology',
    },
    {
      value: 'sports',
      label: 'Sports',
    },
    {
      value: 'health',
      label: 'Health',
    },
  ]);

  useEffect(() => {
    if (!selectedCategory) {
      // Default 1st category selected
      onCategoryChange(categoryList[0]);
    }
  }, []);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const categorySelected = item => {
    onCategoryChange(item);
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} disabled={dataFetching}>
            Category: {selectedCategory && selectedCategory.label} News
          </Button>
        }>
        {categoryList.map(item => (
          <Menu.Item
            key={item.label}
            onPress={() => categorySelected(item)}
            title={item.label}
          />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

CategorySelection.prototype = {
  onCategoryChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired,
  dataFetching: PropTypes.bool,
};

export default CategorySelection;
