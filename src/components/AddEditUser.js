import { StyledForm } from "../StyledComponents/StyledForm";
import { Card } from "../StyledComponents/Card";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserStart,
  updateUserStart,
  UpdateUserStart,
} from "../redux/action";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  height: "",
};

const AddUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, age, gender, height } = formValue;
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const selectedUser = users.find((item) => item.id === Number(id));
      setFormValue(selectedUser);
    }
  }, [id]);

  const onInputChange = (event) => {
    let { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!editMode) {
      dispatch(createUserStart(formValue));
      navigate("/");
    } else {
      dispatch(updateUserStart({ id, ...formValue }));
      setEditMode(false);
      navigate("/");
    }
  };

  return (
    <Card mt={100} flexDirection="column">
      <div>
        <h1>{!editMode ? "Add User Info" : "Update User Info"}</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <StyledForm>
            <label>
              {" "}
              First Name
              <input
                type="text"
                value={firstName || ""}
                name="firstName"
                onChange={onInputChange}
              />
            </label>
            <label>
              {" "}
              Last Name
              <input
                type="text"
                value={lastName || ""}
                name="lastName"
                onChange={onInputChange}
              />
            </label>

            <label>
              {" "}
              Age
              <input
                type="number"
                value={age || ""}
                name="age"
                onChange={onInputChange}
              />
            </label>

            <label>
              {" "}
              Gender
              <select
                onChange={onInputChange}
                name="gender"
                value={gender || ""}
              >
                <option value="">select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>

            <label>
              {" "}
              Height
              <input
                type="number"
                value={height || ""}
                name="height"
                onChange={onInputChange}
              />
            </label>
            <Card justifyContent="space-around;" mt={10}>
              <button type="submit">{!editMode ? "Add" : "Update"}</button>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                {" "}
                Back
              </button>
            </Card>
          </StyledForm>
        </form>
      </div>
    </Card>
  );
};
export default AddUser;
