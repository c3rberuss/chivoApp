import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database/database";
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { MessageProvider } from "../../providers/message/message";

interface User{
  id?: string,
  nombre?: string,
  uid?: string
}

interface PalabraInterface {
    id?: string,
    palabra?: string
}

@Injectable()
export class DatabaseProvider {

  categoria = {
    id: null,
    categoria: null,
    icon: null,
    usuario: null,
    descripcion: null
  }

  palabra = {
    id:  null,
    palabra: null,
    definicion: null,
    ejemplos: null,
    categorias: null,
    departamentos: null,
    usuario: null
  }

  usuarios: User[];
  public palabras: PalabraInterface[];
  todo:any;
  constructor(public afDB: AngularFireDatabase,
              public fireStore: AngularFirestore,
              private message: MessageProvider) {


  }

  crear_categoria(categoria, descripcion, user,icon){

    this.categoria.id = this.fireStore.createId();
    this.categoria.categoria = categoria;
    this.categoria.icon = icon;
    this.categoria.usuario = user;
    this.categoria.descripcion = descripcion;

    this.fireStore.doc("categorias/"+this.categoria.id).set(this.categoria)
        .then(() => {
          this.message.show("¡Éxito!", "Se ha agregado la categoría exitosamente.");
        })
        .catch( er => {
          this.message.show("Error", "Upss! ha ocurrido un error. Error: "+er);
        });

  }

  edit_usuarios(){



  }

  get_categorias(): AngularFirestoreCollection<any>{
    return this.fireStore.collection("categorias", ref => ref.orderBy("categoria", "asc"));
  }

  add_palabra(data, user){

    this.palabra.id = this.fireStore.createId();
    this.palabra.palabra = data.palabra.toLowerCase();
    this.palabra.ejemplos = data.ejemplos;
    this.palabra.departamentos = data.departamentos;
    this.palabra.definicion = data.definicion;
    this.palabra.categorias = data.categorias;
    this.palabra.usuario = user;

    this.fireStore.doc("diccionario/"+this.palabra.id).set(this.palabra)
        .then(() => {
          this.message.show("¡Éxito!", "Se ha agregado la palabra exitosamente.");

        })
        .catch( (er) => {
          this.message.show("Error", "Upss! ha ocurrido un error. Error: "+er);
        });

  }

  search(param){
    const end = param.toLowerCase() + '\uf8ff';
    return this.fireStore.collection("diccionario", ref =>
      ref.orderBy('palabra')
      .limit(5)
      .startAt(param.toLowerCase())
      .endAt(end))
  }

  get_palabras_depa(depa){
    return this.fireStore.collection("diccionario", ref => ref.where("departamentos", "array-contains", depa));
  }

  get_palabras_scroll(last){

    return this.fireStore.collection("diccionario", ref => ref.orderBy('palabra').limit(15).startAt(last));
  }

  get_list_palabras(limit){
      return this.todo = this.fireStore.collection("diccionario", ref => ref.orderBy('palabra').limit(limit));

  }

}
