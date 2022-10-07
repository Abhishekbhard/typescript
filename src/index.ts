//http:mywebsite.com/user
//http:mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  userName: string;
}
interface Product {
  title: string;
}

let result = fetch<User>("url");
let resultProduct = fetch<Product>("url");
