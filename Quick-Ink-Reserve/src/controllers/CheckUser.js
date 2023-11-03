const CheckUser = (loginStatus, user, nav) => {
  if (loginStatus === true) {
    if (user.userRole === "ADMIN") {
      nav("/admin");
    } else {
      nav("/");
    }
  }
};

export default CheckUser;
