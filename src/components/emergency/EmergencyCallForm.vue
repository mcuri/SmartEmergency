<template>
<div class="container urgency-form">
    <div class="text-center">
        <img src="../../assets/ambulance_sm.png">
        <h2>Chame socorro!</h2>
        <p class="lead">Encontraremos a forma mais rápida de uma ambulância chegar até você. </p>
    </div>

    <div class="alert alert-danger" id="form-alert" role="alert" style="display: none">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
    
    <form @submit.prevent="/*getClosestAmbulances();*/ save()" id="urgency-form">
        <div class="form-group">
            <label for="nome">Nome</label>
            <input v-model="emergency._nome" 
                type="text" class="form-control form-control-lg" id="nome" placeholder="Nome">
        </div>
          
        <div class="form-group">
            <label for="nVitima">Número de Vítimas:</label>
            <select  v-model="emergency._nVitima" class="form-control form-control-lg" id="nVitima">
                <option v-for="nPpl in numPeople" :value="nPpl">{{ nPpl }}</option>
            </select>
        </div>
        
        <div class="form-group">
        <label for="gravidade">Gravidade:</label>
        <select  v-model="emergency._gravidade" class="form-control form-control-lg" id="gravidade">
            <option value=""></option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
        </select>
        </div>
        
        <div class="form-group">
        <label for="latitude">Latitude:</label>
        <input v-model="emergency._latitude"
            type="text" class="form-control form-control-lg" id="latitude">
        </div>
        
        <div class="form-group">
        <label for="longitude">Longitude:</label>
        <input v-model="emergency._longitude" 
            type="text" class="form-control form-control-lg" id="longitude">
        </div>
        
        <button class="btn btn-lg btn-primary btn-block btn-danger" type="submit">Chamar emergência</button>
        
    </form>
  </div>
</template>
<script>
    import EmergencyService from '../../domain/EmergencyService.js';
    import Emergency from '../../domain/Emergency.js';

    export default {

        data() {
            
            return {

                emergency: new Emergency(),
                numPeople: ['', '1', '2', '3', '4', '5', '+']

            }

        },
        created() {
            
            this.service = new EmergencyService(this.$resource);

        },
        components: {
           
        }, 
        methods: {

            save() {
                
                //let endpoint = "http://10.7.40.62:1026/v1/contextEntities";
                let endpoint = "http://localhost:3000/v1/contextEntities";

                console.log("creating new emergency");
                console.log(this.emergency.toJson());
                this.$http.post(endpoint, this.emergency.toJson())
                     .then(() => {
                        this.$router.push({ name: 'ambulance-track' });
                        this.emergency = new Emergency();
                     }, err => console.log(err));
              
            },

            getClosestAmbulances() {

                console.log("getting ambulances around");

                let endpoint = "http://10.7.40.62:1026/v1/contextEntityTypes/Ambulancia";

                this.$http.get(endpoint)
                    .then(res => {
                        if (res.contextResponses.length > 0){
                            let isFirst = true;

                            for(let i = 0; i < res.contextResponses.length ; i++){
                                let ambulance = res.contextResponses[i].contextElement;
                                
                                let ambLat = ambulance.attributes[1].value;
                                let ambLong = ambulance.attributes[2].value;
                                    
                                if(isFirst){
                                    bestAmbulance = ambulance;
                                    bestRoute = getDistanceFromLatLonInKm(ambLat, ambLong, urgency.latitude, urgency.longitude, "K");
                                    isFirst = false;
                                }
                                else{
                                    distance = getDistanceFromLatLonInKm(ambLat, ambLong, urgency.latitude, urgency.longitude, "K");
                                    
                                    if(distance < bestRoute){
                                        bestAmbulance = ambulance;
                                        bestRoute = distance;
                                    }
                                }
                            }
                    
                            this.emergency.idAmbulancia = bestAmbulance.id;

                            console.log("best ambulance is: " + bestAmbulance.id);
                        }

                }, err => console.log(err));

            }
        }
    }
</script>
<style></style>