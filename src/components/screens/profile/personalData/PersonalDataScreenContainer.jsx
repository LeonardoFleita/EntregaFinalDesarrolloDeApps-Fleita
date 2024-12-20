import { useDispatch, useSelector } from "react-redux";
import PersonalDataScreen from "./PersonalDataScreen";
import { useEffect, useState } from "react";
import { useUpdateNameMutation } from "../../../../services/userService";
import { setUser } from "../../../../features/auth/authSlice";
import { showToast } from "../../../../global/toastConfig";

const PersonalDataScreenContainer = () => {
  const user = useSelector((state) => state.authReducer.value);
  const [name, setName] = useState(user.name);
  const [lastname, setLastname] = useState(user.lastname);
  const dispatch = useDispatch();
  const [triggerUpdate] = useUpdateNameMutation();

  const handleUpdate = () => {
    dispatch(setUser({ name, lastname }));
    showToast("success", "Se han actualizado los datos");
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
