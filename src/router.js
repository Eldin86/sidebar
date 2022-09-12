import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Interessenten from './pages/Interessenten.vue'
import Bewerbungen from './pages/Bewerbungen.vue'
import Wohnungen from './pages/Wohnungen.vue'
import Parkplatze from './pages/Parkplatze.vue'
import Nebenraume from './pages/Nebenraume.vue'
import Gewerbe from './pages/Gewerbe.vue'
import Gebaude from './pages/Gebaude.vue'
import Mieter from './pages/Mieter.vue'
import Analytics from './pages/Analytics.vue'
import Reporting from './pages/Reporting.vue'
import Kostenplanung from './pages/Kostenplanung.vue'
import Honorarabrechnung from './pages/Honorarabrechnung.vue'


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/interessenten',
            name: 'Interessenten',
            component: Interessenten
        },
        {
            path: '/bewerbungen',
            name: 'Bewerbungen',
            component: Bewerbungen
        },
        {
            path: '/wohnungen',
            name: 'Wohnungen',
            component: Wohnungen
        },
        {
            path: '/parkplatze',
            name: 'Parkplatze',
            component: Parkplatze
        },
        {
            path: '/nebenraume',
            name: 'Nebenraume',
            component: Nebenraume

        },
        {
            path: '/gewerbe', //Unclicable, only child routes
            name: 'Gewerbe',
            component: Gewerbe

        },
        {
            path: '/gebaude',
            name: 'Gabaude',
            component: Gebaude

        },
        {
            path: '/mieter',
            name: 'Mieter',
            component: Mieter
        },
        {
            path: '/analytics',
            name: 'Analytics',
            component: Analytics
        },
        {
            path: '/reporting',
            name: 'Reporting',
            component: Reporting
        },
        {
            path: '/kostenplanung',
            name: 'Kostenplanung',
            component: Kostenplanung

        },
        {
            path: '/honorarabrechnung',
            name: 'Honorarabrechnung',
            component: Honorarabrechnung

        },
    ]
})

/**
 CHILD COMPONENTS 

   {
            path: '/objekte/wohnungen',
            component: SideBar,
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'About',
                    component: About
                }
            ]
        },
 */