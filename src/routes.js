import EmergencyCallForm from './components/emergency/EmergencyCallForm.vue';
import EmergencyTrack from './components/emergency/EmergencyTrack.vue';

// configurações das rotas
export const routes = [
    { path: '', name: 'home', component: EmergencyCallForm, title: 'Home' }, // localhost:3000/#/
    { path: '/trackAmbulance', name: 'ambulance-track', component: EmergencyTrack, title: 'Track ambulance' }, // localhost:3000/#/newTour
    { path: '*', component: EmergencyCallForm }
];