export function fetchAllProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      resolve(data.products); // Resolve with the array of products
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchProductsByFilter(filter) {
  let queryString = "";
  if (filter === null) {
    queryString = "https://dummyjson.com/products?limit=100";
  } else {
    queryString =
      "https://dummyjson.com/products/category/" + filter + "?limit=100";
  }
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(queryString);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      //console.log("inside async filter");
      //console.log(data);
      resolve(data.products); // Resolve with the array of products
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchProductById(id) {
  //console.log("by id");
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dummyjson.com/products/" + id);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      //console.log([data]);
      resolve(data); // Resolve with the array of products
    } catch (error) {
      reject(error);
    }
  });
}
