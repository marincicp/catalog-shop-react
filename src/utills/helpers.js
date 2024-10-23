export function formValidator(data, requestType = "create") {
  let isValid = true;
  const {
    name,
    price,
    sku,
    type,
    coupon_code,
    expires_at,
    color,
    shipping_price,
    image_url,
  } = data;
  if (requestType === "create" && !sku) {
    isValid = false;
  }

  if (!name || !price || !type || !image_url) {
    isValid = false;
  }

  if (type === "virtual" && (!coupon_code || !expires_at)) {
    isValid = false;
  }

  if (type === "physical" && (!shipping_price || !color)) {
    isValid = false;
  }

  return isValid;
}
