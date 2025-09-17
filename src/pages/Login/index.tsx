import React from "react";
import LoginLayout from "../../Layouts/LoginLayout";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LoginLayout>
      {/* Center content */}
      <div className='text-secondary text-xl font-semibold'>
        {t("description.hello")}
      </div>
      <div className='text-secondary text-xl font-semibold'>
        {t("description.part2")}
      </div>
    </LoginLayout>
  );
};

export default Login;
