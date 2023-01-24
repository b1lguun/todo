import { useNavigate } from "react-router-dom";
import "./Comp.css";
export function Comp(props) {
  const {
    image,
    tags = [],
    text,
    userImage,
    userFirstName,
    userLastName,
    date,
  } = props;
  const newDate = new Date(date);
  const navigate = useNavigate();

  return (
    <div className="com" onClick={() => navigate(`post/${props.id}`)}>
      <div className="comp">
        <div className="comp1">
          <img className="image" src={image} />
          <div className="comp-text">
            {tags.map((cur, index) => (
              <div className="cur-text">
                {index !== 0 && ","}
                {cur}
              </div>
            ))}
          </div>
          <div className="comp-t">{text}</div>

          <div className="footer">
            <img className="user" src={userImage} />

            <div className="user-name">
              <div className="username">{userFirstName}</div>
              <div className="lastname">{userLastName} |</div>
              <div className="date">
                {`${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
