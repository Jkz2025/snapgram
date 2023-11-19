// App.tsx
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { SigninForm } from "./_auth/forms/SigninForm";
import { AllUsers, CreatePost, Explore, Home, PostDetails, Profile, Saved } from "./_root/pages";
import { SignupForm } from "./_auth/forms/SignupForm";
import { AuthLayout } from "./_auth/AuthLayout";
import { RootLayout } from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";
import EditPost from "./_root/pages/EditPost";
import UpdateProfile from "./_root/pages/UpdateProfile";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};
