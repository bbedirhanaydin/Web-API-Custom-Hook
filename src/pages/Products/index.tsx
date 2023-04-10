import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Product = (props: any) => {
  const {loading, data, error} = useFetch(Config.API_URL);
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text> {error} </Text>;
  }

  const handleProductSelect = item => {
    props.navigation.navigate('Detail', item);
  };

  const renderProduct = (props: any) => (
    <ProductCard
      product={props.item}
      onSelect={() => handleProductSelect(props.item)}
    />
  );

  return <FlatList data={data} renderItem={renderProduct} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
});

export default Product;
