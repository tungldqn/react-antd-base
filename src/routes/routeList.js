import { ProfileOutlined } from '@ant-design/icons';

// Auth
import AuthSignIn from '../pages/auth/sign-in';
import DataProfile from '../pages/data/profile';

// Layout
import AuthLayout from '../layouts/Auth';
import DashBoardLayout from '../layouts/Dashboard';

// Routes
const authRoute = {
  layout: AuthLayout,
  path: '/auth',
  children: [
    {
      path: '/auth/sign-in',
      component: AuthSignIn,
      restricted: true
    }
  ]
};

const dataRoute = {
  name: 'Data',
  layout: DashBoardLayout,
  path: '/data',
  icon: ProfileOutlined,
  children: [
    {
      path: '/data/profile',
      name: 'Profiles',
      component: DataProfile,
      userFeature: 'INTERNAL_DATA_PROFILE'
    }
  ]
};

export default [
  authRoute,
  dataRoute
];
