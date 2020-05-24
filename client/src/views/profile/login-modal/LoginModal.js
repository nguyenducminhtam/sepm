import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {func, bool, object} from 'prop-types';
import styles from './LoginModalStyle';
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {login} from '../../../redux/actions/UserActions';
import {usePrevious} from '../../../shared/hooks/usePrevious';

const LoginModal = ({
  display,
  closeModal,
  user: {loading, username, error},
  handleLogin,
}) => {
  const [editUsername, setEditUsername] = useState('');
  const [localError, setLocalError] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const previousName = usePrevious(username);

  useEffect(() => {
    setLocalError(error);
  }, [error]);

  useEffect(() => {
    if (username !== '' && username !== previousName) {
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
        closeModal();
      }, 1000);
    }
  }, [closeModal, previousName, username]);

  const submit = () => {
    if (editUsername === username) {
      setLocalError(`already signed in as ${username}`);
    } else if (editUsername === '') {
      setLocalError('must not be empty');
    } else {
      handleLogin({username: editUsername});
      setLocalError(null);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={loading} color="#4c4c4c" />
      </View>
    );
  }

  if (openSuccess) {
    return (
      <View style={styles.container}>
        <View style={styles.successWrapper}>
          <Text style={styles.success}>Hello {username}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={display}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.loginMessage}>What is your name? </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => setEditUsername(text)}
              value={editUsername}
            />
            {localError && <Text style={styles.errorText}>{localError}</Text>}
            <View style={styles.actionsWrapper}>
              <TouchableOpacity
                style={[styles.action, styles.submit]}
                onPress={submit}>
                <Text style={styles.submitText}>OK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.action, styles.cancel]}
                onPress={closeModal}>
                <Text style={styles.cancelText}>No, thanks</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

LoginModal.propTypes = {
  display: bool.isRequired,
  closeModal: func.isRequired,
  user: object.isRequired,
  handleLogin: func.isRequired,
};
export default connect(
  state => ({user: state.userReducer}),
  {handleLogin: login},
)(LoginModal);
