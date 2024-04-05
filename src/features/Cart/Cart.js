import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, removeFromCart, addToCart } from "./cartSlice";

export default function Cart() {
  const products = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const handleItemRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  const handleItemAdd = (e, product) => {
    e.preventDefault();
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const totalAmount = products.reduce(
    (amount, item) =>
      Math.round(item.price * (1 - item.discountPercentage / 100)) *
        item.quantity +
      amount,
    0
  );

  const totalQuantity = products.reduce(
    (total, item) => item.quantity + total,
    0
  );
  console.log(products);
  return (
    <div className="mx-auto bg-white mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
          Cart
        </h1>
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.title}</a>
                      </h3>
                      <p className="mr-3">
                        {" "}
                        $
                        {Math.round(
                          product.price * (1 - product.discountPercentage / 100)
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex flex-grow justify-end">
                      <button
                        type="button"
                        onClick={(e) => handleItemAdd(e, product)}
                        className="font-medium text-indigo-600 hover:text-indigo-500 bg-indigo-100 rounded-md px-3 py-1"
                      >
                        + Add
                      </button>
                      <div className="text-gray-500 mr-4 ml-2">
                        <label
                          htmlFor="quantity"
                          className="inline text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          className="ml-1 w-12 border border-gray-300 rounded-md px-2 py-1"
                          readOnly
                          value={product.quantity}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleItemRemove(e, product.id)}
                        className="font-medium text-indigo-600 hover:text-indigo-500 bg-indigo-100 rounded-md px-3 py-1 mr-3"
                      >
                        - Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-lg font-medium text-gray-900 mb-4">
          <p className="ml-2">Total Items in Cart</p>
          <p className="mr-2">{totalQuantity}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
          <p className="font-semibold">Subtotal:</p>
          <p className="font-semibold text-black-600">
            ${totalAmount.toFixed(2)}
          </p>
        </div>

        <p className="mt-0.5 text-sm text-gray-500 ml-0">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link to="/">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
