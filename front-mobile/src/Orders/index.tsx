import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, Alert, TouchableWithoutFeedback } from 'react-native';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetchOrders()
    .then(response => setOrders(response.data))
    .catch(error => Alert.alert('Erro de conexão'))
    .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
    <Header />
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Text style={styles.text}>Carregando pedidos...</Text>
      ) : (
        orders.map(order =>(
          <TouchableWithoutFeedback key={order.id}>
            <OrderCard order={order} />
          </TouchableWithoutFeedback>
        ))
      )}
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  text: {
  fontWeight: 'normal',
  fontSize: 18,
  textAlign: 'center',
  lineHeight: 30,
  letterSpacing: -0.24,
  color: '#9E9E9E',
  fontFamily: 'OpenSans_700Bold'
  }
});

export default Orders;