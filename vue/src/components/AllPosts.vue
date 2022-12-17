<template>
  <ol>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'SinglePost', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </li>
  </ol>
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
  },
};

</script>
