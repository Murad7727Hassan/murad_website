<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <main>
    <Navbar />
    <section
      class="text-gray-600 body-font bg-white shadow md:px-6 md:py-8 dark:bg-gray-900"
    >
      <div class="container px-5 mx-auto">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            المقالات
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400" >


          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="post in posts" :key="post.id">
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
              <div class="p-6">
                <article>
                  <div
                    class="flex justify-between items-center mb-5 text-gray-500"
                  >
                    <span
                      class="bg-gray-500 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
                    >
                      Article
                    </span>
                  </div>
                  <h2
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    <a href="#"> {{ post.title }} </a>
                  </h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                   {{ post.body }} .
                  </p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">

                      <span class="font-medium dark:text-white">
                        {{ post.author }}
                      </span>
                    </div>
                    <router-link :to="{ name: 'SinglePost', params: { id: post.id } }"
                      href=""
                      class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Read more
                      <svg
                        class="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </router-link >
                  </div>
                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>
<script>
import axios from 'axios'
export default {
  name: "PostCreate",

 data(){
   return{
    posts:[],
   }
 },
 mounted(){

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
  },
  created(){
    this.showPosts();
  }
,
};
</script>
