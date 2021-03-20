import React from "react";
import { render } from "react-dom";
import { Input } from "./Input";
const App = () => {
  return (
    <div style={{ margin: 40 + "px" }}>
      <p className="codeText">Input /</p>
      <Input />

      <p className="codeText">Input placeholder="Default" /</p>
      <Input placeholder="Default" />

      <p className="codeText">Input helperText="This is a helper text." /</p>
      <Input errorInput helperText="This is a helper text." />
      <p className="codeText">
        Input errorInput labelText="This is a label with error" disabled /
      </p>
      <Input errorInput labelText="This is a label with error" disabled />
      <p className="codeText">
        Input errorInput error labelText="This is a label with error and
        disabled with value" disabled value="text"/
      </p>

      <Input
        errorInput
        error
        labelText="This is a label with error and disabled with value"
        disabled
        value="text"
      />
      <p className="codeText">
        Input labelText="This is a normal label" value="This has fullWidth
        property" helperText="No error on this input" fullWidth /
      </p>
      <Input
        labelText="This is a normal label"
        value="This has fullWidth property"
        helperText="No error on this input"
        fullWidth
      />
      <p className="codeText">
        labelText="This is a normal label" value="This has fullWidth property"
        helperText="No error on this input" multiline rows="5" cols="50"/
      </p>
      <Input
        labelText="This is a normal label"
        value="This has fullWidth property"
        helperText="No error on this input"
        multiline
        rows="5"
        cols="50"
      />
      <p className="codeText">
        Input value="test" helperText="This is a helper text." size="sm" /
      </p>
      <Input value="test" helperText="This is a helper text." size="sm" />
      <p className="codeText">
        Input value="test" helperText="This is a helper text." size="md" /
      </p>
      <Input value="test" helperText="This is a helper text." size="md" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
