import React from "react";
import { Card, CardBody, CheckBox, Radio } from "../../components";
import Input from "../../components/Input/Input";
import { BiSearchAlt } from "react-icons/bi";

export default function Filter() {
  return (
    <div className="flex flex-col space-y-2">
      <div>Sort By</div>
      <Card>
        <CardBody>
          {radioItems.map((item) => (
            <Radio title={item.title} />
          ))}
        </CardBody>
      </Card>

      <div>Brands</div>
      <Card>
        <CardBody>
          <Input prefix={<BiSearchAlt />} />
          <div className="max-h-24 overflow-y-scroll mt-2">
            <CheckBox title="11 Pro" />
            <CheckBox title="12 Pro Max" />
            <CheckBox title="12 Pro Max" />
            <CheckBox title="12 Pro Max" />
            <CheckBox title="12 Pro Max" />
            <CheckBox title="12 Pro Max" />
            <CheckBox title="12 Pro Max" />
          </div>
        </CardBody>
      </Card>
      <div>Models</div>
      <Card>
        <CardBody>
          <CheckBox title="7 Plus" />
        </CardBody>
      </Card>
      <div></div>
      <div></div>
    </div>
  );
}

const radioItems = [
  { title: "Old to new", name: "old-to-new", value: "", onChange: "" },
  { title: "New to old", name: "new-to-old", value: "", onChange: "" },
  {
    title: "Price high to low",
    name: "price-high-to-low",
    value: "",
    onChange: "",
  },
  {
    title: "Price low to high",
    name: "price-low-to-high",
    value: "",
    onChange: "",
  },
];
