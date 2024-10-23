import {
  Button,
  Dropdown,
  RadioInput,
  TextareaInput,
  TextInput,
} from "../components";

function ProductForm({
  handleSubmit,
  handleCategoryChange,
  categories,
  productType,
  productData = null,
  handleProductType,
}) {
  return (
    <form
      className="mt-4 w-full flex flex-col items-center gap-4 bg-gray-100"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full gap-8">
        <div className=" flex-1">
          <TextInput
            label="Name"
            name="name"
            id="name"
            defaultValue={productData?.name}
          />

          {!productData && (
            <>
              <TextInput label="SKU" name="sku" id="sku" />
              <TextInput
                type="file"
                label="Image"
                name="image_url"
                id="imageUrl"
              />
            </>
          )}
          <TextInput
            label="Price"
            type="number"
            name="price"
            id="price"
            defaultValue={productData?.price || ""}
          />
          <TextareaInput
            label="Description"
            name="description"
            defaultValue={productData?.description || ""}
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
              checked={productType === "virtual"}
              onChange={() => handleProductType("virtual")}
            />

            <RadioInput
              type="radio"
              label="Physical"
              value="physical"
              name="productType"
              checked={productType === "physical"}
              onChange={() => handleProductType("physical")}
            />

            {productType === "virtual" ? (
              <>
                <TextInput
                  label="Coupon Code"
                  name="coupon_code"
                  id="couponCode"
                  defaultValue={productData?.coupon_code || ""}
                />
                <TextInput
                  type="date"
                  label="Expires At"
                  name="expires_at"
                  id="expires_at"
                  defaultValue={productData?.expires_at || ""}
                />
              </>
            ) : (
              <>
                <TextInput
                  label="Shipping Price"
                  name="shipping_price"
                  defaultValue={productData?.shipping_price || ""}
                  id="shippingPrice"
                />
                <TextInput
                  label="Color"
                  name="color"
                  defaultValue={productData?.color || ""}
                  id="color"
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <Button type="secondary">Submit</Button>
      </div>
    </form>
  );
}

export default ProductForm;
