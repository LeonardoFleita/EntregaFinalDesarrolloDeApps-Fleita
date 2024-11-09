export const totalPrice = (items) => {
  return items.reduce((acc, item) => (acc += item.price * item.quantity), 0);
};

export const priceFormat = (price, num) => {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: num,
  });
};

export const searchedProduct = (product, query) => {
  return (
    (product.brand &&
      product.brand.toLowerCase().includes(query.toLowerCase())) ||
    (product.category &&
      product.category.some((cat) =>
        cat.toLowerCase().includes(query.toLowerCase())
      )) ||
    (product.subcategory &&
      product.subcategory.toLowerCase().includes(query.toLowerCase())) ||
    (product.tags &&
      product.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      ))
  );
};
