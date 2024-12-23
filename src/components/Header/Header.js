import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useWindowDimensions, View } from 'react-native';
import Spacer from '../Spacer';
import HeaderTitle from './HeaderTitle';
import HeaderIcon from './HeaderButton';
import HeaderGroup from './HeaderGroup';

export default Header = (props) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={{
        width: width,
        flexDirection: 'row',
        height: 56,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
      }}>
        <Spacer horizontal={true} space={12} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          {props.children}
        </View>
        <Spacer horizontal={true} space={12} />
      </View>
    </View>
  )
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;