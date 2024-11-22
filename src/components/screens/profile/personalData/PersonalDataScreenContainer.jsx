import { useDispatch, useSelector } from "react-redux";
import PersonalDataScreen from "./PersonalDataScreen";
import { useEffect, useState } from "react";
import { useUpdateNameMutation } from "../../../../services/userService";
import { setUser } from "../../../../features/auth/authSlice";

const PersonalDataScreenContainer = () => {
  const user = useSelector((state) => state.authReducer.value);
  const [name, setName] = useState(user.name);
  const [lastname, setLastname] = useState(user.lastname);
  const dispatch = useDispatch();
  const [triggerUpdate] = useUpdateNameMutation();

  const handleUpdate = () => {
    console.log(user);
    dispatch(setUser({ name, lastname }));
  };

  useEffect(() => {
    if (user.name && user.lastname) {
      triggerUpdate({
        userId: user.localId,
        data: {
          name,
          lastname,
        },
      });
    }
  }, [user.name, user.lastname]);

  return (
    <PersonalDataScreen
      name={name}
      setName={setName}
      lastname={lastname}
      setLastname={setLastname}
      handleUpdate={handleUpdate}
    />
  );
};

export default PersonalDataScreenContainer;
