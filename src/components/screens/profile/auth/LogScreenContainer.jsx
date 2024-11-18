import LogScreen from "./LogScreen";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../../services/authService";
import { setUser } from "../../../../features/auth/authSlice";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../../../services/userService";

const LogScreenContainer = ({ setNewUser }) => {
  const [triggerLogin] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localId, setLocalId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { data: user, isFetching } = useGetUserQuery(
    { localId },
    { skip: !localId }
  );

  useEffect(() => {
    if (user && !isFetching) {
      dispatch(setUser({ ...user, localId }));
    }
  }, [user, isFetching, localId, dispatch]);

  const onSubmit = async () => {
    try {
      const response = await triggerLogin({ email, password }).unwrap();
      setLocalId(response.localId);
    } catch (err) {
      setError(err.data.error.message);
      setModalVisible(true);
    }
  };
  return (
    <LogScreen
      setNewUser={setNewUser}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={onSubmit}
      error={error}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default LogScreenContainer;
