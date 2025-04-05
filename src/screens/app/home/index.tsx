import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {
  AppText,
  Container,
  EventCard,
  Modal,
  SearchInput,
} from '../../../components';
import {colors, Icon} from '../../../assets';

import {moderateHeight} from '../../../helpers/responsive';
import {fontSize} from '../../../helpers';
import {activeOpacity, priceRange} from '../../../helpers/helpers';
import useStyles from './styles';

const Home = () => {
  const [events, setEvents] = useState<object[]>([]);
  const [allEvents, setAllEvents] = useState<object[]>([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>('');

  const [visible, setVisible] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [range, setRange] = useState<string>('');

  const styles = useStyles();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        setAllEvents(data || []);
        setEvents(data || []);
        setLoading(false);
      } catch (error) {
        console.log('error=>', error);
      }
    };

    fetchEvents();
  }, []);

  const parseRange = (rangeStr: string) => {
    const [min, max] = rangeStr.split('-').map(Number);
    return {min, max};
  };

  useEffect(() => {
    let filtered = [...allEvents];

    if (search !== '') {
      filtered = filtered?.filter((item: any) =>
        item?.title?.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (range) {
      const {min, max} = parseRange(range);
      filtered = filtered?.filter(
        (item: any) => item?.price >= min && item?.price <= max,
      );
    }

    if (rating > 0) {
      filtered = filtered?.filter((item: any) => item?.rating?.rate >= rating);
    }

    setEvents(filtered);
  }, [range, rating, search, allEvents]);

  const renderItem = ({item, index}) => {
    return <EventCard item={item} index={index} />;
  };

  const onChangeText = (keyword: string) => {
    setSearch(keyword);
  };

  const handleFilter = () => {
    setVisible(true);
  };

  const handleFilterClear = () => {
    setRange('');
    setRating(0);
  };

  return (
    <Container header label="Home">
      <View style={styles.container}>
        <SearchInput onChangeText={onChangeText} value={search} />
        <TouchableOpacity onPress={handleFilter}>
          <Icon.FilterIcon
            height={moderateHeight(3)}
            width={moderateHeight(3)}
          />
        </TouchableOpacity>
        {(range !== '' || rating !== 0) && (
          <TouchableOpacity onPress={handleFilterClear}>
            <AppText label={'Clear'} />
          </TouchableOpacity>
        )}
      </View>
      {loading ? (
        <View style={styles.wrapper}>
          <ActivityIndicator size="large" color={colors.green} />
        </View>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
        />
      )}
      <Modal visible={visible}>
        <View style={styles.cross}>
          <AppText
            label={'Price'}
            fontWeight={'600'}
            size={fontSize.medium}
            style={{flex: 1}}
          />
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={() => setVisible(false)}>
            <Icon.ExitIcon
              height={moderateHeight(2.5)}
              width={moderateHeight(2.5)}
            />
          </TouchableOpacity>
        </View>
        <>
          {priceRange?.map(i => {
            return (
              <TouchableOpacity
                key={i?.id}
                onPress={() => {
                  setRange(i?.range);
                  setVisible(false);
                }}
                style={{
                  backgroundColor:
                    range === i?.range ? colors.green : colors.primary,
                }}>
                <AppText label={i?.range} size={fontSize.text} />
              </TouchableOpacity>
            );
          })}
        </>
        <AppText
          label={'Rating'}
          fontWeight={'600'}
          size={fontSize.medium}
          style={{marginTop: moderateHeight(1)}}
        />
        <>
          {[1, 2, 3, 4, 5]?.map(i => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setRating(i), setVisible(false);
                }}
                style={{
                  backgroundColor: rating === i ? colors.green : colors.primary,
                }}>
                <AppText label={i} size={fontSize.text} />
              </TouchableOpacity>
            );
          })}
        </>
      </Modal>
    </Container>
  );
};

export default Home;
