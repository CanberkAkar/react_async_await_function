import axios from "axios";

async function info(id){
    const {data : userdata} = await axios('https://jsonplaceholder.typicode.com/users/' + id);
    const {data : postdata} = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    const datas = {
          user: userdata,
          post: postdata,
      };
    console.log(datas.user);
    console.log(datas.post[0]);
}
export default info;
