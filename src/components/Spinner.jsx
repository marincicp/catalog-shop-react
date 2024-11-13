import { Bars } from "react-loader-spinner";

function Spinner({ className = "" }) {
  return (
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass={className}
      visible={true}
    />
  );
}

export default Spinner;
