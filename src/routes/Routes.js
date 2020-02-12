import SignIn from '../modules/Auth/SignIn';
import ProductList from '../modules/Product/List';

const authRoute = {
  path: '/auth',
  name: 'Auth',
  children: [
    {
      path: '/auth/sign-in',
      name: 'Sign In',
      Component: SignIn
    }
  ]
};

const productRoute = {
  path: '/product',
  name: 'Product',
  children: [
    {
      path: '/product/list',
      name: 'Product List',
      Component: ProductList
    }
  ]
};

export const dashboardRoutes = [productRoute];
export const authRoutes = [authRoute];
