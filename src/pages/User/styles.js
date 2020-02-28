import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #ccc;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 2px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingStyle = styled.View`
  padding: 20px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextLoading = styled.Text`
  color: #08969b;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding-top: 3px;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 1px;
  align-self: stretch;
  border-radius: 4px;
  background: #00869b;
  justify-content: center;
  align-items: center;
  height: 36px;
`;
