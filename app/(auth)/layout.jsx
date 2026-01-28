export const metadata = {
  title: {
    default: "Authentication",
    template: "%s | SpendSense",
  },

  robots: {
    index: false,
    follow: false,
  },
};

const AuthLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
