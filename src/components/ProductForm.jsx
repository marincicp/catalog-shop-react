import {
  Button,
  Dropdown,
  RadioInput,
  TextareaInput,
  TextInput,
} from "../components";

function ProductForm({
  handleChange,
  state,
  handleSubmit,
  handleCategoryChange,
  categories,
  isLoading,
}) {
  return (
    <form
      className="mt-4 w-full flex flex-col items-center gap-4 bg-gray-100"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="flex w-full gap-8">
        <div className=" flex-1">
          <TextInput
            label="Name"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
          <TextInput
            label="SKU"
            name="sku"
            id="sku"
            value={state.sku}
            onChange={handleChange}
          />

          <TextInput
            type="file"
            label="Image"
            name="imageUrl"
            id="imageUrl"
            value={state.imageUrl}
            onChange={handleChange}
          />

          <TextInput
            label="Price"
            type="number"
            name="price"
            id="price"
            value={state.price}
            onChange={handleChange}
          />
          <TextareaInput
            label="Description"
            value={state.description}
            name="description"
            onChange={handleChange}
          ></TextareaInput>
        </div>

        <div className=" flex-1">
          <div className="flex flex-col mt-4 gap-4">
            <p className="px-4">Select product category</p>
            <Dropdown
              data={categories}
              value="id"
              showDefaultOption={false}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <p className="px-4">Select product type</p>
            <RadioInput
              type="radio"
              label="Virtual"
              value="virtual"
              name="productType"
              checked={state.productType === "virtual"}
              onChange={handleChange}
            />

            <RadioInput
              type="radio"
              label="Physical"
              value="physical"
              name="productType"
              checked={state.productType === "physical"}
              onChange={handleChange}
            />

            {state.productType === "virtual" ? (
              <>
                <TextInput
                  label="Coupon Code"
                  name="couponCode"
                  id="couponCode"
                  onChange={handleChange}
                  value={state.couponCode}
                />
                <TextInput
                  type="date"
                  label="Expires At"
                  name="expiresAt"
                  id="expires_at"
                  value={state.expiresAt}
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <TextInput
                  label="Shipping Price"
                  name="shippingPrice"
                  onChange={handleChange}
                  id="shippingPrice"
                  value={state.shippingPrice}
                />
                <TextInput
                  label="Color"
                  name="color"
                  id="color"
                  value={state.color}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <Button disabled={isLoading} type="secondary">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
