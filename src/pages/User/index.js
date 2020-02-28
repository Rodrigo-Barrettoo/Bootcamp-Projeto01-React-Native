import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
  LoadingStyle,
  TextLoading,
  SubmitButton,
} from './styles';

// import { Container } from './styles';

export default class User extends Component {
  // eslint-disable-next-line react/sort-comp
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    stars: [],
    loading: true,
    loadingMais: false,
    page: 1,
  };

  async componentDidMount(page = 1) {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const { stars } = this.state;

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page,
      },
    });

    this.setState({
      stars: [...stars, ...response.data],
      page,
      loading: false,
      loadingMais: false,
    });
  }

  loadMore = () => {
    const { page } = this.state;
    const nextPage = page + 1;

    this.setState({ loadingMais: true });
    this.componentDidMount(nextPage);
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, loadingMais } = this.state;
    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <Loading>
            <LoadingStyle>
              <ActivityIndicator size="large" color="#08969b" />
              <TextLoading>Carregando</TextLoading>
            </LoadingStyle>
          </Loading>
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
        <SubmitButton onPress={this.loadMore}>
          {loadingMais ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Container>
    );
  }
}
