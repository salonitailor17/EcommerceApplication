import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container, EventCard} from '../../../components';
import useStyles from './styles';
import {loadLikedItems} from '../../../store/actions/app/likes';

const Likes = () => {
  const [events, setEvents] = useState<object[]>([]);
  const likedItems = useSelector(state => state.likes.likedItems);

  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLikedItems());
  }, []);

  useEffect(() => {
    if (likedItems) {
      setEvents(likedItems);
    }
  }, [likedItems]);

  const renderItem = ({item, index}) => {
    return <EventCard item={item} index={index} icon={true} />;
  };

  return (
    <Container header label="Likes">
      <FlatList
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatList}
      />
    </Container>
  );
};

export default Likes;
