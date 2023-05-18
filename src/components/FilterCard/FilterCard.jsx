import { useMemo, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { Card, CardBody, CheckBox, Radio } from "../../components";
import Input from "../../components/Input/Input";

export default function FilterCard({
  data,
  type,
  name,
  title,
  showSearch,
  onChange,
}) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const searchedData = useMemo(() => {
    return data.filter((item) => {
      if (typeof item === "object") {
        return item.title.includes(text);
      }
      return item.includes(text);
    });
  }, [text]);

  return (
    <div>
      {title ? <div>{title}</div> : null}
      <Card>
        {showSearch ? (
          <div className="p-2">
            <Input prefix={<BiSearchAlt />} onChange={handleChangeText} />
          </div>
        ) : null}
        <div className="max-h-36 overflow-y-auto">
          <CardBody>
            {searchedData.map((filterValue) => {
              const title = filterValue?.title || filterValue;
              const value = filterValue?.value || filterValue;

              if (type === "radio") {
                return (
                  <Radio
                    key={value}
                    name={name}
                    title={title}
                    value={value}
                    onChange={onChange}
                  />
                );
              } else {
                return (
                  <CheckBox
                    key={value}
                    name={name}
                    title={title}
                    value={value}
                    onChange={onChange}
                  />
                );
              }
            })}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
