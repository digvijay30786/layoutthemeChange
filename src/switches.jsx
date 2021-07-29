import { useState, useContext } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CountContext } from "./context";
export default function Sw() {
  const value = useContext(CountContext);

  const [state, setState] = useState({
    checkedA: false
  });

  const handleChange = (event) => {
    setState({ [event.target.name]: event.target.checked });
    if (state.checkedA) {
      value.setStyleb({ background: "white", color: "black" });
    } else {
      value.setStyleb({ background: "black", color: "white" });
    }
  };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          color="primary"
        />
      }
    />
  );
}
