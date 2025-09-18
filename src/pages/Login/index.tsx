import React from "react";
import LoginLayout from "../../Layouts/LoginLayout";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTheme } from "@/context/ThemeContext";

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  console.log(theme);

  const currentLanguageDirection = i18n.language == "ar" ? "rtl" : "ltr";
  console.log("Current language: ", i18n.language);

  return (
    <LoginLayout>
      <div className='w-full flex flex-col items-center'>
        <div className='relative z-10 w-full max-w-2xl rounded-xl bg-card/44 shadow-xl   px-10 py-11 text-center backdrop-blur-[22.3px]'>
          {/* Logo */}
          <div className='flex justify-center mb-8'>
            <img
              src={
                theme == "light"
                  ? "/asg-full-logo-dark.svg"
                  : "/asg-full-logo-light.png"
              }
              alt='Company Logo'
              width={257}
              height={52}
              className='h-12 object-contain'
            />
          </div>

          {/* Title */}
          <h1
            className='text-3xl font-light text-secondary mb-8'
            dir={currentLanguageDirection}
          >
            <span className='inline-block border-b-2 border-cyan-600 p-4'>
              {t("login.login_title")}{" "}
              <span className='text-cyan-600'>{t("login.ASG_AI")}</span>
            </span>
          </h1>
          <p className='mt-1 text-sm font-light text-muted-foreground'>
            {t("login.login_description")}
          </p>

          {/* Microsoft Button */}
          <Button
            className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white'
            onClick={() => {
              toast("Event has been created.");
              console.log("Login with Microsoft");
            }}
            dir={currentLanguageDirection}
          >
            <img
              src='/micosoftLogo.svg'
              alt='Microsoft'
              className='w-5 h-5 mr-2'
            />
            <div className='font-medium text-sm'>
              {t("login.login_Button_text")}
            </div>
          </Button>

          {/* OR separator */}
          <div
            className='flex items-center my-6'
            dir={currentLanguageDirection}
          >
            <div className='flex-1 h-px bg-muted'></div>
            <span className='px-3 text-xs text-muted-foreground'>
              {t("login.or")}
            </span>
            <div className='flex-1 h-px bg-muted'></div>
          </div>

          {/* Guest login */}
          <button
            onClick={() => console.log("Guest login")}
            className='flex items-center justify-center gap-2 mx-auto px-4 text-secondary text-sm font-medium cursor-pointer  transition-colors'
            dir={currentLanguageDirection}
          >
            <Icon icon='icons8:gender-neutral-user' className='w-6 h-6' />
            <div>{t("login.guest_login")}</div>
          </button>
        </div>
        <div className='mt-6 text-center' dir={currentLanguageDirection}>
          <div className='mt-4 text-xs text-muted-foreground'>
            © Alsulaiman Group 2025. {t("login.rights")}
            <a href='/#' className='text-cyan-500 hover:underline'>
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href='/#' className='text-cyan-500 hover:underline'>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
