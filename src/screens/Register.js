import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Space from '../components/Space';
import PostCard from '../components/PostCard';

const {width} = Dimensions.get('screen');

const Register = () => {
  const [id, setId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [detail, setDetail] = useState(null);
  const [message, setMessage] = useState('');

  const handleFetchDetail = () => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        setDetail(response.data);
      } catch (error) {
        setMessage('there is something wrong');
      }
    };

    fetchDetail();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setPosts(response.data);
      } catch (error) {
        setMessage('there is something wrong');
      }
    };

    fetchData();
  }, [setPosts]);

  return (
    <View>
      {message !== '' && <Text>{message}</Text>}
      <Text>Jumlah Artikel: {posts.length}</Text>

      <TextInput
        value={id}
        onChangeText={v => {
          setId(v);
        }}
        style={{backgroundColor: 'yellow'}}
        keyboardType="number-p"
      />
      <TouchableOpacity
        onPress={handleFetchDetail}
        style={{
          marginTop: 20,
          backgroundColor: 'blue',
          alignItems: 'center',
          padding: 8,
        }}>
        <Text style={{color: 'white'}}>Cari</Text>
      </TouchableOpacity>

      <Space height={20} />
      <View style={{height: 2, width: width, backgroundColor: 'black'}} />
      <Space height={20} />

      {detail && <PostCard detail={detail} />}
      <Space height={20} />
      <View style={{height: 2, width: width, backgroundColor: 'black'}} />
      <Space height={20} />

      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          {posts.map((item, index) => {
            return <PostCard key={index} detail={item} bg="pink" />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
