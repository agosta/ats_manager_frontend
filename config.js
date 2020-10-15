export var config = {
"fields" : [
    { "id" : "titolo", "mandatory" : true, "type" : "text" },
    { "id" : "scadenza", "mandatory" : false, "type" : "date" },
    { "id" : "link", "mandatory" : true, "type" : "url" },
    { "id" : "telefono", "mandatory" : false, "type" : "phone|map" },
    { "id" : "email", "mandatory" : false, "type" : "phone|map" },
    { "id" : "descrizione breve", "mandatory" : true, "type" : "text" },
    { "id" : "descrizione", "mandatory" : true, "type" : "rich text" },
    { "id" : "modalità breve", "mandatory" : true, "type" : "text" },
    { "id" : "modalità", "mandatory" : true, "type" : "rich text" },
    { "id" : "destinatari breve", "mandatory" : true, "type" : "tags", "values" : [ "disabilità", "donne in gravidanza", "adozione" ] },
    { "id" : "destinatari", "mandatory" : true, "type" : "rich text" },
    { "id" : "erogazione", "mandatory" : true, "type" : "tags", "values" : [ "modalità 1", "modalità 2" ] },
    { "id" : "documenti/allegati", "mandatory" : false, "type" : "attachment" },
    { "id" : "nucleo familiare", "mandatory" : true, "type": "boolean" },
  ],
"constraints" : [
    { "id" : "età", "mandatory" : false, "type": "data", "constraint" : "min" },
    { "id" : "età", "mandatory" : false, "type": "data", "constraint" : "max" },
    { "id" : "disabilità", "mandatory" : false, "type": "[0-100]", "constraint" : "min" },
    { "id" : "ISEE", "mandatory" : false, "type": "EUR", "constraint" : "max" },
    { "id" : "reddito", "mandatory" : false, "type" : "EUR", "constraint": "min" },
    { "id" : "reddito", "mandatory" : false, "type" : "EUR", "constraint": "max" },
    { "id" : "stato lavorativo", "mandatory" : false, "type": "tags", "constraint" : "match", "values" : [ "disoccupato",  "occupato" ] },
  ]
};

