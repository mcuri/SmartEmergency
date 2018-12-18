export default class EmergencyService {

    constructor(resource) {

        this._resource = resource('v1/contextEntities{/id}');
    
    }

    create (emergency) {
        
        return this._resource
                .save(emergency);
        
    }

}