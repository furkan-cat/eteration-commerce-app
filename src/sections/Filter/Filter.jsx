import { Card, CardBody, FilterCard, Radio } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilter,
  filtersSelector,
} from "../../libs/store/slices/filterSlice.js";

export default function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    dispatch(addFilter({ key: name, value, type }));
  };

  return (
    <div className="flex flex-col space-y-2">
      <FilterCard
        type="radio"
        name="sort_by"
        title="Sort By"
        data={sortMap}
        onChange={handleChange}
      />

      <div className="flex flex-col space-y-2">
        {filters.map((filter) => {
          return (
            <FilterCard
              key={filter.key}
              name={filter.key}
              title={filter.key}
              data={filter.data}
              type={filter.type}
              showSearch={true}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}

const sortMap = [
  {
    title: "Old to new",
    value: "old-to-new",
  },
  {
    title: "New to old",
    value: "new-to-old",
  },
  {
    title: "Price high to low",
    value: "price-high-to-low",

    type: "radio",
    key: "sort",
  },
  {
    title: "Price low to high",
    value: "price-low-to-high",

    type: "radio",
    key: "sort",
  },
];
