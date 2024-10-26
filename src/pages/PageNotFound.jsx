import { Button } from "../components";

function PageNotFound() {
  return (
    <div className="w-full  flex justify-center mt-28  ">
      <div className="h-32 p-2 flex gap-8 justify-center items-center flex-col">
        <p>Page Not Found</p>
        <Button type="secondary" to="/">
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
