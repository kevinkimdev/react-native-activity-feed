// @flow

import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Count from '../../components/Count';
import Avatar from '../../components/Avatar';
import CoverImage from '../../components/CoverImage';
import type { FollowCounts } from 'getstream';
import type { AppCtx } from '../../Context';

type Props = AppCtx;

type State = {
  user: FollowCounts,
};

class ProfileHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: {
        following_count: 100,
        followers_count: 1100,
      },
    };
  }

  async componentDidMount() {
    let data = await this.props.user.profile();
    this.props.changedUserData();
    this.setState({ user: data });
  }

  render() {
    let { following_count, followers_count } = this.state.user;
    let { name, url, desc, profileImage, coverImage } =
      this.props.userData || {};

    coverImage ? StatusBar.setBarStyle('light-content', true) : null;

    return (
      <SafeAreaView style={[styles.profileHeader]}>
        {coverImage ? <CoverImage source={coverImage} /> : null}

        <View style={[styles.mainSection]}>
          <View style={styles.userDetails}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userUrl}>{url}</Text>
            <Text style={styles.userDesc}>{desc}</Text>
          </View>
          <Avatar source={profileImage} size={150} style={styles.avatar} />
        </View>

        <View style={styles.statSection}>
          <Count num={following_count}>Followers</Count>
          <Count num={followers_count}>Following</Count>
        </View>
      </SafeAreaView>
    );
  }
}

const margin = 15;

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: '#fff',
    paddingBottom: margin,
    width: 100 + '%',
  },
  profileHeaderShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  mainSection: {
    width: 100 + '%',
    height: 150,
    marginTop: 90,
    marginBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 39,
    fontWeight: '600',
    color: '#364047',
  },
  userUrl: {
    fontSize: 12,
    color: '#364047',
  },
  userDesc: {
    fontSize: 14,
    fontWeight: '500',
    color: '#364047',
    lineHeight: 19,
    marginTop: 7,
  },
  statSection: {
    paddingLeft: margin * 2,
    paddingRight: margin,
    flexDirection: 'row',
  },
});

export default ProfileHeader;
