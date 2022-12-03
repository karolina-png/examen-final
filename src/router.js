import { createWebHistory, createRouter} from "vue-router";
import login from "./components/Login.vue";
import student from  "./components/Student.vue";
import teacher from "./components/Teacher.vue";





const routes= [
{
    path:"/",
    name:"Login",
    component:login,
},


{
    path:"/Student",
    name:"Student",
    component:student,
},

{
    path:"/Teacher",
    name:"Teacher",
    component:teacher,
},


];


const router=  createRouter(
    {
       history: createWebHistory(),
       routes,
    }
);

export default router;

