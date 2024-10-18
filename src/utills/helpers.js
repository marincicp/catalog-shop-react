export function formValidator(state, type = "create") {
  let isValid = true;
  const {
    name,
    price,
    sku,
    productType,
    couponCode,
    expiresAt,
    color,
    shippingPrice,
    imageUrl,
  } = state;

  if (type === "create" && !sku) {
    isValid = false;
  }

  if (!name || !price || !productType || !imageUrl) {
    isValid = false;
  }

  if (productType === "virtual" && (!couponCode || !expiresAt)) {
    isValid = false;
  }

  if (productType === "physical" && (!shippingPrice || !color)) {
    isValid = false;
  }

  return isValid;
}
