<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <main>
    <Navbar />

    <section class="bg-white dark:bg-gray-900">
      <div
        class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
      >
        <div class="mr-auto  lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
          >
            السلام عليكم
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 "
          >
            انا مراد حسن مصمم ومطور ويب و اعمل كفري لانسر مصمم ومطور ويب شغفي ب
            تصميم المواقع و تصميم التطبيقات ينبع بسبب القيمة الكبيرة التي يمكن
            تقديمها _ي عمل تجاري في حال كان لديه منتج مصمم بطريقة ممتازة جداً
            جداً جداً
          </p>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="./../assets/person.png" alt="hero image" />
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            المصمم البارع هو صاحب التفكير الفريد القادر على إيجاد حلول إبداعية
          </h2>
        </div>
      </div>
    </section>
    <section class="text-gray-400 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-right mr-8 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
          >
            عني
          </h1>
          <p class="mb-8 leading-relaxed">
           لربما يكون من الصعب علي التعبير عن نفسي ليس تواضعاً​ ولكن بسبب اهتماماتي وتجاربي الواسعة والمستمرة في التوسع دائماً فلا أعلم هل اعبر عن نفسي بأني رائد الأعمال الذي لا تنتهي افكارةام انني الفنان الذي يبدع في فنه وتحريكاته .ولكن ربما أجد نفسي أعشق التصميم في الأغلب لأني اجد التصميم في كل شي وهذا انا حقاً مهتم وشغوف بكل شيوأرى براعة التصميم في كل شي.
          </p>
        </div>
      </div>
    </section>

    <section
      class="text-gray-600 body-font bg-white shadow md:px-6 md:py-8 dark:bg-gray-900"
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pl-3 py-1 border-l-2 border-gray-200"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle></svg
                    >1.2K
                  </span>
                  <span
                    class="text-gray-400 inline-flex items-center leading-none text-sm"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path></svg
                    >6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/721x401"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle></svg
                    >1.2K
                  </span>
                  <span
                    class="text-gray-400 inline-flex items-center leading-none text-sm"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path></svg
                    >6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/722x402"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle></svg
                    >1.2K
                  </span>
                  <span
                    class="text-gray-400 inline-flex items-center leading-none text-sm"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path></svg
                    >6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            اعمالنا
          </h2>
          <p
            class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            اهم الخدمات التي استطيع ان انفذه لك عزيز العميل هي الخدمات التالية :
          </p>
        </div>

        <div>
          <div class="container mx-auto">
            <ul class="grid grid-flow-col text-center text-gray-500">
              <li>
                <a
                  href="#"
                  class="flex justify-center border-t-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
                >
                  <button
                    @click="activeTabOne"
                    class="inline-block px-4 py-2 bg-purple-500"
                  >
                    Tab 1
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex justify-center border-t-4 text-indigo-600 border-indigo-600 py-4"
                >
                  <button
                    @click="activeTabTwo"
                    class="inline-block px-4 py-2 bg-purple-500"
                  >
                    Tab 2
                  </button></a
                >
              </li>
              <li>
                <a
                  href="#page3"
                  class="flex justify-center border-t-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
                >
                  <button
                    @click="activeTabThree"
                    class="inline-block px-4 py-2 bg-purple-500"
                  >
                    Tab 3
                  </button></a
                >
              </li>
            </ul>
            <div class="p-3 mt-6 bg-white border">
              <div v-show="tab === 1">
                Tab 1 Content show Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </div>
              <div v-show="tab === 2">
                Tab 2 Content show Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
              </div>
              <div v-show="tab === 3">
                Tab 3 Content show Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet,
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            خدماتي التي اقدمها
          </h2>
          <p
            class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            اهم الخدمات التي استطيع ان انفذه لك عزيز العميل هي الخدمات التالية :
          </p>

        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden"
            >
              <h2
                class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium"
              >
                خدمات
              </h2>
              <h1
                class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none"
              >
                مجانا
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                > دراسة جدوى للمشاريع
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >دعم فني لمدة سنة
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >تقديم استشارات مجانية
              </p>
              <button
                class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded"
              >
                طلب خدمة
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <!-- <p class="text-xs text-gray-400 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p> -->
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden"
            >
              <!-- <span
                class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                >POPULAR</span
              > -->
              <h2
                class="text-sm  text-gray-400 title-font mb-1 font-medium"
              >
                خدمة تحليل الاعمال
              </h2>
              <h1
                class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800"
              >
                <span>$50</span>
                <span class="text-lg ml-1 font-normal text-gray-400">/الاسبوع</span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >تحديد متطلبات المشروع
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >رسم use case
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >رسم Data flow digram
              </p>
              <p class="flex items-center text-gray-400 mb-6">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >رسم ERD
              </p>
              <button
                class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              >
                 طلب الخدمة
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <!-- <p class="text-xs text-gray-400 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p> -->
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden"
            >
              <h2
                class="text-sm  text-gray-400 title-font mb-1 font-medium"
              >
                خدمة التصميم
              </h2>
              <h1
                class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800"
              >
                <span>$40</span>
                <span class="text-lg ml-1 font-normal text-gray-400">/الاسبوع</span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >رسم SCATCH
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >تصميم واجهات
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >تصميم  Prototype
              </p>


              <button
                class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded"
              >
                طلب خدمة


              </button>

            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden"
            >
              <h2
                class="text-sm  text-gray-400 title-font mb-1 font-medium"
              >
                خدمة تطوير الويب
              </h2>
              <h1
                class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800"
              >
                <span>$70</span>
                <span class="text-lg ml-1 font-normal text-gray-400">/الاسبوع</span>
              </h1>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >تحويل التصميم موقع
              </p>
              <p class="flex items-center text-gray-400 mb-2">
                <span
                  class="w-4 h-4 ml-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg> </span
                >تكويد للواجهات باستخدام لغة PHP
              </p>



              <button
                class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded"
              >
                طلب خدمة
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    activeTabOne() {
      this.tab = 1;
    },
    activeTabTwo() {
      this.tab = 2;
    },
    activeTabThree() {
      this.tab = 3;
    },
  },
};
</script>
