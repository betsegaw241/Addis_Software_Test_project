import { StyledListItem } from "../StyledComponents/StyledTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../redux/action";
import { Link } from "react-router-dom";
import { LoadingStyle } from "../StyledComponents/LoadingStyle";
import { Card } from "../StyledComponents/Card";

const ListItem = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  if (loading) {
    return (
      <LoadingStyle>
        <div>
          <h1>loading..</h1>
        </div>
      </LoadingStyle>
    );
  }
  function refreshPage() {
    window.location.reload(false);
  }

  const handleDelete = (id) => {
    if (window.confirm("are you sure you want to delete ?")) {
      dispatch(deleteUserStart(id));
      refreshPage();
    }
  };

  return (
    <Card justifyContent="center;">
      <StyledListItem width={[1 / 2, 1]}>
        <h1>Users Data</h1>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users &&
            users.map((list, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.gender}</td>
                  <td>{list.age} </td>
                  <td>{list.height}</td>
                  <td>
                    <button onClick={() => handleDelete(list.id)}>
                      Delete
                    </button>
                    <button>
                      <Link to={`/editUser/${list.id}`}>Edit</Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </StyledListItem>
    </Card>
  );
};
export default ListItem;
