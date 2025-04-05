import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {colors, Icon} from '../../../assets';
import {AppInput, AppText, Container, Modal} from '../../../components';

import useStyles from './styles';
import {fontSize} from '../../../helpers';
import {activeOpacity} from '../../../helpers/helpers';
import {moderateHeight} from '../../../helpers/responsive';

import {addToLikes} from '../../../store/actions/app/likes';

const Details = ({route}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>('');
  const [descError, setDescError] = useState<string>('');

  const item = route?.params?.item;
  const styles = useStyles();

  const dispatch = useDispatch();

  const handleLike = () => {
    const updatedItem = {...item, isFavorite: 1};
    dispatch(addToLikes(updatedItem));
  };

  const handleInquery = () => {
    setVisible(true);
  };

  const handleInquerySubmit = () => {
    if (desc === '') {
      setDescError('Please enter description.');
    } else {
      setDesc('');
      setVisible(false);
    }
  };

  return (
    <Container header label={'Details'} form>
      <Image source={{uri: item?.image}} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.like}>
          <AppText
            label={item?.title}
            size={fontSize.medium}
            fontWeight={'600'}
            style={styles.title}
            numberOfLines={3}
          />
          <TouchableOpacity activeOpacity={activeOpacity} onPress={handleLike}>
            {item?.isFavorite ? <Icon.LikeFillIcon /> : <Icon.LikeIcon />}
          </TouchableOpacity>
        </View>
        <AppText
          label={`$ ${item?.price}`}
          fontWeight={'600'}
          style={styles.title}
          size={fontSize.title}
          color={colors.secondary}
        />
        <View style={styles.descWrapper}>
          <AppText
            label={`Category : ${item?.category}`}
            fontWeight={'500'}
            style={styles.title}
          />
          <AppText
            label={`Rating : ${item?.rating?.rate}`}
            fontWeight={'500'}
            style={[styles.title, {marginTop: moderateHeight(1)}]}
          />
          <AppText
            label={`Description:`}
            fontWeight={'500'}
            style={[styles.title, {marginTop: moderateHeight(1)}]}
          />
          <AppText
            label={item?.description}
            numberOfLines={800}
            style={styles.desc}
          />
        </View>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          style={styles.btn}
          onPress={handleInquery}>
          <AppText label={'Inquery'} size={fontSize.medium} />
        </TouchableOpacity>
      </View>

      <Modal visible={visible}>
        <View style={styles.cross}>
          <AppText
            label={item?.title}
            fontWeight={'600'}
            style={{flex: 1}}
            size={fontSize.medium}
            numberOfLines={5}
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
        <AppInput
          multiline
          value={desc}
          setValue={setDesc}
          error={descError}
          setError={setDescError}
          title="Description"
          placeholder="Enter Description"
        />
        <TouchableOpacity
          activeOpacity={activeOpacity}
          style={styles.btn}
          onPress={handleInquerySubmit}>
          <AppText label={'Generate Inquery'} size={fontSize.medium} />
        </TouchableOpacity>
      </Modal>
    </Container>
  );
};

export default Details;
