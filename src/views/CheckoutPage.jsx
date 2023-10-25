import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
    const [cartList, setcartList] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
    }, []);


  return (
    <div className="p-24 flex flex-col">
      <div>
        <Link
          to="/"
          className="border-2 w-fit mr-2 border-[#005f69] rounded-full py-2 px-2.5"
        >
          <FontAwesomeIcon
            className="text-xl"
            icon={faBackward}
            color="#blue"
          />
        </Link>
          Home
      </div>
      <div>

      </div>
    </div>
  );
}

export default CheckoutPage;
