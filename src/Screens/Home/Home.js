import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, SafeAreaView, FlatList, View, Image,
} from 'react-native';
import Spinner from 'react-native-spinkit';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listWrapper: {
    flex: 0,
    height: 300,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 0.5,
  },
  avatar: {
    height: 45,
    width: 45,
    marginRight: 10,
    borderRadius: 45 / 2,
  },
  messageWrapper: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  loaderWrapper: {
    height: 89,
    width: 89,
  },
});

function Home({
  usersPage, usersList, handleGetUsers,
}) {
  const [isLoaderShown, setIsLoaderShown] = useState(true);
  setTimeout(() => setIsLoaderShown(false), 3000);

  useEffect(() => {
    if (!usersList.length) handleGetUsers(1);
  }, []);

  const getMore = () => {
    if (usersList.length < usersPage?.total) {
      handleGetUsers(usersPage.page + 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Spinner
        isVisible={isLoaderShown}
        size={100}
        type="Bounce"
        color="#7FB900"
      />

      {!isLoaderShown && !!usersList.length
        && (
        <View style={styles.listWrapper}>
          <FlatList
            style={styles.list}
            data={usersList}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: item.avatar,
                  }}
                />
                <View>
                  <Text>
                    {`${item.first_name} ${item.last_name}`}
                  </Text>
                  <Text>
                    {item.email}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => `${item.email}_${item.last_name}_${index}`}
            onEndReached={getMore}
            onEndReachedThreshold={0}
          />
        </View>
        )}

      <View style={styles.messageWrapper}>
        {usersList.length >= usersPage?.total && <Text>There is no more users</Text>}
      </View>
    </SafeAreaView>
  );
}

Home.propTypes = {
  usersPage: PropTypes.shape({
    page: PropTypes.number,
    per_page: PropTypes.number,
    total: PropTypes.number,
    total_pages: PropTypes.number,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        avatar: PropTypes.string,
      }),
    ),
  }),
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
  handleGetUsers: PropTypes.func.isRequired,
};

Home.defaultProps = {
  usersPage: null,
  usersList: [],
};

export default Home;
