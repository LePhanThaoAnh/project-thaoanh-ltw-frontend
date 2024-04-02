import { createWebHistory, createRouter } from "vue-router";
import Trangchu from "@/views/user/trangchu.vue";
import Muonsach from "@/views/user/muonsach.vue";
import Nhaxuatban from "@/views/user/nhaxuatban.vue";
import Lichsu from "@/views/user/lichsumuonsach.vue";
import Chitietsach from "@/components/BookDetail.vue";
import dangky from "../views/auth/register.vue";
import adminlogin from "../views/auth/adminLogin.vue";
import userlogin from "../views/auth/userLogin.vue";
import Quanlysach from "../views/admin/sach/quanly.vue";
import Themsach from "../views/admin/sach/them.vue";
import Suasach from "../views/admin/sach/sua.vue";
import Chitiet from "../views/admin/sach/chitiet.vue";
import Quanlynhaxuatban from "../views/admin/nhaxuatban/quanly.vue";
import Themnhaxuatban from "../views/admin/nhaxuatban/them.vue";
import Suanhaxuatban from "../views/admin/nhaxuatban/sua.vue";
import Quanlymuonsach from "../views/admin/muonsach/quanly.vue";
import Suatrangthai from "../views/admin/muonsach/sua.vue";
import Quanlyuser from "../views/admin/user/quanly.vue";

const routes = [
  {
    path: "/user/muonsach",
    name: "muonsach",
    component: Muonsach,
  },
  {
    path: "/user/nhaxuatban",
    name: "nhaxuatban",
    component: Nhaxuatban,
  },
  {
    path: "/user/lichsu",
    name: "lichsu",
    component: Lichsu,
  },
  {
    path: "/chitietsach",
    name: "chitietsach",
    component: Chitietsach,
  },
  {
    path: "/",
    name: "trangchu",
    component: Trangchu,
  },
  
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: '/register', 
    name: 'Register', 
    component: dangky
  },
  {
    path: '/login', 
    name: 'UserLogin', 
    component: userlogin,
  },


  //admin
  {
    path: "/admin/muonsach/quanly",
    name: "quanlymuonsach",
    component: Quanlymuonsach,
  },
  {
    path: "/admin/muonsach/sua",
    name: "suatrangthai",
    component: Suatrangthai,
  },
  {
    path: "/admin/sach/chitiet",
    name: "chitiet",
    component: Chitiet,
  },
  {
    path: "/admin/sach/sua",
    name: "suasach",
    component: Suasach,
  },
  {
    path: "/admin/sach/them",
    name: "themsach",
    component: Themsach,
  },
  {
    path: "/admin/sach/quanly",
    name: "quanlysach",
    component: Quanlysach,
  },

  {
    path: "/admin/nhaxuatban/sua",
    name: "suanhaxuatban",
    component: Suanhaxuatban,
  },
  {
    path: "/admin/nhaxuatban/them",
    name: "themnhaxuatban",
    component: Themnhaxuatban,
  },
  {
    path: "/admin/nhaxuatban/quanly",
    name: "quanlynhaxuatban",
    component: Quanlynhaxuatban,
  },
  {
    path: "/admin/user/quanly",
    name: "quanlyuser",
    component: Quanlyuser,
  },
  {
    path: '/admin/login', 
    name: 'Login', 
    component: adminlogin,
  },
  
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
