import React, {useEffect} from 'react';
import {StyleSheet, View, Linking, Alert} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const NewsCard = ({news}) => {
  const newsClicked = () => {
    Linking.canOpenURL(news.url).then(supported => {
      if (supported) {
        Linking.openURL(news.url);
      } else {
        Alert.alert('Error', 'Unable to open url: ' + news.url);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Card onPress={newsClicked}>
        {!!news.urlToImage && <Card.Cover source={{uri: news.urlToImage}} />}
        <Card.Content>
          {!!news.title && <Title>{news.title}</Title>}
          {!!news.description && <Paragraph>{news.description}</Paragraph>}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

NewsCard.prototype = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;
