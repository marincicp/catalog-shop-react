import Cart from "/shopping-cart.svg";

function Logo() {
  return (
    <div className="w-max p-4 flex justify-center items-center">
      <div className="w-16 h-16 flex justify-center items-center rounded-full bg-green-500 p-4">
        <img src={Cart} className="w-16 h-16" alt="logo" />
      </div>
      <h2 className="font-bold text-3xl tracking-wider ml-3">Catalog</h2>
    </div>
  );
}

export default Logo;
