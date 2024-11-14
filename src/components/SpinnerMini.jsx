import { ThreeDots } from "react-loader-spinner";

function SpinnerMini({ className = "", label = "" }) {
  return (
    <div className="flex items-center justify-center gap-1">
      <p>{label}</p>
      <ThreeDots
        visible={true}
        height="10"
        width="20"
        color="#fff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={className}
      />
    </div>
  );
}

export default SpinnerMini;
