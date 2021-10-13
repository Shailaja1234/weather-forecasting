import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/common/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getByTestId, getByText } from '@testing-library/dom';
import DeleteAdminById from './components/admin/DeleteAdminById';
import AdminRegister from './components/admin/AdminRegistration';
import DeleteUserByIdFromAdmin from './components/admin/DeleteUserByIdFromAdmin';
import AdminLogin from './components/common/AdminLogin';
import UpdateAdminById from './components/admin/UpdateAdminById';
import GetAllAdmins from './components/admin/GetAllAdmin';
import GetUserById from './components/admin/GetUserById';
import GetAllUsers from './components/admin/ViewAllUsers';
import GetAdminById from './components/admin/GetAdminById';

//test case for adminID1 DeleteAdminById 

test('find adminId1 in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <DeleteAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminId3')).toBeInTheDocument();
  });

  //test case for submit DeleteAdminById 

  test('find submit3 in DeleteAdminById ', () => {
    render(
      <Provider store={store}>
        <DeleteAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit3')).toBeInTheDocument();
  });

  // //test case for adminId in AdminRegistration

test('find adminId2 in AdminRegistration', () => {
    render(
      <Provider store={store}>
        <AdminRegister />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminId2')).toBeInTheDocument();
  });
  
  //test case for adminName in AdminRegistration

test('find adminName2 in AdminRegistration', () => {
    render(
      <Provider store={store}>
        <AdminRegister />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminName2')).toBeInTheDocument();
  });


  //test case for pssword adminregistration

test('find adminPassword in AdminRegistration', () => {
    render(
      <Provider store={store}>
        <AdminRegister />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminPassword2')).toBeInTheDocument();
  });

  //test case for submit adminregistration

test('find submit in AdminRegistration', () => {
    render(
      <Provider store={store}>
        <AdminRegister />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit2')).toBeInTheDocument();
  });

  //test case for rid DeleteUserByIdFromAdmin 

test('find rid in DeleteUserByIdFromAdmin ', () => {
    render(
      <Provider store={store}>
        <DeleteUserByIdFromAdmin />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'rid')).toBeInTheDocument();
  });

    //test case for rid DeleteUserByIdFromAdmin 

test('find submit in DeleteUserByIdFromAdmin ', () => {
    render(
      <Provider store={store}>
        <DeleteUserByIdFromAdmin />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
  });



  // test case for adminId in adminlogin

test('find adminId in AdminLogin', () => {
    render(
      <Provider store={store}>
        <AdminLogin />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
  });
  
  // test case for dminname in adminLogin
  
  test('find adminName in AdminLogin', () => {
    render(
      <Provider store={store}>
        <AdminLogin />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminName')).toBeInTheDocument();
  });
  
  // test for adminPassword in adminLogin
  
  test('find adminPassword in AdminLogin', () => {
    render(
      <Provider store={store}>
        <AdminLogin />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminPassword')).toBeInTheDocument();
  });
  
  
  
  //test case for submin in adminLogin
  test('find submit1 in AdminLogin', () => {
    render(
      <Provider store={store}>
        <AdminLogin />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit1')).toBeInTheDocument();
  });

    //test case for submit4 in getalladmin
    test('find submit4 in GetAllAdmins', () => {
        render(
          <Provider store={store}>
            <GetAllAdmins />
          </Provider>
        );
        expect(getByTestId(document.documentElement, 'submit4')).toBeInTheDocument();
      });
  
      //test case for rid5 in GetUserById
    test('find rid5 in GetUserById', () => {
        render(
          <Provider store={store}>
            <GetUserById />
          </Provider>
        );
        expect(getByTestId(document.documentElement, 'rid5')).toBeInTheDocument();
      });
  
      //test case for submit5 in GetUserById
    test('find submit5 in GetUserById', () => {
        render(
          <Provider store={store}>
            <GetUserById />
          </Provider>
        );
        expect(getByTestId(document.documentElement, 'submit5')).toBeInTheDocument();
      });
  

      //test case for adminId4 in updateAdminById

test('find adminId4 in UpdateAdminById ', () => {
    render(
      <Provider store={store}>
        <UpdateAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminId4')).toBeInTheDocument();
  });

    //test case for adminName4 in updateAdminById

test('find adminName4 in UpdateAdminById ', () => {
    render(
      <Provider store={store}>
        <UpdateAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminName4')).toBeInTheDocument();
  });

      //test case for adminPassword4 in updateAdminById

test('find adminPassword4 in UpdateAdminById ', () => {
    render(
      <Provider store={store}>
        <UpdateAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminPassword4')).toBeInTheDocument();
  });

    //test case for submit4 in updateAdminById

test('find submit4 in UpdateAdminById ', () => {
    render(
      <Provider store={store}>
        <UpdateAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit4')).toBeInTheDocument();
  });

      //test case for adminId in updateAdminById

test('find adminId in UpdateAdminById ', () => {
    render(
      <Provider store={store}>
        <GetAdminById />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'adminId')).toBeInTheDocument();
  });
      

  //test case for submit7 in GetAllUsers

test('find submit7 in GetAllUsers ', () => {
    render(
      <Provider store={store}>
        <GetAllUsers />
      </Provider>
    );
    expect(getByTestId(document.documentElement, 'submit7')).toBeInTheDocument();
  });