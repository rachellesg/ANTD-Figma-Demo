import React from "react";
import { Button } from "./Button";

import "../styleguide.css"

export const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="login-wrapper">
        <div className="div">
          <div className="intro-main">
            <div className="overlap-group">
              <div className="text-wrapper">Enterprise</div>
              <div className="text-wrapper-2">Access Control System</div>
            </div>
          </div>
          <div className="form">
            <div className="frame">
              <div className="text-wrapper-3">Login</div>
              <p className="p">Sign in to your account</p>
              <div className="form-2">
                <div className="username-input">
                  <div className="text-wrapper-4">Username</div>
                  <div className="overlap-group-2">
                    <img className="img" src={<span class="material-symbols-outlined">person</span>} />
                  </div>
                </div>
                <div className="password">
                  <div className="text-wrapper-4">Password</div>
                  <div className="overlap-group-2">
                    <img className="img" src={<span class="material-symbols-outlined">lock</span>} />
                    <img className="mdi-eye" alt="Mdi eye" src={<span class="material-symbols-outlined">visibility</span>} />
                  </div>
                </div>
                
                <Button className="button-instance" size="large" variant="primary" />
                <Button
                  className="button-2"
                  divClassName="design-component-instance-node"
                  size="large"
                  text="WOG Single Sign On"
                  variant="inverted"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};