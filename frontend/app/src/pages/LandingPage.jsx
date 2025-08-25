import React, { useState } from 'react'
import { LuSparkles } from "react-icons/lu";
import hero from '../assets/hero.png'
import { APP_FEATURES } from '../utils/data'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

import ProfileInfoCard from '../components/Cards/ProfileInfoCard';


const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  

  const handleCTA = () => { 
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#FFFCEF] pt-16">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[120px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">
              Interview Prep AI
            </div>
           {user ? (
            <ProfileInfoCard />
           ) : (
            <button
              className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white  transition-colors cursor-pointer "
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Sign Up
            </button>)}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center ">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-start mb-2">
                <div className="flex items-center gap-2 text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles size={18} className="text-amber-600" />
                  AI Powered
                </div>
              </div>

              <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2 pl-8 flex flex-col items-start">
              <p className="text-base text-gray-700 max-w-lg">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery — your ultimate interview toolkit is here.
              </p>

              <button
                className="bg-black text-white px-6 py-2 rounded-full mt-6 shadow-md hover:opacity-95"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10 ">
        <div>
          <section className="flex items-center justify-center -mt-75">
            <img
              src={hero}
              alt="Hero Image"
              className="w-[80vw] rounded-2xl border-2 border-amber-200 p-2 shadow-lg bg-white"
            />
          </section>
        </div>

        <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/* First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div key={feature.id} className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 ">
                      <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Remaining 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div key={feature.id} className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 ">
                      <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div> {/* ✅ close features wrapper */}
            </section> {/* ✅ close section */}
          </div> {/* ✅ close inner div */}
        </div> {/* ✅ close outer div */}
      </div> {/* ✅ close wrapper div */}

      <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
        Made with ❤️... Happy Coding
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>

    </>
  );
}
export default LandingPage;