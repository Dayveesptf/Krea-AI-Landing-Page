"use client";
import { useState } from "react";
import { Banknote, Bell, Brain, ChevronDown, ChevronLeft, ChevronRight, Clock1, Folder, Gavel, Headphones, HomeIcon, ImageIcon, MicVocal, PersonStanding, SunIcon, Video, VideoIcon, Wand, Wand2, WandSparkles } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const [current, setCurrent] = useState(0);

  const features = [
    {
      id: 1,
      title: "Image",
      bg: "bg-gradient-to-b from-gray-800 to-gray-400",
      text: "Generate Images with custom styles in Flux and Ideogram",
      icon: <ImageIcon />,
      isNew: true,
    },
    {
      id: 2,
      title: "Video",
      bg: "bg-yellow-400",
      text: "Generate videos with Haliua, Pica, Runway, Luma and more",
      icon: <Video />,
      isNew: false,
    },
    {
      id: 3,
      title: "Realtime",
      bg: "bg-gradient-to-b from-blue-600 to-blue-300",
      text: "Realtime AI rendering on a canvas. Instant feedback loops",
      icon: <Clock1 />,
      isNew: false,
    },
    {
      id: 4,
      title: "Enhancer",
      bg: "bg-gradient-to-b from-gray-600 to-gray-300",
      text: "Upscale and enhance images and videos up to 22k",
      icon: <Wand />,
      isNew: true,
    },
    {
      id: 5,
      title: "Edit",
      bg: "bg-gradient-to-b from-purple-800 to-purple-400",
      text: "Add objects, change style, or expand photos and generations",
      icon: <WandSparkles />,
      isNew: true,
    },
    {
      id: 6,
      title: "Video Lipsync",
      bg: "bg-gradient-to-l from-emerald-800 to-emerald-400",
      text: "Lipsync any video to any audio with Krea AI",
      icon: <MicVocal />,
      isNew: true,
    },
    {
      id: 7,
      title: "Motion Transfer",
      bg: "bg-black",
      text: "Transfer motion to images and animate characters",
      icon: <PersonStanding />,
      isNew: true,
    },
    {
      id: 8,
      title: "Train",
      bg: "bg-red-900",
      text: "Teach Krea AI to replicate your style, products or characters",
      icon: <Brain />,
      isNew: false,
    },
  ];

  const slides = [
    "/img1.jpg",
    "/img2.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img1.jpg",
    "/img2.jpg"
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="mb-20 z-20 bg-[#fffffff5] w-full fixed flex justify-center px-10 pt-2 gap-52">
        <div className="flex w-1/5 justify-start items-center gap-12">
          <div className="bg-white">
            <h1 className="text-5xl font-black">K</h1>
          </div>
          <div className="relative flex items-center">
            <div className="p-5 bg-gradient-to-tl from-[#7a6bffb3] to-[#e29afe96] rounded-full border-0"></div>
            <button
              className="px-3 py-1 bg-white text-gray-400 items-center flex gap-2"
            >
              <h1 onClick={toggleDropdown}>beneveolentrimbleon</h1> <ChevronDown onClick={toggleDropdown}/>
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-48 w-full bg-white text-[14px] text-gray-500 rounded-md shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lorem Ipsum
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lorem Ipsum
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lorem Ipsum
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center bg-gray-100 gap-7 justify-between px-3 rounded-lg">
          <div className="bg-white rounded-lg py-2 shadow-md px-3">
            <HomeIcon size={20} className="text-gray-600"/>
          </div>
          <div>
            <ImageIcon size={20} className="text-gray-600" />
          </div>
          <div>
            <VideoIcon size={20} className="text-gray-600" />
          </div>
          <div>
            <Wand2 size={20} className="text-gray-600" />
          </div>
          <div>
            <Wand2 size={20} className="text-gray-600" />
          </div>
          <div>
            <Wand2 size={20} className="text-gray-600" />
          </div>
          <div>
            <Folder size={20} className="text-gray-600" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 text-gray-500 text-[15px] bg-gray-100 px-3 rounded-lg py-1"><ImageIcon size={20} className="text-gray-600" /> <h1>Gallery</h1></div>
          <div className="flex gap-1.5 text-gray-500 text-[15px] bg-gray-100 px-3 rounded-lg py-1"><Headphones size={20} className="text-gray-600" /> <h1>Support</h1></div>
          <div className="flex bg-gray-100 px-3 rounded-lg py-2"><Bell size={20} className="text-gray-600" fill="black"/></div>
          <div className="flex bg-gray-100 px-3 rounded-lg py-2"><SunIcon size={20} className="text-gray-600" fill="black"/></div>
          <div className="p-5 bg-gradient-to-tl from-[#7a6bffb3] to-[#e29afe96] rounded-full border-0"></div>
        </div>
      </div>

      <div className="h-[80vh] w-10/12 mx-auto overflow-hidden">
        <div className="mt-24">
          {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-in-out w-4/7 gap-28 mb-7"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-full h-[55vh] rounded-2xl overflow-hidden"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                  />

                  <div className="absolute inset-0 bg-black/70" />

                  {/* Text */}
                  <div className="absolute inset-0 text-white">
                    {i === 1 ? (
                      <>
                        <p className="mt-5 ml-5 text-[12px] font-bold text-[#ffffffb4]">
                          NEW IMAGE MODEL
                        </p>
                        <h2 className="mt-28 text-center mb-20 text-6xl font-bold">
                          Open Source
                        </h2>
                        <h1 className="ml-5 text-2xl">FLUX.1 Krea</h1>
                        <p className="w-3/6 ml-5 text-[12px] mt-2 text-[#ffffffb4]">
                          We are making the weights to our FLUX.1 model open source. Download and run our model insights, read the technical report, or generate with it in Krea Image
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="mt-5 ml-5 text-[12px] font-bold text-[#ffffffb4]">
                          NEW IMAGE MODEL
                        </p>
                        <h2 className="mt-28 text-center mb-20 text-6xl font-bold">
                          WAN 2.2
                        </h2>
                        <h1 className="ml-5 text-2xl">WAN 2.2 Image generation</h1>
                        <p className="w-3/6 ml-5 text-[12px] mt-2 text-[#ffffffb4]">
                          Generate complex images with the brand new and powerful 2.2 model. 
                          Exceptional prompt adherence and ultra-realistic features.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

          <div className="flex items-center gap-4 relative w-4/7 justify-between mr-0 pr-7 ml-auto mt-[-1.5%]">
            {/* Pagination Dots */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    current === i ? "bg-amber-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-gray-100 p-2 rounded-full shadow hover:bg-white"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full shadow hover:bg-white bg-gray-100"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[18px] font-semibold">Generate</h2>
          <button className="flex items-center gap-2 text-blue-500 bg-blue-100 pl-1 pr-2 py-1 rounded-xl font-semibold">
            <ChevronDown className="w-4 h-4 ml-1" />
            <h1 className="text-sm">Show all</h1>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-3 items-center pb-4 bg-white px-3 py-2 rounded-sm shadow-md shadow-gray-200"
            >
              <div className={`text-2xl mb-4 p-2 text-white rounded-lg ${item.bg} items-center`}>{item.icon}</div>

              <div>
                <h1 className="text-sm font-semibold flex items-center gap-2">
                  {item.title}
                  {item.isNew && (
                    <span className="text-[10px] font-medium text-white bg-blue-500 px-2 py-0.5 rounded">
                      New
                    </span>
                  )}
                </h1>

                <p className="text-[13px] text-gray-400 mt-2">{item.text}</p>
              </div>

              <div className="items-center">
                <button className="px-3 py-1 text-[11px] font-medium bg-gray-200 text-black rounded-lg hover:bg-gray-400">
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-15">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[16px] font-semibold">Gallery</h2>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-gray-700 bg-gray-200 pl-2 pr-3 py-1.5 rounded-xl font-semibold">
              <Gavel />
              <h1 className="text-sm">Legal</h1>
            </button>
            <button className="flex items-center gap-2 text-gray-700 bg-gray-200 pl-2 pr-3 py-1.5 rounded-xl font-semibold">
              <Banknote />
              <h1 className="text-sm">Pricing</h1>
            </button>
          </div>
        </div>
      </div>  

      <div className="mx-auto mt-4 bg-gray-900 py-1 pt-6 px-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl text-white bg-black px-2 py-2 rounded-lg font-semibold">K</h2>
            <h2 className="text-3xl text-white font-semibold">Krea AI</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center text-white font-light">
              <h1 className="text-lg">curated by</h1>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <h1 className="font-black text-4xl">𝓜</h1>
              <h1 className="text-4xl">Mobbin</h1>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
