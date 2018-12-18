export default class Emergency {

    constructor(nome = '', nVitima ='', gravidade='', latitude='', longitude='') {

        this._nome = nome;
        this._nVitima = nVitima; 
        this._gravidade = gravidade;
        this._latitude  = latitude;
        this._longitude = longitude;
        this._idAmbulancia = '0';
        this._status = 1;
        this._id = Math.floor((Math.random() * 100) + 1);

    }
     
    toJson() {
		return '{'
				+ '"type": "Chamado",'
				+ '"isPattern": "false",'
				+ '"id": "' + this._id + '",'
				+ '"attributes":' 
					+ '[{'
						+ '"name": "NomePessoa",'
						+ '"type": "String",'
						+ '"value": "' + this._nome + '"' 
					+ '},'
					+ '{'
						+ '"name": "Latitud",'
						+ '"type": "float",'
						+ '"value": "' + this._latitude + '"' 
					+ '},'
					+ '{'
						+ '"name": "Longitud",'
						+ '"type": "float",'
						+ '"value": "' + this._longitude + '"' 
					+ '},'
					+ '{'
						+ '"name": "Status",'
						+ '"type": "Integer",'
						+ '"value": "' + this._status + '"' 
					+ '},'
					+ '{'
						+ '"name": "NVitimas",'
						+ '"type": "Integer",'
						+ '"value": "' + this._nVitima + '"' 
					+ '},'
					+ '{'
						+ '"name": "Gravidade",'
						+ '"type": "Integer",'
						+ '"value": "' + this._gravidade + '"' 
					+ '},'
					+ '{'
						+ '"name": "IdAmbulancia",'
						+ '"type": "String",'
						+ '"value": "' + this._idAmbulancia + '"' 
					+ '}'
				+ ']'
			 + '}';
	}
}