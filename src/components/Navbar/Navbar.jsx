import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

import Input from "../Input/Input";
import { fetchProductsAsync } from "../../libs/store/slices/productsSlice";
import { updateSearch } from "../../libs/store/slices/filterSlice";
import { totalPriceSelector } from "../../libs/store/slices/cartSlice";

export default function Navbar() {
  const totalPrice = useSelector(totalPriceSelector);
  const searchValue = useSelector((state) => state.filters.searchValue);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(updateSearch(value));
    dispatch(fetchProductsAsync({ text: value }));
  };

  return (
    <div className="bg-blue-500 text-white py-3 flex-1">
      <div className="container flex justify-between">
        <div className="flex sm:flex-row flex-col sm:items-center items-start sm:space-x-2 md:space-x-4">
          <Link to="/">Eteration</Link>
          <Input
            prefix={<BiSearchAlt />}
            placeholder="Search"
            name="search"
            onChange={handleSearch}
          />
        </div>

        <div className="flex sm:flex-row flex-col sm:items-center items-start justify-center sm:space-x-2 md:space-x-4">
          <div className="flex items-center sm:space-x-2">
            <BsBag />
            <div>{totalPrice}₺</div>
          </div>
          
          <div className="flex items-center sm:space-x-2">
            <AiOutlineUser />
            <div>Furkan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
