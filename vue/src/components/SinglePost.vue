<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import AllPosts from "../components/AllPosts.vue";

</script>

<template>
  <Navbar />
  <section
    class="text-gray-600 body-font bg-white shadow md:px-6 md:py-8 dark:bg-gray-900"
  >
    <div class="container px-5 mx-auto">
      <img
        class="max-w-full h-auto"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
      <!--
Install the "flowbite-typography" NPM package to apply styles and format the article content:

URL: https://flowbite.com/docs/components/typography/
-->
      <div class="row">
        <div class="col-4">
          <AllPosts />
        </div>
        <div class="col-8">
          <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                  <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article
                      class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
                    >
                      <header class="mb-4 lg:mb-6 not-format">
                        <address class="flex items-center mb-6 not-italic">
                          <div
                            class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white"
                          >
                            <img
                              class="ml-4 w-16 h-16 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Jese Leos"
                            />
                            <div>
                              <a
                                href="#"
                                rel="author"
                                class="text-xl font-bold text-gray-900 dark:text-white"
                                >{{post.author}}</a
                              >
                              <p
                                class="text-base font-light text-gray-500 dark:text-gray-400"
                              >
                                Graphic Designer, educator & CEO Flowbite
                              </p>
                              <p
                                class="text-base font-light text-gray-500 dark:text-gray-400"
                              >
                                <time
                                  pubdate
                                  datetime="2022-02-08"
                                  title="February 8th, 2022"
                                  >Feb. 8, 2022</time
                                >
                              </p>
                            </div>
                          </div>
                        </address>
                        <h1
                          class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
                        >
                          {{post.title}}
                        </h1>
                      </header>
                      <p class="lead">
                        {{post.body}}
                      </p>

                      <section class="not-format mt-8">
                        <div class="flex justify-between items-center mb-6">
                          <h2
                            class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white"
                          >
                            Discussion (20)
                          </h2>
                        </div>
                        <form class="mb-6">
                          <div
                            class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                          >
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea
                              id="comment"
                              rows="6"
                              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                              placeholder="Write a comment..."
                              required
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                          >
                            تعليقات المقال
                          </button>
                        </form>
                        <article
                          class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
                        >
                          <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                              <p
                                class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
                              >
                                <img
                                  class="ml-2 w-6 h-6 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                  alt="Michael Gough"
                                />Michael Gough
                              </p>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <time
                                  pubdate
                                  datetime="2022-02-08"
                                  title="February 8th, 2022"
                                  >Feb. 8, 2022</time
                                >
                              </p>
                            </div>
                            <button
                              id="dropdownComment1Button"
                              data-dropdown-toggle="dropdownComment1"
                              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                                ></path>
                              </svg>
                              <span class="sr-only">Comment settings</span>
                            </button>
                            <!-- Dropdown menu -->
                            <div
                              id="dropdownComment1"
                              class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton"
                              >
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Edit</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Remove</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >Report</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </footer>
                          <p>
                            Very straight-to-point article. Really worth time reading.
                            Thank you! But tools are just the instruments for the UX
                            designers. The knowledge of the design tools are as important
                            as the creation of the design strategy.
                          </p>
                          <div class="flex items-center mt-4 space-x-4">
                            <button
                              type="button"
                              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                            >
                              <svg
                                aria-hidden="true"
                                class="ml-1 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              رد
                            </button>
                          </div>
                        </article>
                        <article
                          class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900"
                        >
                          <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                              <p
                                class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
                              >
                                <img
                                  class="mr-2 w-6 h-6 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                  alt="Jese Leos"
                                />Jese Leos
                              </p>
                              <p class="text-sm text-gray-600 dark:text-gray-400">
                                <time
                                  pubdate
                                  datetime="2022-02-12"
                                  title="February 12th, 2022"
                                  >Feb. 12, 2022</time
                                >
                              </p>
                            </div>
                            <button
                              id="dropdownComment2Button"
                              data-dropdown-toggle="dropdownComment2"
                              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                              type="button"
                            >
                              <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                                ></path>
                              </svg>
                              <span class="sr-only">Comment settings</span>
                            </button>
                            <!-- Dropdown menu -->
                            <div
                              id="dropdownComment2"
                              class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton"
                              >
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >تعديل</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >حذف</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >تقرير</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </footer>
                          <p>Much appreciated! Glad you liked it ☺️</p>
                          <div class="flex items-center mt-4 space-x-4">
                            <button
                              type="button"
                              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                            >
                              <svg
                                aria-hidden="true"
                                class="ml-1 w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                              </svg>
                              رد
                            </button>
                          </div>
                        </article>
                      </section>
                    </article>
                  </div>
          </main>
        </div>
      </div>

    </div>
  </section>
  <Footer />
</template>

<script>
import axios from 'axios';
export default {
  // name: "post",

 data(){
   return{
    postId:this.$route.params.id,
    posts:[],
    post:null,
   }
 },
 created(){
  console.log(this.postId);
  this.showPost();
  this.showPosts();
}
,
  methods: {
        async showPosts()
    {
       try{
      let response = await axios({
          method: 'get',
          url: `http://localhost:3000/posts`,
          json: true
      });
      this.posts = response.data;
      console.log(this.posts);
    } catch(err){
        console.error(err);
    }
    }
,
   async showPost()
    {
 try{
      let response = await axios({
          method: 'get',
          url: `http://localhost:3000/posts/${this.postId}`,
          json: true
      });
      this.post = response.data;
      console.log(this.post);
    } catch(err){
        console.error(err);

    }
    }
  },
};
</script>
