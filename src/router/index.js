import { createRouter, createWebHistory } from "vue-router"

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ErrorPage from '@/views/ErrorPage.vue';
import User from '@/views/User.vue';
import Login from '@/views/Login.vue';
import UserProfile from '@/views/UserProfile.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            // component: Home
            components: {      // 여러 컴포넌트를 동시에 렌더링. Header, Footer, Menu등 여러 컴포넌트를 여러개로 보일 수 있다.
                default: Home,
                // a: About,
                // b: ErrorPage
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            alias: '/home', // 브라우저에서 /home으로 들어가도 about 페이지를 보여준다.

            // redirect: '/user/brand13', // path형식으로 redirect
            
            
            // redirect: {  //프로그래밍 방식으로 redirect
            //     name: 'User', 
            //     params: {
            //         username: 'brand15'
            //     }, 
            //     query: {id: 15}}
            
            
            // redirect: to => { // path에 따라 분기하여 동적 프로그래밍 
            //     // console.log(to);
            //     const { hash, params, query, path } = to;
            //     console.log(path);
            //     if(path === '/about'){
            //         // return '/user/brand13';
            //         return { name: 'User', params: {username: 'brand17'}, query: {id: 17}}
            //     }else{
            //         return '/';
            //     }
            // }

        },
        {
            path: '/:catchAll(.*)',
            name: 'ErrorPage',
            component: ErrorPage
        },
        {
            path: '/login/:id',
            name: 'Login',
            meta: {authRequired: false}, 
            beforeEnter: (to, from, next) => {

                /**
                 * 라우터 가드 
                 * 컴포넌트 가드는 컴포넌트 파일(.vue)에서 선언하면 된다. Login.vue파일 참조
                 */

                console.log('Login page 라우터 가드');
                if(to.matched.some((routeInfo) => {
                    return routeInfo.meta.authRequired;
                })){
                    alert('LogIn please');
                }else{
                    console.log("routing success : '" + to.path + "'");
                    next();
                    // next();
                }
            },
            component: Login
        },
        {
            path: '/user/:username',
            name: 'User',
            props: {newsletterPopup: false},
            // props: (route) => ({query: route.query.q}),
            component: User,
            meta: {authRequired: true}, //children까지 영향을 미친다.
            children: [
                {
                    path: 'profile',
                    name: 'Profile',
                    component: UserProfile
               }
            ]
        }
    ]
});

/**
 * 전역 네비게이션 가드. next()함수를 실행하지 않으면 페이지 이동이 되지 않는다.
 */

// router.beforeEach((to, from, next) => {
    
//     console.log('every single routing is pending');
    
//     next(); //페이지 전환
//     next({name: 'User', params: {username: 'brand21'}}); //전역가드에서 구체적인 redirect를 지정하면 무한(infinite) redirect에 걸린다. 위험!
// });

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((routeInfo) => {
//         console.log(routeInfo);             //전역 네비 가드를 설정했지만 해당 메타데이터가 있는 컴포넌트에서만 적용된다.
//         return routeInfo.meta.authRequired;
//     })){
//         alert('Login Please!');
//     } else {
//         console.log("routing success : '" + to.path + "'");
//         next()
//     }
    
// });



export default router;

