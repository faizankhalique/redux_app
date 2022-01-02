import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

function DynamicInput() {
  const [fields, setFields] = useState<any[]>([]);
  const [dropDownFields, setDropDownFields] = useState<any[]>([]);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: any
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name == "input") {
      let values = [...fields];
      values[index].value = value;
      setFields(values);
    } else {
      {
        let values = [...dropDownFields];
        values[index].value = value;
        setDropDownFields(values);
      }
    }
  };
  const handleAdd = (key: string) => {
    if (key == "input") {
      setFields([...fields, { value: "" }]);
    } else {
      setDropDownFields([...dropDownFields, { value: "" }]);
    }
  };
  console.log("dropDownFields :>> ", dropDownFields);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <Button
          title="Add Input"
          onClick={() => handleAdd("input")}
          styles={{ marginRight: 30 }}
        />
        <Button
          title="Add Dropdown"
          onClick={() => handleAdd("dropdown")}
          styles={{ marginLeft: 30 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 100 }}>
          {fields.length > 0 &&
            fields.map((f: any, i: any) => (
              <TextInput
                key={i}
                type="text"
                label={`Input ${i + 1}`}
                name="input"
                onChange={(e) => handleChange(e, i)}
                value={f.value}
              />
            ))}
        </div>
        <div style={{ width: 100, marginLeft: 30 }}>
          {dropDownFields.map((d, i) => (
            <>
              <label key={i}>{`Dropdown ${i + 1}`}</label>
              <select
                name="dropdown"
                id="cars"
                onChange={(e) => handleChange(e, i)}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DynamicInput;
