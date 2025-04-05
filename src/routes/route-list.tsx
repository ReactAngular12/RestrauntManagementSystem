import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { LazyLoadWrapper } from "./lazy-load-wrapper.component";

// Lazy load all Pages
const DashboardComponent = lazy(() =>
  import("../pages").then((module) => ({ default: module.DashboardComponent })),
);
const ForgotPasswordComponent = lazy(() =>
  import("../pages").then((module) => ({
    default: module.ForgotPasswordComponent,
  })),
);
const LoginComponent = lazy(() =>
  import("../pages").then((module) => ({ default: module.LoginComponent })),
);
const PageNotFoundComponent = lazy(() =>
  import("../pages").then((module) => ({
    default: module.PageNotFoundComponent,
  })),
);
const SignUpComponent = lazy(() =>
  import("../pages").then((module) => ({ default: module.SignUpComponent })),
);
const OTPVerificationComponent = lazy(() =>
  import("../pages").then((module) => ({
    default: module.OTPVerificationComponent,
  })),
);
const ResetPasswordComponent = lazy(() =>
  import("../pages").then((module) => ({
    default: module.ResetPasswordComponent,
  })),
);
const EmailVerificationComponent = lazy(() =>
  import("../pages").then((module) => ({
    default: module.EmailVerificationComponent,
  })),
);
const ResetPasswordSuccessComponent = lazy(() =>
  import("../pages").then((module) => ({
    default: module.ResetPasswordSuccessComponent,
  })),
);

// Lazy load all features
const AgeVerificationComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.AgeVerificationComponent,
  })),
);
const AudioNotificationsComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.AudioNotificationsComponent,
  })),
);
const BookingsComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.BookingsComponent,
  })),
);
const CustomerAccountComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.CustomerAccountComponent,
  })),
);
const CustomerComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.CustomerComponent,
  })),
);
const CustomerServicesComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.CustomerServicesComponent,
  })),
);
const EmailNotificationsComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.EmailNotificationsComponent,
  })),
);
const MenuComponent = lazy(() =>
  import("../features").then((module) => ({ default: module.MenuComponent })),
);
const MiscellaneousComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.MiscellaneousComponent,
  })),
);
const MyBusinessComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.MyBusinessComponent,
  })),
);
const OrderingComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.OrderingComponent,
  })),
);
const OrdersComponent = lazy(() =>
  import("../features").then((module) => ({ default: module.OrdersComponent })),
);
const PoliciesComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.PoliciesComponent,
  })),
);
const PrinterComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.PrinterComponent,
  })),
);
const PromoOffersComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.PromoOffersComponent,
  })),
);
const SurchargeFeesComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.SurchargeFeesComponent,
  })),
);
const TippingComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.TippingComponent,
  })),
);
const WebsiteComponent = lazy(() =>
  import("../features").then((module) => ({
    default: module.WebsiteComponent,
  })),
);

// Lazy load all Layouts
const DashboardLayoutComponent = lazy(() =>
  import("../layouts").then((module) => ({
    default: module.DashboardLayoutComponent,
  })),
);

export const routeList = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: (
      <LazyLoadWrapper>
        <DashboardLayoutComponent />
      </LazyLoadWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyLoadWrapper>
            <DashboardComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/surcharge-fees",
        element: (
          <LazyLoadWrapper>
            <SurchargeFeesComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/miscellaneous",
        element: (
          <LazyLoadWrapper>
            <MiscellaneousComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/ordering",
        element: (
          <LazyLoadWrapper>
            <OrderingComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/audio-notifications",
        element: (
          <LazyLoadWrapper>
            <AudioNotificationsComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/tipping",
        element: (
          <LazyLoadWrapper>
            <TippingComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/printer",
        element: (
          <LazyLoadWrapper>
            <PrinterComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/age-verification",
        element: (
          <LazyLoadWrapper>
            <AgeVerificationComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/customer-account",
        element: (
          <LazyLoadWrapper>
            <CustomerAccountComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/email-notifications",
        element: (
          <LazyLoadWrapper>
            <EmailNotificationsComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "other-settings/policies",
        element: (
          <LazyLoadWrapper>
            <PoliciesComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "menu/menu",
        element: (
          <LazyLoadWrapper>
            <MenuComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "customer",
        element: (
          <LazyLoadWrapper>
            <CustomerComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "website",
        element: (
          <LazyLoadWrapper>
            <WebsiteComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "bookings",
        element: (
          <LazyLoadWrapper>
            <BookingsComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "orders",
        element: (
          <LazyLoadWrapper>
            <OrdersComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "promo-offers",
        element: (
          <LazyLoadWrapper>
            <PromoOffersComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "my-business",
        element: (
          <LazyLoadWrapper>
            <MyBusinessComponent />
          </LazyLoadWrapper>
        ),
      },
      {
        path: "customer-services",
        element: (
          <LazyLoadWrapper>
            <CustomerServicesComponent />
          </LazyLoadWrapper>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <LazyLoadWrapper>
        <LoginComponent />
      </LazyLoadWrapper>
    ),
    children: [
      {
        path: "forgot-password",
        element: (
          <LazyLoadWrapper>
            <ForgotPasswordComponent />
          </LazyLoadWrapper>
        ),
      },
      // {
      //   path: "reset-password",
      //   element: (
      //     <LazyLoadWrapper>
      //       <ResetPasswordComponent />
      //     </LazyLoadWrapper>
      //   ),
      // },
    ],
  },
  {
    path: "/signup",
    element: (
      <LazyLoadWrapper>
        <SignUpComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "/email-verification",
    element: (
      <LazyLoadWrapper>
        <EmailVerificationComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "/otp-verification",
    element: (
      <LazyLoadWrapper>
        <OTPVerificationComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <LazyLoadWrapper>
        <ForgotPasswordComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <LazyLoadWrapper>
        <ResetPasswordComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <LazyLoadWrapper>
        <ResetPasswordComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "/reset-password-success",
    element: (
      <LazyLoadWrapper>
        <ResetPasswordSuccessComponent />
      </LazyLoadWrapper>
    ),
  },
  {
    path: "*",
    element: (
      <LazyLoadWrapper>
        <PageNotFoundComponent />
      </LazyLoadWrapper>
    ),
  },
]);
