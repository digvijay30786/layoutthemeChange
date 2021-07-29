import { useContext } from "react";
import "./styles.css";
import { Line } from "rc-progress";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Sw from "./switches";
import { CountContext } from "./context";
export default function App() {
  const value = useContext(CountContext);
  return (
    <div className="App" style={value.styleb}>
      <div className="first" style={value.styleb}>
        <div>
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GivxM_TcAfk1v-zUETtJwb911kzvqeRP9O7jx4xcA=s96-c"
            alt="img"
          />
        </div>
        <div className="eiccon">
          <EqualizerIcon />
          <MailOutlineIcon />
          <DeleteIcon />
          <ChatBubbleOutlineIcon />
          <SettingsIcon />
        </div>
        <div>asd</div>
      </div>
      <div className="second">
        <div className="Upperstyle">
          <h2 style={{ marginLeft: "120px", marginTop: "20px" }}>
            My DashBoard
          </h2>
          <Sw />
        </div>
        <div className="innerCard" style={value.styleb}>
          <div className="innerCont">
            <p>Active User</p>
            <span>for augest 2020</span>
          </div>
          <div className="profile">
            <div>
              <div className="pro">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14GivxM_TcAfk1v-zUETtJwb911kzvqeRP9O7jx4xcA=s96-c"
                  alt="img"
                />
                <div className="pera">
                  <p>Nurpul Dev</p>
                  <span>Banglore , India</span>
                </div>
              </div>
              <div className="line" style={{ width: "260px" }}>
                <Line
                  percent="70"
                  strokeWidth="3"
                  trailWidth="3"
                  strokeColor="#29CB97"
                />
                <div className="LineCont">
                  <p>Professional Level</p>
                  <p>4742 Points</p>
                </div>
              </div>
            </div>

            <div>
              <div className="pro">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14GivxM_TcAfk1v-zUETtJwb911kzvqeRP9O7jx4xcA=s96-c"
                  alt="img"
                />
                <div className="pera">
                  <p>Nurpul Dev</p>
                  <span>Banglore , India</span>
                </div>
              </div>
              <div className="line" style={{ width: "260px" }}>
                <Line
                  percent="70"
                  strokeWidth="3"
                  trailWidth="3"
                  strokeColor="#4072EE"
                />
                <div className="LineCont">
                  <p>Professional Level</p>
                  <p>4742 Points</p>
                </div>
              </div>
            </div>

            <div>
              <div className="pro">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14GivxM_TcAfk1v-zUETtJwb911kzvqeRP9O7jx4xcA=s96-c"
                  alt="img"
                />
                <div className="pera">
                  <p>Nurpul Dev</p>
                  <span>Banglore , India</span>
                </div>
              </div>
              <div className="line" style={{ width: "260px" }}>
                <Line
                  percent="70"
                  strokeWidth="3"
                  trailWidth="3"
                  strokeColor="#B558F6"
                />
                <div className="LineCont">
                  <p>Professional Level</p>
                  <p>4742 Points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
