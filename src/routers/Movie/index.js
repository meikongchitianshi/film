
export default{
    path: '/movie',
    component:() => import('@/views/Movie'),
    children:[
        {
            path: '/movie',
            redirect:'/movie/nowPlaying'
        },
        {
            path: 'city',
            component:() => import('../../components/City')
        },
        {
            path: 'nowPlaying',
            component:() => import('../../components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component:() => import('../../components/ComingSoon')
        },
        {
            path: 'search',
            component:() => import('../../components/Search')
        }
    ]
}
