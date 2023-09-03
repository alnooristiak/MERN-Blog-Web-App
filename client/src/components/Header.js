import React from "react";
import { Link, useNavigate } from "react-router-dom";
// ("use client");

import { Dropdown, Navbar, Avatar, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  let isLogin = useSelector((state) => state.isLogin);

  isLogin = isLogin || localStorage.getItem("userId");

  // console.log(isLogin);
  return (
    <>
      <Navbar fluid rounded className="bg-emerald-300">
        <Navbar.Brand LinkComponent={Link} to="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="https://lh5.googleusercontent.com/-jcDwHSP0tQk/AAAAAAAAAAI/AAAAAAAAAAA/ktMOD91YmDQ/s55-w44-h44-p-k-no-ns-nd/photo.jpg"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {isLogin && (
            <Dropdown
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Button>Dashboard</Button>
              <Button>Settings</Button>
              <Button>Earnings</Button>
              <Dropdown.Divider />
              <Button>Sign out</Button>
            </Dropdown>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {isLogin && (
            <>
              <Navbar.Link active href="#">
                <Link to="/">Blogs</Link>
              </Navbar.Link>
              <Navbar.Link href="#">
                <Link to="/my-blogs">My Blog</Link>
              </Navbar.Link>
              <Navbar.Link href="#">
                <Link to="/create-blog">Create Blog</Link>
              </Navbar.Link>
            </>
          )}
          {!isLogin && (
            <>
              <Navbar.Link>
                <Link to="/login">Login</Link>
              </Navbar.Link>
              <Navbar.Link href="#">
                <Link to="/register">Register</Link>
              </Navbar.Link>
            </>
          )}
          {isLogin && (
            <>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </>
          )}
          {/* <Navbar.Link href="#">Contact</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
